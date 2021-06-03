const assert = require( "chai" ).assert;
const mocha = require( "mocha" );

const ProductService = require( "../services/ProductService" );

mocha.describe( "Product Service", () => {
    it( "Create instance of service", () => {
        assert.isNotNull( ProductService );
    } );

    it("Exposes getProducts method", () => {
        assert.isFunction( ProductService.getProducts );
    });

} );
