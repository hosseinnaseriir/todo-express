const express = require('express');

const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/mammadscollection').then(res => {
    console.log('DB connected OK!')
})

server.use(cors());
server.use(bodyParser.json({ extended: true }));
server.use('/api',require('./routes').loginRoute)


server.listen(3000, () => console.log('running!'))

