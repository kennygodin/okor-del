const express = require('express');
const { contactUs, requestCallback } = require('../controllers/contactUs');

const router = express.Router();

router.post('/contact-us', contactUs);
router.post('/request-callback', requestCallback);

module.exports = router;
