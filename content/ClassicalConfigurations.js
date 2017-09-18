import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import OneDimensionalConfiguration from '../components/one-off/OneDimensionalConfiguration'
import ConfigurationDemo from '../components/one-off/ConfigurationDemo'


const ClassicalConfigurations = () =>  <div>
      <MarkdownWithLatex text={`

### Classical configurations

LessWrong has a [great explanation](http://lesswrong.com/lw/pi/classical_configuration_spaces/) of classical configuration spaces. This one is heavily inspired by that one.


A classical configuration space is a way of representing every possible configuration of a system as a point in a higher-dimensional space.

For example, suppose our system is just two particles on a 1D track. We can represent the system by drawing both the particles on a 1D line. But we could also draw the system as a single point in 2D space, where the $$x$$ coordinate represents the position of the first particle and the $$y$$ coordinate represents the position of the other one.

`}/>

<ConfigurationDemo a={0.5} b={0.9} />

<MarkdownWithLatex text={`

One problem with classical configuration spaces is that they get really high dimensional really fast. To represent the position of a single particle in 3D space requires three dimensions, of course. Representing two particles takes six dimensions, which is obviously impossible to visualize. And sometimes we try to do physics on systems with more than two particles, in which case we're totally screwed. But they're still a nice tool for thinking about how classical configurations relate to each other.

In particular, they give you a nice intuition for the topology of the configuration space. Looking at the configuration space of the two-particle 1D world, it's clear that these two universes are very close in configuration space:

`}/>

<OneDimensionalConfiguration a={0.5} b={0.9} />
<OneDimensionalConfiguration a={0.53} b={0.88} />

<MarkdownWithLatex text={`


And it's clear that these two configurations aren't close at all:

`}/>

<OneDimensionalConfiguration a={0.5} b={0.9} />
<OneDimensionalConfiguration a={0.5} b={0.4} />

<MarkdownWithLatex text={`

even though the red particle is in the same place in both of those two configurations.

This lesson carries over to the much higher-dimensional case. In the 12-dimensional configuration space of four balls in three dimensions, the nearby configurations to a given configuration are those where all the balls are in almost the same place.

---

Note that to describe the evolution of a classical system over time, you not only need to give one number for every dimension to describe the positions of everything in the system, you also need to give one number per dimension to describe the velocities.

Interestingly, classical physics only requires the positions and velocities--if you know those, you can calculate the accelerations on all the particles and figure out the time evolution of your system.
`}/>



   {false &&  <MultipleChoiceQuestion
      question="How many dimensions are required to describe the position of a pendulum on a fixed rod?"
      answers={[
        "1", "2", "3", "4"
      ]}
      correctAnswerIdx={0}
      explanation={<div>
        <p>We can describe the position with just one variable, theta.</p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Oscillating_pendulum.gif?w=240" />
      </div>}
      />}

      </div>


export default ClassicalConfigurations;
