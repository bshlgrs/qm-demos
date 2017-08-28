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

    return <div className="panel panel-default">
      <div className="panel-body">
        <h4>Question</h4>
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
          disabled={!this.state.answerIdx == null || this.state.submitted}
          onClick={() => this.state.answerIdx !== null && this.setState({submitted: true})}
          className="btn btn-primary">
          Submit
        </button>

        <div className={`panel ${panelAnswerClass}`}>
          <div className='panel-heading' style={{opacity: this.state.submitted ? 1 : 0}}>
            <h3 className='panel-title'>{(correct ? "Correct!" : "Wrong!")}
            </h3>
          </div>
          {this.state.submitted && <div className="panel-body">
            {this.props.explanation}
            {correct ? this.props.correctText : this.props.incorrectText}
            {!correct && <button
              onClick={() => this.setState({submitted: false})}
              className="btn btn-primary">
              Try again
            </button>}
          </div>}
        </div>
      </div>
    </div>
  }
}

export default MultipleChoiceQuestion
