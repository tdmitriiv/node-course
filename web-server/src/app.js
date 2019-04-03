const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('hello express')
})

app.get('/help', (req, res) => {
  res.send('Help page 2')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/weather', (req, res) => {
  res.send('Weather app')
})

app.listen(3030, () => {
  console.log('Server is up on port 3030')
})