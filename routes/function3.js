var data = require("../parameters.json");
/*
 * GET function1 page.
 */

exports.viewFunction3 = function(req, res){
  var newType = req.query.paramtype;
  var newName = req.query.paramname;
    var newJson = {
        "type":newType,
        "name":newName
    };
    console.log(newJson);
    data.parameters.push(newJson);

  res.render('function3');
};
