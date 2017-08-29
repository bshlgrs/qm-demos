
At the scales where humans experience it, gravity is basically a constant force. (It's a little bit stronger closer to the ground, but only a tiny bit.) So the potential energy from gravity is basically a linear function of height.

Exercise: multiple choice for gravitational potential energy function as a function of how many stories up a building you are.




Springs are a different story. Springs work according to Hooke's law, which says that they pull twice as hard if you pull them twice as far. Or, in math, F = -kx. What does this look like in terms of a graph?

Exercise: multiple choice, where the options are: x, abs(x), $$x^2$$, $$-x^2$$

IDEA: give them a button which lets them flip the curve.
IDEA: button which says "hint" which just tells you a thing that is implied by your choice.

Answer: x**2.

This is the simplest example of a system which oscillates. ADD MORE HERE?

OPTIONAL ADDITION: When you have a system in a stable state, the potential is locally well approximated by a spring.


--


When you're talking about how electrons work, the most important force is the electric force between two particles. How does this one work? The relevant factors seem to be the charge of the particles and how far apart they are. Let's just talk about what charges are like right now. Like charges attract, and unlike charges repel. What does that tell us?

- [ ] q1 * q2
- [ ] q1 - q2
- [ ] max(q1, q2)
- [ ] q1 / q2
- [ ] q1 + q2

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

(Aside: The strong and weak nuclear forces have a slightly different force law, which can be modelled as saying that your particles are still shooting mediators at each other, but that the mediators are also unstable and they disappear randomly sometimes. Their disappearances happen at a constant rate over time. This kind of process leads to an exponential decay. And we still have the inverse square law. So we get an equation like $$\\frac{e^{\\alpha r}}{r^2}$$. I am now totally out of my depth here, but apparently this alpha parameter is some constant multipled by the mass of the mediator. Electric forces are mediated by photons. Photons have zero mass and so alpha is zero, so there's no exponential decay observed. The weak and strong nuclear forces are mediated by particles with masses (TODO: DETAILS), which is why they have this decay term.)

(This was mostly an aside, but I think it's actually pretty interesting to talk about these forces, because they're what all of physics is made of.)

All the above was talking about the force law. As a potential, what is it? 1/r.

QUESTION: What about in a one-dimensional world?
ANSWER: Force is constant. The potential is an absolute value of distance.

In this series, we've been talking a lot about one dimensional worlds. That's mostly just because it's much easier to have graphs of 1D quantities. I'm also going to sometimes talk about the potential of the electric force. I'm going to use the 1/r force law as if we were in 3D, even though we're actually in 1D.
