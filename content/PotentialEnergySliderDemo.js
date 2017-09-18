
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import SimpleGraph from '../components/SimpleGraph'
import Panel from '../components/Panel'


const NORMAL_SAMPLES = [-0.7669459 ,  0.19642596, -0.45288926,  0.324858  ,  0.0706288 ,
       -1.12468769, -0.73108482,  1.0941815 , -0.1800215 ,  0.15067677,
        0.04444306, -0.41822803, -0.60925483, -0.1793656 , -0.70196987,
       -0.96694065, -0.64061097, -0.16169004,  0.13424419, -0.21419127,
       -0.26289711,  0.36503452,  0.80547879,  1.66381998,  0.18311283,
       -0.09928612,  0.46781571,  1.64556687,  0.74505705, -0.79141306,
       -0.96843763, -0.58066239, -0.07352963,  0.85197979,  1.81021006,
        1.52690786,  1.44460817,  1.07959281,  0.2834112 , -1.50378533,
       -0.28819892,  0.7723661 ,  1.06746488, -1.24793041,  0.39038565,
        0.44866266, -0.03087875, -0.47370126,  0.07002023,  0.05610792];

class PotentialEnergySliderDemo extends React.Component {
  constructor () {
    super();

    this.state = { wavefunctionSpreadInput: 10 }
  }

  render () {
    const sigma = this.state.wavefunctionSpreadInput/30 + 0.3;

    const wavefunctionConst = (2 / 3.1416)**(0.25);
    const wavefunction = (x) => (wavefunctionConst * Math.exp(-(x**2) / sigma**2) / Math.sqrt(sigma));

    const potentialFunction = (x) => (- 1.9/Math.sqrt(1 + 5*x**2));

    const potentialEnergyFunction = (x) => 0.5 * wavefunction(x) ** 2 * potentialFunction(x);

    // according to my Integrals for QM Demos notebook:
    // -sqrt(2)*(-sigma1**2 + 2*x**2)*exp(-2*x**2/sigma1**2)/(sqrt(pi)*sigma1**5)

    // const kineticEnergyFunction = (x) => {
    //   return -Math.sqrt(2) * (-(sigma ** 2) + 2 * x**2) * Math.exp(-2 * x**2 / sigma**2) / (Math.sqrt(3.1415)*sigma**5);
    // };

    const totalPotentialEnergy = NORMAL_SAMPLES.map((x) => {
      return potentialEnergyFunction(x * sigma**2);
    }).reduce((x, y) => x + y);

    // const totalKineticEnergy = NORMAL_SAMPLES.map((x) => {
    //   return kineticEnergyFunction(x * sigma**2);
    // }).reduce((x, y) => x + y);


    return <Panel>
      <h3>Potential Energy Slider Demo</h3>

      <label>
        Spread of the <span style={{color: 'green'}}>wavefunction</span>
      <input
        type="range"
        value={this.state.wavefunctionSpreadInput}
        onChange={(e) => this.setState({ wavefunctionSpreadInput: e.target.value })} />
      </label>
      <SimpleGraph
        xrange={[-3, 3]} yrange={[-2, 2]} xaxis={true}
        // paths={[
        //   {color: 'purple', path: [[0, 2], [0, -2]]}
        // ]}
        functions={[
          {color: 'green', fn: wavefunction},
          {color: 'black', fn: potentialFunction}
        ]}
        width={500}
        height={500}
        detail={100}
      />
      <SimpleGraph
        xrange={[-3, 3]} yrange={[-2, 2]} xaxis={true}
        // paths={[
        //   {color: 'purple', path: [[0, 2], [0, -2]]}
        // ]}
        functions={[
          {color: 'red', fn: potentialEnergyFunction},
          // {color: 'blue', fn: kineticEnergyFunction}
        ]}
        width={500}
        detail={50}
      />

      <span style={{color: 'red'}}>Total PE is {Math.round(totalPotentialEnergy * 100) / 100}Ha</span>
      {false && <p>
        ,
        <span style={{color: 'blue'}}>Total KE {Math.round(totalKineticEnergy * 100) / 100}Ha</span>,
      Total energy is {Math.round((totalPotentialEnergy + totalKineticEnergy) * 100) / 100}Ha</p>}

      <p>Energy is in Hartrees; 1 Ha ≈ 27.2 eV.</p>
    </Panel>;
  }
}

export default PotentialEnergySliderDemo;
