import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './__editor.css';
import RichTextEditor from 'react-rte';

class Editor extends Component
{
  static propTypes = {
    onChange: PropTypes.func
  };

  constructor(props)
  {
    super(props);
    this.state = { value: RichTextEditor.createEmptyValue() };
    this.onChange = this.change.bind(this);
  }

  change(value)
  {
    this.setState({ value });
    if (this.props.onChange)
    {
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  render()
  {
    const { id } = this.props;
    return (<div className={styles.editor}>
      <h1>Editor {id}</h1>
      <div>
        <a href={undefined}>
          Add Solving
        </a>
        <span> | </span>
        <a href={undefined}>
          Add Problem
        </a>
      </div>
      <div>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    </div>);
  }
}

Editor.propTypes = {
  id: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps)
{
  return {
    id: ownProps.params.id
  };
}

export default connect(mapStateToProps)(Editor);
