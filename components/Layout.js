
import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: "#eee"
}

const Layout = (props) => (
  <div>
    <Head>
      <title>Quantum mechanics</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" integrity="sha384-wITovz90syo1dJWVh32uuETPVEtGigN07tkttEqPv+uR2SE/mbQcG7ATL28aI9H0" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />

    </Head>
    <Header />
    <div style={layoutStyle} className="row">

      <div className='col-sm-7 col-sm-offset-1'>
        {props.children}
      </div>
    </div>
  </div>
)

export default Layout
