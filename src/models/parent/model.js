const mongoose = require('mongoose');
const { schema } = require('./schema');

const Parent = mongoose.model('Parent', schema);


module.exports = { Parent };
