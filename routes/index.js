
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Louis Rawlins, Portfolio' })
};

exports.kp = function(req, res){
  res.render('kp', { title: 'Louis Rawlins, Portfolio for Kaiser Permanente - June 2012' })
};
