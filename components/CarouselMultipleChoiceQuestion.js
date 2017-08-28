import Row from './Row'

class CarouselMultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerIdx: 0,
      submitted: false
    }
  }

  goRight () {
    this.setState({ answerIdx: (this.state.answerIdx + 1) % this.props.answers.length });
  }

  render () {
    const currentAnswer = this.props.answers[this.state.answerIdx];
    const correct = this.state.answerIdx == this.props.correctAnswerIdx;

    const panelAnswerClass = this.state.submitted ?
      (correct ? 'panel-success' : 'panel-danger') :
      'panel-default';

    return <div className="panel panel-default">
      <div className="panel-body">
        <h4>Question</h4>
        <div>{this.props.question}</div>

        <Row>
          <div>
            {currentAnswer}
            <button
              disabled={this.state.submitted}
              className='btn btn-primary'
              onClick={() => this.setState({submitted: true})}>
              Submit
            </button>
          </div>
          <div>
            <button
              className='btn btn-default'
              disabled={this.state.submitted}
              onClick={() => this.state.submitted || this.goRight()}>
              <i className='fa fa-arrow-right' />
            </button>
          </div>
        </Row>

        {this.state.submitted && <div className={`panel ${panelAnswerClass}`}>
          <div className='panel-heading'>
            <h3 className='panel-title'>{(correct ? "Correct!" : "Wrong!")}
            </h3>
          </div>
          <div className="panel-body">
            {this.props.explanation}
            {correct ? this.props.correctText : this.props.incorrectText}
            {!correct &&
              <button
                className='btn btn-primary'
                onClick={() => this.setState({submitted: false})}>
                Try again
              </button>
            }
          </div>
        </div>}
      </div>
    </div>
  }
}

export default CarouselMultipleChoiceQuestion
