import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index3 = () => (
  <Layout>
    <h2>Ground states</h2>
    <MarkdownWithLatex text={`
Last time, we talked about how we calculate the total energy of a wavefunction. This time, we're going to look at what the ground states look like.

As you'll recall, there's a

LOTS OF EXAMPLES

perturbation theory?
variational method?

BTW, we can neglect the complex state of wavefunctions here. This is because the complex phase of a wavefunction doesn't affect the potential energy, and it strictly increases kinetic energy.
    `}/>


  </Layout>
)

export default Index3
