import React from 'react';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div>
      <label className={styles.nameLabel}>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default Filter;
