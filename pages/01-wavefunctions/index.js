import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index1 = () => (
  <Layout>
    <h2>Wavefunctions</h2>
    <MarkdownWithLatex text={`
In classical mechanics, we describe a system by giving values for all its position variables.

We describe a ball in one dimension with one number. We describe two balls in one dimension with two numbers. So type is (R, R).

In quantum mechanics, we need to describe things not just in terms of a configuration, but in terms of weights for every possible configuration. It's a lot like as if we had a probability distribution over configurations.

Quiz: what's the type of a probability distribution over single variable? Answer: Real to Real.

What about a probability distribution over two variables? (Real, Real) -> Real.

Our physics is in terms of probabilities: the probability that an observer will observe a particle to be in a particular place. This isn't a subjective thing, it's an objective fact about the universe.

(What does it mean for physics to be in terms of probabilities? Couldn't I describe all of classical mechanics in this way, too? The difference is that in classical mechanics, the different configurations don't affect each other. In quantum mechanics, the physics involves other configurations. Put another way, QM is not linear.)

It turns out that QM has wavefunctions actually in terms of complex numbers, not real numbers. So it's Real to Complex. What about if it's two things? Then it's (Real, Real) -> Complex. MORE HERE

[Go understand complex numbers here maybe](https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/)

We turn it into a probability distribution by taking the squared modulus. Why? Well we have to use *something*, and the squared modulus makes the phase non physically real.

-----

One really neat thing about quantum mechanics is that it's first-order. We use the coileyness to describe the directions things go in. This is really neat--it means that we can describe both the approximate position and approximate momentum of a particle with just one function from its position to C.

-----

Where do we go from here?

- Learn how to calculate the energy of a wavefunction, because we're interested in statics a lot of the time
- See how time evolution works
- Learn about the restrictions on wavefunctions that come from identical particles, and see how those cause our universe to have the neat structure it has.

    `}/>


  </Layout>
)

export default Index1;

