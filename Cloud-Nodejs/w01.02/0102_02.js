
const httpWEB = require("http");
const hostname = "localhost";
const PORT = 8080;

const serverListen = httpWEB.createServer(
    (request, Response) => {

        Response.statusCode = 200;
        Response.setHeader('Content-Type', 'text/html');
        switch (request.url){
            case "/home":
                Response.writeHead(200);
                Response.end("<h1>This is home page</h1>");
                break;
            case "/about":
                Response.writeHead(200);
                Response.end("<h1>This is about page</h1>");
                break;
                default:    
                break;
        }
      

        
        //Response.setHeader("content-Type", "application/json");
        //Response.end('{"mesg":"Hi"}');
    }
);
serverListen.listen(PORT, hostname,
    () => {
        console.log('"connected!" ${PORT}:${hostname}');
    }
    );