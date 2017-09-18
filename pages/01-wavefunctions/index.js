import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import OneDimensionalConfiguration from '../../components/one-off/OneDimensionalConfiguration'
import ConfigurationDemo from '../../components/one-off/ConfigurationDemo'
import Thing01 from './01'
import ClassicalConfigurations from '../../content/ClassicalConfigurations'

const Index1 = () => (
  <Layout>
    <h2>Wavefunctions</h2>
<MarkdownWithLatex text={`

Wavefunctions are the mathematical objects we use to describe the states of quantum systems. In classical mechanics, you talk about things like "I had a ball at position y=5, then it fell down to y=2 because of gravity". In QM, you say "the wavefunction used to be this, and now the wavefunction is that".

We'll revisit the classical way to describe the state of a system, and then explain how wavefunctions are build on top of that concept.

`}/>

<ClassicalConfigurations />

<MarkdownWithLatex text={`

### Probability distributions

In quantum mechanics, we need to describe things not just in terms of a configuration, but in terms of weights for every possible configuration. It's a lot like as if we had a probability distribution over configurations.

Our configurations are part of continuous space, so instead of a discrete probability distribution, we're going to be using probability density functions (henceforth abbreviated PDFs). [Wikipedia explains](https://en.wikipedia.org/wiki/Probability_density_function):

> In probability theory, a probability density function (PDF), or density of a continuous random variable, is a function, whose value at any given sample (or point) in the sample space (the set of possible values taken by the random variable) can be interpreted as providing a relative likelihood that the value of the random variable would equal that sample. In other words, while the absolute likelihood for a continuous random variable to take on any particular value is 0 (since there are an infinite set of possible values to begin with), the value of the PDF at two different samples can be used to infer, in any particular draw of the random variable, how much more likely it is that the random variable would equal one sample compared to the other sample.
>
> In a more precise sense, the PDF is used to specify the probability of the random variable falling within a particular range of values, as opposed to taking on any one value. This probability is given by the integral of this variable’s PDF over that range—that is, it is given by the area under the density function but above the horizontal axis and between the lowest and greatest values of the range. The probability density function is nonnegative everywhere, and its integral over the entire space is equal to one.

`}/>

    <MultipleChoiceQuestion
      question="What is the type of a probability distribution over primary colors?"
      answers={[
        <code>PrimaryColor -> Real</code>,
        <code>Real -> PrimaryColor</code>
      ]}
      correctAnswerIdx={0}
      explanation="The space of primary colors is discrete, so this is a probability distribution rather than a probability density function."
      />

    <MultipleChoiceQuestion
      question="What is the type of a PDF over locations of a pendulum?"
      answers={[
        <code>Real -> Real</code>,
        <code>Real -> Int</code>,
        <code>Int -> Real</code>
      ]}
      correctAnswerIdx={0}
      explanation="This one is an actual probability density function, because the different configurations form a continuous space."
      />

    <MultipleChoiceQuestion
      question="What is the type of a PDF over positions of a particle in 3D space?"
      answers={[
        <code>Real -> (Real, Real, Real)</code>,
        <code>(Real, Real, Real) -> Real</code>
      ]}
      correctAnswerIdx={1}
      />

<MarkdownWithLatex text={`

We can graph these probability density functions, by using the x and y coordinates of a point as the argument to the pdf and then coloring the pixel white to black according to the return value.

In this graph, both particles are probably near the middle.

<img height='300' src="/static/img/configuration-pdf-2.jpg" />

In this graph, we're pretty confident that particle 1 is in the middle, but particle 2 could be anywhere.


<img height='300' src="/static/img/configuration-pdf-1.jpg" />

And in this graph, we aren't sure of where either particle is, but we're confident that they're pretty close to each other.

<img height='300' src="/static/img/configuration-pdf-3.jpg" />

(Important sidenote: In that graph, unlike the other two, we couldn't describe our knowledge about the system in terms of seperate descriptions of the two particles. In probability theory language, we'd say that the distributions of the two particles aren't statistically independent. If you want to read more about this, Ctrl-F "Another idea" in the [LessWrong post](http://lesswrong.com/lw/pi/classical_configuration_spaces/).)


You can't do these graphs very well for cases much more complicated than 1D. But it gives you an important intuition: that there's a type of closeness of universes whose configurations are very similar.

<img height="350" src="/static/img/new-pdf-graph.jpg" />

Here we're plotting the probability of the configuration as a function of the position of the yellow particle, holding the red particle fixed. We see that the probability density is highest where the two particles are close to each other.

In quantum mechanics, we'll end up spending a lot of time looking at graphs like these and thinking about their properties. For example, the derivatives of this graph matter. That's kind of unintuitive at first--the first derivative on this graph means "the rate at which the probability density of the configuration is changing as we look through configurations where the yellow ball is in slightly different locations", which is kind of an unnatural thing to ask about if you're coming from a classical perspective. We'll talk in more detail about this later.

`}/>


<MarkdownWithLatex text={`

### Wavefunctions

It turns out that in QM, instead of having probability distributions which map configurations to real numbers, the fundamental object is a thing called a wavefunction, which is just like a probability distribution except it maps to complex numbers instead of real numbers.

If you're not comfortable with complex numbers, you might want to take this opportunity to go learn about them [here](https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/). That said, complex numbers don't actually come up that much in the rest of this series, so **even if you're not solid on them, you'll be okay**. (They're much more important for the rest of quantum mechanics than for the narrow slice of it that we're covering. The reason for this will be explained in the post on ground states.)

So let's say we want to talk about the wavefunction of a single electron. For a single particle in 3D, the only information required to specify its configuration is its position, so every configuration can be described by three real numbers. In QM we represent the wavefunction as a function of type \`(Real, Real, Real) -> Complex\`.

Let's quickly recap how the configuration spaces, PDFs, and wavefunctions for a system are related:

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



We turn it into a probability distribution by taking the squared modulus.

Why? Well we have to use *something*. The modulus makes the phase non physically real. The squared is because it lets us elegantly define things like kinetic energy.

`}/>



   <Thing01/>


<MarkdownWithLatex text={`

Physicists usually use the symbol $$\\Psi$$ (the Greek letter Psi) to refer to the wavefunction. So they'd write $$\\Psi(\\mathbb{x})$$ to refer to "the amplitude of the wavefunction $$\\Psi(\\mathbb{x})$$ at location $$\\mathbb{x}$$"

One particularly important detail is that the wavefunction needs to be normalizeable. This means that when you convert the wavefunction to a probability distribution, it needs to be a proper probability distribution in that it integrates to one.

This condition is written

$^$ \\int_{-\\infty}^{\\infty} | \\Psi(x) |^2 dx = 1 $^$

where $$| \\Psi(x) |$$ means "the norm of $$\\Psi(x)$$".

----

You might say, "Okay, but I could describe classical mechanics in terms of probabilities too. Like, maybe I have the system where there's a 30% chance of (0.3, 0.7), and 70% chance of (0.4, 0.1). Ugh, that was hard to understand, let me just draw you a picture:"

<img height="350" src="/static/img/new-clouds.jpg" />

"I can evolve that system through time--maybe the laws of physics are such that one second later, my state is 70% chance of (0.5, 0.1), 30% of (0.5, 0.2)", you continue.

You conclude by summarizing your frustrated tirade by saying: "Allegedly quantum mechanics involves things like probability distributions over configurations. How is that different from the trivial way in which classical mechanics can be phrased in terms of probability distributions?"

Great question. The answer is that in classical mechanics, if you have a distribution over configurations and you have some function \`f\` that tells you how a particular configuration will evolve over a second, then you can describe the evolution of the distribution by calling \`distribution.map(f)\`. In the figure above, we evolved the probability distribution by saying "well, we thought there was a 70% chance of state \`A\` and 30% chance of state \`B\`, so now we have 70% of \`f(A)\` and 30% of \`f(B)\`."

In quantum mechanics, you can't decompose time evolution this way. The laws of physics don't just take the different configurations and evolve them forward in time independently--interaction between the amplitudes of configurations which are similar to each other is a key part of QM.

### Quantum mechanics is a first order differential equation

TODO: flesh this out.

If I show you a still frame of our universe, you won't know how it should be evolved forward in time, because you also need velocities. Does the same argument apply to accelerations? No, it doesn't. Classical mechanics manages to describe everything in terms of forces which cause acceleration. All forces can be calculated from just knowing positions and velocities. So in classical mechanics, if your configuration is $$n$$ real numbers, to know the time evolution of the system you need to know $$2n$$ real numbers, so that you have all the velocities too. It is nice that in classical physics, to predict the future you only need the configuration and its time derivative, as opposed to more derivatives than that.

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

