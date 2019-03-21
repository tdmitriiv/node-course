const request = require('request')
//https://api.darksky.net/forecast/a9387689aca3e72f7f63e2a82d5fb2da/37.8267,-122.4233
const url = 'https://api.darksky.net/forecast/a9387689aca3e72f7f63e2a82d5fb2da/37.8267,-122.4233?lang=ru'
request({ url, json: true }, (error, response) => {
  const currently = response.body.currently
  const daily = response.body.daily.data[0]
  console.log(`${daily.summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipIntensity}% chance of rain.`)
//  pk.eyJ1IjoidGRtaXRyaWl2IiwiYSI6ImNqdGlvYTNncjBlZGU0M24wMms5OW56YXUifQ.KnB4JmE0VG0lSq6Eu_ltGw
})

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGRtaXRyaWl2IiwiYSI6ImNqdGlvYTNncjBlZGU0M24wMms5OW56YXUifQ.KnB4JmE0VG0lSq6Eu_ltGw&limit=1'
request({ url: geoCodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude, longitude)
})