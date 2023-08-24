const http = require('http');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const server = http.createServer();

// Handle incoming requests
server.on('request', (req, res) => {
  const responseText = 'Hello Holberton School!';

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;

  // Write response content
  res.write(Buffer.from(responseText));
  res.end(); // End the response
});

// Start the server
server.listen(SERVER_PORT, SERVER_HOST, () => {
  process.stdout.write(`Server listening at -> http://${SERVER_HOST}:${SERVER_PORT}\n`);
});

module.exports = server;
