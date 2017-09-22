
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import SimpleGraph from '../components/SimpleGraph'
import Panel from '../components/Panel'
import Row from '../components/Row'
import GaussianWavefunction from '../lib/Wavefunction'



class PotentialEnergySliderDemo extends React.Component {
  constructor () {
    super();

    this.state = { wavefunctionSpreadInput: 10, wavefunctionPositionInput: 50 }
  }

  render () {
    const sigma = this.state.wavefunctionSpreadInput/30 + 0.02;
    const mu = this.state.wavefunctionPositionInput / 25 - 2;

    const wavefunctionConst = (2 / 3.1416)**(0.25);
    const wavefunction = (x) => (wavefunctionConst * Math.exp(-((x-mu)**2) / sigma**2) / Math.sqrt(sigma));

    const potentialFunction = (x) => (- 1.9/Math.sqrt(1 + 3*x**2));

    const potentialEnergyFunction = (x) => 0.5 * wavefunction(x) ** 2 * potentialFunction(x);

    // according to my Integrals for QM Demos notebook:
    // -sqrt(2)*(-sigma1**2 + 2*x**2)*exp(-2*x**2/sigma1**2)/(sqrt(pi)*sigma1**5)

    // const kineticEnergyFunction = (x) => {
    //   return -Math.sqrt(2) * (-(sigma ** 2) + 2 * x**2) * Math.exp(-2 * x**2 / sigma**2) / (Math.sqrt(3.1415)*sigma**5);
    // };

    const totalPotentialEnergy = NORMAL_SAMPLES.map((xInit) => {
      return potentialFunction(xInit * (0.5 * sigma) + mu);
    }).reduce((x, y) => x + y) / NORMAL_SAMPLES.length;

    // const totalKineticEnergy = NORMAL_SAMPLES.map((x) => {
    //   return kineticEnergyFunction(x * sigma**2);
    // }).reduce((x, y) => x + y);


    return <Panel>
      <Row>
        <label>
          <span style={{color: 'green'}}>Position of the wavefunction</span>
          <input
            type="range"
            value={this.state.wavefunctionPositionInput}
            onChange={(e) => this.setState({ wavefunctionPositionInput: e.target.value })} />
        </label>
        <label>
        <span style={{color: 'green'}}>Spread of the wavefunction</span>
        <input
          type="range"
          value={this.state.wavefunctionSpreadInput}
          onChange={(e) => this.setState({ wavefunctionSpreadInput: e.target.value })} />
      </label>
      </Row>
      <SimpleGraph
        xrange={[-3, 3]} yrange={[-2, 2]} xaxis={true}
        paths={[
          {color: 'lightgrey', path: [[mu, 3], [mu, -3]]}
        ]}
        functions={[
          {color: 'green', fn: wavefunction},
          {color: 'black', fn: potentialFunction}
        ]}
        width={400}
        height={400}
        detail={150}
      />
      <SimpleGraph
        xrange={[-3, 3]} yrange={[-0.2, 3.8]} xaxis={true}
        paths={[
          {color: 'lightgrey', path: [[mu, 1], [mu, -3]]}
        ]}
        functions={[
          {color: 'red', fn: potentialEnergyFunction},
          // {color: 'blue', fn: kineticEnergyFunction}
        ]}
        width={400}
        detail={150}
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
