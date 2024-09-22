// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const courseController = require('../controllers/courseController');

router.get('/', auth, courseController.getAllCourses);
router.get('/:id', auth, courseController.getCourseById);
router.delete('/:id', auth, courseController.deleteCourse);

module.exports = router;
