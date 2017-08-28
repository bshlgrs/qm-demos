import translate from '../lib/translator.js'

class MarkdownWithLatex extends React.PureComponent {
  render () {
    // todo: consider multiple children?
    const paragraphs = [this.props.text];

    return <div dangerouslySetInnerHTML={{__html: translate(this.props.text) }} />;
  }
}

export default MarkdownWithLatex;
