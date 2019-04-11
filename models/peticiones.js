const mongoose = require('mongoose');

const peticionesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    pqr: {
        type: String,
        required: true
    },

    mensaje: {
        type: String,
        required: true
    },

    // Lado Super Admin

    respuesta: {
        type: String,
        default: "-"
    },

    responsable: {
        type: String,
        default: "-"
    },

    estado: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

const peticiones = mongoose.model('peticiones', peticionesSchema);

module.exports = {
    peticiones
}