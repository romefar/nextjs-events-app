import moment from 'moment';
import eventRepository from '../repositories/event.repository';
import BaseService from './base.service';

class EventService extends BaseService {
  constructor () {
    super(eventRepository);
  }

  async getOneById (id) {
    const event = await this.repository.findOne({ _id: id });

    if (!event) {
      throw new Error('Event does not exist.');
    }

    return event;
  }

  async getFeaturedEvents () {
    const events = await this.repository.find({ isFeatured: true });

    if (!events) {
      throw new Error('Cannot find events.');
    }

    return events;
  }

  async getEventByPartialDate ({ year, month }) {
    const startDate = moment({ year, month: month - 1, day: 1 });
    const endDate = moment({ year, month: month - 1, day: 1 }).endOf('month');

    const events = await this.repository.find({
      date: {
        $gte: startDate,
        $lt: endDate
      }
    });

    if (!events) {
      throw new Error('Cannot find events.');
    }

    return events;
  }
}

export default new EventService();
