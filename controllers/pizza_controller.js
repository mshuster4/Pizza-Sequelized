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

    app.post("/pizzas/create", function(req, res) {
        
        db.pizzas.create({
            pizza_name: req.body.pizza_name,
        }).then(function(dbPizza){
            res.redirect("/");
        });

    });

    app.put("/pizzas/update/:id", function(req, res){

        db.pizzas.update({
            devoured: true
        },
        {
            where: {id: req.params.id}

        }).then(function(dbPizza){
            console.log(dbPizza);
            res.redirect("/");
        });

    });

};







        