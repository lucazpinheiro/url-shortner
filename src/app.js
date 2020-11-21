const express = require('express')
const cors = require('cors')

const connection = require('./model/connection')

const requestLogger = require('./middleware/requestLogger')
const router = require('./routes')

const app = express()

connection()

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use('/', router)

module.exports = app
