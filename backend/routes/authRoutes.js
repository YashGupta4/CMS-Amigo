const express = require('express');
const { login, getCurrentUser, logout, forgotPassword, resetPassword, forgotUsername, register } = require('../controllers/authController');
const { auth } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getCurrentUser);
router.post('/logout', auth, logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/forgot-username', forgotUsername);

module.exports = router;