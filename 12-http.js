const http = require('http')
const { isGeneratorFunction } = require('util/types')

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome to our home page")
    }
    else if(req.url === "/about"){
        res.end('About essa')
    }
    else{
        res.end(`
    <h1>OOPS!</h1>
    <p>We cant gind the page</p>
    <a href="/">back home</a>
    `)}
})

server.listen(5000)