const mongoose = require('mongoose');
const {
    Users
} = require('./Users');
const {
    Noticias
} = require('./Noticias');
const {
    pqr
} = require('./PQR');
const {
    Visitante
} = require('./Vistante.js');

const url = 'mongodb+srv://sa:Mauro1990@devf-epdnd.mongodb.net/CEA_WEB?retryWrites=true'

mongoose.connect(url, {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('Conexion exitosaaa')
    } else {
        console.log("Error en la conexion")
    }
});

module.exports = {
    Users,
    Noticias,
    pqr,
    Visitante
}