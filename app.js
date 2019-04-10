const express = require('express');
const {
    Users,
    noticias,
    peticiones,
    dbConnect
} = require('./models')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send({
        message: 'Server On'
    })
});



// ************************** C R U D   U S E R  ************************** //
// ************************** C R U D   U S E R  ************************** //
// ************************** C R U D   U S E R  ************************** //



// ----------> Endpoint CREAR usuario POST ---------- //

app.post('/api/v1/users/create', (req, res) => {
    const {
        cedula,
        nombre,
        apellidos,
        password
    } = req.body
    const newUsers = Users({
        cedula,
        nombre,
        apellidos,
        password
    })

    newUsers.save((err, Users) => {
        !err
            ?
            res.status(201).send(Users) :
            res.status(409).send(err)
    })
})

// ----------> Endpoint OBTENER todos los usuarios GET <---------- //

app.get('/api/v1/users/get', (req, res) => {
    Users.find().exec()
        .then(Users => {
            res.status(200).send(Users)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// ----------> Endpoint INICIAR SESIÓN usuario POST <---------- //

app.post('/api/v1/users/login', (req, res) => {
    const {
        cedula,
        password
    } = req.body
    Users.findOne({
            cedula: cedula,
            password: password
        }).exec()
        .then((Existe) => {
            res.send(Existe)
        })
        .catch((err) => {
            res.status(409).send(err)
        });

});
// ----------> Endpoint REGISTRARSE  usuario POST <---------- //

app.post('/api/v1/users/register', (req, res) => {
    const {
        cedula,
        password,
        nombre,
        apellidos
    } = req.body
    const newUsers = Users({
        cedula,
        password,
        nombre,
        apellidos
    })

    newUsers.save((err, Users) => {
        !err
            ?
            res.status(201).send(Users) :
            res.status(409).send(err)
    })
})


// ----------> Endpoint OBTENER un usuario en específico GET<---------- //

app.get('/api/v1/Users/get/:Usersid', (req, res) => {
    const {
        Usersid
    } = req.params
    Users.findById(Usersid).exec()
        .then(Users => {
            res.status(200).send(Users)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// ----------> Endpoint MODIFICAR un usuario PUT <---------- //

app.put('/api/v1/users/update/:Usersid', (req, res) => {
    const {
        Usersid
    } = req.params
    Users.findByIdAndUpdate(Usersid, {
            $set: req.body
        }, {
            new: true
        }).exec()
        .then((Users) => {
            res.status(200).send(Users)
        }).catch((err) => {
            res.status(404).send(err)
        });
})

// ----------> Endpoint ELIMINAR logicamente un usuario DELETE <---------- //

app.delete('/api/v1/Users/delete/:usersid', (req, res) => {
    const {
        Usersid
    } = req.params
    Users.findByIdAndUpdate(Usersid, {
            $set: {
                is_active: false
            }
        }, {
            new: true
        }).exec()
        .then((Users) => {
            res.status(200).send(`The Users ${Usersid} has been removed`)
        }).catch((err) => {
            res.status(409).send(err)
        });
})



// ************************ C R U D  N O T I C I A S ************************ //
// ************************ C R U D  N O T I C I A S ************************ //
// ************************ C R U D  N O T I C I A S ************************ //


// ----------> Endpoint CREAR Noticia POST ---------- //

app.post('/api/v1/noticias/create', (req, res) => {
    const {
        titulo,
        cuerpoNoticia,
        creadoPor
    } = req.body
    const newNoticias = noticias({
        titulo,
        cuerpoNoticia,
        creadoPor
    })

    newNoticias.save((err, noticias) => {
        !err
            ?
            res.status(201).send(noticias) :
            res.status(409).send(err)
    })
})


// ----------> Endpoint obtener todas las noticias <---------- //

app.get('/api/v1/noticias/get', (req, res) => {
    noticias.find().exec()
        .then(noticias => {
            res.status(200).send(noticias)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})





// ----------> Endpoint modificar las noticias <---------- //

app.put('/api/v1/noticias/update/:noticiasid', (req, res) => {
    const {
        noticiasid
    } = req.params
    noticias.findByIdAndUpdate(noticiasid, {
            $set: req.body
        }, {
            new: true
        }).exec()
        .then((noticias) => {
            res.status(200).send(noticias)
        }).catch((err) => {
            res.status(404).send(err)
        });
})

// ----------> Endpoint eliminar logicamente noticias <---------- //

app.delete('/api/v1/noticias/delete/:noticiasid', (req, res) => {
    const {
        noticiasid
    } = req.params
    noticias.findByIdAndUpdate(noticiasid, {
            $set: {
                is_active: false
            }
        }, {
            new: true
        }).exec()
        .then((noticias) => {
            res.status(200).send(`The noticia ${noticiasid} has been removed`)
        }).catch((err) => {
            res.status(409).send(err)
        });
})

// ************************ C R U D     P  Q  R ************************ //
// ************************ C R U D     P  Q  R ************************ //
// ************************ C R U D     P  Q  R ************************ //


// ----------> Endpoint CREAR pqr del lado de VISITANTE POST ---------- //

app.post('/api/v1/peticiones/create', (req, res) => {
    const {
        nombre,
        email,
        pqr,
        mensaje
    } = req.body
    const newPeticiones = peticiones ({
        nombre,
        email,
        pqr,
        mensaje
    })

    newPeticiones.save((err, peticiones) => {
        !err
            ?
            res.status(201).send(peticiones) :
            res.status(409).send(err)
    })
})

// ----------> Endpoint OBTENER todos las peticiones GET <---------- //

app.get('/api/v1/peticiones/get', (req, res) => {
    peticiones.find().exec()
        .then(peticiones => {
            res.status(200).send(peticiones)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})








// ----------> Endpoint RESPONDER PQR del lado del ADMIN PUT ---------- //

app.put('/api/v1/peticiones/respuesta/:peticionesid', (req, res) => {
    
    const { peticionesid } = req.params
    peticiones.findByIdAndUpdate(peticionesid, { $set: req.body }, { new: true }).exec()
        .then((peticiones) => {
            res.status(200).send(peticiones)
        }).catch((err) => {
            res.status(409).send(err)
        });
})

// app.put('/api/v1/message/:id', (req, res) => {
//     const { id } = req.params
//     const { leido } = req.body
//     console.log(id)
//     Message.findOneAndUpdate({destinatarios:{$elemMatch:{_id:id}}},{$set:{"destinatarios.$.leido":leido}},{new:true}).exec()
//         .then((upRead) => {
//             res.send(upRead)
//         })
//         .catch((err) => {
//             res.status(409).send(err)
//         })
// });







// **************   L I S T E N I N G   **************//

dbConnect
app.listen(PORT, () => {
    console.log('Server on port ' + PORT);
})