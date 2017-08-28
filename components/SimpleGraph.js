import Line from "./Line"

function getListOfNumbers(start, n, step) {
  const out = [];
  for (var x = start; x < n; x += step) {
    out.push(x);
  }
  return out;
}

const GraphFunction = (props) => {
  const { options, range } = props;
  const { fn, color } = options;
  const [xMin, xMax] = range;
  const xSize = xMax - xMin;

  const detail = 100;

  const numbers = getListOfNumbers(xMin, detail, xSize / detail);

  return <g>
    {numbers.map((x, idx) => {
      if (idx == numbers.length - 1) {
        return null;
      }
      const nextX = numbers[idx + 1];

      return (idx != numbers.length - 1) &&
        <Line key={x} xStart={x} xEnd={nextX} yStart={fn(x)} yEnd={fn(nextX)} color={color} />;
    })}
  </g>;
}

const GraphPath = (props) => {
  const { color, path, tangent } = props.options;

  // TODO: tangent
  return <g>
    {path.map((point, idx) => {
      const nextPoint = path[idx + 1];
      if (!nextPoint) {
        return null;
      } else {
        return <Line
          key={idx}
          color={color}
          xStart={point[0]}
          yStart={point[1]}
          xEnd={nextPoint[0]}
          yEnd={nextPoint[1]} />;
      }
    })}
  </g>;
}

class SimpleGraph extends React.PureComponent {
  render () {
    const props = this.props;
    const [xMin, xMax] = props.xrange;
    const xrange = xMax - xMin;
    const [yMin, yMax] = props.yrange;
    const yrange = yMax - yMin;
    const { height, width, functions, paths, axes, xaxis, yaxis } = props;


    const verticalScaling = xrange / yrange;

    // todo: get the scaling to work. viewport is very confusing.
    return <div style={graphStyle}>
      <div style={{position: 'absolute'}}>
        {(props.texts || []).map((text, idx) => {
          const [topUnscaled, leftUnscaled] = text.location;
          const top = (topUnscaled - yMin / yrange) * (height || 300);
          const left = (leftUnscaled - xMin / xrange) * width;

          return <span key={idx} style={{position: 'relative', top, left, textAlign: 'center'}}>
            {text.content}
          </span>
        })}
      </div>

      <svg
        height={height || 300}
        width={width || 300}
        viewBox={`${xMin} ${yMin} ${xrange} ${yrange}`}
        // preserveAspectRatio="xMaxYMax none"
        style={{backgroundColor: 'white'}}>
        <g transform={`scale(1,${-verticalScaling})`}>
          {(axes || xaxis) && <Line xStart={xMin} xEnd={xMax} yStart={0} yEnd={0} />}
          {(axes || yaxis) &&  <Line xStart={0} xEnd={0} yStart={yMin} yEnd={yMax} />}

          {functions && functions.map((options, idx) =>
            <GraphFunction key={idx} options={options} range={[xMin, xMax]}/>)}
          {paths && paths.map((options, idx) => <GraphPath key={idx} options={options} />)}
        </g>

      </svg>
    </div>
  }
}

const graphStyle = {
  margin: '5px',
  padding: '5px'
};

export default SimpleGraph;
