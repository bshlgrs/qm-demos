import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import Row from '../../components/Row'
import TotalEnergySliderDemo from '../../content/TotalEnergySliderDemo'

const Index3 = () => (
  <Layout naked>
    <h2>Ground states</h2>

    <TotalEnergySliderDemo />
    <MarkdownWithLatex text={`
Last time, we talked about how we calculate the total energy of a wavefunction. This time, we're going to look at what the ground states look like.

LOTS OF EXAMPLES

perturbation theory?
variational method?

BTW, we can neglect the complex state of wavefunctions here. This is because the complex phase of a wavefunction doesn't affect the potential energy, and it strictly increases kinetic energy.
    `}/>

    <h4>Well depth</h4>

    <p>Consider these two wells.</p>


    <Row>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-0.1, 2]} width={300} height={200}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1, 0], [-1, -1], [1, -1], [1, 0], [3, 0]]}
          ]}
        />
        <span>Deep Well</span>
      </div>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-0.1, 2]} width={300} height={200}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1, 0], [-1, -0.5], [1, -0.5], [1, 0], [3, 0]]}
          ]}
        />
        <span>Shallow Well</span>
      </div>
    </Row>

    <p>Let's think about the ground states of these two wells.</p>

    <ul>
      <li>Which has lower total energy?</li>
      <li>Which has lower kinetic energy?</li>
      <li>Which has lower potential energy?</li>
    </ul>

    <h4>Well width</h4>

    <p>Consider these two wells.</p>


    <Row>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-0.1, 2]} width={300} height={200}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1, 0], [-1, -0.5], [1, -0.5], [1, 0], [3, 0]]}
          ]}
        />
        <span>Narrow Well</span>
      </div>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-0.1, 2]} width={300} height={200}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-2, 0], [-2, -0.5], [2, -0.5], [2, 0], [3, 0]]}
          ]}
        />
        <span>Wide Well</span>
      </div>
    </Row>

    <p>Let's think about the ground states of these two wells.</p>

    <ul>
      <li>Which has lower total energy?</li>
      <li>Which has lower kinetic energy?</li>
      <li>Which has lower potential energy?</li>
    </ul>

    <MarkdownWithLatex text={`
## The variational method

I want to explicitly explain something that we've been doing implicitly.

Things have strictly higher energy than the ground state.

## The fake hydrogen atom

## The H2 molecule

## Notes

- You might notice that the ground state always has the same amount of energy. This is important. This is because the ground state is a solution to the Schrodinger equation.



    `}/>

  </Layout>
)

export default Index3
