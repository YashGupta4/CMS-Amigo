// routes/facultyRoutes.js

const express = require('express');
const router = express.Router();
const { auth, isFaculty } = require('../middleware/authMiddleware');
const facultyController = require('../controllers/facultyController');

router.post('/courses', auth, isFaculty, facultyController.createCourse);
router.put('/courses/:id', auth, isFaculty, facultyController.updateCourse);
router.get('/courses', auth, isFaculty, facultyController.getInstructorCourses);

module.exports = router;
