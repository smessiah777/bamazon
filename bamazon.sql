CREATE DATABASE bamazon;

use bamazon;

create table products (
id int not null,
product_name varchar(100) null,
department_name varchar(100) null,
price int null,
stock_quantitiy int null);

select * from products;