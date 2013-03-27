
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('users/index', { title: '4fluxo' })
};