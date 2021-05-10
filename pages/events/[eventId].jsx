import React, { Fragment } from 'react';
import Head from 'next/head';
import {
  EventSummary,
  EventLogistics,
  EventContent
} from '../../components/events';
import Comments from '../../components/comments/Comments';
import ErrorAlert from '../../components/shared/components/ErrorAlert';
import eventService from '../../services/eventService';

export default function EventsDetailPage ({ event }) {
  if (!event?.id) {
    return (
      <ErrorAlert>
        <p>Event was not found.</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.address}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export const getStaticProps = async (ctx) => {
  const { eventId } = ctx.params;

  const event = await eventService.getEventById(eventId);

  if (!event) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      event
    },
    revalidate: 30
  };
};

export const getStaticPaths = async (ctx) => {
  // pre-fetch all event only for dev env
  const events = await eventService.getAllEvents();

  const ids = events.map((i) => ({
    params: { eventId: i.id }
  }));

  return {
    paths: ids,
    fallback: true
  };
};
