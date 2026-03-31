const express = require('express');
const router = express.Router();

const Post = require('../models/Post.js');
const protect = require('../middleware/auth.js');


//get posts
router.get('/',protect, async(req, res) => {
    try {
       const posts = await Post.find()
       .populate('author', 'name')
       res.status(200).json({message: "post fetched", posts})
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
}) 

//create post
router.post('/',protect, async(req, res) => {
          try{
    const {title, body, category} = req.body;
    const author = req.user.id;
    
    const posts = await Post.create({title, body, category, author});
    res.status(201).json({ message: "post created", posts})
          }catch(error){
        res.status(500).json({message: "server error"})
          }
})

//edit post
router.put('/:id',protect, async(req, res) => {
    try{
        const {title, body, category} = req.body;
        const author = req.user.id
        const userId = req.params.id

        const updated = await Post.findByIdAndUpdate(userId,{
            title, body, author, category
        })

        res.status(201).json({message: "post updated!"})
     } catch(err){
        res.status(500).json({message: "server error"})
        console.log("our error:"+err)
     }
})


//delete post
router.delete('/:id',protect, async(req, res) => {
try{
    await Post.findByIdAndDelete(req.params.id)

    res.status(200).json({message: "Post deleted"})
} catch(err){
    res.status(500).json({message: "server error"})
    console.log("our error:"+err)
}
})
module.exports = router;