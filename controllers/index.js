const ProductService = require('../services/ProductService')


module.exports.getProducts = async function(req, res){
        try{
            res.send(ProductService.getProducts());
        } catch (err) {
            res.status( 500 ).send( err );
        }

}