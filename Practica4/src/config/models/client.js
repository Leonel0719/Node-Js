const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    // otros campos del cliente.....
});

module.exports = mongoose.model('Client', clientSchema);