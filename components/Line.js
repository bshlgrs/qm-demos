const Line = (props) => {
  const { xStart, xEnd, yStart, yEnd, color } = props;

  return <path d={`M${xStart} ${yStart} L${xEnd} ${yEnd}`} stroke={color || 'black'} strokeWidth='1' vectorEffect='non-scaling-stroke'/>
}

export default Line;
