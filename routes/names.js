var express = require('express');
var router = express.Router();
var names_dal = require('../dal/names_dal');


/* GET users listing. */
router.get ('/all', function(req, res, next) {
    names_dal.getAll(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('names/names_view_all', {names: result});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('names/names_add');

});

router.get('/insert', function(req, res) {
    names_dal.insert(req.query, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, 'names/all');
        }
    });
});

module.exports = router;