const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register with email
router.post('/register', async (req, res) => {
  const { playerId, nickname, email, password } = req.body;
  if (!playerId || !nickname || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already registered' });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({ playerId, nickname, email, passwordHash });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { playerId, nickname, email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login with email
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing email or password' });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { playerId: user.playerId, nickname: user.nickname, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Anonymous login
router.post('/anonymous', async (req, res) => {
  const { playerId, nickname } = req.body;
  if (!playerId || !nickname) return res.status(400).json({ message: 'Missing playerId or nickname' });
  try {
    let user = await User.findOne({ playerId });
    if (!user) {
      user = new User({ playerId, nickname });
      await user.save();
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { playerId: user.playerId, nickname: user.nickname } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Google login placeholder (to be implemented)
router.post('/google', (req, res) => {
  res.status(501).json({ message: 'Google login not implemented yet' });
});

module.exports = router;
