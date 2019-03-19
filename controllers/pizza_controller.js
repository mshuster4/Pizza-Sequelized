var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {

        db.pizzas.findAll({}).then(function(dbPizza) {
            console.log(dbPizza);
            res.render("index", {
                pizzas: dbPizza,
            });
        });
    });

    app.post("/pizza/create", function(req, res) {
        
        db.pizzas.create({
            pizza_name: req.body.pizza_name,
        }).then(function(dbPizza){
            console.log(dbPizza);

            res.send(dbPizza);
        });

    });

};







        