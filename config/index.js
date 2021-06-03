const mysqlConfig = require(`./server`)
const fbConfig = require(`./firebase`)

module.exports ={
    port : "3000",
    hostname : '127.0.0.1',
    database : mysqlConfig,
    firebase: fbConfig
}