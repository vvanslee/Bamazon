var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Jacob0429',
    database: 'bamazon_db'
});

connection.connect(function(err) {
    console.log(err);
    displayProducts();
    // createProduct();
});

function displayProducts(err, res) {
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: 'welcome',
                type: 'text',
                message: "Welcome to Bamazon! (press enter to shop)"
            },
            {
                name: 'productsList',
                type: 'rawlist',
                pageSize: 50,
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                    choiceArray.push("Product ID: " + res[i].item_id + " | " + res[i].product_name);
                    }
                    return choiceArray;
            },
                message: "Please enter the ID of the product you want to purchase"
            },
            {
                name: 'enterQty',
                type: 'input',
                message: "Please enter a quantity"
            }
        ]);
    });
}


// function createProduct() {
//     var query = connection.query(
//         'insert into products set ?',
//         {
//             product_name: 'shake weight',
//             department_name: 'fitness',
//             price: 19.99,
//             stock_qty: 999
//         },
//         function(err, res) {
//             console.log(res.affectedRows + ' product inserted');
//         }
//     )
// }