const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebar endgine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

// Setup static deirectory to serve
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
  res.render('help',{
    title: 'Help',
    message: 'Some message',
    name: 'Dmitry'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Is it snowing',
    location: 'Denver',
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Error',
    name: 'Dmitry',
    message: 'Help article not found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Error',
    name: 'Dmitry',
    message: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
