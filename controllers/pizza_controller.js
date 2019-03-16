var express = require("express");

var router = express.Router();

var pizza = require("../models/pizza.js");

router.get("/", function(req, res) {
    pizza.selectAll(function(data) {
        var hbsObject = {
            pizza: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/pizzas", function(req, res) {
    pizza.insertOne([
        "pizza_name", "devoured"
    ], [
        req.body.pizza_name, req.body.devoured
    ],  function(result) {

            res.json({ id: result.insertId });
    });

});

router.put("/api/pizzas/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pizza.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 
