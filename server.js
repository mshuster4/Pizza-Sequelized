var express = require("express");
var bodyParser = require("body-parser")
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public/assets/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/pizza_controller.js")(app);

db.sequelize.sync({ force: false }).then(function(){
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);
    });
}); 
