import nextConnect from 'next-connect';
import dbMiddleware from '../../../server/middlewares/connect';
import commentService from '../../../server/services/comment.service';

const handler = nextConnect();

handler.use(dbMiddleware);

handler.get(async (req, res) => {
  try {
    const event = await commentService.getComments(req.query.eventId);

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

handler.post(async (req, res) => {
  try {
    const comment = await commentService.create(req.body);

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
