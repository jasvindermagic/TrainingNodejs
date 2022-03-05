const express = require('express')
const User = require('../models/user.js')
const router = express.Router()

router.get('/',async(req,res) => {
    try{
        const users = await User.find()
        res.json(users)
 }catch(err){
     res.send('Error ' + err)
 }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',async(req,res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        if(req.body.firstname)
        {
          user.firstname=req.body.firstname
        }
        if(req.body.lastname)
        {
          user.lastname=req.body.lastname
        }
        if(req.body.age)
        {
          user.age=req.body.age
        }
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id',async(req,res) => {
    try{
        const deleted = await User.findByIdAndDelete(req.params.id)
        res.json(deleted)
 }catch(err){
     res.send('Error ' + err)
 }
})

module.exports = router