require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('atharvadhumal')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code<h1>') //we can send response in html format also and even in json
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})