// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, registerAdmin } = require('../controllers/authController');

router.post('/login', login);
// NOTE: Remove or comment out the register route after creating your admin account!
router.post('/register', registerAdmin);

module.exports = router;