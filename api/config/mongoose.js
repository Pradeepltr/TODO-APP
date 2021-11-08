//require or import mongoose for create database connection
const mongoose=require('mongoose');
//create database connection
mongoose.connect('mongodb://localhost/todolistdb');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting to the db'));
db.once('open',function(){
    console.log("Successfully Connected to the database");
});