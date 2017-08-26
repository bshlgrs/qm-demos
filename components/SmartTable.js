
class SmartTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: this.props.defaultSort
    }
  }

  sortBy(colSymbol) {
    if (this.state.sort == null || colSymbol != this.state.sort[0]) {
      this.setState({ sort: [colSymbol, 'asc']});
    } else {
      const [colSymbol, dir] = this.state.sort;

      if (dir == 'asc') {
        this.setState({ sort: [colSymbol, 'desc']});
      } else {
        this.setState({ sort: this.props.defaultSort});
      }
    }
  }

  render () {
    const { columns, data } = this.props;
    const [sortColSymbol, dir] = this.state.sort || [null, null];

    const sortedData = this.props.data.sort((x, y) => {
      if (x[sortColSymbol] > y[sortColSymbol]) {
        return dir == 'desc' ? -1 : 1;
      } else {
        return dir == 'desc' ? 1 : -1;;
      }
    });

    return <table>
      <thead>
        <tr>
          {columns.map((col, idx) =>
            <th
              key={idx}
              onClick={() => this.sortBy(col.symbol)}
              >
              {col.title}&nbsp;
              {col.symbol == sortColSymbol &&
                (dir == 'asc' ?
                 <i className="fa fa-arrow-down" /> :
                 <i className="fa fa-arrow-up" />)}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, idx) => <tr key={idx}>
          {columns.map((col, idx) => <td key={idx}>{row[col.symbol]}</td>)}
        </tr>)}
      </tbody>
    </table>
  }
}

export default SmartTable
