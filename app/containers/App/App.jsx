// @flow
import React, { Component, PropTypes } from 'react';

import styles from './App.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render()
  {
    return (
      <div className={styles.application}>
        <div className={styles.application__navigationPanel}>
          <ul>
            <li>First problem</li>
            <li>Second problem</li>
            <li>Third problem</li>
            <li>Fourd problem</li>
            <li>Fived problem</li>
          </ul>
        </div>
        <div className={styles.application__contentArea}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
