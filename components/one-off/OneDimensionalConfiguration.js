import Line from "../Line"

const OneDimensionalConfiguration = (props) => {
  const width = props.width || 400;
  return <svg height={40} width={width}>
    <Line xStart={0} xEnd={width} yStart={20} yEnd={20} color='black' />
    <circle cx={props.a*(width-20) + 10} cy={20} r={10} fill='red'/>
    <circle cx={props.b*(width-20) + 10} cy={20} r={10} fill='#e0e550'/>
  </svg>
}

export default OneDimensionalConfiguration
