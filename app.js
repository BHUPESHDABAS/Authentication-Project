const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');
const mongoose = require('mongoose');

const session = require('express-session');
app.use(session({
    secret: 'keyboard bat',
    resave: false,
    saveUninitialized: true
}))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/user')) //routes 


mongoose.connect('mongodb://127.0.0.1:27017/verification')
.then(()=>{
    app.listen(PORT, () => {
        console.log(`http://localhost:PORT`);
    });
})
.catch((err)=>{
    console.log(err);
})
