create database uri2745;
use uri2745;

CREATE TABLE people (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    salary FLOAT
);

insert into people values
('1', 'James M. Tabarez', '883'),
('2', 'Rafael T. Hendon', '4281'),
('3', 'Linda J. Gardner', '4437'),
('4', 'Nicholas J. Conn', '8011'),
('5', 'Karol A. Morales', '2508'),
('6', 'Lolita S. Graves', '8709');

SELECT 
    *
FROM
    people;

#----------------------------
SELECT 
    name, round((salary * 0.1), 2) AS tax
FROM
    people
WHERE
    salary > 3000;