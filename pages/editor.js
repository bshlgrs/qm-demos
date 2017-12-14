import Link from 'next/link'
import Layout from '../components/Layout'
import Row from '../components/Row'
import SimpleGraph from '../components/SimpleGraph'
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import Immutable from 'immutable'

// Import Brace and the AceEditor Component
// import brace from 'brace';
if (typeof window !== 'undefined') {
  require('../node_modules/react-ace');
  require('../node_modules/brace');
}

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';


class Editor extends React.Component {

  constructor () {
    super();
    //  JSON.parse(global.localStorage.getItem("editorState") || "false") ||
    const currentState = [
        {title: 'sample', body: 'body $$x^2$$'},
        {title: 'sample 2', body: 'body $$x^2$$ foo2'},
        {title: 'sample 3', body: 'body $$x^2$$ foo3'},
        {title: 'sample 4', body: 'body $$x^2$$ foo4'}
      ];

    this.state = {
      docs: Immutable.fromJS(currentState),
      currentDocId: 0,
      uiState: 'none',
      hasRendered: false
    }
  }

  componentDidMount() {
    this.setState({ hasRendered: true });
  }

  setStateAndSave(newState) {
    global.localStorage.setItem('editorState', JSON.stringify(newState.docs));
    this.setState(newState);
  }

  addItem () {
    this.setStateAndSave({
      docs: this.state.docs.push(Immutable.fromJS({ title: '', body: '' })),
      currentDocId: this.state.docs.size,
      uiState: 'editing-body'
    })
  }

  render () {
    const containerStyle = {display: 'flex'};
    const leftColStyle = {display: 'flex', flexDirection: 'column', width: '150px'};
    const rightColStyle = {marginLeft: '20px'};
    const leftColItemStyle = {margin: '3px', padding: '5px', border: 'solid', borderColor: 'grey'};
    const leftColAddStyle = Object.assign({}, leftColItemStyle, { backgroundColor: 'pink' })
    const currentDocId = this.state.currentDocId;
    const currentDoc = this.state.docs.get(currentDocId);

    return <Layout naked>
      <h2>Editor</h2>
      <div style={containerStyle}>
        <div style={leftColStyle}>
          {this.state.docs.map((x, idx) =>
            <div
              style={Object.assign({}, leftColItemStyle, {color: x.get('title') ? '' : '#b3b3b3'})}
              key={idx}
              onClick={() => this.setState({currentDocId: idx, uiState: 'none'})}>
              {x.get('title') || "Untitled"}
            </div>)}
            <div onClick={() => this.addItem()} style={leftColAddStyle}>add</div>
        </div>
        <div style={rightColStyle}>
          <DocTitle
            title={currentDoc.get('title')}
            isEditing={this.state.uiState == 'editing-title'}
            onChange={(newTitle) =>
              this.setStateAndSave({ docs: this.state.docs.setIn([currentDocId, 'title'], newTitle) })}
            toggleEditing={() =>
              this.setState({ uiState: this.state.uiState == 'editing-title' ? 'none' : 'editing-title' })}/>
         {this.state.hasRendered && <DocBody
            body={currentDoc.get('body')}
            isEditing={this.state.uiState == 'editing-body'}
            onChange={(newBody) =>
              this.setStateAndSave({ docs: this.state.docs.setIn([currentDocId, 'body'], newBody) })}
            toggleEditing={() =>
              this.setState({ uiState: this.state.uiState == 'editing-body' ? 'none' : 'editing-body' })
            }/>}
        </div>
      </div>
    </Layout>
  }
}

const DocTitle = ({title, isEditing, onChange, toggleEditing}) => {
  if (isEditing) {
    return <input value={title} onChange={(e) => onChange(e.target.value)} onBlur={() => toggleEditing()} />
  } else {
    return <h3 style={title ? {} : {color: '#b3b3b3'}} onClick={() => toggleEditing()}>{title || "Untitled"}</h3>
  }
}

const DocBody = ({body, isEditing, onChange, toggleEditing}) => {
  return <AceEditor
                    mode="java"
                    theme="github"
                    onChange={onChange}
                    value={body}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }} />

  if (isEditing || !body) {
    return <textarea value={body} onChange={(e) => onChange(e.target.value)} onBlur={() => toggleEditing()} />

  } else {
    return <MarkdownWithLatex onClick={() => toggleEditing()} text={body}/>
  }
}

export default Editor;
