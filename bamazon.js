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
    // createProduct();
});

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

function displayProducts(err, res) {
    var query = connection.query(
        'SELECT * FROM products', function(err, res) {
            if (err) throw err;
            inquirer.prompt([
                {
                    name: welcome,
                    message: "Welcome to Bamazon!"
                },
                {
                    name: productsList,
                    type: ,
                    choices: ,// display products in for loop using inquirer
                    message: // "What would you like to purchase?"
                },
                {
                    name:
                    type: input,
                    message: , //select quantity
                }
            ])

        }
    )
}