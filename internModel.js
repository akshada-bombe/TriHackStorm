const mongoose = require('mongoose');

const InternSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
    startDate: { type: Date, required: true },
    stipend: { type: Number, default: 0 },
});

module.exports = mongoose.model('Intern', InternSchema);
