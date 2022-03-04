import express from 'express'; // using this instead of const express = require('express');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express(); // to init express app

// setting up bodyParser to send requests
app.use(bodyParser.json({limit: "30mb", extended: true})); // limiting image size as some can be large
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// routes must go after app.use(corse());
app.use('/posts', postRoutes);

//set up connection to db www.mongodb.com/cloud/atlas
const CONNECTION_URL = "";
const PORT = process.env.PORT || 5000; // use Heroku's port or port 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) // params to prevent console warnings
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log("ERROR", error.message));

// mongoose.set('useFindAndModify', false); // makes sure we don't get any console warnings - DEPRECATED. no longer necesary. 
// https://stackoverflow.com/questions/69030963/error-usefindandmodify-is-an-invalid-option


