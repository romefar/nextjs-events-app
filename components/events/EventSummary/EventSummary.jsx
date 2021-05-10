import React from 'react';

import styles from './EventSummary.module.css';

const EventSummary = (props) => {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
