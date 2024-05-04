const express = require('express');
const router = express.Router();
const { updateClient, getTopClient } = require('../controllers/clientController');

router.put('/client/:id', updateClient);
router.get('/top-client', getTopClient);

module.exports = router;
