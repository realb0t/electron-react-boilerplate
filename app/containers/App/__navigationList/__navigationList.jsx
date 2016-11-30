import React, { PropTypes } from 'react';
import styles from './__navigationList.css';
import Item, { Shape as ItemShape } from './../__navigationItem';

function NavigationItem({ items })
{
  return (<ul className={styles.app__navigationList}>
    {items.map((item) => (<Item {...item} />))}
  </ul>);
}

NavigationItem.propTypes = {
  items: PropTypes.arrayOf(ItemShape),
};

NavigationItem.defaultProps = {
  items: []
};

export default NavigationItem;
