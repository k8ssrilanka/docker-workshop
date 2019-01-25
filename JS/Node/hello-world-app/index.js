var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello Kubernetes Sri Lanka\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://localhost:8081/');