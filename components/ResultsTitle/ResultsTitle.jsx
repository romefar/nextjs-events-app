import React from 'react';
import Button from '../shared/components/Button';

import styles from './ResultsTitle.module.css';

const ResultsTitle = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString();

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
