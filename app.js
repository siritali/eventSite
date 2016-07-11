var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(__dirname + '/dist'))

app.get('*', function (req, res)
{
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(9004, function ()
{
	console.log('Listen on localhost:9004')
})
