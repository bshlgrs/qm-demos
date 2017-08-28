import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index2 = () => (
  <Layout>
    <h2>Calculating the energy of a wavefunction</h2>
    <MarkdownWithLatex text={`

We're interested in figuring out a formula that takes a wavefunction and says how much energy it has. This is important for two reasons. Firstly, our initial quest into quantum mechanics has the goal of reasoning about ground states of systems, and we can't figure out what the low energy wavefunctions are if we don't know how to figure out how much energy different wavefunctions have. Secondly, it turns out if you know how to calculate how much energy a wavefunction has, you're pretty close to knowing how to calculate how the wavefunction evolves over time.

    `}/>
    <Link href="./potential-energy"><a>Continue</a></Link>

  </Layout>
)

export default Index2
