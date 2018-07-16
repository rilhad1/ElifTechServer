/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  earnings: {
    type: Number,
    required: true,
  },
  parentCompanyID: {
    type: ObjectId,
//    ref: 'Parent',
  },
  childrenCompanyIDs: [{
    type: ObjectId,
//    ref: 'Children',
  }],
});

module.exports = { schema };
