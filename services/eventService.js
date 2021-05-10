class EventService {
  getAllEvents = async () => {
    const res = await fetch('http://localhost:3000/api/events');
    const data = await res.json();

    return data;
  }

  createEvent = async (data) => {
    const res = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.ok;
  }

  getEventById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/events/${id}`);
    const event = await res.json();

    return event;
  }

  getFeaturedEvents = async (id) => {
    const res = await fetch('http://localhost:3000/api/events/featured');
    const events = await res.json();

    return events;
  }

  getEventsByPartialDate = async ({ year, month }) => {
    const res = await fetch('http://localhost:3000/api/events/search', {
      method: 'POST',
      body: JSON.stringify({ year, month }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const events = await res.json();

    return events;
  }
}

export default new EventService();
