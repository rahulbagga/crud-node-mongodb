const express=require('express');
const router = express.Router();
const controller = require('../controller/userController');

router.get('/',(req,res)=>{
    res.render('index.ejs')
}); 

router.get('/new-user',(req,res)=>{
    res.render('addUser');
});
router.get('/edit-user',(req,res)=>{
    res.render('editUser');
})

//api
router.post('/api/users',controller.create);

module.exports= router;