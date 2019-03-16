var orm = require("../config/orm.js")

var pizza = {
    selectAll: function(cb) {
        orm.selectAll("pizzas", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("pizzas", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("pizzas", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = pizza; 

