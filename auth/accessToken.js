const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: "5h"})
}

module.exports = (req, res, next) => {
    const username  = req.body.username
    const user = { user: username }
    const token = generateAccessToken(user)
    res.json(token)
}