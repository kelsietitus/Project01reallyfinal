var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM type;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO type (classification, description) VALUES (?,?)';

    var queryData = [params.classification, params.description];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};