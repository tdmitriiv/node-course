const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/a9387689aca3e72f7f63e2a82d5fb2da/${latitude},${longitude}?lang=ru`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
      return
    }
    if (body.error) {
      callback(body.error, undefined)
      return
    }
    const currently = body.currently
    const daily = body.daily.data[0]
    callback(undefined, `${daily.summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipIntensity}% chance of rain.`)
  })
}

module.exports = forecast
