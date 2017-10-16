import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import GraphFunction from '../../components/GraphFunction'
import Row from '../../components/Row'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import ReactSlider from 'react-slider'



const leftColumn = <MarkdownWithLatex text={`
Your wavefunction is like a probability distribution, right. LINK TO LESSON 1

If it's a joint distribution, it's from multiple positions to a complex number.

Interestingly, electrons are indistinguishable.






WHERE DO I EXPLAIN SPIN?

### Visualizing wavefunction anti-symmetry

The wavefunction has to be anti-symmetric

- Question: does that mean it can't have the same value at two places?

- picture of anti-symmetric heatmap
- "conditional wavefunction" graph
- this means that you need high kinetic energy to have things be close to each other
- Eg calculate the kinetic energy of two electrons with gaussian distributions and varied means and variances

Do the same exercise with bosons

`}/>

class VisualizationPage extends React.Component {
  constructor () {
    super();
    this.state = {
      aMeanInput: 25,
      bMeanInput: 75,
      aVarInput: 1,
      bVarInput: 1,
      conditionedPositionInput: 55
    }
  }

  renderRightColumn () {
    const { aMeanInput, bMeanInput, aVarInput, bVarInput, conditionedPositionInput } = this.state;
    const aMean = (aMeanInput - 50) * 3 / 100 - 0.05;
    const bMean = (bMeanInput - 50) * 3 / 100 + 0.05;
    const aVar = aVarInput/50 + 0.5;
    const bVar = bVarInput/50 + 0.5;
    const conditionedPosition = (conditionedPositionInput - 50) * 3 / 100;

    const aFunc = (x) => (0.5 / (aVar**0.5) * Math.exp(-1*((x - aMean) ** 2 / aVar)));
    const bFunc = (x) => (0.5 / (bVar**0.5) * Math.exp(-1*((x - bMean) ** 2 / bVar)));

    const aGraph = <GraphFunction
      options={{color: 'blue', fn: aFunc, observedParams: [aMean, aVar]}}
      detail={30}
      range={[-3, 3]} />;

    const bGraph = <GraphFunction
      options={{color: 'red', fn: bFunc, observedParams: [bMean, bVar]}}
      detail={30}
      range={[-3, 3]} />;

    const aAtPosition = aFunc(conditionedPosition);
    const bAtPosition = bFunc(conditionedPosition);
    const cA = bAtPosition / (bAtPosition + aAtPosition);
    const cB = -1 + cA;

    return <div style={{position: 'fixed'}}>
      <SimpleGraph
        xrange={[-3, 3]} yrange={[-2, 2]} xaxis={true}
        preRenderedFunctions={[aGraph, bGraph]}
        paths={[
          {color: 'purple', path: [[conditionedPosition, 2], [conditionedPosition, -2]]}
        ]}
        width={500}
        detail={30}
      />

      <Row>
        <div>
          <span style={{color: 'blue'}}>mean of A</span>
          <input
            type="range"
            value={this.state.aMeanInput}
            onChange={(e) => this.setState({ aMeanInput: e.target.value })} />
        </div>
        <div>
          <span style={{color: 'red'}}>mean of B</span>
        <input
          type="range"
          value={this.state.bMeanInput}
          onChange={(e) => this.setState({ bMeanInput: e.target.value })} />
        </div>
      </Row>
      <Row>
        <div>
          <span style={{color: 'blue'}}>variance of A</span>
          <input
            type="range"
            value={this.state.aVarInput}
            onChange={(e) => this.setState({ aVarInput: e.target.value })} />
        </div>
        <div>
          <span style={{color: 'red'}}>variance of B</span>
          <input
            type="range"
            value={this.state.bVarInput}
            onChange={(e) => this.setState({ bVarInput: e.target.value })} />
        </div>
      </Row>

      <div>
        <span>position of first particle</span>
        <input
          type="range"
          value={this.state.conditionedPositionInput}
          onChange={(e) => this.setState({ conditionedPositionInput: e.target.value })} />
      </div>

      <div>
        <SimpleGraph
          xrange={[-3, 3]} yrange={[-2, 2]} xaxis={true}
          functions={[
            {color: 'blue', fn: (x) => cA * aFunc(x) },
            {color: 'red', fn: (x) => cB * bFunc(x)},
            {color: 'purple', fn: (x) => cA * aFunc(x) + cB * bFunc(x)},
          ]}
          paths={[
            {color: 'purple', path: [[conditionedPosition, 2], [conditionedPosition, -2]]}
          ]}
          width={500}
          detail={30}
        />
      </div>
    </div>;
  }

  render () {
    return <Layout naked>
      <div style={{margin: '20px'}}>
        <h2>Identical particles</h2>
        <Row >
         <div>
            {leftColumn}
          </div>
          <div style={{alignSelf: 'flex-start', marginLeft: '20px'}}>
            {this.renderRightColumn()}
          </div>
        </Row>
      </div>
    </Layout>;
  }
}



export default VisualizationPage;
