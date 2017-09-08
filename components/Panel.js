

const Panel = (props) => {
  const mainStyle = {
    boxShadow: "10px 5px 5px #b9b9b9",
    padding: "20px",
    marginTop: "20px",
    backgroundColor: "#e8e8e8"
  };

  return <div style={mainStyle}>
    {props.children}
  </div>;
}

export default Panel;
