import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import { InlineMath } from 'react-katex'



const EffectOfHamiltonianQuiz = () => (
  <Layout>
    <h2>Quiz!</h2>
    <h3>Question 1</h3>

    <p>Consider these two wells.</p>


    <div className="row">
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={300} height={200}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1, 0], [-1, -1], [1, -1], [1, 0], [3, 0]]}
          ]}
        />
        <span>Deep Well</span>
      </div>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={300} height={200}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1, 0], [-1, -0.5], [1, -0.5], [1, 0], [3, 0]]}
          ]}
        />
        <span>Shallow Well</span>
      </div>
    </div>

    <p>Consider the ground states of these two wells.</p>

    <ul>
      <li>Which has lower total energy?</li>
      <li>Which has lower kinetic energy?</li>
      <li>Which has lower potential energy?</li>
    </ul>

    <h3>Question 2</h3>

    <p>Now, consider these two wells.</p>

    <div className='row'>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={300}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-0.8, 0], [-0.8, -1], [0.8, -1], [0.8, 0], [3, 0]]}
          ]}
        />
        <span>Narrow Well</span>
      </div>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={300}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1.5, 0], [-1.5, -1], [1.5, -1], [1.5, 0], [3, 0]]}
          ]}
        />
        <span>Wide Well</span>
      </div>
    </div>

    <p>Consider the ground state wavefunctions for these two wells.</p>

    <ul>
      <li>Which has lower total energy?</li>
      <li>Which has lower kinetic energy?</li>
      <li>Which has lower potential energy?</li>
    </ul>

    <h3>Question 3</h3>

    <p>Now, consider this well.</p>

    <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={600}
        xaxis={false}
        paths={[
          {color: 'brown', path: [
            [-3, 0], [-1.8, 0], [-1.8, -0.5], [-0.5, -0.5], [0, -0.3], [0.5, -0.5], [1.8, -0.5], [1.8, 0], [3, 0]
          ]}
        ]}
      />


    <h3>Question 4</h3>

    <p>Now, consider these two wells.</p>

    <div className='row'>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={300}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1.8, 0], [-1.8, -0.5], [-0.5, -0.5], [0, -0.3], [0.5, -0.5], [1.8, -0.5], [1.8, 0], [3, 0]]}
          ]}
        />
        <span>Well 1</span>
      </div>
      <div>
        <SimpleGraph xrange={[-3, 3]} yrange={[-1.5, 1.5]} width={300}
          xaxis={false}
          paths={[
            {color: 'brown', path: [[-3, 0], [-1.8, 0], [-1.8, -0.5], [0, -0.5], [0, -0.3], [0.5, -0.5], [1.8, -0.5], [1.8, 0], [3, 0]]}
          ]}
        />
        <span>Well 2</span>
      </div>
    </div>

    <p>Which has lower total energy?</p>

  </Layout>
)

export default EffectOfHamiltonianQuiz
