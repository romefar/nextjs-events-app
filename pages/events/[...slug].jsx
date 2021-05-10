import React, { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { EventList } from '../../components/events';
import ResultsTitle from '../../components/ResultsTitle';
import Button from '../../components/shared/components/Button';
import ErrorAlert from '../../components/shared/components/ErrorAlert';
import eventService from '../../services/eventService';

export default function EventsFilterPage ({ events, hasError }) {
  const router = useRouter();
  const params = router.query.slug ?? [];

  const year = +params[0];
  const month = +params[1];

  if (hasError) {
    return (
      <Fragment>
        <Head>
          <title>Filtered Events</title>
          <meta name="description" content="A list of filtered events" />
        </Head>
        <ErrorAlert>
          <p>Invalid filters.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!events || !events.length) {
    return (
      <Fragment>
        <Head>
          <title>Filtered Events</title>
          <meta name="description" content="A list of filtered events" />
        </Head>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filterDate = new Date(year, month - 1);

  return (
    <Fragment>
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${month - 1}/${year}.`}
        />
      </Head>
      <ResultsTitle date={filterDate} />
      <EventList items={events} />
    </Fragment>
  );
}

export const getServerSideProps = async (ctx) => {
  const params = ctx.params.slug;

  const year = +params[0];
  const month = +params[1];

  if (isNaN(year) || isNaN(month) || year > 2040 || month > 12 || month < 1) {
    return {
      props: {
        hasError: true
      }
    };
  }

  const events = await eventService.getEventsByPartialDate({
    year,
    month
  });

  return {
    props: {
      events
    }
  };
};
