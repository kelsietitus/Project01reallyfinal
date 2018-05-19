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

router.get('/add', function(req, res) {
    res.render('type/type_add');
});

router.get('/insert', function(req,res) {

    type_dal.insert(req.query, function(err,result) {
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302,'/type/all');
        }
    });
});

router.get('/edit', function(req, res) {
    type_dal.getinfo(req.query.type_id, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('type/typeUpdate', {type:
                    result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    type_dal.update(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            console.log(result);
            res.redirect(302, '/type/all');
        }
    });
});

router.get('/delete', function(req, res) {
    type_dal.delete(req.query, function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            /*console.log(result);*/
            res.redirect(302, '/type/all');

        }
    });
});

module.exports = router;