const express = require('express');
const router = express.Router();
const Applied = require('../models/appliedModel');

// APPLY AS INSTRUCTOR
router.post('/as-instructor', async (req, res) => {
    try {
        const data = req.body;
        const result = await Applied.create(data);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET APPLIED INSTRUCTOR BY EMAIL
router.get('/applied-instructors/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const result = await Applied.findOne({ email });
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
