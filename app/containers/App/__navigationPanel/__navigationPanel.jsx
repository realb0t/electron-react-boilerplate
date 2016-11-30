import React from 'react';
import { Link } from 'react-router';
import styles from './__navigationPanel.css';

function NavigationPanel()
{
  const problemClasses = [
    styles.navigationItem,
    styles.navigationItem_type_problem
  ].join(' ');

  const problemSolvedClasses = [
    styles.navigationItem,
    styles.navigationItem_type_problem,
    styles.navigationItem_solved
  ].join(' ');

  const solutionClasses = [
    styles.navigationItem,
    styles.navigationItem_type_solution,
  ].join(' ');

  const solutionSelectedClasses = [
    styles.navigationItem,
    styles.navigationItem_type_solution,
    styles.navigationItem_selected
  ].join(' ');

  const solutionSolvingSolvedClasses = [
    styles.navigationItem,
    styles.navigationItem_type_solution,
    styles.navigationItem_solving
  ].join(' ');

  const dashboardClasses = [
    styles.navigationItem,
    styles.navigationItem_type_dashboard
  ].join(' ');

  const unresolvedListClasses = [
    styles.navigationItem,
    styles.navigationItem_type_unresolvedList
  ].join(' ');

  const noDecisionListClasses = [
    styles.navigationItem,
    styles.navigationItem_type_noDecisionList
  ].join(' ');

  const onTopClasses = [
    styles.navigationItem,
    styles.navigationItem_type_onTop
  ].join(' ');

  return (<div className={styles.app__navigationPanel}>
    <h1>Project Name</h1>
    <h2>Actions</h2>
    <ul>
      <li className={dashboardClasses}>
        <Link to="/">Dashboard</Link></li>
      <li className={unresolvedListClasses}>
        <a href={undefined}>Unresolved</a>
        <span className={styles.navigationItem__label}>(145)</span></li>
      <li className={noDecisionListClasses}>
        <a href={undefined}>No Decision</a>
        <span className={styles.navigationItem__label}>(1453)</span></li>
      <li className={onTopClasses}>
        <a href={undefined}>On Top Level</a></li>
    </ul>
    <h2>Second selected solution</h2>
    <ul>
      <li className={problemClasses}>
        <Link to="/edit/1">First problem</Link>
        <ul>
          <li className={solutionClasses}>
            <Link to="/edit/2">Second solution</Link>
          </li>
        </ul>
      </li>
      <li className={problemSolvedClasses}>
        <Link to="/edit/2">Second problem</Link>
        <ul>
          <li className={solutionSolvingSolvedClasses}>
            <Link to="/edit/2">Third solution</Link>
          </li>
          <li className={solutionSelectedClasses}>
            <Link to="/edit/2">Second selected solution</Link>
          </li>
        </ul>
      </li>
    </ul>
    <h2>Top Level</h2>
    <ul>
      <li className={problemClasses}>
        <Link to="/edit/1">First problem</Link>
        <ul>
          <li className={solutionClasses}>
            <Link to="/edit/2">Second solution</Link>
          </li>
        </ul>
      </li>
      <li className={problemSolvedClasses}>
        <Link to="/edit/2">Second problem</Link>
        <ul>
          <li className={solutionSolvingSolvedClasses}>
            <Link to="/edit/2">Third solution</Link>
          </li>
          <li className={solutionSelectedClasses}>
            <Link to="/edit/2">Second selected solution</Link>
          </li>
        </ul>
      </li>
      <li className={problemClasses}>
        <Link to="/edit/3">Third problem</Link>
      </li>
      <li className={problemClasses}>
        <Link to="/edit/4">Fourd problem</Link>
      </li>
      <li className={problemClasses}>
        <Link to="/edit/5">Fived problem with very long title</Link>
      </li>
    </ul>
  </div>);
}

NavigationPanel.propTypes = {
};

export default NavigationPanel;
