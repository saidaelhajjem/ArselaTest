var Type = require('../Models/type');

// create type
exports.create_type =  (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    let type = new Type({
        type:input.type,
       
    });
    type.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: "erreur"
          });
        } else {
          res.json({
            success: true,
            message: "type a été crée"
          });
        }
      });
}