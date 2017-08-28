const Line = (props) => {
  const { xStart, xEnd, yStart, yEnd, color } = props;

  const deSci = (x) => x.toFixed(5);

  return <path
    d={`M${deSci(xStart)} ${deSci(yStart)} L${deSci(xEnd)} ${deSci(yEnd)}`}
    stroke={color || 'black'}
    strokeWidth='1'
    vectorEffect='non-scaling-stroke'/>
}

export default Line;
