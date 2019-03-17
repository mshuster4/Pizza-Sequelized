module.exports = function(sequelize, DataTypes) {
    var Pizza = sequelize.define("Pizza", {
        pizza_name: {
            type: DataTypes.STRING,

            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,

            defaultValue: false
        }
    });
    return Pizza;
};
