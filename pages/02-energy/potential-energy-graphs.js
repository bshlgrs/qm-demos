import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'


const PotentialEnergyGraphsSection = () => {
  function graph(fn) {
    return <SimpleGraph
      xrange={[-1, 1]}
      yrange={[-1, 1]}
      height={200}
      width={200}
      functions={[fn]}
    />
  }

  return <div>
    <h3>Potential energy graphs</h3>

    <p>We want to be able to graph how potential energy changes as a function of the positions of the particles in our system. For example, suppose we have a slanted road with a car on it. This is a one dimensional system, and it looks like this:</p>

    <p>TODO: IMAGE HERE, parameterized by a slider</p>

    <p>Obviously, the energy is higher when the car is on the right than when the car is on the left. But what's the shape of the graph? All of the following graphs are taller on the right than the left; we need to know which is correct.</p>

    <Row>
      {graph({color: 'black', fn: (x) => (x)})}
      {graph({color: 'black', fn: (x) => ((x + 1)**2 * 0.5 - 0.9)})}
      {graph({color: 'black', fn: (x) => ((x + 1.05)**0.5 * 1.4 - 1.1)})}
      {graph({color: 'black', fn: (x) => (0.95 * Math.sin(x * 1.5))})}
    </Row>

    <MarkdownWithLatex text={`

The first graph, the linear one, is closest to correct. At the scales where humans experience it, gravity is basically a constant force. (It's a little bit stronger closer to the ground, but only a tiny bit.)

TODO: mention how the derivative is the force.

TODO: maybe mention that the zero point doesn't matter.

TODO: linearity?

This is what all (approximately) constant forces look like.


Exercise: multiple choice for gravitational potential energy function as a function of how many stories up a building you are.
`}/>


    <h4>Springs</h4>


    <MarkdownWithLatex text={`
Springs are a different story. Springs work according to Hooke's law, which says that they pull twice as hard if you pull them twice as far. Or, in math, F = -kx.

When you pull a spring past its equilibrium point, it tries to pull back:

PICTURE

And when you compress it, it pushes you back.

PICTURE.

`} />


    <MultipleChoiceQuestion
      question="What is the potential energy of a spring like at equilibrium, when stretched, and when pushed"
      answers={[
        "Energy increases constantly with the length you've pulled the spring to--it's lower when the spring is compressed and higher as you pull the spring past equilibrium",
        <span>Energy <emph>decreases</emph> constantly with the length you've pulled the spring to--it's lower when the spring is compressed and higher as you pull the spring past equilibrium</span>,
        "Energy is a minimum at equilibrium and higher on both sides",
        "Energy is a maximum at equilibrium and lower on both sides",
      ]}
      correctAnswerIdx={2}
      explanation="TODO"
      />

    <MultipleChoiceQuestion
      question="What does spring potential energy look like in terms of a graph?"
      answers={[
        graph({color: 'black', fn: (x) => (x**2)}),
        graph({color: 'black', fn: (x) => Math.abs(x)}),
        graph({color: 'black', fn: (x) => Math.abs(x)**0.5})
      ]}
      correctAnswerIdx={1}
      correctText={<Link href='./02'>
          <button className='btn btn-primary'>Next</button>
        </Link>}
      />

    <MarkdownWithLatex text={`This potential is given by
      the equation $$k x^2$$, where $$k$$ is the spring constant, which tells you how much a particular spring resists being compressed or stretched.


      `}/>

    <p>OPTIONAL ADDITION: When you have a system in a stable state, the potential is locally well approximated by a spring. Also this leads to oscillations.</p>


    <h4>Electric potential energy</h4>

    <p>In our quest to understand the quantum mechanics which leads to the everyday properties of matter, the most important kind of potential energy is electric potential energy--the energy that comes from repulsive particles being close together, or attractive particles being far apart.</p>

    <p>As you might recall, like charges attract and unlike charges repel.</p>

    <p>Because of some bad decisions by Benjamin Frankin, we've decided to define electric charge such that electrons have -1 of it and protons have 1.</p>

    <p>TODO: This leads us to think that energy comes from the product of the amounts of charge.</p>

    <p>For neato reasons that I won't go in to here, the potential is like 1/r, and the force is 1/r**2.</p>

    <p>Let's quickly answer some questions about the order of potential energy of different systems.</p>
  </div>
}

export default PotentialEnergyGraphsSection;
