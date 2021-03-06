const express = require('express');
router = express.Router();

const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";
router.use('/base-endpoints', require(ROUTE_V1_PATH + 'base-endpoint'));
router.use('/rider-positions', require(ROUTE_V1_PATH + 'rider-position'));

module.exports = router;
