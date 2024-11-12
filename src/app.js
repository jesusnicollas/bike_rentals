const express = require('express');
const logRoutes = require('./routes/logRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', logRoutes);

app.get('/', (req, res) => {
    res.send('API is running!');
});

module.exports = app;
