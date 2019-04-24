const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')


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
  if (!req.query.address) {
    return res.send({
      error: 'No address message'
    })
  }

  geoCode(req.query.address || 'Philadelphia', (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, forecasrData) => {
      if (error) {
        return res.send({ error })
      }
      return res.send({
        forecast: forecasrData,
        location: location,
        address: req.query.address
      })
    })
  })
})

app.get('/products', (req, res) => {
  if (!req.query.a) {
    return res.send({
      error: 'You must provide search params'
    })
  }
  res.send({
    products: []
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
