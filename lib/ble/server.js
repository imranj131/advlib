var advlib = require ('./index.js');
var payload = '421655daba50e1fe0201050c097265656c794163746976650100' ;
var advA48 = advlib.process(payload); 
 
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	var advA48 = advlib.process(payload); 
    response.end(JSON.stringify(advlib.process(payload), null, '\t'));
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

JSON.stringify({ uno: 1, dos: 2 }, null, '\t');