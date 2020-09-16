const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('We are on home');
});



mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log('connected to server')})

app.listen(process.env.PORT || 3000);