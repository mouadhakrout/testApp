/**
 * MessagesController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list:function(req,res){
      Messages.find({}).exec(function(err,messages){
        if(err){
          res.send(500,{error:'Database Error'})
        }
        res.send({messages:messages});
      })
    },
    create:function(req,res){
       let firstName = req.body.firstName;
       let lastName = req.body.lastName;
       let emailAdress = req.body.emailAdress;
       let phoneNumber = req.body.phoneNumber;
       let subject = req.body.subject;
       let body = req.body.body;
       Messages.create({firstName:firstName,
                       lastName:lastName,
                       emailAdress:emailAdress,
                       phoneNumber:phoneNumber,
                       subject:subject,
                       body:body}).exec(function(err,message){
        if(err){
          res.send(500,{error:err})
        }
        res.send(200) 
      })
    }
	
};

