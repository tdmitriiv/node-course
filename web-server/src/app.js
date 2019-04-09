const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Is it snowing',
    location: 'Denver'
  })
})

app.listen(3030, () => {
  console.log('Server is up on port 3030')
})