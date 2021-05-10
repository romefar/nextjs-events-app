import React from 'react';
import Button from '../../shared/components/Button';
// import Image from 'next/image';
import { DateIcon, AddressIcon, ArrowRightIcon } from '../../icons';

import styles from './EventItem.module.css';

const EventItem = (props) => {
  const { title, image, date, address: location, id } = props;

  const address = location.replace(', ', '\n');
  const eventDate = new Date(date).toLocaleDateString();
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={image} alt={title} width={300} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{eventDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
