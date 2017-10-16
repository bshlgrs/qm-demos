import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'


const PotentialEnergyGraphsSection = () => {
  function graph(fn) {
    return <SimpleGraph
      xrange={[-1, 1]}
      yrange={[-1, 1]}
      height={200}
      width={200}
      detail={20}
      functions={[fn]}
    />
  }

  return <div>
    <h3>Potential energy graphs</h3>

    <p>We want to be able to graph how potential energy (PE) changes as a function of the positions of the particles in our system. For example, suppose we have a slanted road with a car on it. This is a one dimensional system. Obviously, the PE is higher when the car is on the right than when the car is on the left. But what's the shape of the graph? All of the following graphs are taller on the right than the left; we need to know which is correct.</p>

    <div className="row">
      <div className='col-xs-6 col-sm-3'>{graph({color: 'black', fn: (x) => (x)})}</div>
      <div className='col-xs-6 col-sm-3'>{graph({color: 'black', fn: (x) => ((x + 1)**2 * 0.5 - 0.9)})}</div>
      <div className='col-xs-6 col-sm-3'>{graph({color: 'black', fn: (x) => ((x + 1.05)**0.5 * 1.4 - 1.1)})}</div>
      <div className='col-xs-6 col-sm-3'>{graph({color: 'black', fn: (x) => (0.95 * Math.sin(x * 1.5))})}</div>
    </div>

    <MarkdownWithLatex text={`

It turns out that the first graph, the linear one, is closest to correct. At the scales where humans experience it, gravity is basically a constant force. (It's a little bit stronger closer to the ground, but only a tiny bit.)

Why does a constant force result in a linear potential? Well, the rate of change of PE at a particular point tells you the force at that point. Force is the way we measure the amount of energy that is expended per unit distance by pushing something in a particular direction. If the PE is increasing rapidly as you move something a particular direction, that's exactly the same thing as saying that there's a strong force resisting your pushes.

To put this more mathematically: The derivative of PE with respect to position is the force required to move it along in that direction. And the inverse of that statement is that the PE difference between positions $$x_1$$ and $$x_2$$ is the integral of the force along the path from $$x_1$$ to $$x_2$$.

For this reason, any force which has constant strength $$a$$ results in the potential $$V(x) = ax$$.

It's useful to note that the PE of a configuration is defined only relative to the PE of other configurations. Like, the brick has PE compared to being lower. Dynamite has high chemical PE compared to the equivalent amount of [oxygen, nitrogen, water, and CO<sub>2</sub>](http://explosionshowtheywork.blogspot.com/p/chemical-explosions-how-they-work.html). And four protons have more potential energy than the nucleus of helium that they can be fused into.

(You can still use PE as an absolute quantity in some ways. For example, the energy required to melt a bunch of ice is 334 joules per gram. So the energy to melt two kilograms of ice is about seven hundred kilojoules. That multiplication is valid because we went from "the amount of PE difference between one gram of water and one gram of ice" to "the amount of PE difference between 2kg water and 2kg ice", both of which are still just comparisons between the energies of configurations.)

For a system to be stable, it has to be in a state which has low PE compared to the states that are close to it in configuration space, otherwise it will fall into one of the lower PE states.

`}/>


    <h4>Springs and simple harmonic motion</h4>


    <MarkdownWithLatex text={`
Springs are more complicated--they don't always just pull in the same direction with the same force. Springs work according to Hooke's law, which says that they pull twice as hard if you pull them twice as far. Or, in math, F = -kx.

When you pull a spring past its equilibrium point, it tries to pull back. And when you compress it, it pushes.

`} />


    <MultipleChoiceQuestion
      question="What is the potential energy of a spring like at equilibrium, when stretched, and when pushed?"
      answers={[
        "Energy increases constantly with the length you've pulled the spring to--it's lower when the spring is compressed and higher as you pull the spring past equilibrium",
        <span>Energy <emph>decreases</emph> constantly with the length you've pulled the spring to--it's lower when the spring is compressed and higher as you pull the spring past equilibrium</span>,
        "Energy is a minimum at equilibrium and higher on both sides",
        "Energy is a maximum at equilibrium and lower on both sides",
      ]}
      correctAnswerIdx={2}
      explanation="TODO"
      />

    <MultipleChoiceQuestion
      question="What does spring potential energy look like in terms of a graph?"
      answers={[
        graph({color: 'black', fn: (x) => (x**2 - 0.5)}),
        graph({color: 'black', fn: (x) => Math.abs(x) - 0.5}),
        graph({color: 'black', fn: (x) => Math.abs(x)**0.5 - 0.5})
      ]}
      correctAnswerIdx={0}
      correctText={<Link href='./02'>
          <button className='btn btn-primary'>Next</button>
        </Link>}
      />

    <MarkdownWithLatex text={`
This potential is given by
      the equation $$k x^2$$, where $$k$$ is the spring constant, which tells you how much a particular spring resists being compressed or stretched.


This kind of system comes up a lot in physics--it's called a [simple harmonic oscillator](https://en.wikipedia.org/wiki/Simple_harmonic_motion)--because it's the simplest system which has an equilibrium point and oscillates around that point. Most oscillating systems can be modelled with this potential. For example, look at this graph I just drew:

<img src='/static/img/random-potential-graph.jpg' height=400/>

If you zoom in on any of the local minima, you'll see that at close ranges it can be approximated nicely by a $$V=kx^2$$ potential centered around the minima.

(Why is this? For the same reason that if you zoom in really far on any differentiable function, it looks like a line. I'm basically just telling you to zoom in far enough that the Taylor series with terms up to $$x^2$$ is a good approximation, and then I'm also asking you to do this near a local minima, which means that there won't be any slope at the middle, because that's what a local minima is.)


#### Electric potential energy

In our quest to understand the quantum mechanics which leads to the everyday properties of matter, the most important kind of potential energy is electric potential energy--the energy that comes from repulsive particles being close together, or attractive particles being far apart.

As discussed above, energy isn't really defined on an absolute scale; we can only talk about how much the PE differs between two different configurations. So we have to choose a configuration which we're going to define as having zero electric potential energy. Let's arbitrarily say that particles have zero electric potential energy when they're infinitely far away from each other.

As you might recall, particles attract particles with opposite [sign](https://en.wikipedia.org/wiki/Sign_(mathematics)) of charge and repel particles with the same sign. That's an important fact about how electric potential works.

Suppose we have two balls with charges $$q_1$$ and $$q_2$$. We can give the name $$V$$ to the function which the charges of the two balls and says how much electric potential energy they have. Let's write down some things we know about $$V$$ in order to guess it:

- If either of the charges is zero, the electric force is zero. So $$V(q_1, 0) = V(0, q_2) = 0$$.
- If both charges are positive or both are negative, the electric potential is positive, because the balls repel each other and the system has more potential energy than it would if the balls were infinitely far from each other.
- If one of the charges is positive and the other is negative, the electric potential is negative, because the balls attract.
- If one of the balls splits into two, the net electric force should be the same. That is, suppose we had some matter with a net charge of $$q_1$$, and then we split it in half arbitrarily and call the parts A and B. The charge of these two parts has to add up to $$q_1$$, because charge is conserved when you cut something in half. Let's say these two parts have charges $$q_{1A}$$ and $$q_{1B}$$. So $$V(q_1, q_2) = V(q_{1A}, q_2) + V(q_{1B}, q_2)$$. This reminds me of the distributive property $$(a+b)\\cdot c = a\\cdot c + b\\cdot c$$.

What kind of function is zero if either of its arguments is zero, positive if its arguments have the same sign and negative otherwise, and is distributive? Sounds like multiplication to me. And indeed, the function for electric potential involves the product of the two charges.

We still have to make an arbitrary decision about which direction of charge we're going to say is positive. Benjamin Frankin made this decision, and made it badly: he decided to define electric charge such that electrons have a negative amount of it and protons have a positive amount.

For neato reasons that I won't go in to here, the potential as a function of the distance between particles $$r$$ is like $$\\frac{1}r$$ (and the force is like $$\\frac{1}{r^2}$$). So when the particles are four times further apart, they have $$\\frac14$$ of the electric potential energy.

Overall, we have the potential $$V$$:

$^$V = \\frac{q_1 q_2}r$^$

You can differentiate this to get the force:

$^$F = \\frac{q_1 q_2}{r^2}$^$

(These equations might need some extra constants in them, depending on the system of units you're using.)

      `}/>
  </div>
}

export default PotentialEnergyGraphsSection;
