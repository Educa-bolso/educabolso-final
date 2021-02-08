const express = require('express');

const routes = require('../../routes');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log('Servidor subiu!!');
});