class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      submitted: false
    }
  }

  render () {
    const panelAnswerClass = this.state.submitted ?
      (this.state.answer == this.props.correctAnswer ? 'panel-success' : 'panel-danger') :
      'panel-default';

    return <div className="panel panel-default">
      <div className="panel-body">
        <h4>Question</h4>
        <p>{this.props.question}</p>

        {this.props.answers.map((ans, idx) =>
          <div key={idx} onClick={() => this.state.submitted || this.setState({ answer: ans })} >
            <input
              type='radio'
              checked={this.state.answer == ans}
              onChange={() => this.state.submitted || this.setState({ answer: ans })} />
            &nbsp;
            {ans}
          </div>
        )}

        <button
          disabled={!this.state.answer || this.state.submitted}
          onClick={() => this.state.answer && this.setState({submitted: true})}
          className="btn btn-primary">
          Submit
        </button>

        <div className={`panel ${panelAnswerClass}`}>
          <div style={{opacity: this.state.submitted ? 1 : 0}}>
            <div className='panel-heading'>
              <h3 className='panel-title'>{(this.state.answer == this.props.correctAnswer ?
              "Correct!" : "Wrong!")}
              </h3>
            </div>
            <div className="panel-body">
              {this.props.explanation}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default MultipleChoiceQuestion
