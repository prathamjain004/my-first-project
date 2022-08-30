const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User=require('./users')
mongoose.connect('mongodb+srv://avenger:avenger@cluster0.8hd9nun.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
User.find({},function(err,users){
    if(err) console.warn(err);
    console.warn(users);
})