const express = require('express');
const router = express.Router();
const Intern = require('../models/internModel');

// Get all interns
router.get('/', async (req, res) => {
    try {
        const interns = await Intern.find().populate('mentor');
        res.json(interns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new intern
router.post('/', async (req, res) => {
    try {
        const { name, email, company, startDate, stipend, mentor } = req.body;
        const intern = new Intern({ name, email, company, startDate, stipend, mentor });
        await intern.save();
        res.status(201).json(intern);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
