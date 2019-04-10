const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cedula: {
        type: Number,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },

    apellidos: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    activo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Users = mongoose.model('user', userSchema);

module.exports = {
    Users
}