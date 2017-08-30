import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index3 = () => (
  <Layout>
    <h2>Hydrogen</h2>
    <MarkdownWithLatex text={`
Let's talk about hydrogen

First we need to talk about how to generalize to 3D:

- the second derivative becomes the del operator
- some integrals are over more space

But the fundamental ideas are the same.

CRAZY IDEA: let people guess radial functions, tell them the energy.




One difference between 1D and 3D is that you can have finite energy in the proton potential.


walk through the other stationary states.
    `}/>


  </Layout>
)

export default Index3
