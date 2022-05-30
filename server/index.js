const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./routes/route');
require('dotenv').config();

// Create a new express application instance
const app = express();
const Port = process.env.PORT || 7000;

//Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.use('/v1/post', Router);

//local database connection
mongoose
  .connect(process.env.LOCAL_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Database connection failed');
  });

// Start the server
app.listen(Port, function () {
  console.log(`App is listening at port http://localhost:${Port}`);
});
