const mongoose = require('mongoose');
const Job = require('../models/job');
const cron = require('node-cron');

mongoose.connect('mongodb://127.0.0.1:27017/mindfulCampus', { useNewUrlParser: true, useUnifiedTopology: true });

const deleteOldJobs = async () => {
  try {
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    await Job.deleteMany({ postedOn: { $lt: ninetyDaysAgo } });

    console.log('Old jobs deleted.');
  } catch (error) {
    console.error('Error deleting old jobs:', error);
  } finally {
    mongoose.disconnect();
  }
};

// Schedules the script to run every day at midnight
cron.schedule('0 0 * * *', () => {
  deleteOldJobs();
});