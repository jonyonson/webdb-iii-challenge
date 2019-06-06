const express = require('express');
const helmet = require('helmet');

const cohortsRouter = require('./cohorts/cohorts-router.js');
const studentsRouter = require('./students/students-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n** API running on http://localhost:${PORT} **\n`);
});
