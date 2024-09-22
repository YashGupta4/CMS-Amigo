// models/Assignment.js

const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
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
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  points: {
    type: Number,
    required: true,
    min: 0
  },
  submissions: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    submittedAt: {
      type: Date,
      default: Date.now
    },
    content: String,
    grade: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual for assignment URL
AssignmentSchema.virtual('url').get(function() {
  return `/assignments/${this._id}`;
});

// Method to check if a student has submitted the assignment
AssignmentSchema.methods.hasSubmitted = function(studentId) {
  return this.submissions.some(submission => submission.student.toString() === studentId.toString());
};

module.exports = mongoose.model('Assignment', AssignmentSchema);
