import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const PotentialEnergyGraphsPage = () => {
  function graph(fn) {
    return <SimpleGraph
      xrange={[-1, 1]}
      yrange={[-1, 1]}
      height={200}
      width={200}
      functions={[fn]}
    />
  }

  return <Layout>
    <h2>Potential energy graphs</h2>

    <p>We want to be able to graph how potential energy changes as a function of the positions of the particles in our system. For example, suppose we have a slanted road with a car on it:</p>

    <p>IMAGE HERE</p>

    <p>Obviously, the energy is higher when the car is on the right than when the car is on the left. But what's the shape of the graph? All of the following graphs are taller on the right than the left; which is correct?</p>

    <Row>
      {graph({color: 'black', fn: (x) => (x)})}
      {graph({color: 'black', fn: (x) => ((x + 1)**2 * 0.5 - 0.9)})}
      {graph({color: 'black', fn: (x) => ((x + 1.05)**0.5 * 1.4 - 1.1)})}
      {graph({color: 'black', fn: (x) => (0.95 * Math.sin(x * 1.5))})}
    </Row>

    <MarkdownWithLatex text={`
At the scales where humans experience it, gravity is basically a constant force. (It's a little bit stronger closer to the ground, but only a tiny bit.) So the potential energy from gravity is basically a linear function of height.

Exercise: multiple choice for gravitational potential energy function as a function of how many stories up a building you are.
`}/>


    <h4>Springs</h4>

    <MarkdownWithLatex text={`
Springs are a different story. Springs work according to Hooke's law, which says that they pull twice as hard if you pull them twice as far. Or, in math, F = -kx. What does this look like in terms of a graph?

Exercise: multiple choice, where the options are: x, abs(x), $$x^2$$, $$-x^2$$

IDEA: give them a button which lets them flip the curve.
IDEA: button which says "hint" which just tells you a thing that is implied by your choice.

Answer: x**2.

This is the simplest example of a system which oscillates. ADD MORE HERE?

OPTIONAL ADDITION: When you have a system in a stable state, the potential is locally well approximated by a spring.
`} />
  </Layout>
}

export default PotentialEnergyGraphsPage;
