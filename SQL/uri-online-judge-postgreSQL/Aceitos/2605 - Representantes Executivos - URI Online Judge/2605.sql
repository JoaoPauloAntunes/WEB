CREATE DATABASE uri2605;
USE uri2605;

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    amount INT,
    price FLOAT,
    id_providers INT,
    id_categories INT,
    FOREIGN KEY (id_providers)
        REFERENCES providers (id),
    FOREIGN KEY (id_categories)
        REFERENCES categories (id)
);
drop table products;

CREATE TABLE providers(
	id int primary key,
    name  varchar(50),
    street varchar(50),
    city varchar(30),
    state char(2)
);

CREATE TABLE categories(
	id int primary key,
    name varchar(50)
);

##############
INSERT INTO providers values
('1', 'Henrique', 'Av Brasil', 'Rio de Janeiro', 'RJ'),
('2', 'Marcelo Augusto', 'Rua Imigrantes', 'Belo Horizonte', 'MG'),
('3', 'Caroline Silva', 'Av São Paulo', 'Salvador', 'BA'),
('4', 'Guilerme Staff', 'Rua Central', 'Porto Alegre', 'RS'),
('5', 'Isabela Moraes', 'Av Juiz Grande', 'Curitiba', 'PR'),
('6', 'Francisco Accerr', 'Av Paulista', 'São Paulo', 'SP');

INSERT INTO categories values
('1', 'old stock'), 
('2', 'new stock'), 
('3', 'modern'), 
('4', 'commercial'), 
('5', 'recyclable'), 
('6', 'executive'), 
('7', 'superior'), 
('8', 'wood'), 
('9', 'super luxury'), 
('10', 'vintage');

INSERT INTO products values
('1', 'Two-door wardrobe', '100', '800', '6', '8'), 
('2', 'Dining table', '1000', '560', '1', '9'), 
('3', 'Towel holder', '10000', '25.50', '5', '1'), 
('4', 'Computer desk', '350', '320.50', '4', '6'), 
('5', 'Chair', '3000', '210.64', '3', '6'), 
('6', 'Single bed', '750', '460', '1', '2');

SELECT
 *
FROM
	providers;

SELECT
	products.name, providers.name
FROM
	products
		JOIN
    categories ON categories.id = products.id_categories
		JOIN
	providers ON providers.id = products.id_providers
WHERE
	categories.id = 6;
    
# a ordem não importa
/*SELECT
	products.name, providers.name
FROM
	products
		JOIN
	providers ON providers.id = products.id_providers
		JOIN
	categories ON categories.id = products.id_categories
WHERE
	categories.id = 6;*/