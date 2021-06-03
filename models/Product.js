const { Model } = require("sequelize");
const {sequelize, DataTypes} = require("./bootstrap");

const Product = sequelize.define('product', {
    // attributes
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    sku: {
        type: DataTypes.STRING
    },
    category_id: {
        type: DataTypes.INTEGER
    },
    inventory_id: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.DECIMAL
    },
    discount_id: {
        type: DataTypes.INTEGER
    // allowNull defaults to true
    },

    }, {
    timestamps: true
})

module.exports = { Product }