import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { EventList, EventsSearch } from '../../components/events';
import EventCreateForm from '../../components/events/EventCreateForm';
import eventService from '../../services/eventService';

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  const onSearch = (year, month) => {
    const path = `/events/${year}/${month}`;

    router.push(path);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of events...'
        />
      </Head>
      <EventsSearch onSearch={onSearch} />
      <EventCreateForm createEvent={eventService.createEvent} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;

export const getStaticProps = async () => {
  const events = await eventService.getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 90
  };
};
