// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
            <li><Link to="/">Dashboard</Link></li>
          </ul>
          <ul>
            <li><Link to="/edit/1">First problem</Link></li>
            <li><Link to="/edit/2">Second problem</Link></li>
            <li><Link to="/edit/3">Third problem</Link></li>
            <li><Link to="/edit/4">Fourd problem</Link></li>
            <li><Link to="/edit/5">Fived problem with very long title</Link></li>
          </ul>
        </div>
        <div className={styles.application__contentArea}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
