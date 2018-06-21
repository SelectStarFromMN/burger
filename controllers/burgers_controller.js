var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index.handlebars",{burger_data});
    })
})

router.post("/burgers/update", function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    })
})

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    })
})



// Export routes for server.js to use.
module.exports = router;