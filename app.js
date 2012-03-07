
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();

var routes = require('./routes')(app)

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.listen(process.env.PORT);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
