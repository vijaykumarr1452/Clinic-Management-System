var express = require('express');
var app = express();
var cors = require("cors")
var bodyParser = require('body-parser');
const http = require('http');
const https = require('https');


app.use(express.urlencoded({extended: false})); 
app.use(express.json());   
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


  app.use(cors(corsOptions))


  //const { Router } = require('express');
//   var Router = require('./server/routes/patientRoutes');
  
require('./server/router/routes/router')(app);
require('./server/routes/patientRoutes')(app);
require('./server/routes/registrationRoutes')(app);
require('./server/routes/investigation')(app)
const db = require('./server/config/db');




const Role = db.role;
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
app.use(function (req, res, next) {
	console.log('middleware working')
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
	next();
  });
  
  app.use(function (req, res, next) {
	console.log('middleware working')
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
	next();
  });
  
//require('./app/route/project.route.js')(app);
 
// Create a Server
app.all('*', (req, res) => res.redirect(300, 'https://localhost'));
const httpServer = http.createServer(app)
var server = httpServer.listen(8080, function () { 
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/static',express.static(__dirname + "/directory"));

global.__basedir = __dirname;
function initial(){
	// Role.create({
	// 	id: 1,
	// 	name: "CLinicManagement"
	// });
	
	// Role.create({
	// 	id: 2,
	// 	name: "ADMIN"
	// });
	
	// Role.create({
	// 	id: 3,
	// 	name: "PM"
	// });
}