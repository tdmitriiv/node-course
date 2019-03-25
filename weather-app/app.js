const request = require('request')
const geoCode = require('./utils/geocode')
//https://api.darksky.net/forecast/a9387689aca3e72f7f63e2a82d5fb2da/37.8267,-122.4233
// const url = 'https://api.darksky.net/forecast/a9387689aca3e72f7f63e2a82d5fb2da/37.8267,-122.4233?lang=ru'
// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//     return
//   }
//   if (response.body.error) {
//     console.log(response.body.error)
//     return
//   }
//   const currently = response.body.currently
//   const daily = response.body.daily.data[0]
//   console.log(`${daily.summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipIntensity}% chance of rain.`)
// })

geoCode('Philadelphia', (error, data) => {
  if (error) {
    console.error('error', error)
  } else {
    console.log(data)
  }
})