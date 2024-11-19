const express = require('express');
const router = express.Router();
const Intern = require('../models/internModel');

// Get all interns for coordinator
router.get('/interns', async (req, res) => {
    try {
        const interns = await Intern.find().populate('mentor');
        res.json(interns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update intern status
router.put('/interns/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const intern = await Intern.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(intern);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
