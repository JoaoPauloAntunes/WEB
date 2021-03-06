create database apontamentosES;
use apontamentosES;

create table apontamentoJornadaTrab(
id int primary key,
dat_reg date,
dat_apont date,
hora_ini_jornada time,
hora_ini_almoco time,
hora_fim_almoco time,
hora_fim_jornada time,
descr text
);
alter table apontamentoJornadaTrab 
drop column id;
alter table apontamentoJornadaTrab 
add column id int primary key auto_increment;