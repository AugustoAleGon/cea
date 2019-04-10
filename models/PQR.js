const mongoose = require('mongoose');

const PQRSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    PQR: {
        type: String,
        required: true
    },

    mensaje: {
        type: String,
        required: true
    },

    // Lado Super Admin

    respuesta: {
        type: String
    },

    responsable: {
        type: String
    },

    estado: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

const pqr = mongoose.model('pqr', PQRSchema);

module.exports = {
    pqr
}