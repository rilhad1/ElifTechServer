const mongoose = require('mongoose');
const { schema } = require('./schema');

const Company = mongoose.model('Children', schema);


module.exports = { Company };
