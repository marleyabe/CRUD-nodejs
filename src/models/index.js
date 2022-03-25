const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')
const Todo = require('./todo')

const todo = Todo(sequelize, Sequelize.DataTypes)

const db = {
    todo,
    sequelize
}

module.exports = db