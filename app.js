let http = require('http')
const EventEmitter = require('events')


let App = {
    start: function (port) {
        let emitter = new EventEmitter()
        let server = http.createServer((request, response) => {
            response.writeHead(200)
            if (request.url === '/') {
                emitter.emit('root', response)
            }
            response.end()
        }).listen(port)
        return emitter;
    }
}
module.exports = App