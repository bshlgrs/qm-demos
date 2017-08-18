import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import { InlineMath } from 'react-katex'



const KineticEnergyPage = () => (
  <Layout>
    <h2>Kinetic energy</h2>

    <p>Kinetic energy is a function of the curvature of the wavefunction. The kinetic
    energy isn't affected at all by the potential a particle is in.</p>

    <p>The amount of total kinetic energy <InlineMath math="T" /> in a wavefunction at a particular point on the
    wavefunction is equal to</p>

    <InlineMath math="\Psi^*(x) \cdot \frac{d \Psi(x)^2}{d^2 x}" />

    <h3>Quiz</h3>

    <p>In the following graph, which wavefunction has the lower kinetic energy?</p>

    <SimpleGraph
      xrange={[-3, 3]}
      yrange={[-1.5, 1.5]}
      width={300}
      axes={false}
      functions={[
        {color: 'red', fn: (x) => Math.sin(x)},
        {color: 'blue', fn: (x) => Math.sin(2 * x)}
      ]}
      paths={[
        {color: 'brown', path: [[-3, 0], [-1, 0], [-1, 1], [1, 1], [1, 0], [3, 0]]}
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

export default KineticEnergyPage;
