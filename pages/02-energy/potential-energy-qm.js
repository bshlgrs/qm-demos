import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import Panel from '../../components/Panel'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'


const PotentialEnergyInQm = () => {
  return <div>
    <MarkdownWithLatex text={`

### Potential energy in quantum mechanics

Okay, so none of that stuff was about quantum mechanics; it was all about classical ideas. How do we translate it to quantum mechanics?

In QM, our systems are wavefunctions rather than just single configurations. How should we say what the potential energy is?

Can you please type your guess about how we might do this? []

We take the expectation. This makes sense--it's the average of what you'd get if you turned the particle into a classical particle in one position and saw what its potential energy was.

Let's practice a bunch of times.

Demo: slider to move a wavefunction around, showing its potential energy.

Questions:

- Which of these graphs has the highest potential energy?

TODO: COME BACK HERE AND MAKE IT CLEARER THAT PE IS AN OPERATOR

So we know how to calculate the potential energy of a whole wavefunction, as well as the potential energy at any point.



    `}/>

    <Panel>
      <MarkdownWithLatex text={`

#### Optional aside: Mathematical formalism

TODO: maybe phrase all this in the language of higher order functions?

Potential energy of a single-electron wavefunction can be calculated with the following integral, if our potential energy at a point is given by $$V(x)$$:

$^$ \\int_{-\\infty}^{\\infty} | \\Psi(x) |^2 \\cdot V(x) dx $^$

It turns out that it will be more convenient for us to write it a different way. We normally instead define the total potential energy of a wavefunction like this:

$^$ \\int_{-\\infty}^{\\infty} \\Psi^*(x) \\cdot V(x) \\cdot \\Psi(x) dx $^$

This uses the notation $$a^*$$ to mean "the [complex conjugate](https://en.wikipedia.org/wiki/Complex_conjugate) of $$a$$".

The identity we're using here is that $$a^* \\cdot a = |a|^2$$.

It turns out that it's convenient to think of wavefunctions as vectors, and then potential energy is an operator which takes it to another vector. Then we write things as the inner product. TODO, consider this.

One key takeaway is that it makes sense to talk about the potential energy at a point. Let's abuse notation and write $$V(\\Psi, x)$$ to mean "the potential energy of wavefunction $$\\Psi$$ at $$x$$" and *also* write $$V(x)$$ to mean "the potential energy at position x".

$^$V(\\Psi, x) = V(x) \\cdot \\Psi(x)$^$

And now we can write the potential energy as

$^$ \\int_{-\\infty}^{\\infty} \\Psi^*(x) \\cdot V(\\Psi, x) dx $^$
        `}/>
    </Panel>
    </div>
}

export default PotentialEnergyInQm;
