const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))


// routes
app.use('/api/notices', require('./routes/notices'));


module.exports = app;