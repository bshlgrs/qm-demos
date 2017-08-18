import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import Immutable from 'immutable'

class ForcesDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universe: initialUniverse
    }
    this._interval = setInterval(() => this.timestep(), 20);
  }

  componentWillUnmount () {
    clearInterval(this._interval);
  }

  timestep () {
    this.setState({universe: this.state.universe.timestep()})
  }

  render () {
    return <div>
          <svg
      height={600}
      width={400}
      // viewBox={`${xMin} ${yMin} ${xrange} ${yrange}`}
      preserveAspectRatio="xMaxYMax none"
      style={{backgroundColor: 'white'}}>
        {this.state.universe.particles.map((particle, idx) => {
          const { position } = particle;

          return <circle key={idx} cx={position[0]} cy={position[1]} r="10"/>;
        })}
      </svg>
    </div>;
  }
}

const Forces = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ForcesDemo />
  </Layout>
)

class Universe {
  constructor(particles) {
    this.particles = particles;
    this.height = 600;
    this.width = 400;
  }

  timestep() {
    return new Universe(this.particles.map((particle, idx) => {
      const { position, velocity } = particle;
      let [x, y] = position;
      let [vx, vy] = velocity;

      x += vx/2;
      y += vy/2;

      if (y > this.height && vy > 0) {
        vy = -vy * 0.95;
        y = this.height * 2 - y;
      } else if (y < 0 && vy < 0) {
        vy = -vy * 0.95;
        y = - y;
      } else {
        vy += 0.2;
      }

      if (x > this.width && vx > 0) {
        vx = -vx;
        x = this.width;
      }

      if (x < 0 && vx < 0) {
        vx = -vx;
        x = 0;
      }

      this.particles.forEach((particle2, idx2) => {
        if (idx2 != idx) {
          const [x2, y2] = particle2.position;
          const attractiveForce = Math.min(20 / distance(x, y, x2, y2) ** 2, 5);
          const repulsiveForce = -Math.min(1000 / distance(x, y, x2, y2) ** 3, 5);
          const [ax, ay] = vectorOfLength(x2 - x, y2 - y, attractiveForce + repulsiveForce);

          vy += ay;
          vx += ax;
        }
      })

      return {
        position: [x, y],
        velocity: [vx, vy]
      }
    }));
  }
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
}

function vectorOfLength(dx, dy, length) {
  const originalLength = distance(0, 0, dx, dy);
  const lengthRatio = length / originalLength;
  return [dx * lengthRatio, dy * lengthRatio];
}


const initialUniverse = new Universe(
  Immutable.Range(10, 390, 20)
    .toJS()
    .map((x) => ({position: [x, 590], velocity: [0, 0]}))
);

export default Forces
