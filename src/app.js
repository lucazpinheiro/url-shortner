const express = require('express')
const cors = require('cors')

const requestLogger = require('./middleware/requestLogger')
const router = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use('/', router)

module.exports = app
