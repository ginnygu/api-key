const fetch = require('node-fetch')
const key = require('./key.js')

let city = 'new york'

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`

fetch(url)
    .then((data) => data.json())
    .then((newData) => {
       console.log(`${newData.name}`)
    })