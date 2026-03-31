const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment.js');

//get comments
router.get('/', async(req, res) => {
       const comments = await Comment.find()
       .populate('author', 'name')
       .populate('post', 'title')
       res.json({message: "comments fetched", comments})
}) 

//create comment
router.post('/', async(req, res) => {
    const comments = await Comment.create(req.body);
    res.json({ message: "comment created", comments})
})


module.exports = router;