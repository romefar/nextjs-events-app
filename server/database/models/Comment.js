import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  text: {
    type: String,
    require: [true, 'Comment text is required.']
  },
  name: {
    type: String,
    require: [true, 'The location of the Event is required.']
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address.']
  },
  eventId: {
    type: String,
    require: [true, 'Event id is required']
  }
}, {
  timestamps: true
});

commentSchema.methods.toJSON = function () {
  const comment = this;

  return {
    id: comment._id,
    text: comment.text,
    name: comment.name,
    postDate: comment.createdAt
  };
};

// Next.js tries to create a new model on each update in dev mode
// TODO: remove 'mongoose.models.Event' before creating prod bundle
const Comment = mongoose.models.Comment || model('Comment', commentSchema);

export default Comment;
