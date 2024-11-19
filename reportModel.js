const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    intern: { type: mongoose.Schema.Types.ObjectId, ref: 'Intern', required: true },
    title: { type: String, required: true },
    description: { type: String },
    dateSubmitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', ReportSchema);
