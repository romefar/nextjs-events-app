import BaseRepository from './base.repository';
import Event from '../database/models/Event';

class EventRepository extends BaseRepository {
  constructor () {
    super(Event);
  }
}

export default new EventRepository();
