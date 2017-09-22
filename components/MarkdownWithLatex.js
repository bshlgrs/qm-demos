import translate from '../lib/translator.js'

class MarkdownWithLatex extends React.PureComponent {
  render () {
    // todo: consider multiple children?
    const {text, ...rest} = this.props;
    const paragraphs = [text];



    return <div {...rest}>
    <style global jsx>{`
        blockquote {
          margin-left: 20px;
          border-left: solid;
          padding-left: 10px;
          border-left-color: lightgrey;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{__html: translate(this.props.text) }}  />
    </div>;
  }
}

export default MarkdownWithLatex;

