const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  postedBy: String,  // employer id
});

module.exports = mongoose.model('Job', JobSchema);
