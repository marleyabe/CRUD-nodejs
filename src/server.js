const express = require("express")
const todosRoutes = require('./routes/todos.routes')
const app = express()
const { sequelize } = require('./models/index')

app.use(express.json())
app.use(todosRoutes)

sequelize.sync().then(() => {
    console.log('db funcionando')
})

app.get("/api", (request, response) => {
    return response.json("up")
})

app.listen(3000, () => console.log("Server is running"))