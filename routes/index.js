var express = require('express');
var router = express.Router();
const User = require('./users');
const bcrypt = require("bcryptjs");


// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET register page
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

// POST register
router.post('/register', async function(req, res, next) {
  try {
    const { username, email, password, birthday } = req.body;

    // ✅ Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      birthday
    });

    await newUser.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
