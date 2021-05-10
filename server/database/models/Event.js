import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    require: [true, 'Event Title is required.'],
    unique: [true, 'Event with the same name is already registered.']
  },
  date: {
    type: Date,
    require: [true, 'Date of Event is required.']
  },
  address: {
    type: String,
    require: [true, 'The location of the Event is required.']
  },
  image: {
    type: String
  },
  description: {
    type: String,
    require: [true, 'Description is required.']
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

eventSchema.methods.toJSON = function () {
  const event = this;

  return {
    id: event._id,
    date: event.date,
    title: event.title,
    address: event.address,
    image: event.image,
    description: event.description,
    isFeatured: event.isFeatured
  };
};

// Next.js tries to create a new model on each update in dev mode
// TODO: remove 'mongoose.models.Event' before creating prod bundle
const Event = mongoose.models.Event || model('Event', eventSchema);

export default Event;
