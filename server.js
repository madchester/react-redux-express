import express from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import winston from 'winston';
import cors from 'cors';
var request = require('request');

winston.remove(winston.transports.Console);
var logger = winston.add(winston.transports.Console, {
    timestamp: true,
    colorize: true
});

let app = express();

app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', function(req,res){
	request.get({url:'/*URL PATH*/'}, function(err,httpResponse,body){
	  let formatted = JSON.parse(body);
	  res.send(formatted);
	});
});


app.listen(3001, ()=> {
	console.log('listen 3001')
});
