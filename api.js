//import log from 'logger.js'
/*const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));
//dotenv package needs to be installed
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));*/




//student data
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const pm = mongoose.connect(process.env.MONGODB_URL)

pm.then(()=>{
    console.log("Connection to MongoDB success")
})


const studentRouter = require('./router/student')
const taskRouter = require('./router/tasks')
const port = process.env.port;
const app = express();
app.listen(port, () => console.log(`Server running on port ${port}`));

//logger is middleware to show the internal request, express handles 
//Middleware -> just to create API

const logger = (req,res, next) => {
    console.log("Request received")
    console.log({
        url: req.url,
        body: req.body,
        method: req.menthos
    })
    next()

}

app.use(logger)
app.use(express.json())
app.use(taskRouter) // have to use this íf we are accesing body of request specialy POST request


