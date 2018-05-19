var express = require('express');
var router = express.Router();
var plant_dal = require('../dal/plant_dal');


/* GET users listing. */
router.get ('/all', function(req, res, next) {
    plant_dal.getAll(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('plant/plant_view_all', {plant: result[0]});
        }
    })
});

router.get('/delete', function(req, res) {
    plant_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            /*console.log(result);*/
            res.redirect(302, '/plant/all');

        }
    });
});


module.exports = router;