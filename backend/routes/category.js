const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth.js');
const Category = require('../models/Category.js');
 
// Get all categories
router.get('/', protect, async (req, res) => {
  try {
    const categories = await Category.find()
      .populate('author', 'name'); // remove if no author field
    res.json({ message: 'Categories fetched', categories });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
 
// Create a new category
router.post('/', protect, async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json({ message: 'Category created', category });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create category', error: err.message });
  }
});
 
// Update a category 
router.put('/:id', protect, async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category updated', category });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update category', error: err.message });
  }
});
 
// Delete a category 
router.delete('/:id', protect, async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted', category });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category', error: err.message });
  }
});
 
module.exports = router;