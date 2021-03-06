create database uri2620;
use uri2620;

create table customers(
	id int primary key,
    name varchar(40),
    street varchar(30),
    city varchar(30),
    state char(2),
    credit_limit int
);

create table orders(
	id int primary key,
    order_date date,
    id_customers int
);

##################################
SELECT 
    customers.name, orders.id
FROM
    customers
        JOIN
    orders ON customers.id = orders.id_customers
WHERE
    MONTH(orders.orders_date) BETWEEN '0' AND '7';