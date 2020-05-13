const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, requried: true },
    client: { type: String, requried: true },
})

module.exports = mongoose.model('Product', productSchema);