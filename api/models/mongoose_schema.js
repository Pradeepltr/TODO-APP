//require or import mongoose for create database schema
const mongoose=require('mongoose');
//create required database schema
const ListSchemas=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    due_date:{
       type:String,
       required:true
    }
})
const List1=mongoose.model('List1', ListSchemas);
//export these schema
module.exports=List1;