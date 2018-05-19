var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM location;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO location (city, county) VALUES (?,?)';

    var queryData = [params.city, params.county];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.getinfo = function(location_id, callback) {
    var query = 'CALL location_getinfo(?)';
    var queryData = [location_id];

    connection.query(query, queryData, function(err, result) {
        callback(err,result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE location SET city = ?, county = ? WHERE location_id = ?';

    var queryData = [params.city, params.county, params.location_id];

    connection.query(query, queryData, function(err, result) {

        callback(err, result);


    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM location WHERE location_id = ?';

    var queryData = [params.location_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};



