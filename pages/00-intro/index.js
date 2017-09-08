import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'


const Index0 = () => (
  <Layout>
    <h2>Quantum mechanics</h2>
    <MarkdownWithLatex text={`

- van der Waals forces demo?

### Where we're going

In this series, I want to teach you enough about quantum mechanics that you can write programs to calculate chemical properties from scratch.

The physical properties of matter mostly come from the quantum mechanical behavior of electrons. Matter is made of both nuclei and electrons. Both of those are charged particles. But nuclei are much heavier.

For reasons we'll explore later, this means that at the scale where chemistry happens, we can treat nuclei as classical particles, using the following process:

- We assume that the nuclei are fixed in place, and then we analyze the behavior of the electrons in this stationary potential. In particular, we're often interested in the lowest energy configuration of the electrons for a given configuration of nuclei.
- Once we've done that, we can analyze the motion of nuclei by using classical physics and treating the electron energy as part of the potential.

DEMO HERE OF USING A POTENTIAL ENERGY FUNCTION FOR CLASSICAL MECHANICS

This is just a more precise version of how we analyze springs--the springs have Hooke's law because of the ground states of the electrons. We're being principled here, is the difference. TODO

So we're making a series of simplifying assumptions for the QM calculations we're going to do:

- Nuclei are fundamental.
- Nuclei are classical.
- Nuclei are still
- We only care about the lowest energy possible states of the electrons.
- Often, we don't even care about the lowest energy state, we just want to know the lowest energy.

This suggests a path forward through quantum mechanics. Here's what we're going to learn:

Firstly: **what wavefunctions are.** I've been talking a lot about the "states" of electrons, but I've been evasive about what exactly these states are. So step one is to figure out what the fundamental things in QM are. It turns out they're called wavefunctions.

Secondly: **how to calculate the energy of a wavefunction.** Given a potential (eg the potential induced by a static configuration of a nuclei) we need to know how to calculate how much energy it has.

Thirdly: **how to reason about the low-energy wavefunctions for a potential.** Once we know how to evaluate the energy of a wavefunction, we need to learn how to find low-energy wavefunctions. This is impossible to do exactly for any potential more complicated than a single nucleus and single electron, so we'll cover ways to approximate it.

At that point, we'll know everything we need to know to analyze the hydrogen atom. We'll take a short break from theory to go into practice. We'll write a program to analyze the ionization energy of hydrogen--that is, the amount of energy released when a proton and an electron join to form a hydrogen atom.

Then we'll go back into theory, learning **how to reason about multiple electrons at once.** Things get a lot more complicated when we have more than two electrons, due to the Pauli exclusion principle, which as we'll see can be described more precisely as a property of wavefuntions, leading to a type of constraint on systems that doesn't really have a classical analogue.

And then we'll know all the fundamental physics required to derive chemistry and materials science from scratch. We'll practice this by analyzing some molecules: first the hydrogen molecule, and then methane.

We'll conclude by tying up a few loose ends. I'll point you in the direction of many of the big concepts in QM that I'm eliding here. In particular, we'll discuss how wavefunctions evolve over time, the concept of a stationary state and why it's important, and a few other things. ???.

----

This series teaches a pretty eclectic selection of material. The concepts and order that I teach is pretty similar to some of the contents of Thijssen's "Computational Physics" chapters 3 and 4.

Other QM sources I like:

- [Griffiths](https://www.abebooks.com/9780131118928/Introduction-Quantum-Mechanics-2nd-Edition-0131118927/plp). This is the classic QM text.
- [Quantum Computing Since Democritus](https://www.scottaaronson.com/democritus/). This focuses mostly on how wavefunctions work and doesn't talk about the physics of electrons.
- Less Wrong QM Sequence. This one is mostly focused on what the wavefunction is.

    `}/>

  </Layout>
)

export default Index0;
