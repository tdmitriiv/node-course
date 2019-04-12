const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Dmitry'
  })
})

app.get('/about', (req, res) => {
  res.render('about',{
    title: 'About me',
    name: 'Dmitry'
  })
})

app.get('/help', (req, res) => {
  res.render('about',{
    title: 'Help',
    name: 'Some message'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Is it snowing',
    location: 'Denver'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})