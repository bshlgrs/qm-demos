import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'


const Index = () => (
  <Layout>
    <h2>Calculating the energy of a wavefunction</h2>
    <p>Hello Next.js</p>
    <MultipleChoiceQuestion
      question="What is 2 + 2?"
      answers={['3', '4', '5']}
      correctAnswer='4'
      explanation='2 = 1+1, so try counting 1, 2, 3, 4'
    />

    <p>thisdgfds</p>

  </Layout>
)

export default Index
