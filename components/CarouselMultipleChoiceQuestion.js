import Row from './Row'
import Panel from './Panel'

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

    const innerStyle = {
      padding: "20px",
      marginTop: "20px",
      backgroundColor: correct ? "#dce8cf" : "#f7cfcf",
      boxShadow: "2px 2px 2px #b9b9b9"
    }

    return <div style={{'marginBottom': '30px'}}>
      <Panel>
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
              Next option <i className='fa fa-arrow-right' />
            </button>
          </div>
        </Row>

        <div>
          {this.state.submitted && <div style={innerStyle}>
            <div className='panel-title'>
              {(correct ? "Correct!" : "Wrong!")}
            </div>
            {this.props.explanation}
            <div>{correct ? this.props.correctText : this.props.incorrectText}</div>
            {!correct && <button
              onClick={() => this.setState({submitted: false, answerIdx: 0})}
              className="btn btn-primary">
              Try again
            </button>}
          </div>}
        </div>
      </Panel>
    </div>
  }
}

export default CarouselMultipleChoiceQuestion;
