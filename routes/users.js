const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

//get user
router.get('/', async(req, res) => {
    const users = await User.find();
    res.json({message: "user fetched!", users})
})

//create user 
router.post('/', async(req, res) => {
     const user = User.create(req.body);
     res.json({message: "user created!", user})
})

module.exports = router;