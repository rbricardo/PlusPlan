const mongoose = require('mongoose');

const dbConnection = 'mongodb://rbricardo:rbricardo123@ds051378.mlab.com:51378/vizir-challenge';

mongoose.connect(dbConnection);

module.exports = mongoose;
