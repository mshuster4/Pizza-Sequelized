'use strict';

module.exports = function(sequelize, DataTypes) {
    var Pizza = sequelize.define('pizzas', {
      pizza_name: {
        allowNull: false,
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
      freezeTableName: true,
      classMethods: {
          associate: function (models) {
              Burger.belongsTo(models.Customer);
          }
      }

    });

    return Pizza;
};
