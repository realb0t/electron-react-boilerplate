import React, { PropTypes, Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import styles from './__contentArea.css';

class ContentArea extends Component
{
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props)
  {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render()
  {
    // const { children } = this.props;
    const { editorState } = this.state;

    return (<div className={styles.app__contentArea}>
      <Editor editorState={editorState} onChange={this.onChange} />
    </div>);
  }
}

export default ContentArea;
