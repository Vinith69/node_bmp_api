const {sequelize, DataTypes} = require('./../bootstrap')

const User = sequelize.define('users', {
    // attributes
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    email_id: {
        type: DataTypes.STRING
    },
    email_verified: {
        type: DataTypes.BOOLEAN
    },
    phone_number: {
        type: DataTypes.NUMBER
    },
    phone_verified: {
        type: DataTypes.BOOLEAN
    },

    }, {
    timestamps: true
})

module.exports = { User }