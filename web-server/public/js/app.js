const form = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
form.addEventListener('submit', (e) => {
  const location = search.value

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then(({ error, forecast, location }) => {
      if (error) {
        message1.textContent = error
        return
      }

      message1.textContent = location
      message2.textContent = forecast
    })
  })
  e.preventDefault();
})