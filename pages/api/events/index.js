import nextConnect from 'next-connect';
import dbMiddleware from '../../../server/middlewares/connect';
import eventService from '../../../server/services/event.service';

const handler = nextConnect();

handler.use(dbMiddleware);

handler.get(async (req, res) => {
  try {
    const events = await eventService.getAll();

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

handler.post(async (req, res) => {
  try {
    const data = req.body;
    const createdEvent = await eventService.create(data);

    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
