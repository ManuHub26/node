let fs = require('fs')
let url = require('url')



let app = require('./app').start(8000)

app.on('root', (response) => {
    response.write('Je suis root')
})

// let server = http.createServer()

// server.on('request', (request, response) => {

//     response.writeHead(200)
//     let query = url.parse(request.url, true).query
//     let name = query.name === undefined ? 'anonyme' : query.name

//     fs.readFile('index.html', 'utf8', (err, data) => {
//         if (err) {
//             response.writeHead(404)
//             response.end("fichier existe pas")
//         }
//         else {
//             response.writeHead(200, {
//                 'Content-type': 'text/html; charset=utf-8'
//             })

//             data = data.replace('{{ name }}', name)
//             response.end(data)
//         }

//     });
// })


// server.listen(80)