create database uri2602;
use uri2602;

#uri2602
create table customers(
	id int primary key,
    name varchar(60),
    street varchar(45),	
    city varchar(45),	
    state char(45),	
    credit_limit float
);
drop table customers;

start transaction;
INSERT INTO customers
values
('1', 'Pedro Augusto da Rocha', 'Rua Pedro Carlos Hoffman', 'Porto Alegre', 'RS', '700.00'),
('2', 'Antonio Carlos Mamel', 'Av. Pinheiros', 'Belo Horizonte', 'MG', '3500.50'), 
('3', 'Luiza Augusta Mhor', 'Rua Salto Grande', 'Niteroi', 'RJ', '4000.00'), 
('4', 'Jane Ester', 'Av 7 de setembro', 'Erechim', 'RS', '800.00'), 
('5', 'Marcos Antônio dos Santos', 'Av Farrapos', 'Porto Alegre', 'RS', '4250.25');
rollback;

truncate customers;

select * from customers;

################################################################
SELECT name FROM customers
where state='RS';