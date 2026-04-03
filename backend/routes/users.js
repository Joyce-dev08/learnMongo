const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth.js");
const User = require('../models/User.js');
 
//Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "Users fetched!", users });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
 
//Create a new user
router.post('/', protect, async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created!", user });
  } catch (err) {
    res.status(400).json({ message: "Failed to create user", error: err.message });
  }
});
 
// Update user
router.put('/:id', protect, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated!", user });
  } catch (err) {
    res.status(400).json({ message: "Failed to update user", error: err.message });
  }
});
 
// Delete user 
router.delete('/:id', protect, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted!", user });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
});
 
module.exports = router;