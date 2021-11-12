const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const route = require('./routes');
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', route);

app.use(function(req, res, next) {
  res.status(500);
  res.render('error');
});

module.exports = app;