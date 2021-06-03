const Product = require('../models/Product')

/**
 * @description Attempt to get products with set limit
 * @param limit {object} Maximum number of posts to fetch
 * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
 */

//Not implemented.
module.exports.getProducts = async function(limit){
    
    try {
        //const result = await 
        return { success: true, body: result };
    } catch ( err ) {
        return { success: false, error: err };
    }
}