import Line from "./Line"
import GraphFunction from "./GraphFunction"


class GraphPath extends React.PureComponent {
  render () {
    const { color, path, tangent } = this.props.options;

    // return <path
    //   d={`M${deSci(xStart)} ${deSci(yStart)} L${deSci(xEnd)} ${deSci(yEnd)}`}
    //   stroke={color || 'black'}
    //   strokeWidth='1'
    //   vectorEffect='non-scaling-stroke'
    //   />

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
}

class SimpleGraph extends React.PureComponent {
  render () {
    const props = this.props;
    const [xMin, xMax] = props.xrange;
    const xrange = xMax - xMin;
    const [yMin, yMax] = props.yrange;
    const yrange = yMax - yMin;
    const { height, width, functions, paths, axes, xaxis, yaxis, preRenderedFunctions } = props;


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
            <GraphFunction key={idx} options={options} range={[xMin, xMax]} detail={this.props.detail} />)}
          {paths && paths.map((options, idx) => <GraphPath key={idx} options={options} />)}
          {preRenderedFunctions}
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
