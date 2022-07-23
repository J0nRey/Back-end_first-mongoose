const mongoose = require('mongoose')

const DB_USER = 'jonathan'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-once.gxa7e.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


// schema : Es la forma de los datos que van a estar en esa plantilla.
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    },
    gender: {
        type: String,
        maxLength: 1,
        enum: [ 'm', 'f' ],
        require: true
    }
})


// model : Es una entidad que nos va a ayudar a crear varios documentos con el mismo foremato, como una plantilla.
// const Koder = mongoose.model('Nombre de la coleccion', Esquema)
const Koder = mongoose.model('koders', koderSchema)


mongoose.connect(url)
.then( (connection) => {
    console.log('DB Connected :D : ', connection)

     /* consultar / filtrar */
    // Koder.find({
    //     gender: 'f'
    // })
    // .then( (kodersFound) => {
    //     console.log( 'Array: ', kodersFound)
    // } )
    // .catch( (error) => {
    //     console.error( 'Error: ', error)
    // } )


     /* Crear */
    Koder.create({
        name: 'Mario',
        lastName: 'Andrade',
        age: 21,
        gender: 'm'
    })

    .then( (koderCreated) => {
        console.log( 'koder Created: ', koderCreated)
    } )
    .catch( (error) => {
        console.error( 'Error: ', error)
    } )
} )
.catch( (error) => {
    console.error('Error D: :', error)
} )