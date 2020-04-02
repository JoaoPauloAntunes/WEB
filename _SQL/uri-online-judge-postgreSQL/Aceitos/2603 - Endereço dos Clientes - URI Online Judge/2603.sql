create database uri2603;
use uri2603;

create table customers(
	id int primary key,
    name varchar(50),
    street varchar(50),
    city varchar(50),
    state char(2),
    credit_limit float
);

INSERT INTO customers values
('1', 'Pedro Augusto da Rocha', 'Rua Pedro Carlos Hoffman', 'Porto Alegre', 'RS', '700.00'), 
('2', 'Antonio Carlos Mamel', 'Av. Pinheiros', 'Belo Horizonte', 'MG', '3500.50'), 
('3', 'Luiza Augusta Mhor', 'Rua Salto Grande', 'Niteroi', 'RJ', '4000.00'), 
('4', 'Jane Ester', 'Av 7 de setembro', 'Erechim', 'RS', '800.00'), 
('5', 'Marcos Antônio dos Santos', 'Av Farrapos', 'Porto Alegre', 'RS', '4250.25');

SELECT * FROM customers;

SELECT 
    name, street
FROM 
	customers
WHERE
    city = 'Porto Alegre';