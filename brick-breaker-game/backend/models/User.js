const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  playerId: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  email: { type: String, unique: true, sparse: true },
  passwordHash: { type: String }, // for email login
  googleId: { type: String }, // for Google login
  score: { type: Number, default: 0 },
  lives: { type: Number, default: 3 },
  level: { type: Number, default: 1 },
  progress: { type: Object, default: {} }, // game progress data
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
