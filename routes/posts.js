const express = require('express');
const router = express.Router();

const Post = require('../models/Post.js');

//get posts
router.get('/', async(req, res) => {
       const posts = await Post.find()
       .populate('author', 'name')
       res.json({message: "post fetched", posts})
}) 

//create post
router.post('/', async(req, res) => {
    const posts = await Post.create(req.body);
    res.json({ message: "post create", posts})
})

module.exports = router;