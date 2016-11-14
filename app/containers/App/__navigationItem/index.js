import React from 'react';
import Item from './__navigationItem.jsx';

export const Problem = (props) => (<Item {...props} type="problem" />);
export const Solution = (props) => (<Item {...props} type="solution" />);
export default Item;
