import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import PotentialEnergyGraphsSection from './potential-energy-graphs'
import PotentialEnergyInQm from './potential-energy-qm'
import PositiveVsNegativePotentialEnergy from './positive-vs-negative'


const PotentialEnergyPage = () => (
  <Layout>
    <h2>Potential energy</h2>

    <MarkdownWithLatex text={`

Potential energy is the energy in a system that comes from its configuration. For example, we say that a brick has a lot of potential energy when it's up in the air--this is gravitational PE. Dynamite has a lot of chemical energy. And uranium has nuclear potential energy which can be used to make bombs.

It's important to note that this is all relative. Like, the brick has PE compared to being lower. Dynamite has chemical PE compared to the equivalent amount of [oxygen, nitrogen, water, and CO<sub>2</sub>](http://explosionshowtheywork.blogspot.com/p/chemical-explosions-how-they-work.html). Uranium has more energy than

All of physics is unchanged by where you put your zero point.

    `}/>

    <p>If you want to study this more from a more basic standpoint,
      read <Link href="potential-energy-graphs"><a>here</a></Link>.</p>

    <PotentialEnergyGraphsSection />

    <PotentialEnergyInQm />

    <Link href="/02-energy/kinetic-energy"><a>Continue</a></Link>


    <p>Note: I cut out PositiveVsNegativePotentialEnergy</p>
  </Layout>
)

export default PotentialEnergyPage
