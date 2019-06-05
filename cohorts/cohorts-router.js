const router = require('express').Router();

// const Cohorts = require('./cohorts-model');

router.get('/', (req, res) => {
  res.send('APIs running');
});

module.exports = router;
