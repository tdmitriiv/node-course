const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

geoCode(location || 'Philadelphia', (error, { latitude, longitude, location }) => {
  if (error) {
    return console.error('error', error)
  }

  forecast(latitude, longitude, (error, forecasrData) => {
    if (error) {
      return console.error('error', error)
    }

    console.log(location)
    console.log(forecasrData)
  })
})
