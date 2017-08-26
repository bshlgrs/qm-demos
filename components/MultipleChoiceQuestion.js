class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      submitted: false
    }
  }

  render () {
    return <div>
      {this.props.question}

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
        onClick={() => this.state.answer && this.setState({submitted: true})}>
        Submit
      </button>

      <div style={{border: 'solid'}}>
        <div style={{opacity: this.state.submitted ? 1 : 0}}>
          {(this.state.answer == this.props.correctAnswer ?
            <h4>Correct!</h4> :
            <h4>Wrong!</h4>
          )}
          {this.props.explanation}
        </div>
      </div>
    </div>
  }
}

export default MultipleChoiceQuestion
