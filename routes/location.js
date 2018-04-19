var express = require('express');
var router = express.Router();
var location_dal = require('../dal/location_dal');


/* GET users listing. */
router.get ('/all', function(req, res, next) {
    location_dal.getAll(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('location/location_view_all', {location: result});
        }
    })
});

module.exports = router;