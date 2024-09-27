const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  resume: String,  // Will be a URL for the uploaded resume
  type: String, // "employer" or "job_seeker"
});

module.exports = mongoose.model('User', UserSchema);
