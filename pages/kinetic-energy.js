import Link from 'next/link'
import Layout from '../components/Layout'
import Row from '../components/Row'
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


    <h3>Example</h3>

    <p>Let's figure out the kinetic energy of this wavefunction.</p>

    <Row>
      <SimpleGraph
        xrange={[-3, 3]}
        yrange={[-2, 2]}
        width={300}
        xaxis
        functions={[
          {color: 'green', fn: (x) => Math.exp(-(x**2)), tangent: true}
        ]}
      />
      <span><i className='fa fa-right'/></span>
      <SimpleGraph
        xrange={[-3, 3]}
        yrange={[-2, 2]}
        width={300}
        xaxis
        functions={[
          {color: 'blue', fn: (x) => (-2 * x * Math.exp(-(x**2)))}
        ]}
      />
      <span><i className='fa fa-right'/></span>
      <SimpleGraph
        xrange={[-3, 3]}
        yrange={[-2, 2]}
        width={300}
        xaxis
        functions={[
          {color: 'gold', fn: (x) => ((4 * x**2 - 2) * Math.exp(-(x**2)))}
        ]}
      />
    </Row>


    <p>Pointwise multiply by the original function and times by -1
    to get the kinetic energy at each point (displayed in red). I've also included
    the original wavefunction on this graph, in green:</p>

    <SimpleGraph
      xrange={[-3, 3]}
      yrange={[-3, 1]}
      width={300}
      xaxis
      functions={[
        {color: 'red', fn: (x) => (-(4 * x**2 - 2) * Math.exp(-2 * (x**2)))},
        {color: 'green', fn: (x) => Math.exp(-(x**2))}
      ]}
    />

    <p>So we can see that the</p>

    <h3>Quiz</h3>

    <p>In the following graph, which wavefunction has the lower kinetic energy?</p>

    <Row>
      <div>
        <SimpleGraph
          xrange={[-3, 3]}
          yrange={[-1.5, 1.5]}
          width={300}
          xaxis
          functions={[
            {color: 'blue', fn: (x) => Math.cos(4 * x) * Math.exp(-(x**2))}
          ]}
        />
      </div>
      <div>
        <SimpleGraph
          xrange={[-3, 3]}
          yrange={[-1.5, 1.5]}
          width={300}
          xaxis
          functions={[
            {color: 'green', fn: (x) => Math.cos(x) * Math.exp(-(x**2))}
          ]}
        />
      </div>
    </Row>

    <h3>Foo</h3>

    <SimpleGraph
      xrange={[-3, 3]}
      yrange={[-1.5, 1.5]}
      width={300}
      axes={false}
      functions={[
        {color: 'green', fn: (x) => Math.cos(x) * Math.exp(-(x**2))},
        {color: 'blue', fn: (x) => Math.cos(4 * x) * Math.exp(-(x**2))}
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
