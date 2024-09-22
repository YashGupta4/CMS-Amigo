const express = require('express');
const { check } = require('express-validator');
const { getAllUsers, createUser, deleteUser } = require('../controllers/adminController');
const { auth, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/users', auth, isAdmin, getAllUsers);

router.post(
  '/users',
  [
    auth,
    isAdmin,
    [
      check('username', 'Username is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
      check('role', 'Role is required').not().isEmpty(),
    ],
  ],
  createUser
);

router.delete('/users/:id', auth, isAdmin, deleteUser);

module.exports = router;