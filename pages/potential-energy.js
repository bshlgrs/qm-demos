import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import { InlineMath } from 'react-katex'



const PotentialEnergyPage = () => (
  <Layout>
    <h2>Potential energy</h2>

    <p>The potential energy is the expectation of the potential across the wavefunction.</p>

    <h3>Quiz</h3>

    <p>In the following graph, which wavefunction has the lower potential energy?</p>

    <SimpleGraph
      xrange={[-3, 3]}
      yrange={[-1.5, 1.5]}
      width={300}
      axes={false}
      functions={[
        {color: 'blue', fn: (x) => (Math.exp(- (x**2))) }
      ]}
      paths={[
        {color: 'brown', path: [[-3, 0], [-1, 0], [-1, -1], [1, -1], [1, 0], [3, 0]]}
      ]}
      texts={[
        {location: [0, 0], textAlign: 'center', content: 'origin'}
      ]}
    />

    <SimpleGraph
      xrange={[-3, 3]} yrange={[-1.5, 1.5]} xaxis={true}
      functions={[
        {color: 'blue', fn: (x) => (Math.sin(x) * Math.exp(-(x ** 2)))}
      ]}
    />

    <SimpleGraph
      xrange={[-3, 3]} yrange={[-1.5, 1.5]} xaxis={true}
      functions={[
        {color: 'blue', fn: (x) => (Math.sin(4*x) * Math.exp(-(x ** 2)))}
      ]}
    />

    <p>We have a wavefunction like blah:</p>

    <SimpleGraph
      xrange={[-3, 3]} yrange={[-1.5, 1.5]} xaxis={true}
      functions={[
        {color: 'blue', fn: (x) => (Math.exp(-(x ** 2)))}
      ]}
    />

    <p>Move your mouse along that wavefunction to draw the derivative.</p>
  </Layout>
);

export default PotentialEnergyPage;
