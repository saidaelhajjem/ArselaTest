var Role = require('../Models/role');

// create type
exports.create_role =  (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    let role = new Role({
        type:input.type,
       
    });
    role.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: "erreur"
          });
        } else {
          res.json({
            success: true,
            message: "role a été crée"
          });
        }
      });
}