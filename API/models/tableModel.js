const mongoose = require('mongoose');

const { Schema } = mongoose;

const TableSchema = new Schema({
  origin: String,
  destiny: String,
  time: String,
  plan: String,
  withPlan: String,
  withoutPlan: String,
});

const Table = mongoose.model('Table', TableSchema);

module.exports = Table;
