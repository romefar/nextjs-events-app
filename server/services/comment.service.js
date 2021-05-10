import commentRepository from '../repositories/comment.repository';
import BaseService from './base.service';

class CommentService extends BaseService {
  constructor () {
    super(commentRepository);
  }

  async getComments (eventId) {
    const options = { sort: { createdAt: 'desc' } };

    const comments = await this.repository.find({ eventId }, null, options);

    if (!comments) {
      throw new Error('Comments are empty.');
    }

    return comments;
  }
}

export default new CommentService();
