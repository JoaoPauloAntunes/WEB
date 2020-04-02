CREATE DATABASE uri2609;
DROP DATABASE uri2609;
use uri2609;

CREATE TABLE categories(
	id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE products(
	id INT PRIMARY KEY,
    name VARCHAR(50),
    amount INT,
    price FLOAT,
    id_categories INT, 
    foreign key(id_categories) references categories(id)
);

INSERT INTO categories values 
('1', 'wood'), 
('2', 'luxury'), 
('3', 'vintage'), 
('4', 'modern'), 
('5', 'super luxury');

INSERT INTO products values
('1', 'Two-doors wardrobe', '100', '800', '1'), 
('2', 'Dining table', '1000', '560', '3'), 
('3', 'Towel holder', '10000', '25.50', '4'), 
('4', 'Computer desk', '350', '320.50', '2'), 
('5', 'Chair', '3000', '210.64', '4'), 
('6', 'Single bed', '750', '460', '1');

SELECT * from products;
SELECT * from categories;

SELECT 
    categories.name, SUM(products.amount) AS sum
FROM
    products
		JOIN
    categories ON categories.id = products.id_categories
GROUP BY products.id_categories;