import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

const MyButton = (props) => {
  return props.link
    ? (
    <Link href={props.link}>
      <a className={styles.link}>{props.children}</a>
    </Link>
      )
    : (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
      );
};

export default MyButton;
