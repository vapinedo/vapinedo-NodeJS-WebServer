const http = require("http");

http.createServer((request, response) => {
    response.write('Hello World');
    response.end();
})
.listen(8080);

console.log("Listening requests on port", 8080);