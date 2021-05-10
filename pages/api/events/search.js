import nextConnect from 'next-connect';
import dbMiddleware from '../../../server/middlewares/connect';
import eventService from '../../../server/services/event.service';

const handler = nextConnect();

handler.use(dbMiddleware);

handler.post(async (req, res) => {
  try {
    const data = req.body;
    const events = await eventService.getEventByPartialDate(data);

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
