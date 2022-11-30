const bodyParser = require ('body-parser');
const express = require ('express');
const http = require ('http');

const app = express ();

app.use (express.static (__dirname));
app.use (bodyParser.json ())
app.use (express.json ());

app.use ((req, res, next) =>
{
	res.header ("Access-Control-Allow-Origin", "*");
	res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next ();
});

app.get ('/', (req, res) => res.sendFile (path.join (__dirname, '/index.html')));

http.createServer (app).listen (3000);