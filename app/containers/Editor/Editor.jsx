import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Editor.css';

export function Editor({ id })
{
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
  </div>);
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
