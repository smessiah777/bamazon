CREATE DATABASE bamazon;

use bamazon;

create table products (
id int not null AUTO_INCREMENT,
product_name varchar(100) null,
department_name varchar(100) null,
price int null,
stock_quantitiy int null,
primary key (id)  
);

insert into products (product_name, department_name, price, stock_quantitiy)
values("Tekken 7", "videogames", 60, 100),
("DOOM", "videogames", 60, 100),
("Blue Shirt", "clothing", 30, 200),
("Red Shirt", "clothing", 30, 200),
("Bamazon Fire", "technology", 60, 300),
("Laptop", "technology", 200, 300),
("Instapot", "kitchen", 300, 400),
("Vitamex", "kitchen", 500, 400),
("Kettlebell", "gym", 35, 500),
("Battle Rope", "gym", 50, 500);



select * from products;