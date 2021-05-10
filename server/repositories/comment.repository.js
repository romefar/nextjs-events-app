import BaseRepository from './base.repository';
import Comment from '../database/models/Comment';

class CommentRepository extends BaseRepository {
  constructor () {
    super(Comment);
  }
}

export default new CommentRepository();
