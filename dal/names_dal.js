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

exports.getinfo = function(name_id, callback) {
    var query = 'CALL names_getinfo(?)';
    var queryData = [name_id];

    connection.query(query, queryData, function(err, result) {
        callback(err,result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE names SET common_name = ?, scientific_name = ? WHERE name_id = ?';

    var queryData = [params.common_name, params.scientific_name, params.name_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);


    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM names WHERE names_id = ?';

    var queryData = [params.names_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};