const express = require('express');

const server = express();
const serverPort = 1245;

/**
 * Handle the root route and send a greeting message.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
server.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Start the server and listen on the specified port.
 */
server.listen(serverPort, () => {
  console.log(`Server is listening on port ${serverPort}`);
});

module.exports = server;
