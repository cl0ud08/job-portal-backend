const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { protect, restrictTo } = require('../middlewares/auth');

router.post('/', protect, restrictTo('employer'), async (req, res) => {
  const job = await Job.create({ ...req.body, postedBy: req.user.id });
  res.json(job);
});

router.get('/', async (req, res) => {
  const jobs = await Job.find().populate('postedBy', 'name');
  res.json(jobs);
});

module.exports = router;
