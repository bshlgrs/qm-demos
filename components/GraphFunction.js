import Line from "./Line"


function getListOfNumbers(start, n, step) {
  const out = [];
  for (var x = start; x < n; x += step) {
    out.push(x);
  }
  return out;
}

class GraphFunction extends React.Component {
  shouldComponentUpdate(nextProps) {
    const observedParams = this.props.options.observedParams;
    if (observedParams) {
      return observedParams.toString() != nextProps.options.observedParams.toString();
    } else {
      return true;
    }
  }

  render () {
    const { options, range } = this.props;
    const { fn, color } = options;
    const [xMin, xMax] = range;
    const xSize = xMax - xMin;

    const detail = this.props.detail || 50;

    const numbers = getListOfNumbers(xMin, detail, xSize / detail);

    return <g>
      {numbers.map((x, idx) => {
        if (idx == numbers.length - 1) {
          return null;
        }
        const nextX = numbers[idx + 1];

        return (idx != numbers.length - 1) &&
          <Line key={idx} xStart={x} xEnd={nextX} yStart={fn(x)} yEnd={fn(nextX)} color={color} />;
      })}
    </g>;
  }
}

export default GraphFunction;
