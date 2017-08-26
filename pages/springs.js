import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import { InlineMath } from 'react-katex'
import Line from '../components/Line'
import numeric from 'numericjs'

class Springs extends React.Component {
  constructor() {
    super();

    const positions = Array(9).fill(0);
    positions[1] = 1;

    this.state = { positions: positions, velocities: Array(9).fill(0) };
    this._interval = setInterval(() => this.timestep(), 20);
  }

  componentWillUnmount () {
    clearInterval(this._interval);
  }

  timestep () {
    const dt = 0.01;
    const { positions, velocities } = this.state;

    const n = 9;
    // function to integrate
    const f = (t, x) => {
      const positions = x.slice(0, n);
      const velocities = x.slice(n);

      const accellerations = positions.map((y, idx) =>
        (idx != 0 && idx != n-1) ?
          (-y*2 + positions[idx + 1] + (positions[idx - 1])) :
          0
      );
      return [...velocities, ...accellerations];
      // rates of change of positions
    }

    const resultArray = numeric.dopri(0, dt, [...positions, ...velocities], f, 1e-4, 2000).f;
    const result = resultArray[resultArray.length - 1];
    const [newPositions, newVelocities] = [result.slice(0, n), result.slice(n)];
    this.setState({positions: newPositions, velocities: newVelocities});
  }

  render () {
    const positions = this.state.positions;

    return <Layout>
      <h2>Springs</h2>

      <svg height={200} width={400}>
        <g>
          {positions.map((y, idx) => {

            return idx !== 8 && <Line
              xStart={idx*40+20}
              yStart={y * -50 + 100}
              xEnd={(idx + 1)*40+20}
              yEnd={positions[idx + 1] * -50 + 100}
              key={idx}
              stroke="black"
              strokeWidth={3}
              fill="red"/>;
          })}

          {positions.map((y, idx) => {
            return <circle
              cx={idx*40+20}
              cy={y * -50 + 100}
              r={5}
              key={idx}
              stroke="black"
              strokeWidth={3}
              fill="red"/>
          })}


        </g>
      </svg>
    </Layout>;
  }
}

export default Springs;
