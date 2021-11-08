//import express
const express=require('express');
//Set Router
var router=express.Router();


//import database connection
const db=require('../config/mongoose');
//import database schema
const List1 = require('../models/mongoose_schema');


//import or require all controller function and store in controller variable
var controller=require('../controller/homecontroller');
//call all controller function through router
//call function of homepage
router
.route("/")
.get(controller.HomePage);
//call function of create-task who send user data to database
router.route('/create-task')
.post(controller.HomePage1);
//call funtion delete for delete existing task
router.route('/delete')
.post(controller.delete);



//export router
module.exports=router;