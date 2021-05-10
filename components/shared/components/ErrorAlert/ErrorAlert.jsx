import React from 'react';
import styles from './ErrorAlert.module.css';

const ErrorAlert = (props) => {
  return <div className={styles.alert}>{props.children}</div>;
};

export default ErrorAlert;
