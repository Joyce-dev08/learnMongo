const express = require('express');
const router = express.Router();

 const jsonweb = require('jsonwebtoken');
 const bcrypt = require('bcryptjs');

 const User = require('../models/User.js');

 // register 
 router.post('/register', async(req, res) => {
    const { name, email, phone, password } = req.body;

    //checking if user exist
    const exists = await User.findOne({email});
    if(exists){
        return res.json({message: "user already exists"})
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword
    })

    res.json({message: "User registered!"})

 })

 //login
router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    //check email
    const exists = await User.findOne({email});
    if(!exists){
        return res.json({message: "invalid email"})
    }

    //check password
    const isMatch = await bcrypt.compare(password, exists.password);
    if(!isMatch){
        return res.json({message: "invalid password"});
    }

    //create token

    const token = jsonweb.sign(
        {id: exists._id}, 
        process.env.JWT_SECRET, 
        {expiresIn: '1d'}
    );
    res.json({message: "login successful", token})
})


module.exports = router;