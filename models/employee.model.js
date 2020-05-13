const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, requried: true },
    lastName: { type: String, requried: true },
    department: { type: String, required: true, ref: 'Department' }
})

module.exports = mongoose.model('Employee', employeeSchema);