const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// Get player data
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-passwordHash -googleId');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Save game progress (auto or manual)
router.post('/save', authMiddleware, async (req, res) => {
  const { score, lives, level, progress } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.score = score ?? user.score;
    user.lives = lives ?? user.lives;
    user.level = level ?? user.level;
    user.progress = progress ?? user.progress;

    await user.save();
    res.json({ message: 'Game progress saved' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Load game progress
router.get('/load', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({
      score: user.score,
      lives: user.lives,
      level: user.level,
      progress: user.progress,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
