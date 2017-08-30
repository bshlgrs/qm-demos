import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index3 = () => (
  <Layout>
    <h2>Stationary states</h2>
    <MarkdownWithLatex text={`
Here's an important concept: wavefunctions which have the same energy everywhere. These have the property that as time goes on, their probability distribution stays the same. Let's call those "stationary solutions".

Ground states are always this. WHY

But there are other solutions.

One case we'll talk about is the case of wavefunctions in constant potential.

Exercise: draw a wavefunction with energy 1. You have to draw the curve, and we show you its energy everywhere. If the energy goes too far away from 1, you haven't passed the exercise.

Takeaway: wavefunctions with positive KE oscillate on areas of positive kinetic energy. This is like a standing wave.

Exercise: Same thing, for energy 2.

Takeaway: higher energy wavefunctions oscillate faster.

Exercise: Wavefunction with energy -1.


------

Emission spectra

Colors
    `}/>


  </Layout>
)

export default Index3
