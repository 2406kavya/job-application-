const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create user
router.post('/', async (req, res) => {
  const { name, email, type } = req.body;
  const newUser = new User({ name, email, type });
  await newUser.save();
  res.json(newUser);
});

module.exports = router;
