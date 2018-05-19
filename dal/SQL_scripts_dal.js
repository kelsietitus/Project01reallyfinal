var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
   /* var query = 'CALL subquery_getinfo();'*/
    var query = 'SELECT * FROM type \n' +
        '\tWHERE classification IN (\'TREE\'); ';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.getAll1 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = 'SELECT scientific_name\n' +
        '\tFROM names  \n' +
        '\tWHERE name_id > (SELECT name_id FROM plant WHERE plant_id = 3);';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.getAll2 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = 'SELECT COUNT(DISTINCT classification) AS Num_Types FROM type;';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.getAll3 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = 'SELECT n.common_name, COUNT(p.plant_id) AS Plant_Location_Count\n' +
        '\tFROM names n \n' +
        '\tLEFT JOIN plant p ON n.name_id = p.name_id\n' +
        '\tLEFT JOIN plant_location pl ON p.plant_id = pl.plant_id \n' +
        '\tGROUP BY n.name_id\n' +
        '\tHAVING COUNT(p.plant_id) >= MAX(p.plant_id);';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.getAll4 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = '\tSELECT common_name \n' +
        '\tFROM names WHERE EXISTS (SELECT plant_kingdom FROM plant WHERE name_id = names.name_id AND plant_id < 50);';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};


exports.getAll5 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = 'SELECT COUNT(type_id) AS amount, classification\n' +
        '\tFROM type\n' +
        '\tGROUP BY classification;';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.getAll6 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = 'SELECT name_id, common_name\n' +
        '\tFROM names\n' +
        '\tORDER BY common_name;';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.getAll7 = function(callback) {
    /* var query = 'CALL subquery_getinfo();'*/

    var query = 'SELECT name_id FROM names\n' +
        '\tUNION\n' +
        '\tSELECT name_id FROM plant;';


    connection.query(query, function (err, result) {
        callback(err, result);
    });
};
