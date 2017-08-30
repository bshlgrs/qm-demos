import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index0 = () => (
  <Layout>
    <h2>Quantum mechanics</h2>
    <MarkdownWithLatex text={`
This is an explanation of the quantum mechanics of electrons.

Who cares? Well, electrons are the particles which cause the structure of matter. In a few ways.

- The structure of atoms comes from the interaction of electrons
- The structure of molecules comes from the interaction of electrons in atoms
- Solids and liquids arise from intermolecular forces which come about as a result of electron interaction.

My goal here is to explain enough quantum mechanics that you understand what's going on in all the above.

The main theme of the above is quantum statics of electrons.

The most important part of QM is the behavior of electrons. In particular, we can basically talk just about electrons in static potentials, because they're light. And even better, we can get a long way by just talking about the minimum energy configuration of electrons.

The way you analyze something like a molecule is you say "okay, let's suppose that there's a proton here and here and here" and then you get the min electron energy.

So the summary is:

- what are wavefunctions
- how do we calculate the energy of a wavefunction
- How do the ground states of electrons get determined by their surroundings
- How does this work when there are multiple particles.

Inaccuracies:

- A variety of places throughout, I've ignored details of complex numbers, eg complex conjugation.
    `}/>

  </Layout>
)

export default Index0;
