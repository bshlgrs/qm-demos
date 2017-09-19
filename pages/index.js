import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'


const Index = () => (
  <Layout>
    <h2>Buck's intro to QM</h2>
    <p>For each page, I include an estimate of how complete it is.</p>
    <p><Link href="/00-intro">
      <a>Intro</a>
    </Link> (80%)</p>
    <p><Link href="/01-wavefunctions">
      <a>Wavefunctions</a>
    </Link> (90%)</p>
    <p><Link href="/02-energy">
      <a>Calculating the energy of wavefunctions</a>
    </Link> (70%)</p>
    <p><Link href="/03-ground-states">
      <a>Ground states</a>
    </Link> (20%)</p>
    <p><Link href="/04-stationary-states">
      <a>Stationary states</a>
    </Link> (10%)</p>
    <p><Link href="/05-hydrogen">
      <a>Hydrogen</a>
    </Link> (3%)</p>
    <p><Link href="/06-identical-particles">
      <a>Identical particles</a>
    </Link> (20%)</p>

    <p>And some other stuff:</p>

    <p><Link href="/schrodinger-eq-vs-wave-eq">
      <a>Schrodinger equation vs wave equation</a>
    </Link></p>
  </Layout>
)

export default Index
