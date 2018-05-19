var express = require('express');
var router = express.Router();
var SQL_scripts_dal = require('../dal/SQL_scripts_dal');


/* GET users listing. */
router.get ('/in', function(req, res, next) {
    SQL_scripts_dal.getAll(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/in_query', {result: result});
        }
    })
});

router.get ('/correlated', function(req, res, next) {
    SQL_scripts_dal.getAll1(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/comparing_correlated_query', {result: result});
        }
    })
});

router.get ('/distinct', function(req, res, next) {
    SQL_scripts_dal.getAll2(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/distinct_query', {result: result});
        }
    })
});

router.get ('/doublejoinhaving', function(req, res, next) {
    SQL_scripts_dal.getAll3(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/doublejoin_groupby_having_query', {result: result});
        }
    })
});

router.get ('/existscorrelated', function(req, res, next) {
    SQL_scripts_dal.getAll4(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/exists_correlated_query', {result: result});
        }
    })
});

router.get ('/groupby', function(req, res, next) {
    SQL_scripts_dal.getAll5(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/groupby_query', {result: result});
        }
    })
});

router.get ('/orderby', function(req, res, next) {
    SQL_scripts_dal.getAll6(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/orderby_query', {result: result});
        }
    })
});

router.get ('/union', function(req, res, next) {
    SQL_scripts_dal.getAll7(function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('SQL_Queries/union_query', {result: result});
        }
    })
});

module.exports = router;