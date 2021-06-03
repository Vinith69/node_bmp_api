const mysql = require('mysql');

module.exports.connectMySql = function(config){
    connect();

    function connect(){
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "node_db"
        });

        con.connect(function(err) {
            if (err) throw err;
                console.log("db Connected!");
            }
        );
    }

    
      
}
