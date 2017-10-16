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

As you saw in the post on potential energy, PE is minimized when our wavefunction is as tightly bundled as possible. If the matter in this universe was just trying to minimize potential energy, it would not be a very hospitable universe for us. For example, the ground state of the hydrogen atom would be an electron in exactly the same place as a proton, which would involve having negative infinity potential energy.

So there must be some other type of energy associated with a wavefunction in addition to its potential energy. This energy needs to encourage wavefunctions to be spread out.

It turns out that quantum mechanics has a type of energy like this. We call this energy the kinetic energy of the wavefunction. One reason that we call it the kinetic energy is that when we learn the laws of physics which describe how wavefunctions evolve over time, we'll see that the math we're using here to measure kinetic energy also describes how rapidly the average position of the particle is moving. But for the moment I'd like you to not worry about that connection, and just take it on faith that we're using the name "kinetic energy" for this concept.

One interesting feature of quantum mechanics is that we can calculate the kinetic energy directly from the wavefunction. In classical mechanics, it's not enough to know the configuration of a system to know its kinetic energy, you also need to know the rate of change of the configuration. But in QM, there's just this one object, the wavefunction, which tells us everything we need to know.

Here's how it's defined: The kinetic energy operator at a point is proportional to the amount that the wavefunction is curving towards zero there. When the wavefunction is curving towards zero, your wavefunction has positive kinetic energy, and when it's curved away it has negative kinetic energy at that point.

`}/>

    <Panel>
      <MarkdownWithLatex text={`
#### Equations for this

If we're in a one-dimensional universe, the equation for the kinetic energy of the wavefunction $$\\Psi$$ at point $$x$$ is:

$^$KE(\\Psi, x) = -\\frac{m}{2} \\frac{d^2\\Psi}{dx^2} (x)$^$

where $$m$$ is the mass of the particle whose wavefunction we're talking about.

If we're in a three-dimensional universe, kinetic energy is:

$^$KE(\\Psi, x) = -\\frac{m}{2} \\left(\\frac{d^2\\Psi}{dx^2}(x) + \\frac{d^2\\Psi}{dy^2}(x) + \\frac{d^2\\Psi}{dz^2}(x)\\right) $^$
        `}/>
    </Panel>

    <p>Let's look at three examples. This section of a wavefunction curves down towards the zero point:</p>
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

Here's a wavefunction. Can you decide, for each section, whether the KE is positive or negative there?

<img src='/static/img/ke-exercise-mockup.jpg' height='500'/>

Here are some other points that I could make here:

- The prototypical example of a wavefunction with positive kinetic energy is an oscillating function like $$\\Psi(x) = \\sin(k  x)$$. In this case, the energy is proportional to $$k^2$$.
- The prototypical example of negative kinetic energy is a wavefunction like $$\\Psi(x) = e^{-\\kappa x}$$. The exponential function has negative curvature everywhere.
- Wavefunctions can't have negative kinetic energy in total. This is because they need to be normalized, and whenever they have negative kinetic energy their amplitude must be curving upwards. As they say, what goes up must come down.
- TODO, maybe: The function $$\\Psi(x) = \\sin(x) + 1$$ has positive total KE, for kind of interesting, subtle reasons.


### The $$\\frac{1}{m}$$ term

Suppose you have a proton with the same spread as an electron. (Remember that protons weigh much more.) Which has more kinetic energy?

Answer: The electron, because the proton is much heavier.

This is why it's okay to treat protons as classical point particles compared to protons.

By the way, this is also my explanation for why quantum mechanics is the relevant physics for the interactions between nuclei and electrons. The following is very handwavy, but maybe useful: If nuclei and electrons are far apart, they behave like classical particles because they each doesn't need to be very tightly bunched together, so both have negligable KE. But if we're in a situation like a hydrogen atom where there's nothing stopping the electron and proton from getting as close together as they can get, then the wavefunctions are going to get more and more tightly bound until we run up against some other constraint. The two relevant constraints are the KE of the proton and the electron, and for a given tightness of the wavefunction, the KE of the electron is much larger. So we run into the constraint of the KE of the electron.

TODO: BTW, another reason it's 1/m instead of something else: the momentum, not the velocity, is what you get from counting oscillations in phase.

 `}/>


    <Panel>
      <MarkdownWithLatex text={`

#### Optional aside: Mathematical formalism

Remember how we could write potential energy as

$^$ \\int_{-\\infty}^{\\infty} \\Psi(x) \\cdot V(\\Psi, x) dx $^$

where we're using $$V$$ as kind of a higher-order function, from a wavefunction to a different function from configurations to complex numbers?

This formalism is really handy for kinetic energy. The kinetic energy operator (which we'll use the symbol $$T$$ for) is

$^$ T(\\Psi, x) = -\\frac{1}{m} \\frac{\\partial^2}{\\partial x^2} \\Psi(x)$^$

(again, we're in units such that electrons have mass 1)

The total kinetic energy of a wavefunction is

$^$ \\int_{-\\infty}^{\\infty} \\Psi^*(x) \\cdot T(\\Psi, x) dx $^$

or, more explicitly

$^$ -\\frac{1}{m} \\int_{-\\infty}^{\\infty}  \\Psi^*(x) \\cdot \\frac{\\partial^2}{\\partial x^2} \\Psi(x) dx $^$

Incidentally, this makes me feel better about how we measure wavefunction probability according to the square of its amplitude rather than its absolute value.

---

One useful exercise is to figure out the kinetic energy of the wavefunction $$\\Psi(x) = e^{i k x}$$.
        `}/>
    </Panel>

<MarkdownWithLatex text={`



----

Okay, so now we know how to calculate the energy of a wavefunction. Some notes:

- Kinetic energy can be calculated totally ignoring the potential. It's just a function of the wavefunction.
- Potential energy can be calculated totally ignoring the complex phase of the wavefunction.

So the goal was to figure out the ground state energy of a particular potential. Now we know how to calculate the energy of a wavefunction in a potential, but we don't know how to go from that to reasoning about the properties of the ground states of a potential. We're going to get to that next.

### Notes

- KE is real-valued

        `}/>

     <Link href="/03-ground-states/"><a>Continue</a></Link>


  </Layout>
)

export default KineticEnergy
