# qm demos

demos

## Contents

### Intro

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



### Wavefunctions

In classical mechanics, we have configurations.

We could have a probability distribution over these configurations. But the probability distribution itself isn't real. (Physics is linear in the probability distribution.)

QM is not like this. In QM, the probability distribution has a real effect. It's more like water waves. In water waves, the amount of water is conserved, and you can kind of imagine it as a probability distribution over where you'll find a randomly chosen particle. But if you try to think of it too literally that way, you'll get really confused.

Water waves by water flowing downhill. explain how that works

Quantum mechanics, similarly, is a law of physics which involves interactions between nearby parts of the probability distribution.

In QM, the wavefunction is complex and uses L2 norm.

Exercise: match wavefunction to probability distribution

We can also talk about the expectation values of things. Exercise: which wavefunction has the higher expectation value of left-ness?

--

We can have more dimensions as well. For example, we could have an x, y, and z component, so our wavefunction is a function from (x, y, z) to a complex number. The rule is the same: the probability adds up to one.



If we have multiple particles, we generalize the above in the same way that we'd generalize probability distributions in the classical configuration probability distribution case.



What do we do with this distribution? The most obvious thing is to ask how it changes over time. In classical mechanics, we mostly just want to know how things change over time. We express everything in terms of how it changes over time. For example, when you build a bridge, ideally you want all of the bricks to not be moving. You do this by effectively using the laws of how things move to figure out if the bridge bricks are going to start moving, and if they are moving, you should probably try a different way of building your bridge.

The equation that describes how this works is the Schroedinger equation. I'll explain it eventually in this series. But for most of the rest of this blog series, we're not actually going to be talking about how things move. We're almost entirely interested in the energy of electrons. TODO: MORE HERE.

ALSO ADD: QM is first order

NOTES

- link to Scott Aaronson on [why it's L2](https://www.scottaaronson.com/democritus/lec9.html)
- An interesting feature of this physics is that it's first-order.
  - TODO: find other explanations of this



### Determining the energy of a wavefunction

We're interested in figuring out a formula that takes a wavefunction and says how much energy it has. This is important for two reasons. Firstly, our initial quest into quantum mechanics has the goal of reasoning about ground states of systems, and we can't figure out what the low energy wavefunctions are if we don't know how to figure out how much energy different wavefunctions have. Secondly, it turns out if you know how to calculate how much energy a wavefunction has, you're pretty close to knowing how to calculate how the wavefunction evolves over time. I'm not going to tell you how the second bit works yet, but I promise it's neat.

#### Potential energy

Let's talk about potential energy and revise how it works in the classical sense before we talk about it in the context of quantum mechanics. If you're familiar with classical mechanics, feel free to immediately attempt the quiz questions: if you have trouble doing them, maybe read the text again.

Potential energy is the capacity to do work. INSERT MORE HERE. One useful thing to think about it is that in classical situations, objects accellerate in the direction of lower potential energy.

Let's talk about some classical examples:

- gravity
- springs
- repelling magnets

for each of those, identify which situation has more energy.

We can draw graphs of this. In the case of a conservative force, the force is the derivative of the potential.

At the scales where humans experience it, gravity is basically a constant force. (It's a little bit stronger closer to the ground, but only a tiny bit.) So the potential energy from gravity is basically a linear function of height.

Exercise: multiple choice for gravitational potential energy function as a function of how many stories up a building you are.



Springs are a different story. Springs work according to Hooke's law, which says that they pull twice as hard if you pull them twice as far. Or, in math, F = -kx. What does this look like in terms of a graph?

Exercise: multiple choice, where the options are: x, abs(x), x**2, -x**2

IDEA: give them a button which lets them flip the curve.
IDEA: button which says "hint" which just tells you a thing that is implied by your choice.

Answer: x**2.

This is the simplest example of a system which oscillates. ADD MORE HERE?

OPTIONAL ADDITION: When you have a system in a stable state, the potential is locally well approximated by a spring.





When you're talking about how electrons work, the most important force is the electric force between two particles. How does this one work? The relevant factors seem to be the charge of the particles and how far apart they are. Let's just talk about what charges are like right now. Like charges attract, and unlike charges repel. What does that tell us?

[ ] q1 * q2
[ ] q1 - q2
[ ] max(q1, q2)
[ ] q1 / q2
[ ] q1 + q2

Okay, so we multiply them.

So electric force involves multiplying the charge of the two particles. How does distance play into it?

I think the answer to this is actually really neat, so I'm going to go on a tangent into it.

You might have seen diagrams of electric fields before, with arrows going around or something.

DIAGRAM <- ideally 3d

At each point, the arrow shows you which way a small positive charge would be accellerated. And there's this idea that objects are accellerated based on the density of the arrows. Eg in the following diagram, you can calculate the attraction based on how many arrows are going near an object. (One way that this metaphor is wrong is that the size of the object doesn't affect how many arrows it "catches".)

So how does the density of the arrows change as a function of distance? Depends on how many dimensions your universe has. In our three dimensional universe, arrows shoot out like this:

One way of thinking about how the arrow intensity varies with distance is that there must be the same number of arrows for any 3D surface that you draw around the center. (This is Gauss's Law.) In particular, we could draw two spheres, one with radius 1, and one with radius 2. The surface area of the second sphere varies as the square of the radius. So the force varies as $$1/n^2$$. (This is known as Coulomb's Law.)

Gravity and the electric field both work this way.

I think this is really neat and intuitive. When I was a kid, I made a shitty game in GameMaker where two objects shoot out attractor-particles in random directions, and when objects hit attractor-particles they get accellerated in the direction the attractor-particle was coming from. DEMO??? This led to a 1/r force law (because it was in 2D). I like how our universe actually works this way. (Real physicists call these attractor-particles or repeller-particles "mediators".)

(Aside: The strong and weak nuclear forces have a slightly different force law, which can be modelled as saying that your particles are still shooting mediators at each other, but that the mediators are also unstable and they disappear randomly sometimes. Their disappearances happen at a constant rate over time. This kind of process leads to an exponential decay. And we still have the inverse square law. So we get an equation like $$\frac{e^{\alpha r}}{r^2}$$. I am now totally out of my depth here, but apparently this alpha parameter is some constant multipled by the mass of the mediator. Electric forces are mediated by photons. Photons have zero mass and so alpha is zero, so there's no exponential decay observed. The weak and strong nuclear forces are mediated by particles with masses (TODO: DETAILS), which is why they have this decay term.)

(This was mostly an aside, but I think it's actually pretty interesting to talk about these forces, because they're what all of physics is made of.)

All the above was talking about the force law. As a potential, what is it? 1/r.

QUESTION: What about in a one-dimensional world?
ANSWER: Force is constant. The potential is an absolute value of distance.

In this series, we've been talking a lot about one dimensional worlds. That's mostly just because it's much easier to have graphs of 1D quantities. I'm also going to sometimes talk about the potential of the electric force. I'm going to use the 1/r force law as if we were in 3D, even though we're actually in 1D.

----

Okay, so none of that stuff was about quantum mechanics; it was all about classical ideas. How do we translate it to quantum mechanics?

In QM, our systems are wavefunctions rather than just single configurations. How should we say what the potential energy is?

Can you please type your guess about how we might do this? []

We take the expectation.

TODO: COME BACK HERE AND MAKE IT CLEARER THAT PE IS AN OPERATOR

So we know how to calculate the potential energy of a whole wavefunction, as well as the potential energy at any point.

#### Squiggle energy

Keep your eyes on the prize, dear reader. We want to figure out what ground states are like. Part of the story is that wavefunctions want to minimize their potential energy. Let's try to figure out what the other part of the story is.

Here's a spring. There's a wavefunction of an electron near it. Play around with it until you figure out where the potential energy is minimized.

As you can see, to minimize potential energy, we want to make our wavefunction as tightly bundled as possible. That does not lead to a universe that we'd like. In particular, the ground state of the hydrogen atom would be an electron in exactly the same place as a proton, which would involve having infinitely much energy.

Quantum mechanics has another kind of energy associated with a wavefunction, which I'm going to call the squiggle energy for the moment. (It has a real name, but that one's kind of confusing so let's ignore it for now.)

The squiggle energy is defined by the amount of downwards curvature in the wavefunction at a given point. Let's look at three examples. This wavefunction curves down towards the zero point:

EXAMPLE

so it has positive squiggliness.

This one is a line:

EXAMPLE

so its squiggliness is zero.

And this one curves away from the zero point:

EXAMPLE

so its squiggliness is negative.

We measure the squiggliness by the second derivative of the wavefunction.

BTW, the real name for this is kinetic energy. I want you to remember that kinetic energy isn't directly calculated based on the speed at which the wavefuntion is moving. It's calculated based on the curvature. It turns out that when you learn how particles evolve over time, you'll notice that kinetic energy corresponds nicely to the classical notion of $$\frac 12 m v^2$$. But for now, I want you to just think of it as the factor which means that ground states are spread out.



exercise: select the places on a wavefunction where it's got positive or negative derivative

exercise: select the places where it's got positive or negative 2nd derivative

exercise: select places where it's got positive or negative KE.

exercise: figure out which wavefunctions have high or low total KE.

Just BTW, kinetic energy involves dividing by the mass of the particle. Exercise: Suppose you have a proton with the same spread as an electron. (Remember that protons weigh much more.) Which has more kinetic energy? Answer: The electron, because the proton is much heavier. This is why it's okay to treat protons as classical point particles compared to protons.

#### Total energy

Kinetic + potential, right.



### Ground states of the Hamiltonian

Last time, we talked about how we calculate the total energy of a wavefunction. This time, we're going to look at what the ground states look like.

As you'll recall, there's a

LOTS OF EXAMPLES

perturbation theory?
variational method?


### Stationary states

Here's an important concept: wavefunctions which have the same energy everywhere. These have the property that as time goes on, their probability distribution stays the same. Let's call those "stationary solutions".

Ground states are always this. WHY

But there are other solutions.

One case we'll talk about is the case of wavefunctions in constant potential.

Exercise: draw a wavefunction with energy 1. You have to draw the curve, and we show you its energy everywhere. If the energy goes too far away from 1, you haven't passed the exercise.

Takeaway: wavefunctions with positive KE oscillate on areas of positive kinetic energy. This is like a standing wave.

Exercise: Same thing, for energy 2.

Takeaway: higher energy wavefunctions oscillate faster.

Exercise: Wavefunction with energy -1.


### Identical particles

### Where to go from here

- Things you can analyse only with what we've talked about so far:
  - chemistry
  - states of matter
  - solids

## Notes

Things that I'd like to explain at some point:

- chemistry
  - in particular, the Hydrogen atom
  - "Computational chemistry is a sequence of approximations to the stuff we've talked about here"
- van der Waals forces
- Relativity
  - We can get *some* of the way by adding another term to the Hamiltonian
- linear and nonlinear variational methods
- sizes of the rows of the periodic table

Things to remember to name

- The Born-Oppenheimer approximation

Other points I haven't made:

- Classical mechanics was missing non-1/r force laws.
- Classical mechanics can't explain stuff.
- The different worlds of protons and electrons. The protons in the upper world are moving according to a conservative force. The electrons are just doing their thing
  - How does this actually play out? what's the breakdown between proton KE, electron wavefunction KE and PE?
- QM is first order.
