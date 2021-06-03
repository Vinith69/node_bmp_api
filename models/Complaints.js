const { Model } = require("sequelize");
const {sequelize, DataTypes} = require("./bootstrap");

const Complaints = sequelize.define('complaint', {
    // attributes
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    }, {
    timestamps: true
})

module.exports = {Complaints}

