const mongoose = require('mongoose');

const ContentIdeaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    enum: ['blog', 'video', 'social'],
    required: true,
  },
  keywords: [{
    type: String,
    trim: true,
  }],
  category: {
    type: String,
    trim: true,
  },
  savedToCalendar: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ContentIdea', ContentIdeaSchema);
