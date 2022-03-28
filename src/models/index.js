const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')
const Todo = require('./todo')
const User = require('./user')

const todo = Todo(sequelize, Sequelize.DataTypes)
const user = User(sequelize, Sequelize.DataTypes)
const db = {
    todo,
    user,
    sequelize
}

module.exports = db