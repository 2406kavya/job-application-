const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

// Post a job
router.post('/', async (req, res) => {
  const { title, description, postedBy } = req.body;
  const newJob = new Job({ title, description, postedBy });
  await newJob.save();
  res.json(newJob);
});

// Get all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
