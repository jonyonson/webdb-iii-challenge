const router = require('express').Router();

const studentsDb = require('./students-model');

router.post('/', (req, res) => {
  studentsDb
    .add(req.body)
    .then(student => {
      res.status(201).json(student);
    })
    .catch(error => {
      res.status(500).json(student);
    });
});

router.get('/', (req, res) => {
  studentsDb
    .find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  studentsDb
    .findById(req.params.id)
    .then(student => {
      res.status(200).json(student);
    })
    .catch(error => {
      res.status(500).json({ message: 'Student not found' });
    });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  studentsDb.update(id, changes).then(updated => {
    if (updated > 0) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  });
});

router.delete('/:id', (req, res) => {
  studentsDb
    .remove(req.params.id)
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
