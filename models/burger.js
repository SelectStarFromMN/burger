// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    update: function(id, cb) {
      orm.updateOne("burgers", id, function(res) {
        cb(res);
      });
    },
    
    create: function(name, cb) {
      orm.insertOne("burgers", name, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;