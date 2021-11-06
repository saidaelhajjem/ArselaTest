var User = require('../Models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// create user
exports.register = (req, res)=> {
    var input = JSON.parse(JSON.stringify(req.body));
    let user = new User({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
      role: input.role
    });
    console.log(user);
    user.save(function(err) {
      if (err) {
        res.json({
          success:false,
          message: "vous avez un erreur"
        });
      } else {
        res.json({
          success:true,
          message: "utilisateur ajouté"
        });
      }
    })}


    exports.login = (req, res)=> {
        User.findOne({ email: req.body.email })
          .populate("role")
          .exec(function(err, userInfo) {
            if (err) {
              console.log(err);
            } else {
              //COMPARER pss utilisateur bil pass token
              if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign(
                  { id: userInfo._id },
                  req.app.get("secretKey"),
                  { expiresIn: "10h" }
                );
    
                res.json({
                  success:true,
                  message: "user found ",
                  data: { user: userInfo, token: token }
                });
              } else {
                res.json({
                  success:false,
                  message: "invalid email or password",
                  data: null
                });
              }
            }
          });
        }






