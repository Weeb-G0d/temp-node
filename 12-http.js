const http = require('http');
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        //req.write("hellow");
        res.end('Welcome to out home page');
    }
    
    if (req.url === '/about'){
        res.end("your are in our about page");
    }
    res.end(
        `<h1>404</h1>
        <p>We cant seem to find the page</p>
        <a href="/">back home </a>
        `
    )
}
)
server.listen(3400);