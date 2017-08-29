import Layout from '../components/Layout'
import {
  VictoryChart,
  VictoryTheme,
  VictoryScatter,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          theme={VictoryTheme.material}
          containerComponent={<VictoryVoronoiContainer/>}
        >
          <VictoryLine
            labelComponent={<VictoryTooltip/>}
            interpolation="natural"
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            samples={100}
            y={(d) => Math.cos(5 * Math.PI * d.x)}
          />
        </VictoryChart>


        <VictoryChart
  domain={{x: [0, 5], y: [-5, 5]}}
  containerComponent={<VictoryVoronoiContainer/>}
>
  <VictoryScatter
    style={{
      data: {fill: "tomato"}, labels: {fill: "tomato"}
    }}
    size={(datum, active) => active ? 5 : 3}
    labels={(d) => d.y}
    labelComponent={<VictoryTooltip/>}
    data={[
      {x: 1, y: -4},
      {x: 2, y: 4},
      {x: 3, y: 2},
      {x: 4, y: 1}
    ]}
  />
  <VictoryScatter
    style={{
      data: {fill: "blue"}, labels: {fill: "blue"}
    }}
    size={(datum, active) => active ? 5 : 3}
    labels={(d) => d.y}
    labelComponent={<VictoryTooltip/>}
    data={[
      {x: 1, y: -3},
      {x: 2, y: 3},
      {x: 3, y: 3},
      {x: 4, y: 0}
    ]}
  />
  <VictoryScatter
    data={[
      {x: 1, y: 4},
      {x: 2, y: -4},
      {x: 3, y: -2},
      {x: 4, y: -3}
    ]}
    labels={(d) => d.y}
    labelComponent={<VictoryTooltip/>}
    size={(datum, active) => active ? 5 : 3}
  />
</VictoryChart>
      </Layout>
    );
  }
}

export default Main;
