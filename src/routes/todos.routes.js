const express = require("express")
const { todo } = require('../models')

const todosRoutes = express.Router()

// Create
// http://localhost:3000/api/create
todosRoutes.post('/api/create', async (req, res) => {
    const { name } = req.body
    await todo.create({name:name, status:false})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err)
        })
})

// Read
// http://localhost:3000/api/read
todosRoutes.get('/api/read', async (req, res) => {
    await todo.findAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = todosRoutes

// Update
// http://localhost:3000/api/update
todosRoutes.put('/api/update/:id', async (req, res) => {
    await todo.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err)
        })
})

// Delete
// http://localhost:3000/api/delete
todosRoutes.delete('/api/delete/:id', async (req, res) => {
    await todo.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err)
        })
})