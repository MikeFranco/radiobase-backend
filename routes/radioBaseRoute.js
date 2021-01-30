const express = require('express');
const { getRadioBases } = require('../controllers/radioBaseControllers');
const router = express.Router();

router.get('/tables', getRadioBases);

module.exports = router;

