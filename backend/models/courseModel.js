// models/Course.js

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 1000
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  capacity: {
    type: Number,
    min: 1
  },
  enrollmentCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Virtual for course URL
CourseSchema.virtual('url').get(function() {
  return `/courses/${this._id}`;
});

// Method to check if the course is full
CourseSchema.methods.isFull = function() {
  return this.enrollmentCount >= this.capacity;
};

// Pre-save hook to update enrollment count
CourseSchema.pre('save', function(next) {
  if (this.isModified('students')) {
    this.enrollmentCount = this.students.length;
  }
  next();
});

module.exports = mongoose.model('Course', CourseSchema);
