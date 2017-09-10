import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import Panel from '../../components/Panel'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const KineticEnergy = () => (
  <Layout>
    <h2>Kinetic energy</h2>
    <MarkdownWithLatex text={`
Keep your eyes on the prize, dear reader. We want to figure out what ground states are like. Part of the story is that wavefunctions want to minimize their potential energy. Let's try to figure out what the other part of the story is.

TODO: Here's a spring. There's a wavefunction of an electron near it. Play around with it until you figure out where the potential energy is minimized.

As you can see, to minimize potential energy, we want to make our wavefunction as tightly bundled as possible. That does not lead to a universe that we'd like. In particular, the ground state of the hydrogen atom would be an electron in exactly the same place as a proton, which would involve having infinitely much energy.

It turns out that this type of energy corresponds nicely to the classical notion of kinetic energy. In classical mechanics, kinetic energy can't be calculated based on the configuration of the particles--you also need to know how this configuration is changing over time. As we previously discussed, quantum mechanics is a first-order theory in time, which means that its time evolution can be predicted just by knowing its current state. So we're able to calculate kinetic energy just by looking at the wavefunction.

Here's how it's defined: The kinetic energy operator at a point is defined by the amount that the wavefunction is curving towards the zero point. Let's look at three examples. This section of a wavefunction curves down towards the zero point:
`}/>
    <SimpleGraph xrange={[-3, 3]} yrange={[-2, 0.1]} width={300} height={200} xaxis
        functions={[
          {color: 'blue', fn: (x) => -0.03 * x**2 + 0.8, tangent: true}
        ]}
      />

    <p>So at this point, the wavefunction has positive kinetic energy.</p>

    <p>This section of wavefunction is not curved:</p>

    <SimpleGraph xrange={[-3, 3]} yrange={[-2, 0.1]} width={300} height={200} xaxis
        functions={[
          {color: 'blue', fn: (x) => 0.8, tangent: true}
        ]}
      />

    <p>And so it has no kinetic energy.</p>

    <p>This bit of wavefunction is curved up:</p>

    <SimpleGraph xrange={[-3, 3]} yrange={[-2, 0.1]} width={300} height={200} xaxis
        functions={[
          {color: 'blue', fn: (x) => 0.03 * x**2 + 0.6, tangent: true}
        ]}
      />

      <MarkdownWithLatex text={`

so its kinetic energy is negative.

It turns out that when you learn how particles evolve over time, you'll notice that kinetic energy corresponds nicely to the classical notion of $$\\frac 12 m v^2$$. But for now, I want you to just think of it as the factor which means that ground states are spread out.


exercise: select the places on a wavefunction where it's got positive or negative derivative

exercise: select the places where it's got positive or negative 2nd derivative

exercise: select places where it's got positive or negative KE.

<img src='/static/img/ke-exercise-mockup.jpg' height='500'/>

exercise: figure out which wavefunctions have high or low total KE.


NOTE: the thing we're really doing here is integrating

Just BTW, kinetic energy involves dividing by the mass of the particle.

Exercise: Suppose you have a proton with the same spread as an electron. (Remember that protons weigh much more.) Which has more kinetic energy? Answer: The electron, because the proton is much heavier. This is why it's okay to treat protons as classical point particles compared to protons.


 `}/>


    <Panel>
      <MarkdownWithLatex text={`

#### Optional aside: Mathematical formalism

Remember how we could write potential energy as

$^$ \\int_{-\\infty}^{\\infty} \\Psi(x) \\cdot V(\\Psi, x) dx $^$

where we're using $$V$$ as kind of a higher-order function, from a wavefunction to a different complex valued probability distribution?

This formalism is really handy for kinetic energy. The kinetic energy operator (which we'll use the symbol $$T$$ for) is

$^$ T(\\Psi, x) = -\\frac{1}{m} \\frac{\\partial^2}{\\partial x^2} \\Psi(x)$^$

(again, we're in units such that electrons have mass 1)

The total kinetic energy of a wavefunction is

$^$ \\int_{-\\infty}^{\\infty} \\Psi^*(x) \\cdot T(\\Psi, x) dx $^$

or, more explicitly

$^$ -\\frac{1}{m} \\int_{-\\infty}^{\\infty}  \\Psi^*(x) \\cdot \\frac{\\partial^2}{\\partial x^2} \\Psi(x) dx $^$
        `}/>
    </Panel>

<MarkdownWithLatex text={`

----

Okay, so now we know how to calculate the energy of a wavefunction. Some notes:

- Kinetic energy can be calculated totally ignoring the potential.
- Potential energy can be calculated totally ignoring the complex phase of the wavefunction.

So the goal was to figure out the ground state energy of a particular potential. Now we know how to calculate the energy of a wavefunction in a potential, but we don't know how to go from that to reasoning about the properties of the ground states of a potential. We're going to get to that next.
        `}/>

     <Link href="/03-ground-states/"><a>Continue</a></Link>


  </Layout>
)

export default KineticEnergy
