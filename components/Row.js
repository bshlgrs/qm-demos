const Row = (props) => {
  return <div>
    <style global jsx>{`
        .row-component {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
        }

        .row-component > * {
          align-items: center;
          flex-direction: column;
          display: flex;
        }
      `}</style>
    <div className="row-component">
      {props.children}
    </div>
  </div>;
}

export default Row;
