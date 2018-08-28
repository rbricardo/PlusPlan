
const express = require('express');

const router = express.Router();

// MODEL
const Table = require('../models/tableModel');

// LIST TABLE
router.get('/list', async (req, res) => {
  try {
    const table = await Table.find();
    return res.send(table);
  } catch (error) {
    return res.status(400).send({ error: 'error to list users' });
  }
});

// ADD TABLE
router.post('/add', async (req, res) => {
  try {
    const table = await Table.create(req.body);
    return res.status(200).send(table);
  } catch (error) {
    return res.status(400).send({ error: 'error to create user' });
  }
});

// DELETE TABLE
router.delete('/delete', (req, res) => {
  Table.remove({}, () => {
    res.send('Everything has been removed');
  });
});

module.exports = app => app.use('/table', router);
