const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth.js');
const Comment = require('../models/Comment.js');
 
// Get all comments
router.get('/', protect, async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('author', 'name')
      .populate('post', 'title');
    res.json({ message: 'Comments fetched', comments });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
 
//  Create a new comment
router.post('/', protect, async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json({ message: 'Comment created', comment });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create comment', error: err.message });
  }
});
 
// Update a comment
router.put('/:id', protect, async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }   //ensure data is following schema
    );
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment updated', comment });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update comment', error: err.message });
  }
});
 
// Delete a comment
router.delete('/:id', protect, async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted', comment });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete comment', error: err.message });
  }
});
 
module.exports = router;