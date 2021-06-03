const {sequelize, DataTypes} = require('./bootstrap')

const ProductModel = require('../models/Product')
const ComplaintsModel = require('../models/Complaints')



sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
    Product: ProductModel,
    CustomerComplaints: ComplaintsModel
}