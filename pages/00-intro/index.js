import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import Row from '../../components/Row'

const Index0 = () => (
  <Layout>
    <h2>Quantum mechanics</h2>
    <MarkdownWithLatex text={`

My goal with this series is to give you a rough, qualitative understanding of the laws of physics which lead to the chemical and material properties of the world around us. As we'll see, the relevant parts of physics mostly come from a narrow slice of quantum mechanics--in particular, the quantum mechanics of electrons at low energies.

None of the material that I’m presenting is original, obviously. And I don’t think that my explanations of individual topics are particularly groundbreaking (though I am proud of some of the visualizations and interactive exercises I’ve built). I’m writing this because I want people to be able to quickly get an answer to the question:

How does the bewildering variety of material properties that we see around us arise from our laws of physics?

By material properties, I basically mean all of the ways that different types of matter around us vary. We have atoms, which form molecules. Some of them are solid at room temperature; others are liquid or gaseous. Some of them are sticky. Some are ductile, and some are malleable. Some are conductors and some are insulators. And some of them are even self-replicating. These are the properties researched in chemistry (which mostly studies the interactions of atoms in molecules) and materials science (which mostly studies how molecules interact with each other). I hope to convince you that types of variation are a really surprising result to come out of a set of physical laws.

For a simple example, consider sulfur and chlorine, which have 16 and 17 protons respectively. These elements are extremely different. Chlorine is a green gas, and sulfur is a yellow solid. The universe is obviously running some computation which takes 16 and gives you back sulfur and takes 17 and gives chlorine. This is not the kind of behavior that simple mathematical functions normally exhibit.

`}/>

<Row>
<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sulfur-sample.jpg/320px-Sulfur-sample.jpg"/>
Sulfur
</div>
<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Chlorine_ampoule.jpg"/>
<MarkdownWithLatex text={`
["Chlorine ampoule"](https://commons.wikimedia.org/wiki/File:Chlorine_ampoule.jpg) (c) W. Oelen, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.en).`}/>
</div>
</Row>
<MarkdownWithLatex text={`

I’m not trying to make some contentless statement like "wow physics is so interesting guys". I am claiming that specifically the interactions between atoms are really interesting and complex and have much more intricate implications than most things that arise from simple laws of physics. The chemical elements vary in really weird ways that are different from how most other things vary. For comparison, note that isotopes of an element have different numbers of neutrons, and this basically makes no difference at all to what they’re like to interact with--their densities vary by a few percent, but they're still fundamentally the same kind of thing.

I think that if you were an alien who had just opened a portal to our universe and you were looking around through a telescope, it would be quite surprising to you that our universe supports life.

At a large scale, matter is uniform and featureless. Gravity doesn’t care if you’re a star or an equivalently heavy giant diamond, it treats you the same way either way. The interactions arising from gravity are complicated, but in a chaotic way that fundamentally isn’t the kind of thing that could lead to orderly processes like the chemical ones that support life.


`}/>

<Row>
<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Three-body_Problem_Animation.gif" />
</div>
<div>
<MarkdownWithLatex text={`
["Three-body Problem Animation"](https://commons.wikimedia.org/wiki/File:Three-body_Problem_Animation.gif) (c) Dnttllthmmnm, CC BY-SA 4.0. This is the kind of chaotic complexity you get from gravity. You don't get the stable configurations meaningfully interacting with each other which are necessary for interesting structures or life.`}/>
</div>
</Row>

<MarkdownWithLatex text={`


For another example of the kind of thing that results from our physics, we could look at the behavior of stars. Inside a star, you have jets of plasma shooting around being turbulent, powered by occasional nuclear reactions which are complicated but short-lived. Stars are too hot for interesting chemistry to happen. (Inside a star, sulfur and chlorine *are* pretty much the same thing.) Stars are just a giant turbulent mess.


`}/>

<Row>
<div>
<iframe src="https://giphy.com/embed/d8mVqbHquuL5u" width="480" height="428" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
</div>
<div>
<MarkdownWithLatex text={`
Like gravity, turbulence is complicated in a chaotic way, not an orderly way.`}/>
</div>
</Row>

<MarkdownWithLatex text={`

---

But on Earth, physics does something very different. Instead of different atoms having behavior which is qualitatively quite uniform, they form radically different substances--we have rocks and oceans and slime and coal and diamond and ozone.

This is an extremely surprising and interesting result. We live in a universe whose physics mostly leads to noise and turbulence, but at one very narrow temperature range, we get matter that behaves like the world around us. I think this is fascinating, and I think it's very interesting to learn the physics that explains where this complexity comes from.


FRAGMENT: I am quite confident that plasma does not support life. Nor does classical gravity.

FRAGMENT: As a computer scientist, I am super interested in the ways that complex behavior arises from simple rules--finding out that [weird things are Turing complete](http://beza1e1.tuxen.de/articles/accidentally_turing_complete.html) is one of the top computer scientist passtimes. So when faced with the giant body of human knowledge about physics, I think it's quite natural to try to look for the part which explains how we can do computation.

FRAGMENT: explain van der Waals forces.

Even if we're just learning an approximation, which we are, we're still learning about the kinds of considerations which lead to the complexity we see, which I think is really nice.


### Where we're going

The physical properties of matter mostly come from the quantum mechanical behavior of electrons. Matter is made of both nuclei and electrons, of course. Both nuclei and electrons are charged particles. But nuclei are much heavier--protons and neutrons are both about 1800 times heavier than electrons. For reasons we'll explore later, this means that at the scale where chemistry happens, we can treat nuclei as classical particles. So for our purposes, we mostly need to worry about the quantum mechanical behavior of electrons.

(For our purposes here, we don't need to care about the internal structure of nuclei--we'll model them as fundamental particles whose only properties are their mass and their charge.)

#### The Born-Oppenheimer approximation

The quantum mechanical behavior of electrons is quite complicated and hard to analyze. So we're going to take an approach called the [Born-Oppenheimer approximation](https://en.wikipedia.org/wiki/Born%E2%80%93Oppenheimer_approximation).

The key insight behind this approximation is that electrons move so much more quickly than protons that from their perspective, the protons are basically totally stationary, and from the perspective of the protons, the electrons have so little momentum that they almost instantly adapt to the changes in the electric field that result from the protons moving around.

This suggests that we reason about molecules

Here's what we do. Suppose there's some system we want to analyze--for example, maybe we want to figure out the bond length of the hydrogen molecule. We're going to do this in two steps.



The quantum mechanical behavior of electrons is quite complicated and hard to analyze. So instead of trying to model all of the quantum mechanics of electrons in the presence of nuclei, we're going to narrow our scope significantly through a series of approximations and judicious choices of what questions we want to be able to answer. This approach is known as the Born-Oppenheimer approximation, and it has a few steps.

As I said above, the first approximation we make is modelling nuclei as classical particles which can be modelled purely in terms of their positions, masses, and charges.

Secondly, we're only consider the case where the nuclei are stationary. This approximation is valid because nuclei are so much heavier than electrons that from the perspective of the electrons they might as well be standing still. (This is known as the [Born-Oppenheimer approximation](https://en.wikipedia.org/wiki/Born%E2%80%93Oppenheimer_approximation).)

Thirdly, we're not going to spend too much time figuring out how electrons behave in general, even just in the presence of a stationary collection of nuclei. We're only going to try to figure out the lowest energy configuration of the electrons.



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
