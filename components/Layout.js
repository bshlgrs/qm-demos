
import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title || "Quantum mechanics"}</title>

      <base href="/next"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" integrity="sha384-wITovz90syo1dJWVh32uuETPVEtGigN07tkttEqPv+uR2SE/mbQcG7ATL28aI9H0" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" crossorigin="anonymous" />
      <link rel="stylesheet" href="/static/css/now-ui-kit.css" crossorigin="anonymous" />
      {props.scripts && props.scripts.map((x) => <script key={x} src={x} />)}
    </Head>

    {props.naked ?
      props.children :
      <div className="container">
        <div className="row">
          <div className='col-sm-8 col-sm-offset-1'>
            <Header />
            {props.children}
          </div>
        </div>
      </div>
    }
  </div>
)

export default Layout
