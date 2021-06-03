const { Product } = require("../models");

module.exports = function (app)  {

    app.get(`/api/complaints/latest/:count`, (req, res, next) => {
        var count = request.params.count;
        res.send('test');
        
        next();
    })

    app.get(`/api/complaints/all`, (req, res, next) => {
        Product.findAll().then(products => res.json(products))
    })

    app.get(`/api/complaints/single/:id`, (req, res, next) => {

        res.send('test');
        
        next();
    })

    app.get(`/api/complaints/new/:issueTopic/:issueMessage`, (req, res, next) => {

        res.send('test');
        
        next();
    })
}