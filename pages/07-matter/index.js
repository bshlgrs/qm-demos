import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const MatterPage = () => (
  <Layout>
    <h2>The properties of matter</h2>
    <MarkdownWithLatex text={`
Now we're able to explain the properties of matter.

Eg:

- Bond lengths
- Bond angles
- Energy of reactions

Materials science:

- Solids, liquids, gases
- Different crystal structures
- Insulators vs conductors
  - thermal vs electric conductivity
- Opacity, transparency

Big things we've not touched:

- Time evolution of the wavefunction


#### Guide to a typical quantum mechanics textbook:

The big unusual thing I did here is put stationary states in as basically an afterthought. In QM courses, you spend the majority of your effort learning about how to find stationary states of systems. This makes a lot of sense for a lot of reasons. I didn't cover it because it involves a bunch of hard math, and you don't actually need to understand it perfectly to understand chemistry.

Griffiths:

- Chapter 1: Introduction. Single-particle wavefunctions.



    `}/>


  </Layout>
)

export default MatterPage
