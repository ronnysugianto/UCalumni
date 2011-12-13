
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , userService = require('./controllers/UsersController')
  , alumniService = require('./controllers/AlumniController');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.post('/submitAlumniData',function(req,res){
	alumniService.saveAlumniData(req,res);
});


app.get('/declareAlumniSchema', function(){
	console.log('>>>Preparing to create Alumni Schema');
	alumniService.createAlumniSchema();
});
app.get('/saveAlumniSchema', function(req,res){
	console.log('>>>Preparing to save Alumni Data');
	alumniService.saveAlumniData(req,res);
});
app.get('/declareUsersSchema', function(){
	console.log('>>>Preparing to create Users Schema');
	userService.createUserSchema();
});
app.get('/saveUserData', function(){
	console.log('>>>Preparing to save user data');
	userService.saveUserData('ron','ron');
});
app.get('/authentication', function(){
	console.log('>>>Preparing authentication data');
	userService.authentication('roni','roni');
});

app.listen(4567);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
