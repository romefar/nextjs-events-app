import React, { Fragment } from 'react';
import Head from 'next/head';
import { Typography } from 'antd';
import { EventList } from '../components/events';
import eventService from '../services/eventService';
import Button from '../components/shared/components/Button';

export default function HomePage ({ featuredEvents }) {
  return (
    <div>
      <Head>
        <meta name="description" content="replaced" />
      </Head>
      {featuredEvents.length
        ? (
        <Fragment>
          <Typography.Title style={{ textAlign: 'center', margin: '20px 0' }}>
            Featured events
          </Typography.Title>
          <EventList items={featuredEvents} />
        </Fragment>
          )
        : (
        <Button link='/events'>Show all events</Button>
          )}
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const featuredEvents = await eventService.getFeaturedEvents();

  return {
    props: {
      featuredEvents
    },
    revalidate: 1800
  };
};
