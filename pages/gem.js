import Link from 'next/link'
import Layout from '../components/Layout'
import katex from 'katex';


const tex = (str) => (
  <span dangerouslySetInnerHTML={{__html: katex.renderToString(str)}} />
);

const SmallBox = ({children}) => (<div style={{padding: 5, backgroundColor: 'lightgrey'}}>
  {children}
</div>);

const GemIndex = () => (
  <Layout naked>
    <h2>GEM</h2>
    <div style={{display: 'flex'}}>
      <div style={{flex: 2, padding: 20, border: 'solid'}}>
        <input value="potential energy" />
        <div>
          <div>
            <p>{tex('E_K = \\frac12 m_1 v^2')} (1)</p>
          </div>
          <div>
            <p>{tex('E_P = m_2 g h')} (2)</p>
          </div>
        </div>
      </div>

      <div style={{flex: 3, padding: 10}}>
        <h4>Equations</h4>
          <p onClick={(e) => { console.log(e.target.textContent); }}>
          {tex('\\href{foo}{E_K} = \\frac 12 \\textcolor{blue}{m_1} v^2')} (1)</p>
          <p>{tex('E_P = \\textcolor{blue}{m_2} g h')} (2)</p>
          <SmallBox>
            {tex('E_K')} Kinetic energy. Measured in Joules
            <p>Declare equal to: <button>{tex('E_K')}</button></p>
            <button>Solve</button>
          </SmallBox>
      </div>
      <div style={{flex: 3, padding: 10}}>
        <h4>Equivalences</h4>
          <p>{tex('m_1')} = {tex('m_2')}</p>
        <h4>Numbers</h4>
          <p onClick={(e) => { console.log(e.target.textContent); }}>
            {tex('h = 2 \\text{m}')} (typical human height: 1.7m)</p>
          <p>{tex('g = 9.8 \\text{ms}^{-1}')} (Earth's gravity)</p>
        <h4>Conclusions</h4>
          <p>{tex('v = \\sqrt{2gh} = 6.26\\text{ms}^{-1}')}
          </p>
          <SmallBox>Rewrite in terms of:
            <a>{tex('E_K')}</a> <a>{tex('E_P')}</a> <a>{tex('g')}</a> <a>{tex('m')}</a>
          </SmallBox>
          <SmallBox>
            For comparison: 4.4ms<sup>-1</sup> is a brisk walk.
          </SmallBox>
      </div>

    </div>
  </Layout>
)

export default GemIndex;
