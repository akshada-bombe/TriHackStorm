const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentorModel');

// Get all mentors
router.get('/', async (req, res) => {
    try {
        const mentors = await Mentor.find().populate('assignedInterns');
        res.json(mentors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new mentor
router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const mentor = new Mentor({ name, email });
        await mentor.save();
        res.status(201).json(mentor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
