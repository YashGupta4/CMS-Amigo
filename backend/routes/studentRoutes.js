// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const { auth, isStudent } = require('../middleware/authMiddleware');
const studentController = require('../controllers/studentController');

router.get('/courses', auth, isStudent, studentController.getEnrolledCourses);
router.post('/courses/:id/enroll', auth, isStudent, studentController.enrollCourse);
router.get('/profile', auth, isStudent, studentController.getProfile);

module.exports = router;
