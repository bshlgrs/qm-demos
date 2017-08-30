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

    `}/>


  </Layout>
)

export default MatterPage
