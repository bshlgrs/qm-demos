import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import Panel from '../components/Panel'
import Row from '../components/Row'

const SchrodingerEqVsWaveEq = () => (
  <Layout>
    <h2>The Schrödinger equation and the wave equation</h2>
    <MarkdownWithLatex text={`

The connection between the wave equation and the Schrodinger equation is interesting, but I don't normally see people spell it out as explicitly as I'd like.

### The wave equation

The wave equation for the time evolution of a (classical) wavefunction $$s(x)$$ is as follows:

$^$\\frac{d^2}{d t^2} s = c^2 \\nabla s $^$

or in one dimension,

$^$\\frac{d^2}{dt^2} s = c^2 \\frac{\\partial^2}{\\partial x^2}  s $^$

where $$c$$ is the speed of propogation of waves in the medium. I'm going to ignore the $$c$$ from now on.

`}/>


  <Panel>
<MarkdownWithLatex text={`

#### Aside: where does the wave equation come from?

This equation can be derived by imagining a bunch of masses each attached to its neighbors by springs:

<img height="250" src="/static/img/springs.jpg"/>

Each mass experiences a force that depends on the position of its neighbors. Let's use $$x_i$$ to refer to the displacement of the $$i$$th mass. The force of the spring is $$k x$$ as usual. If we assume that the vertical displacement of the particles is large compared to their horizontal distance, then we can approximate the displacement of the spring between two particles as the difference of displacements between those particles.

In the above picture, clearly masses 1, 4 and 5 have a net force pulling them downwards, while mass 2 has a force pulling it upward. Mass 3 has no net force on it.

So we can write the net force on the $$i$$th mass as:

$^$F_i = (x_{i-1} - x_i) + (x_{i+1} - x_i) = x_{i-1} - 2 x_i + x_{i+1}$^$

The wave equation is the limit of the above equation as the number of particles over a particular distance approaches infinity.

`}/>
  </Panel>

<MarkdownWithLatex text={`

Let's look at how it evolves over time. The wave equation can be written as two coupled first order differential equations. Let's use $$v$$ to refer to the velocity of the medium at a particular point.

$^$
\\frac{d}{d t} s = v $^$

$^$ \\frac{d}{d t} v = \\frac{\\partial^2}{\\partial x^2}  s
$^$


### The Schrödinger equation

Now let's look at the time-dependant Schrödinger equation. In regions of constant potential, the Schrödinger equation reads as follows:

$^$i\\frac{d}{d t} \\Psi = -\\frac{1}{2m} \\frac{\\partial^2}{\\partial x^2} \\Psi$^$

Let's forget about the $$2m$$.

Of course, $$\\Psi$$ is complex valued. Let's rewrite it as a pair of coupled, real-valued, first-order differential equations. Let's try to split it into real and imaginary parts:

$^$i\\frac{d}{d t} \\Psi =
- \\frac{\\partial^2}{\\partial x^2} (\\text{Re}(\\Psi) + i\\cdot\\text{Im}(\\Psi))$^$

Divide both sides by $$i$$ and expand, and you get:

$^$
\\left(i \\frac{\\partial^2}{\\partial x^2} \\text{Re}(\\Psi) \\right) -
\\left( \\frac{\\partial^2}{\\partial x^2} \\text{Im}(\\Psi))\\right)$^$

The first term is entirely imaginary, and the second is real. So:

$^$ \\frac{d}{d t} \\text{Re}(\\Psi) = - \\frac{\\partial^2}{\\partial x^2} \\text{Im}(\\Psi))
$^$
$^$ \\frac{d}{d t} \\text{Im}(\\Psi) =  \\frac{\\partial^2}{\\partial x^2} \\text{Re}(\\Psi))
$^$

### Comparison

Let's put these two equations next to each other and look at them:
`}/>

<Row>
  <div>
    <MarkdownWithLatex text={`
**The wave equation**

$^$
\\frac{d}{d t} s = v $^$

$^$ \\frac{d}{d t} v = \\frac{\\partial^2}{\\partial x^2}  s
$^$

`}/>

  </div>
  <div>
<MarkdownWithLatex text={`
**The Schrödinger equation**

$^$ \\frac{d}{d t} \\text{Re}(\\Psi) = - \\frac{\\partial^2}{\\partial x^2} \\text{Im}(\\Psi))
$^$
$^$ \\frac{d}{d t} \\text{Im}(\\Psi) =  \\frac{\\partial^2}{\\partial x^2} \\text{Re}(\\Psi))
$^$

`}/>
  </div>
</Row>

<MarkdownWithLatex text={`
The second pair of equations are identical.

The difference is with the first pair.

- QM amplitudes are necessarily centered around zero, whereas there's no such centering around position 0 that comes directly out of the wave equation.


`}/>
  </Layout>
)

export default SchrodingerEqVsWaveEq
