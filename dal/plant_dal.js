var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM plant;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO plant (plant_name, scientific_name, city, county, classification ) VALUES (?,?,?,?,?)';

    var queryData = [params.plant_name, params.scientific_name, params.city, params.county, params.classification];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};