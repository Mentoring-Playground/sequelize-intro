const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const routing = require('./routing')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('tiny'))

app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())

app.use(routing)

app.get('/', (req, res) => {
  return res.status(200).json({ ServerStatus: `server running` })
})

app.listen(port, () => {
  console.log(`This server running on port ${port}`)
})

module.exports = app
