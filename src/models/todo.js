const todo = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        name: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.BOOLEAN
        },
    })

    return Todo
}

module.exports = todo