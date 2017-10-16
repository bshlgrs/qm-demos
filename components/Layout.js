
import Header from './Header'
import Head from 'next/head'
import styles1 from '../static/css/bootstrap.min.css';
import styles2 from '../static/css/now-ui-kit.css';
import applyStyles from 'next-style-loader/applyStyles';

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title || "Quantum mechanics"}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css" integrity="sha384-wITovz90syo1dJWVh32uuETPVEtGigN07tkttEqPv+uR2SE/mbQcG7ATL28aI9H0" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" />

      {props.scripts && props.scripts.map((x) => <script key={x} src={x} />)}
    </Head>

   <div className='container'>
    {props.naked ?
      props.children :
      <div className="row">
        <div className='col-sm-10 col-sm-offset-1'>
          <Header />
          {props.children}
        </div>
      </div>
    }
    </div>
  </div>
)

export default applyStyles(styles2)(applyStyles(styles1)(Layout));

      // <link rel="stylesheet" href="/static/css/bootstrap.min.css" crossorigin="anonymous" />
      // <link rel="stylesheet" href="/static/css/now-ui-kit.css" crossorigin="anonymous" />
