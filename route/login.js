const express = require('express')
const generateToken = require('../auth/accessToken')
const app = express()

// 登录
app.post('/api/login', (req, res, next) => {
    // 查询数据库用户
})