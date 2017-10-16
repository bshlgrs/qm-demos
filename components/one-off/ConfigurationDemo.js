import Line from "../Line"
import Row from "../Row"
import OneDimensionalConfiguration from "./OneDimensionalConfiguration"

class ConfigurationDemo extends React.Component  {
  constructor () {
    super();
    this.state = {
      a: 0.3,
      b: 0.7
    }
  }

  render () {
    const [mainDisplayX, mainDisplayY] = [this.state.a*285+5, (1-this.state.b)*285+5];

    return <Row style={{marginBottom: '20px'}}>
      <div>
        <OneDimensionalConfiguration a={this.state.a} b={this.state.b} width={200} />

        <label>
          Position of red particle
          <input type="range" value={this.state.a*100} onChange={(e) => this.setState({ a: e.target.value/100 })} />
        </label>

        <label>
          Position of yellow particle
          <input type="range" value={this.state.b*100} onChange={(e) => this.setState({ b: e.target.value/100 })} />
        </label>
      </div>
      <div>
        <svg style={{border: 'solid'}} height={300} width={300}>
          <Line xStart={0} xEnd={mainDisplayX} yStart={mainDisplayY} yEnd={mainDisplayY} color='grey' />
          <Line xStart={mainDisplayX} xEnd={mainDisplayX} yStart={300} yEnd={mainDisplayY} color='grey' />
          <circle cx={mainDisplayX} cy={mainDisplayY} r={5} fill='black'/>
          <text x={80} y={290}>Position of red particle</text>
          <text x={20} y={15} transform="rotate(-90 120,120)">Position of yellow particle</text>
        </svg>
        <span>We can represent the state of this system as a single point on a 2D plane.</span>
      </div>
    </Row>;
  }

}

export default ConfigurationDemo
