const express = require("express")
const { user } = require('../models')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userRoutes = express.Router()

// Create new user
// http://localhost:3000/api/signin
userRoutes.post('/api/signin', async (req, res) => {
    const { email, password } = req.body

    const salt = await bcrypt.genSalt(10);
    const encrypt_password = await bcrypt.hash(password, salt)
    await user.create({email: email, password: encrypt_password})
    return res.status(201).json({email: email, password: encrypt_password})
})

// Login user
// http://localhost:3000/api/login

userRoutes.post('/api/login', async (req, res) => {
    const { email, password } = req.body

    const _user = await user.findOne({ where: {email : email}})
    if (_user){
        const isMatch = await bcrypt.compare(password, _user.password)
        if (isMatch){
            const token = jwt.sign({id: _user.id}, 'secret')
            return res.status(200).json({token: token})
        } else {
            return res.status(401).json({message: 'Invalid password'})
        }
    } else {
        return res.status(401).json({message: 'User does not exist'})
    }
})

module.exports = userRoutes