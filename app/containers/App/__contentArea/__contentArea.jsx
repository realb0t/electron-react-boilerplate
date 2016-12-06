import React, { PropTypes } from 'react';
import styles from './__contentArea.css';

function ContentArea({ children })
{
  return (<div className={styles.app__contentArea}>
    {children}
  </div>);
}

ContentArea.propTypes = {
  children: PropTypes.node
};

export default ContentArea;
