const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n** API running on http://localhost:${PORT} **\n`);
});
