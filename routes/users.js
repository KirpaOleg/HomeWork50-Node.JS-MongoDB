const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send('respond with a resource form users');
});

module.exports = router;