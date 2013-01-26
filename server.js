
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes to views

app.get('/', routes.index);
app.get('/kp', routes.kp);

// Routes to redirects

app.get('/contact', function(req, res){ res.redirect(process.env.NODEJITSU ? 'http://louisrawlins.com/contact' : 'http://localhost:3000/contact') });

// Choose port 80 if we're on Joyent (`% export JOYENT=1` to set on server, `echo $JOYENT` to check)
app.listen(process.env.JOYENT ? 80 : 3002);
