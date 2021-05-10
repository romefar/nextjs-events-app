import React from 'react';
import styles from './LogisticsItem.module.css';

const LogisticsItem = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
