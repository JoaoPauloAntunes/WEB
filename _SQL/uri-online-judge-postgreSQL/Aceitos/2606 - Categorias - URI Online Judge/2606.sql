CREATE DATABASE uri2606;
DROP DATABASE uri2606;
USE uri2606;

CREATE TABLE categories(
	id int primary key auto_increment,
    name varchar(50)
);
drop table categories;

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    amount INT,
    price FLOAT,
    id_categories INT,
    FOREIGN KEY (id_categories)
        REFERENCES categories(id)
);
DROP TABLE products;

##################################
INSERT INTO categories 
(name)
values
('old stock'), 
('new stock'), 
('modern'), 
('commercial'), 
('recyclable'), 
('executive'), 
('superior'), 
('wood'), 
('super luxury'), 
('vintage');

INSERT INTO products values
('1', 'Lampshade', '100', '800', '4'), 
('2', 'Table for painting', '1000', '560', '9'), 
('3', 'Notebook desk', '10000', '25.50', '9'), 
('4', 'Computer desk', '350', '320.50', '6'), 
('5', 'Chair', '3000', '210.64', '9'), 
('6', 'Home alarm', '750', '460', '4');

##################################
SELECT 
    *
FROM
    categories;
    SELECT 
    *
FROM
    products;
    
##################################
SELECT
	products.id, products.name
FROM
	products
		JOIN
	categories ON categories.id = products.id_categories
WHERE
	categories.name LIKE 'super%';