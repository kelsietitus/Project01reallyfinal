var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL plants_getall();';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM plant WHERE plant_id = ?';

    var queryData = [params.plant_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

