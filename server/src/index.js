import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
require('dotenv').config()

const PORT = 4000
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})