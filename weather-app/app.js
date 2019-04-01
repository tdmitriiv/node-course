const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

geoCode(location || 'Philadelphia', (error, data) => {
  if (error) {
    return console.error('error', error)
  }

  forecast(data.latitude, data.longitude, (error, forecasrData) => {
    if (error) {
      return console.error('error', error)
    }

    console.log(data.location)
    console.log(forecasrData)
  })
})
