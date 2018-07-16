/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  companyName: {
    _id: ObjectId,
    type: String,
    required: true,
    unique: true,
  },
  estimatedEarnings: {
    type: Number,
    required: true,
  },
  childrenCompanyIDs: [{
    type: ObjectId,
    ref: 'Children',
  }],
});

module.exports = { schema };
