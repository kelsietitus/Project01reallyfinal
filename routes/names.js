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
            res.redirect(302, '/names/all');
        }
    });
});

router.get('/edit', function(req, res) {
    names_dal.getinfo(req.query.name_id, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('names/namesUpdate', {names:
                    result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    names_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(result);
            res.redirect(302, '/names/all');
        }
    });
});

router.get('/delete', function(req, res) {
    names_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            /*console.log(result);*/
            res.redirect(302, '/names/all');

        }
    });
});

module.exports = router;