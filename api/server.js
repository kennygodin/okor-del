const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const contactUsRoute = require('./routes/contactUsRoute');

const app = express();

// middlewares
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_CLIENT_API]
        : [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_CLIENT_API],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
  res.send('It is Working!');
});

app.use('/api', contactUsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App connected to DB & listening on port: ${PORT}`);
});
