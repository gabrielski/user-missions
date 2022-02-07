// Entry point

const express = require('express')
const env = require('dotenv').config()
const port = process.env.APP_PORT || 5000

const app = express()
app.use('/api/missions', require('./routes/missionRoutes'))

app.listen(port, () => {
    console.log(`Server running on ${port} port`)
})