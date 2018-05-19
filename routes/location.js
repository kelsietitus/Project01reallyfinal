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

router.get('/add', function(req, res) {
    res.render('location/location_add');
});

router.get('/insert', function(req,res) {

    location_dal.insert(req.query, function(err,result) {
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302,'/location/all');
        }
    });
});

router.get('/edit', function(req, res) {
    location_dal.getinfo(req.query.location_id, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('location/locationUpdate', {location:
                    result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    location_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(result);
            res.redirect(302, '/location/all');
        }
    });
});

router.get('/delete', function(req, res) {
    location_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            /*console.log(result);*/
            res.redirect(302, '/location/all');

            }
        });
});

module.exports = router;