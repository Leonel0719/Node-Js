const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Practica4', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conexión existosa a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB', err));