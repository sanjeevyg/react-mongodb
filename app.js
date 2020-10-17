const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json())
app.use(cors())

//Import Routes 
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);

//ROUTES
// app.get('/', (req, res) => {
//     res.send('We are on home');
// });

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("connected to DB")) 


app.listen(3000);