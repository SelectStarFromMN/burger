var connection = require("./connection.js");

// selectAll()
// insertOne()
// updateOne()
var orm = {

    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function (tableName, id, cb) {
        var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(queryString, [tableName, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (tableName, burgerName, cb) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableName, burgerName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
  
};

module.exports = orm;
