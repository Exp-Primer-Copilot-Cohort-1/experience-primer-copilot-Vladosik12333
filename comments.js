// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import routes
const comments = require('./routes/comments');

// Create an express application
const app = express();

// Use morgan for logging
app.use(morgan('combined'));

// Use body parser to parse JSON bodies
app.use(bodyParser.json());

// Use CORS
app.use(cors());

// Use routes
app.use(comments);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});