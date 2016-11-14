import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import styles from './__navigationItem.css';
import ItemShape from './shape';

function NavigationItem({ type, title, id, selected, solved, solving })
{
  const isProblem = (type === 'solution');
  const isSolution = (type === 'problem');
  const isSolved = (isProblem && solved);
  const isSolving = (isSolution && solving);

  const itemClass = cn({
    [styles.navigationItem]: true,
    [styles.navigationItem_type_solution]: isProblem,
    [styles.navigationItem_type_problem]: isSolution,
    [styles.navigationItem_selected]: selected,
    [styles.navigationItem_solving]: isSolving,
    [styles.navigationItem_solved]: isSolved
  });

  const editUrl = `/edit/${id}`;

  return (<li className={itemClass}>
    <Link to={editUrl}>{title}</Link>
  </li>);
}

NavigationItem.propTypes = ItemShape;
NavigationItem.defaultProps = {
  selected: false
};

export default NavigationItem;
