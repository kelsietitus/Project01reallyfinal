var express = require('express');
var router = express.Router();
var type_dal = require('../dal/type_dal');


/* GET users listing. */
router.get ('/all', function(req, res, next) {
    type_dal.getAll(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('type/type_view_all', {type: result});
        }
    })
});


module.exports = router;