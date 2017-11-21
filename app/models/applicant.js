'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var applicantSchema = new Schema({
  applicantName: String,
  applicantDob: String
}, {
  timestamps: true
});

mongoose.model('applicant', applicantSchema)