const express = require('express');
const router = express.Router();
const { createAgencyClient } = require('../controllers/agencyController');

router.post('/agency-client', createAgencyClient);

module.exports = router;
