var Userdb=require('../model/user');

exports.create=(req,res)=>{
    const user = new Userdb({
        name: req.body.name,
        email:req.body.email,
        mob: req.body.mobileno,
        gender:req.body.gender
    })
    user.save(user);
}