const express = require("express")
const jwt = require('jsonwebtoken');
const todosRoutes = require('./routes/todos.routes')
const userRoutes = require('./routes/login.routes')
const app = express()
const { sequelize } = require('./models/index');
const req = require("express/lib/request");

app.use(express.json())
app.use(todosRoutes, userRoutes)

sequelize.sync().then(() => {
    console.log('db funcionando')
})

app.get("/api", (request, response, next) => {
    try{
        const token = request.headers.authorization.split(" ")[1]
        let decoded = jwt.verify(token, 'secret');
        return response.status(200).json({ message: 'up!', decoded })
    } catch {
        return response.status(401).json({ message: 'Couldnt Authenticate' })
    }
    

})

app.listen(3000, () => console.log("Server is running"))