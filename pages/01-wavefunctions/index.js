import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index1 = () => (
  <Layout>
    <h2>Wavefunctions</h2>
    <MarkdownWithLatex text={`

Wavefunctions are the fundamental objects of QM. In classical mechanics, you talk about things like "I had a ball at position y=5, then it fell down to y=2 because of gravity". In QM, you say "the wavefunction used to be this, and now the wavefunction is that".

We'll revisit the classical way to describe the state of a system, and then explain how wavefunctions are build on top of that concept.

### Classical configurations

TODO: port [LessWrong](http://lesswrong.com/lw/pi/classical_configuration_spaces/) explanation to here.

In classical mechanics, we describe a system in terms of a set of dimensions. We need to know one number for each dimension for the position, and if we want to know the velocities, we'd need one number for each dimension saying the rate at which the position along that dimension is changing.


We need 4 dimensions for the positions of these two balls in 2D:

<img height="300" src="/static/img/configuration.jpg" />

`}/>



    <MultipleChoiceQuestion
      question="How many dimensions are required to describe the position of a pendulum on a fixed rod?"
      answers={[
        "1", "2", "3", "4"
      ]}
      correctAnswerIdx={0}
      explanation={<div>
        <p>We can describe the position with just one variable, theta. TODO.</p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Oscillating_pendulum.gif?w=240" />
      </div>}
      />


<MarkdownWithLatex text={`

### Probability distributions

In quantum mechanics, we need to describe things not just in terms of a configuration, but in terms of weights for every possible configuration. It's a lot like as if we had a probability distribution over configurations.

Our configurations are part of continuous space, so instead of a discrete probability distribution, we're going to be using probability density functions, which are TODO. ABBREVIATE THEM AS PDFs.

CONFUSING ASIDE WHICH I SHOULD REMOVE: We don't have to represent things as prbability density functions. Here's another way we could represent probability distributions: a function from the interval [0, 1] to the space. (This is known as the [quantile function](https://en.wikipedia.org/wiki/Quantile_function) or inverse cumulative probability density function.) Quantile functions are easier to generate samples from, but they're much harder to work with in practice: you can't very easily find the quantile function of a complicated pdf, and you can't combine simple quantile functions into more complicated ones. More importantly, it turns out that quantum mechanics has laws such that the PDF is more like the real thing that is evolving.

`}/>

    <MultipleChoiceQuestion
      question="What is the type of a PDF over primary colors?"
      answers={[
        <code>PrimaryColor -> Real</code>,
        <code>Real -> PrimaryColor</code>
      ]}
      correctAnswerIdx={0}
      explanation="TODO"
      />

    <MultipleChoiceQuestion
      question="What is the type of a PDF over locations of a pendulum?"
      answers={[
        <code>Real -> Real</code>,
        <code>Real -> Int</code>,
        <code>Int -> Real</code>
      ]}
      correctAnswerIdx={0}
      explanation="TODO"
      />

    <MultipleChoiceQuestion
      question="What is the type of a PDF over positions of a particle in 3D space?"
      answers={[
        <code>Real -> (Real, Real, Real)</code>,
        <code>(Real, Real, Real) -> Real</code>
      ]}
      correctAnswerIdx={1}
      explanation="TODO"
      />

<MarkdownWithLatex text={`

Our physics is in terms of probabilities: the probability that an observer will observe a particle to be in a particular place. TODO: reconsider wording of previous sentence. This isn't a subjective thing, it's an objective fact about the universe.

We can draw probability density functions as graphs, btw. For example, you've probably seen pictures of a normal distribution:

<img height="266" src="/static/img/normal-distribution.png" />

This means BLAH.

This kind of graph has configurations of the entire universe on the x axis. For this reason, you can't do these graphs very well for cases much more complicated than 1D.

But it gives you an important intuition: that there's a type of closeness of universes whose configurations are very similar.


<img height="350" src="/static/img/configuration-pdf.jpg" />

---

You might say, "Okay, but I could describe classical mechanics in terms of probabilities too. Like, maybe I have the system '30% chance that the ball is going downwards at 5 ms<sup>-1</sup> and 70% that it's going upwards at that speed'. I can evolve that system through time--given that gravity accellerates you downwards at about 10 meters per second per second, after 0.1 seconds my state is '70% chance of ball going downward at 6ms<sup>-1</sup>, 30% that it's going up at 4ms<sup>-1</sup>."

TODO: decide whether to include positions in the above configurations

<img height="350" src="/static/img/linearity-of-evolution.jpg" />

You say "Allegedly quantum mechanics involves things like probability distributions over configurations. How is that different from the trivial way in which classical mechanics can be phrased in terms of probability distributions?"

Great question. The answer is that in classical mechanics, if you have a distribution over configurations and you have some function \`f\` that tells you how a particular configuration will evolve over a second, then you can describe the evolution of the distribution by calling \`distribution.map(f)\`. In the figure above, we evolved the probability distribution by saying "well, we thought there was a 70% chance of state A and 30% chance of state B, so now we have 70% of f(A) and 30% of f(B)."

In quantum mechanics, you can't decompose time evolution this way. The laws of physics don't just take the different configurations and evolve them forward in time independently--interaction between the amplitudes of configurations which are similar to each other is a key part of QM.

`}/>


<MarkdownWithLatex text={`

### Wavefunctions

I lied a little. It turns out that in QM, instead of having probability distributions which map configurations to real numbers, the fundamental object is a thing called a wavefunction, which is just like a probability distribution except it maps to complex numbers instead of real numbers.

So let's say we want the wavefunction of a single electron. For a single particle in 3D, the only information required to specify its configuration is its position, so every configuration can be described by three real numbers. In QM we represent the wavefunction as a function of type \`(Real, Real, Real) -> Complex\`.

`}/>

<table className='table table-bordered'>
  <thead>
    <tr>
      <th/>
      <th>Configuration</th>
      <th>Probability density function</th>
      <th>Wavefunction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pendulum</td>
      <td>Real</td>
      <td>Real -> Real</td>
      <td>Real -> Complex</td>
    </tr>
    <tr>
      <td>Classical electron in 3D space</td>
      <td>(Real, Real, Real)</td>
      <td>(Real, Real, Real) -> Real</td>
      <td>(Real, Real, Real) -> Complex</td>
    </tr>
  </tbody>
</table>


<MarkdownWithLatex text={`

ADD EXAMPLE

We call the number that's mapped to an amplitude.

[Go understand complex numbers here maybe](https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/)

We turn it into a probability distribution by taking the squared modulus.

Why? Well we have to use *something*, and the squared modulus makes the phase non physically real.

QUESTION: Given a wavefunction, where is the particle most likely to be observed?

QUESTION: Match the wavefunction to the probability distribution.

Physicists usually use the symbol $$\\Psi$$ (the Greek letter Psi) to refer to the wavefunction. So they'd write $$\\Psi(\\mathbb{x})$$ to refer to "the amplitude of the wavefunction $$\\Psi(\\mathbb{x})$$ at location $$\\mathbb{x}$$"

One particularly important detail is that the wavefunction needs to be normalizeable.

This is written

$^$ \\int_{-\\infty}^{\\infty} | \\Psi(x) |^2 dx = 1 $^$

where $$| \\Psi(x) |$$ means "the norm of $$\\Psi(x)$$".

### Quantum mechanics is a first order differential equation

If I show you a still frame of our universe, you won't know how it should be evolved forward in time, because you also need velocities. Does the same argument apply to accellerations? No, it doesn't. Classical mechanics manages to describe everything in terms of forces which cause accelleration. All forces can be calculated from just knowing positions and velocities. So in classical mechanics, if your configuration is $$n$$ real numbers, to know the time evolution of the system you need to know $$2n$$ real numbers, so that you have all the velocities too. It is nice that in classical physics, to predict the future you only need the configuration and its time derivative, as opposed to more derivatives than that.

(I could describe this in terms of 'the last two frames' instead of 'positions and velocities', maybe that's better.)

QM goes even further. We don't have two kinds of fact about every configuration--its position and momentum. Instead, the wavefunction over configurations itself contains all you need to know about how the particle is going to evolve in the future.

One way of looking at quantum mechanics is that it's a really simple way of building out physics which evolves according to a first order differential equation and roughly looks like it has point particles with positions and velocities when you zoom out.

This works because we have complex phase to describe velocities.

We use the coileyness to describe the directions things go in. This is really neat--it means that we can describe both the approximate position and approximate momentum of a particle with just one function from its position to C.


EXTRA READING:

- Ostrogradskian Instability -- your physics is unstable if it's more than second order. [StackExchange](https://physics.stackexchange.com/a/4132)





-----

Next up we'll learn how to calculate the energy of a wavefunction.

### Further reading

- [Lecture 9 of Quantum Computing Since Democritus](https://www.scottaaronson.com/democritus/lec9.html) discusses the similar material to this post from a somewhat different perspective. One particular thing I like about his treatment is that he speculates a lot about *why* the rules are the way they are.
- [Equivalent post from LessWrong Sequences](http://lesswrong.com/lw/pd/configurations_and_amplitude/)
- You can take expectations of wavefunctions by integrating. ADD LINK
- You don't have to describe wavefunctions in terms of positions. You can have the wavefunction be a function from some other property of the system too. TODO

    `}/>


  </Layout>
)

export default Index1;

