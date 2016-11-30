// @flow
import React, { Component, PropTypes } from 'react';
import styles from './app.css';
import NavigationPanel from './__navigationPanel';
import ContentArea from './__contentArea';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render()
  {
    return (
      <div className={styles.app}>
        <NavigationPanel />
        <ContentArea>
          {this.props.children}
        </ContentArea>
      </div>
    );
  }
}
