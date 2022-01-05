const express = require('express');
const multer  = require('multer');
const router = express.Router();
const upload = multer();
const User = require('../model/users');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), async (req, res, next) => {
  const user = new User({ 
    name: req.body.name,
    surname: req.body.surname,
    number: req.body.number,
  });
  await user.save();
  res.send(`hello ${req.body.name}`)
});

module.exports = router;
