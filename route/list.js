const express = require('express')
const authenticateToken = require('../auth/isLogin')
const app = express()

app.get('/api/waredicts', authenticateToken, (req, res) => {
    
})