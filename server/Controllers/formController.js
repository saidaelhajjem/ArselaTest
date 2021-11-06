var Form = require('../Models/form');

// create form
exports.create_form =  (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    let form = new Form({
        name:input.name,
        label:input.label,
        type:input.type,
    });
    form.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: "erreur"
          });
        } else {
          res.json({
            success: true,
            message: "form a été créee"
          });
        }
      });
}


// get form by id
exports.get_form_by_id = (req, res) => {
    let form_id = req.params.form_id;
     Form.findById({_id:form_id}).populate("type")
     .exec(function(err, form) {
       if (err) {
         res.json({
             success: false,
             msg: "erreur"
         });
       } else {
         res.json(form);
       }
     });
} 


// get all forms
exports.get_forms =  (req, res) => {
     Form.find({}).populate("type")
     .exec(function(err, list) {
       if (err) {
         res.json({
            success: false,
            msg: "erreur"
         });
       } else {
         res.json({
             success:true,
             forms:list
         });
       }
     });

     } 


     // update form
  exports.update_form = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    let form_id = req.params.form_id;
     Form.updateOne({_id:form_id}, {
        $set: {
            name:input.name,
            label:input.label,
            type:input.type,
        }
      }).exec((err,list)=>{ 
        if (err) {
           res.send({ 
               success:false,
               'message': 'Form not found' })} 
        else {
          res.send({
                 success: true,
                 form:list
         })
   }});
  
} 

// delete form 
exports.delete_form = (req, res) => {
    let form_id = req.params.form_id;
    let form = Form.findById(form_id);
    if (form) {
        Form.findByIdAndRemove(form_id, (err, doc) => {
            if (!err) {
                res.send({ 'message': 'form deleted' });
            } else {
                res.send({ 'message': 'Failed to Delete' + err });
            }
        })
    } else {
        res.send({ 'message': 'form not found' })
    }
} 