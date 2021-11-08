var UserForm = require('../Models/userForm');


// create user_form
exports.create_user_form =  (req, res) => {
/*     let userForm = new UserForm(req.body); */
    var input = JSON.parse(JSON.stringify(req.body));
    var form = { label: req.body.label, value: req.body.value }; 
  /* var form =[ { label: "1", value: "1" },{ label: "2", value: "2" },{ label: "1", value: "2" },] */
    let userForm = new UserForm({
        user:input.user,
        page:input.page,
        forms:form,
    });
    userForm.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: "erreur"
          });
        } else {
          res.json({
            success: true,
            message: "formulaire a été remplie"
          });
        }
      });
}

// update user_form
exports.update_user_form = (req, res) => {
    var form = { label: req.body.label, value: req.body.value };
    let userForm_id = req.params.userForm_id;
    UserForm.updateOne({_id:userForm_id}, 
        { $push: { forms:form} }
      ,(err,list)=>{ 
        if (err) {
           res.send({ 
               success:false,
               'message': 'userForm not found' })} 
        else {
            console.log(list);
          res.send({
                 success: true,
         })
   }}
      )
  
} 