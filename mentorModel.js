const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String },
    interns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Intern' }],
});

module.exports = mongoose.model('Mentor', MentorSchema);
