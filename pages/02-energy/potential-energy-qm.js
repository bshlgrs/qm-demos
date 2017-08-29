import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'


const PotentialEnergyInQm = () => {
  return  <MarkdownWithLatex text={`

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

}

export default PotentialEnergyInQm;
