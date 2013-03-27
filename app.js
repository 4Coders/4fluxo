
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoq = require('mongoq')
  , BSON = mongoq.BSON
  , ObjectID = BSON.ObjectID;

// Configurando a execução do banco MongoDB
var   DB = 'db_test'
    , db = mongoq(DB)
    , users = db.collection('users');

var app = module.exports = express();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
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

// Routes
app.get('/', routes.index);

// Index
app.get('/users', routes.users);

// Add
app.get('/users/add', routes.users.add);

// Show
app.get('/users/show/:id?', function(req, res){
  var id = req.params.id;
  res.render('users/edit', { title: '4fluxo' })
});

// Edit
app.get('/users/edit/:id', function(req, res){
  var id = req.params.id;
  res.render('users/edit', { title: '4fluxo' })
});

// JSON Routes
// Get All
app.get('/users.json', function(req, res) {
  users.find().toArray(function(err, result){
    res.send(result);
  });
});

// Get
app.get('/users/:id.json', function(req, res) {
  var id = req.params.id;
  console.log(id);
  users.findOne({
    '_id': ObjectID(id)
  }, function(err, result){
      res.send(result);
  });

});

// Users Posts
app.post('/users', function(req, res) {
   var user = req.body.user;
   users.insert(user);
   res.send(true);
});

app.listen(3000, function(){
  console.log("express-bootstrap app running");
});
