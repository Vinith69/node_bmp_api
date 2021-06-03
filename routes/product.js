const { Product } = require("../models");



module.exports = function (app)  {

    app.get(`/api/product/latest/:count`, (req, res, next) => {
        var count = request.params.count;
        res.send('test');
        
        next();
    })

    app.get(`/api/product/all`, (req, res, next) => {
        Product.findAll().then(products => res.json(products))
    })

    // Not required
    app.get(`/api/product/all/featured`, (req, res, next) => {
        
        res.send('test');
        
        next();
    })

    // Not required
    app.get(`/api/product/single/:id`, (req, res, next) => {

        res.send('test');
        
        next();
    })
}