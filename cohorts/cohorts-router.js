const router = require('express').Router();

const Cohorts = require('./cohorts-model');

// [POST] /api/cohorts This route should save a new cohort to the database.
router.post('/', (req, res) => {
  Cohorts.add(req.body)
    .then(cohort => {
      res.status(201).json(cohort);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
// [GET] /api/cohorts This route will return an array of all cohorts.
router.get('/', (req, res) => {
  Cohorts.find()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// [GET] /api/cohorts/:id This route will return the cohort with the matching id.
router.get('/:id', (req, res) => {
  Cohorts.findById(req.params.id)
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(error => {
      res.status(500).json({ message: 'Cohort not found' });
    });
});

// [GET] /api/cohorts/:id/students returns all students for the cohort with the specified id.
router.get('/:id/students', (req, res) => {
  Cohorts.getCohortStudents(req.params.id)
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// [PUT] /api/cohorts/:id This route will update the cohort with the matching id using information sent in the body of the request.
router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  Cohorts.update(id, changes).then(updated => {
    if (updated > 0) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Cohort not found' });
    }
  });
});

// [DELETE] /api/cohorts/:id This route should delete the specified cohort.
router.delete('/:id', (req, res) => {
  Cohorts.remove(req.params.id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ message: 'Cohort not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
