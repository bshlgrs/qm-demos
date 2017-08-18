import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'


const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <SimpleGraph
      xrange={[-3, 3]}
      yrange={[-3, 3]}
      width={300}
      axes={true}
      functions={[
        {color: 'red', fn: (x) => 2 * Math.sin(x)},
        {color: 'blue', fn: (x) => Math.cos(x)}
      ]}
    />
  </Layout>
)

export default Index
