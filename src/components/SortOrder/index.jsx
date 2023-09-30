import React from 'react';
import styles from './SortOrder.module.scss';

const SortOrder = ({ isAscending, toggleSortOrder }) => {
  return (
    <div className={styles.root}>
      <button onClick={toggleSortOrder}>{isAscending ? '↑' : '↓'} </button>
    </div>
  );
};

export default SortOrder;
