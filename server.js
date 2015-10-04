
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

app.get('/contact', function(req, res){ res.redirect(process.env.NODE_ENV ? 'http://louisrawlins.com/contact' : 'http://localhost:3000/contact') });

// Choose port 8082 if we're on NODE_ENV (`% export NODE_ENV=production` to set on server)
app.listen(process.env.NODE_ENV ? 8082 : 3002);