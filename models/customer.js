'use strict';

module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define('customers', {
      customer_name: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
        freezeTableName: true,
        classMethods: {
            associate: function (models) {
                Customer.hasOne(models.Pizza);
            }
        }
    });

    return Customer;
};