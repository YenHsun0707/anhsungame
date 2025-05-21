const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Placeholder admin check middleware
function adminCheck(req, res, next) {
  // TODO: Implement real admin role check
  // For now, allow all authenticated users
  next();
}

// Manage brick types
router.get('/bricks', authMiddleware, adminCheck, (req, res) => {
  // TODO: Return brick types and configurations
  res.json({ message: 'Get brick types - to be implemented' });
});

router.post('/bricks', authMiddleware, adminCheck, (req, res) => {
  // TODO: Add or update brick types
  res.json({ message: 'Add/update brick types - to be implemented' });
});

// Manage levels
router.get('/levels', authMiddleware, adminCheck, (req, res) => {
  // TODO: Return level configurations
  res.json({ message: 'Get levels - to be implemented' });
});

router.post('/levels', authMiddleware, adminCheck, (req, res) => {
  // TODO: Add or update levels
  res.json({ message: 'Add/update levels - to be implemented' });
});

// Export data (JSON or CSV)
router.get('/export', authMiddleware, adminCheck, (req, res) => {
  // TODO: Export game records
  res.json({ message: 'Export data - to be implemented' });
});

// Import data
router.post('/import', authMiddleware, adminCheck, (req, res) => {
  // TODO: Import game records
  res.json({ message: 'Import data - to be implemented' });
});

// Statistics and reports
router.get('/stats', authMiddleware, adminCheck, (req, res) => {
  // TODO: Return statistics like active users, average scores, etc.
  res.json({ message: 'Statistics - to be implemented' });
});

module.exports = router;
