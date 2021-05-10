import nextConnect from 'next-connect';
import dbMiddleware from '../../../server/middlewares/connect';
import eventService from '../../../server/services/event.service';

const handler = nextConnect();

handler.use(dbMiddleware);

handler.get(async (req, res) => {
  try {
    const event = await eventService.getOneById(req.query.eventId);

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
