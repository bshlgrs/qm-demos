import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const IdenticalParticlesPage = () => (
  <Layout>
    <h2>Identical particles</h2>
    <MarkdownWithLatex text={`
Your wavefunction is like a probability distribution, right. LINK TO LESSON 1

If it's a joint distribution, it's from multiple positions to a complex number.

Interestingly, electrons are indistinguishable.






WHERE DO I EXPLAIN SPIN?

### Visualizing wavefunction anti-symmetry

The wavefunction has to be anti-symmetric

- Question: does that mean it can't have the same value at two places?

- picture of anti-symmetric heatmap
- "conditional wavefunction" graph
- Eg calculate the kinetic energy of two electrons with gaussian distributions and varied means and variances
- this means that you need high kinetic energy to have things be close to each other

Do the same exercise with bosons

----

Common misconceptions:

- The wavefunctions can't both be nonzero at a point.
- All joint wavefunctions can be expressed as a product of individual wavefunctions <-- Actually, I should figure this out

------

Other notes:


A really important feature of quantum mechanics is that the physics only dependant on configurations that are very similar. This leads to decoherence, and it's why quantum computing is so hard.

    `}/>


  </Layout>
)

export default IdenticalParticlesPage
