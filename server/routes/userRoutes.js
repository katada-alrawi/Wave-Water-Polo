const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// GET ALL USERS
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET USER BY ID
router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET USER BY EMAIL
router.get('/user/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE A USER
router.delete('/delete-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE USER
router.put('/update-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.send(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
