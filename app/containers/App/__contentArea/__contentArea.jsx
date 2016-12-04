import React, { PropTypes, Component } from 'react';
import RichTextEditor from 'react-rte';
import styles from './__contentArea.css';

class ContentArea extends Component
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
    return (<div className={styles.app__contentArea}>
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    </div>);
  }
}

export default ContentArea;
