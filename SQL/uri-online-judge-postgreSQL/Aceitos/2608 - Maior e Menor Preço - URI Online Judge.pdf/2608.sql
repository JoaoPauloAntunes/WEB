CREATE database uri2608;
USE uri2608;

CREATE TABLE products(
	id int primary key,
    name varchar(50),
    amount int,
    price float
);

INSERT INTO products values
('1', 'Two-doors wardrobe', '100', '800'), 
('2', 'Dining table', '1000', '560'), 
('3', 'Towel holder', '10000', '25.50'), 
('4', 'Computer desk', '350', '320.50'), 
('5', 'Chair', '3000', '210.64'), 
('6', 'Single bed', '750', '460');

SELECT 
    MAX(products.price) AS price,
    MIN(products.price) AS price
FROM
    products;