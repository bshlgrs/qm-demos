import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'

const WAVEFUNCTION_PROBABILITY_DISTRIBUTION = (x) => 6 * x**2 * Math.exp(-2* (x**2));
let allSamples = getSamples(WAVEFUNCTION_PROBABILITY_DISTRIBUTION, -3, 3, 100, 40);

class PositionSampler extends React.Component {
  constructor () {
    super();
    this.state = {samples: []};
  }

  sample() {
    if (this.state.samples.length == allSamples.length + 1) {
      allSamples = allSamples.concat(
        getSamples(WAVEFUNCTION_PROBABILITY_DISTRIBUTION, -3, 3, 100, 40));
    }

    const sample = allSamples[this.state.samples.length] ;

    this.setState({ samples: [...this.state.samples, sample]});
  }

  mostRecentSample () {
    return this.state.samples[-1] || null;
  }

  render() {
    function graph(fn) {
        return <SimpleGraph
          xrange={[-3, 3]}
          yrange={[-2, 2]}
          height={200}
          xaxis
          functions={[fn]}
        />
      }

    return <Layout>
      <p>Consider a particle with this wavefunction:</p>

      {graph({color: 'blue', fn: (x) => (-2 * x * Math.exp(-(x**2)))})}

      <MarkdownWithLatex text={`
We can talk about the expectation value of its position. If we took a lot of particles with this wavefunction and measured their positions, the expectation value is the mean of our measurements.

Let's try that here. We've got a graph of the probability distribution of the wavefunction. You can press the "sample" button to take a sample of the wavefunction according to that probability distribution. We could take the average of these measured points and call that the expectation value of position.`} />

    <div className='panel panel-default'>
      <div className='panel-heading'>Wavefunction sampler</div>
      <div className='panel-body'>
        <SimpleGraph
          xrange={[-3, 3]}
          yrange={[-2.5, -0.1]}
          height={200}
          xaxis
          functions={[{color: 'black', fn: WAVEFUNCTION_PROBABILITY_DISTRIBUTION}]} />

        <button onClick={() => this.sample()} className='btn btn-default'>Sample</button>

        <div style={{margin: "5px"}}>
          <svg
            height={400}
            width={300}
            // preserveAspectRatio="xMaxYMax none"
            style={{backgroundColor: 'white'}}>
            <g transform={`scale(1,1)`}>
              {this.state.samples.map((x, idx) =>
                <circle r={3} cx={((x + 3) * 300 / 6) || -50} cy={(idx * 2 + 3) % 370 + 4} key={idx}/>)}
            </g>
          </svg>
        </div>
      </div>
    </div>
    </Layout>
  }
}

// interpret things as a bunch of rectangles
function getSamples(f, minX, maxX, numSamples, numBuckets) {
  function chooseFromDiscreteDistribution(list, sum) {
    var cumulative = 0;
    var target = Math.random() * sum;
    for (var i = 0; i < list.length; i++) {
      cumulative += list[i];
      if (cumulative > target) {
        return i;
      }
    }
  }

  const xRange = maxX - minX;
  const buckets = Array(numBuckets).fill(null).map((x, idx) => {
    return idx * xRange / numBuckets + minX;
  });

  const likelihoods = buckets.map((x) => f(x));

  const totalLikelihood = likelihoods.reduce((x, y) => x + y);
  const bucketSize = xRange / numBuckets;

  return Array(numSamples).fill(null).map(() => {
    const bucket = chooseFromDiscreteDistribution(likelihoods, totalLikelihood);

    return (bucket + Math.random()) * bucketSize + minX;
  });
}

export default PositionSampler;
