
class SmartTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: null
    }
  }

  sortBy(colSymbol) {
    if (this.state.sort === null) {
      this.setState({ sort: [colSymbol, 'asc']});
    } else {
      const [colSymbol, dir] = this.state.sort;

      if (dir == 'asc') {
        this.setState({ sort: [colSymbol, 'desc']});
      } else {
        this.setState({ sort: null});
      }
    }
  }

  render () {
    const { columns, data } = this.props;
    const [sortColSymbol, dir] = this.state.sort || [null, null];

    return <table>
      <thead>
        <tr>
          {columns.map((col, idx) =>
            <th
              key={idx}
              onClick={() => this.sortBy(col.symbol)}
              >
              {col.title}&nbsp;
              {col.symbol == sortColSymbol && dir == 'asc' ? "^" : "v"}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => <tr key={idx}>
          {columns.map((col, idx) => <td key={idx}>{row[col.symbol]}</td>)}
        </tr>)}
      </tbody>
    </table>
  }
}

export default SmartTable
