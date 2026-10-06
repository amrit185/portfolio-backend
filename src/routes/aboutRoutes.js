const express = require('express');
const router = express.Router();
const { getAbout, updateAbout } = require('../controllers/aboutController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAbout);
router.post('/', protect, updateAbout); // Using POST to handle the upsert

module.exports = router;