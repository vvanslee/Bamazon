CREATE DATABASE bamazon_db;

use bamazon_db;

create table products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NULL,
    department_name VARCHAR(255) NULL,
    price DECIMAL(10, 2) NULL,
    stock_qty INT NULL,
    PRIMARY KEY (item_id)
);
