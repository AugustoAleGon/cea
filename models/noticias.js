const mongoose = require('mongoose');

const NoticiasSchema = new mongoose.Schema({
    imagen: {
        type: String,
        default: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjE7obL18HhAhWCzlkKHTt2AisQjRx6BAgBEAU&url=https%3A%2F%2Fwww.wsls.com%2Ftop-stories%2Fwhats-news-today-february-18-2019&psig=AOvVaw0iiFWq31BpRsUNkGCRxh3F&ust=1554853710449155.png"
    },

    titulo: {
        type: String,
        required: true
    },

    cuerpoNoticia: {
        type: String,
        required: true
    },

    creadoPor: {
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

const Noticias = mongoose.model('Noticias', NoticiasSchema);

module.exports = {
    Noticias
}