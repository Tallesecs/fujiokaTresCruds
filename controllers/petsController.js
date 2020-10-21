const pets = require('../models/pets')
const Pet = require('../models/pets')

module.exports = app => {
    app.get('/pets', (req, res) => {
        Pet.list(res) 
    })

    app.post('/pets', (req, res) => { 
        const pet = req.body

        pet.create(pets, res)
        
    })

   
    app.patch('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        pet.update(id, valores, res)
    })

    app.delete('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        pet.delete(id, res)
    })


}