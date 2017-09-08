import styles1 from '../static/css/bootstrap.min.css';
import styles2 from '../static/css/now-ui-kit.css';
import applyStyles from 'next-style-loader/applyStyles';

class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerIdx: null,
      submitted: false
    }
  }

  render () {
    const correct = this.state.answerIdx == this.props.correctAnswerIdx;
    const panelAnswerClass = this.state.submitted ?
      (correct ? 'panel-success' : 'panel-danger') :
      'panel-default';

    const mainStyle = {
      boxShadow: "10px 5px 5px #b9b9b9",
      padding: "20px",
      marginTop: "20px",
      backgroundColor: "#e8e8e8"
    };

    const innerStyle = {
      padding: "20px",
      marginTop: "20px",
      backgroundColor: correct ? "#dce8cf" : "#f7cfcf",
      boxShadow: "2px 2px 2px #b9b9b9"
    }

    return <div style={{'marginBottom': '30px'}}>
      <div style={mainStyle} className='panel-body'>

        <p>{this.props.question}</p>

        {this.props.answers.map((ans, idx) =>
          <div key={idx} onClick={() => this.state.submitted || this.setState({ answerIdx: idx })} >
            <input
              type='radio'
              checked={this.state.answerIdx == idx}
              onChange={() => this.state.submitted || this.setState({ answerIdx: idx })} />
            &nbsp;
            {ans}
          </div>
        )}

        <button
          disabled={this.state.answerIdx === null || this.state.submitted}
          onClick={() => this.state.answerIdx !== null && this.setState({submitted: true})}
          className="btn btn-primary">
          Submit
        </button>

        <div>
          {this.state.submitted && <div className="panel-body" style={innerStyle}>
            <div className='panel-title'>
              {(correct ? "Correct!" : "Wrong!")}
            </div>
            {this.props.explanation}
            <div>{correct ? this.props.correctText : this.props.incorrectText}</div>
            {!correct && <button
              onClick={() => this.setState({submitted: false, answerIdx: null})}
              className="btn btn-primary">
              Try again
            </button>}
          </div>}
        </div>
      </div>
    </div>
  }
}

export default applyStyles(styles2)(applyStyles(styles1)(MultipleChoiceQuestion));
