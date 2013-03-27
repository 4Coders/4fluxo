
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('users/index', { title: '4fluxo' })
};

exports.users = function(req, res){
  res.render('users/index', { title: '4fluxo' })
};

exports.users.add = function(req, res){
  res.render('users/new', { title: '4fluxo' })
};

exports.users.edit = function(req, res){
  res.render('users/edit', { title: '4fluxo' })
};
