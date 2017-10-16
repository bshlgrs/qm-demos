import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import Panel from '../../components/Panel'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'

import PotentialEnergySliderDemo from '../../content/PotentialEnergySliderDemo'


const PotentialEnergyInQm = () => {
  return <div>
    <MarkdownWithLatex text={`

### Potential energy in quantum mechanics

Okay, so none of that stuff was about quantum mechanics; it was all about classical ideas. How do we translate it to quantum mechanics?

In QM, our systems are wavefunctions rather than just single configurations. How should we define the potential energy of a wavefunction given a particular potential function?

(You can take a minuteto think about this if you want)

The answer is pretty natural: We take the expectation value of the potential. This makes sense--it's the average of what you'd get if you choose a position with probability determined by the wavefunction and see what the potential energy would be if the particle was there. Another reason this is nice is that if the wavefunction is very narrowly dispersed and the potential is not varying very rapidly over space, we can model the wavefunction as a particle located at a single point and approximate the PE by using the classical PE equation. (Of course, this is the approximation that we're using every time we use classical mechanics to calculate things.)

    `}/>


      <MarkdownWithLatex text={`

Let's look at the following visualization of this. Because I'm a terrible UI designer, for the moment I'm going to explain this UI in text and expect you to go between reading the text and playing with the visualization.

- We're looking at a wavefunction. You can control the position and the spread of the wavefunction with the knobs at the top. I put a light grey line through the center of the wavefunction so you can see where it is on both graphs.
- The wavefunction is in a potential shown by the black line.
- In the lower graph, I display in red the product of the PDF of the wavefunction and the potential energy at that point. In math, the thing I display is $$|\\Psi(x)|^2 \\cdot V(x)$$, where $$|\\Psi(x)|^2$$ is the norm squared of the wavefunction. The black line is the zero point.
- The total area under this curve is the total potential energy of the wavefunction. I display the area under the curve at the bottom.

Fiddle around with it a little, and then scroll on for some specific questions I want you to answer with it.

    `}/>
<PotentialEnergySliderDemo />

      <MarkdownWithLatex text={`

Here are some activities for you to try:

- Center the wavefunction in the middle of the potential well.
    - How does its total potential energy change as you change its spread?
    - If the spread were set to be much tighter than the UI allows, what would the PE be?
    - If the spread were much broader than the UI allows, what would the PE be?
- Put the wavefunction slightly off center.
    - How does the total PE change as a function of spread?
    - Does the PE reach its minimum in the center of the wavefunction?
- In what configuration does the PE have the largest negative value?
- In what configuration does the PE have the smallest negative value?

    `}/>

    <Panel>
      <MarkdownWithLatex text={`




#### Optional aside: Mathematical formalism

TODO: maybe phrase all this in the language of higher order functions?

Potential energy of a single-electron wavefunction can be calculated with the following integral, if our potential energy at a point is given by $$V(x)$$:

$^$ \\int_{-\\infty}^{\\infty} | \\Psi(x) |^2 \\cdot V(x) dx $^$

(where the notation $$|a|$$ means "the norm of $$a$$".)

It turns out that it will be more convenient for us to write it a different way. We normally instead define the total potential energy of a wavefunction like this:

$^$ \\int_{-\\infty}^{\\infty} \\Psi^*(x) \\cdot V(x) \\cdot \\Psi(x) dx $^$

This uses the notation $$a^*$$ to mean "the [complex conjugate](https://en.wikipedia.org/wiki/Complex_conjugate) of $$a$$".

Why are these equivalent? One relevant identity is that $$z^* \\cdot z = |z|^2$$ for complex numbers $$z$$. To see why this is true, remember that complex numbers can be thought of as a combination of a scaling factor and a rotation. The complex conjugate of $$z$$ has the same scaling factor of $$z$$ but the opposite direction of rotation. So the rotations cancel out, and the scales multiply in the usual way. And multiplication of complex numbers is commutative, so in this case we're allowed to put the $$V(x)$$ in the middle.

It turns out that it's convenient to think of wavefunctions as vectors, and then potential energy is an operator which takes it to another vector. Then we write things as the inner product. TODO, consider this.

One key takeaway is that it makes sense to talk about the potential energy at a point. Let's abuse notation and write $$V(\\Psi, x)$$ to mean "the potential energy of wavefunction $$\\Psi$$ at $$x$$" and *also* write $$V(x)$$ to mean "the potential energy at position x".

$^$V(\\Psi, x) = V(x) \\cdot \\Psi(x)$^$

And now we can write the potential energy as

$^$ \\int_{-\\infty}^{\\infty} \\Psi^*(x) \\cdot V(\\Psi, x) dx $^$
        `}/>
    </Panel>


        <MarkdownWithLatex text={`

#### Aside: Points that I want to make better in this section

- Potential energy is always real-valued

    `}/>
    </div>
}

export default PotentialEnergyInQm;
