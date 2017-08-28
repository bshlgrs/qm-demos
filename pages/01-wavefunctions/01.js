import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Thing01 = () => {
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
    <CarouselMultipleChoiceQuestion
      question={<div>
        <p>Consider a particle with this wavefunction:</p>

        {graph({color: 'blue', fn: (x) => (-2 * x * Math.exp(-(x**2)))})}

        <p>What does its probability distribution look like?</p>
      </div>}
      answers={[
        graph({color: 'black', fn: (x) => (4 * x**3 * Math.exp(-2 *(x**2)))}),
        graph({color: 'black', fn: (x) => (Math.exp(-2 *(x**2)))}),
        graph({color: 'black', fn: (x) => (4 * x**2 * Math.exp(-2 *(x**2)))}),
        graph({color: 'black', fn: (x) => (2 * x * Math.exp(-2 *(x**2)))}),
        graph({color: 'black', fn: (x) => Math.abs(-2 * x * Math.exp(-(x**2)))})
      ]}
      correctAnswerIdx={2}
      correctText={<Link href='./02'>
          <button className='btn btn-primary'>Next</button>
        </Link>}
      />

  </Layout>
}

export default Thing01;
