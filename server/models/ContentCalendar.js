const mongoose = require('mongoose');

const CalendarEventSchema = new mongoose.Schema({
  ideaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ContentIdea',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  contentType: {
    type: String,
    enum: ['blog', 'video', 'social'],
    required: true,
  },
  scheduledDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['planned', 'in-progress', 'published', 'cancelled'],
    default: 'planned',
  },
});

const ContentCalendarSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  events: [CalendarEventSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ContentCalendar', ContentCalendarSchema);
