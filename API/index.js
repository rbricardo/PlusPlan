const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./db/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/tableController')(app);

app.listen(4000);
