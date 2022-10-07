let demo = require('./hello')
const map = require('lodash/map')
const { response } = require('express')

let app = require('express')()

app.get('/', (request, response) => {
    response.send('Salut tu es à la racine')
})

app.get('/demo', (request, response) => {
    response.send('Salut tu es à la demo')
})

app.listen(8080)

//console.log(map([1, 2, 3], function (n) { return n * 3; }))


