const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const api = require('./src/api/index');
const { onAppStart } = require('./on-start');
const { mongoURI } = require('./config');

const app = express();
mongoose.Promise = global.Promise;

mongoose.connect((process.env.MONGODB_URI || mongoURI), { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/build')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});


// api routes v1
app.use('/api/v1', api);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

// on App start
onAppStart();

module.exports = app;
