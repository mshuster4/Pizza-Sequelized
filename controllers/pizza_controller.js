var express = require("express");
var router = express.Router();

var db = require("../models");


router.get("/", function(req, res) {

    db.Pizza.findAll({}).then(function(data) {
        var hbsObject = { pizza: data };
        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/index/create", function(req, res) {
    
    db.Pizza.create({
        pizza_name: req.body.pizza_name,
    }).then(function(data){
        console.log("added pizza");

        res.redirect('/');
    });

});

router.put("/index/update/:id", function(req, res) {
        db.Pizza.update({
            devoured: true
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(data){
            res.redirect("/");
    });
});


module.exports = router; 




    