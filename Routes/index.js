const express = require('express');
const { index } = require('../Controllers/index');

const index = express.Router();

index.get('/', index);

module.exports.index = index;
