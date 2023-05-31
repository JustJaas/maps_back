const express = require('express')
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
require('dotenv').config();

var app = express();
app.use(bodyParser.json());
require("./database/connection");

app.get('/', function(req, res){
	res.status(200).send({
		message: 'Working fine!'
	});
});

app.use('/api/locations', require('./routes/locations'));

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
});