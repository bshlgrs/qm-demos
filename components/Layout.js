import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: "#eee"
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Quantum mechanics</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" integrity="sha384-wITovz90syo1dJWVh32uuETPVEtGigN07tkttEqPv+uR2SE/mbQcG7ATL28aI9H0" crossorigin="anonymous" />
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout
