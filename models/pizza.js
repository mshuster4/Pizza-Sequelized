'use strict';

module.exports = function(sequelize, DataTypes) {
    var Pizza = sequelize.define('pizzas', {
      pizza_name: {
        type: DataTypes.STRING
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
        freezeTableName: true
    });
    return Pizza;
};