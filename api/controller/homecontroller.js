//create or require mongoose schema
const List1 = require('../models/mongoose_schema');

//funtion for find database items and display 
module.exports.HomePage=function(req,res){
    
        List1.find({},function(err,todolist){
            if(err)
            {
                console.log("Error while fetching data",err);
            }
            console.log(todolist)

        return res.render('List',{list:todolist});
        });
        
}
    //function for create task or insert tast in database
        module.exports.HomePage1=function(req,res){
            //send data in database through shema from request body
        List1.create({
            description:req.body.description,
            category:req.body.category,
            due_date:req.body.due_date
        },function(err,newdata){
            if(err)
            {
                console.log("Error while inserting data");
                return;
            }
            console.log("Data Submited",newdata);
            return res.redirect('back');
        });
        }
        //Function for delete task from database
module.exports.delete=function(req,res){
            const keys=Object.keys(req.body);
            if(keys.length===0){
                return res.redirect("back")
            }
   //if we select multiple task deleteMany function delete all selected items         
List1.deleteMany({_id: {$in: keys}},function(err){
    if(err){
        console.log("error occurs while deleting");
        return;
    }
   
return res.redirect('back');
})
        }
    
        