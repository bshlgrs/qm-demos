import Link from 'next/link'
import Layout from '../components/Layout'
import Row from '../components/Row'
import SimpleGraph from '../components/SimpleGraph'
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import Immutable from 'immutable'


class Editor extends React.Component {

  constructor () {
    super();

    const currentState = JSON.parse(global.localStorage.getItem("editorState") || "false") || [
        {title: 'sample', body: 'body $$x^2$$'},
        {title: 'sample 2', body: 'body $$x^2$$ foo2'},
        {title: 'sample 3', body: 'body $$x^2$$ foo3'},
        {title: 'sample 4', body: 'body $$x^2$$ foo4'}
      ];

    this.state = {
      docs: Immutable.fromJS(currentState),
      currentDocId: 0,
      uiState: 'none'
    }
  }

  setStateAndSave(newState) {
    global.localStorage.setItem('editorState', JSON.stringify(newState.docs));
    this.setState(newState);
  }

  render () {
    const containerStyle = {display: 'flex'};
    const leftColStyle = {display: 'flex', flexDirection: 'column', width: '150px'};
    const rightColStyle = {marginLeft: '20px'};
    const leftColItemStyle = {margin: '3px', padding: '5px', border: 'solid', borderColor: 'grey'};
    const currentDocId = this.state.currentDocId;
    const currentDoc = this.state.docs.get(currentDocId);

    return <Layout naked>
      <h2>Editor</h2>
      <div style={containerStyle}>
        <div style={leftColStyle}>
          {this.state.docs.map((x, idx) =>
            <div style={leftColItemStyle} key={idx} onClick={() => this.setState({currentDocId: idx, uiState: 'none'})}>
              {x.get('title')}
            </div>)}
        </div>
        <div style={rightColStyle}>
          <DocTitle
            title={currentDoc.get('title')}
            isEditing={this.state.uiState == 'editing-title'}
            onChange={(newTitle) =>
              this.setStateAndSave({ docs: this.state.docs.setIn([currentDocId, 'title'], newTitle) })}
            toggleEditing={() =>
              this.setState({ uiState: this.state.uiState == 'editing-title' ? 'none' : 'editing-title' })}/>
          <DocBody
            body={currentDoc.get('body')}
            isEditing={this.state.uiState == 'editing-body'}
            onChange={(newBody) =>
              this.setStateAndSave({ docs: this.state.docs.setIn([currentDocId, 'body'], newBody) })}
            toggleEditing={() =>
              this.setState({ uiState: this.state.uiState == 'editing-body' ? 'none' : 'editing-body' })}/>
        </div>
      </div>
    </Layout>
  }
}

const DocTitle = ({title, isEditing, onChange, toggleEditing}) => {
  if (isEditing) {
    return <input value={title} onChange={(e) => onChange(e.target.value)} onBlur={() => toggleEditing()} />
  } else {
    return <h3 onClick={() => toggleEditing()}>{title}</h3>
  }
}

const DocBody = ({body, isEditing, onChange, toggleEditing}) => {
  if (isEditing) {
    return <textarea value={body} onChange={(e) => onChange(e.target.value)} onBlur={() => toggleEditing()} />
  } else {
    return <MarkdownWithLatex onClick={() => toggleEditing()} text={body}/>
  }
}

export default Editor;
