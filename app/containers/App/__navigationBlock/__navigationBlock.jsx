import React, { PropTypes } from 'react';
import styles from './__navigationBlock.css';
import { Shape as ItemShape } from './../__navigationItem';
import NavigationList from './../__navigationList';

function NavigationItem({ title, items })
{
  return (<div className={styles.app__navigationBlock}>
    <h2>{title}</h2>
    <NavigationList items={items} />
  </div>);
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ItemShape),
};

NavigationItem.defaultProps = {
  items: []
};

export default NavigationItem;
