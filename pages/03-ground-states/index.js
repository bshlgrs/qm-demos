import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import Row from '../../components/Row'
import TotalEnergySliderDemo from '../../content/TotalEnergySliderDemo'

const Index3 = () => (
  <Layout naked>
    <h2>Ground states</h2>

<MarkdownWithLatex text={`
In this post, we're going to look at how ground states are caused by the potential they're in.

We're going to do a lot of playing with little demos that let you change a wavefunction or a potential and see how the energy changes.

Let's start out with the following one. We have a particle in a rounded potential well. You can
    `}/>


    <TotalEnergySliderDemo />
    <MarkdownWithLatex text={`


Points to make here:

- In the well, there's a tradeoff between KE and PE.
- If the well gets deeper, the total energy gets lower, PE gets lower, KE gets higher.
- If the well gets wider, the total energy gets lower, PE gets lower, KE gets lower.
- If there are two wells, the total energy gets lower as they get closer, the PE gets lower, the KE gets lower.
    `}/>


    <MarkdownWithLatex text={`
### The variational method

I want to explicitly explain something that we've been doing implicitly.

Things have strictly higher energy than the ground state.



### Notes

- You might notice that the ground state always has the same amount of energy. This is important. This is because the ground state is a solution to the Schrodinger equation.
- BTW, we can neglect the complex state of wavefunctions here. This is because the complex phase of a wavefunction doesn't affect the potential energy, and it strictly increases kinetic energy.

    `}/>

  </Layout>
)

export default Index3
