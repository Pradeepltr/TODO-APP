//import or require express
const express=require('express');
//set port where our server run
const port=8000;
//declare variable app for use of espress
const app=express();
//require or import all routes in routes varible 
var routes=require('./api/routes/index');
//for any static file use like css file
app.use('/public',express.static('public'));
//convert form data into json format
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//set view engine ejs
app.set('view engine','ejs');
//display all routes
app.use("/",routes);



//run server on given port
app.listen(port,function(err){
    if(err)
    {
        console.log("Error occurs ",err);
    }
    console.log("Server running on port ",port);
})