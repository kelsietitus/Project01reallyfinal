var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM names;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO names (common_name, scientific_name) VALUES (?,?)';

    var queryData = [params.common_name, params.scientific_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};