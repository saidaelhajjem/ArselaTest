var Page = require('../Models/page');


// create page
exports.create_page =  (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    let page = new Page({
        title:input.title,
        link:input.link,
        description:input.description,
        form:input.form
          });
    page.save(function(err) {
        if (err) {
          res.json({
            success: false,
            message: "erreur"
          });
        } else {
          res.json({
            success: true,
            message: "page a été créee"
          });
        }
      });
}


// get all pages

 exports.get_pages =  (req, res) => {
    let pages =  Page.find({}).populate("form")
    .exec(function(err, list) {
        if (err) {
          res.json({
            success: false,
            message: "erreur"
          });
        } else {
          res.json({
            success: true,
            list:list});
        }
      });

     } 




     
// get page by id
exports.get_get_page_by_id = (req, res) => {
  let page_id = req.params.page_id;
  Page.findById({_id:page_id}).populate("form")
   .exec(function(err, page) {
     if (err) {
       res.json({
           success: false,
           msg: "erreur"
       });
     } else {
       res.json(page);
     }
   });
} 


// update page
 exports.update_page = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    let page_id = req.params.page_id;
    Page.updateOne({_id:page_id}, {
        $set: {
            title:input.title,
            link:input.link,
            description:input.description,
            form:input.form
        }
      },(err,list)=>{ 
        if (err) {
           res.send({ 
               success:false,
               'message': 'Page not found' })} 
        else {
          res.send({
                 success: true,
         })
   }}
      )
  
} 

// delete Page 
 exports.delete_page = async (req, res) => {
    let page_id = req.params.page_id;
    let page = await Page.findById(page_id)
    if (page) {
        Page.findByIdAndRemove(page_id, (err, doc) => {
            if (!err) {
                res.send({ 'message': 'Page deleted' })
            } else {
                res.send({ 'message': 'Failed to Delete' + err });
            }
        })
    } else {
        res.status(404).send({ 'message': 'Page not found' })
    }
} 


