start transaction;
insert into apontamentoJornadaTrab
(dat_reg, dat_apont, hora_ini_jornada, hora_ini_almoco, hora_fim_almoco, hora_fim_jornada, descr) values 
(CURRENT_DATE(), '2020-02-11', '12:55', '12:55', '13:42', '18:00', 'Projeto: "Apontamentos de jornada de trabalho"');
rollback;

insert into apontamentoJornadaTrab
(dat_reg, 
dat_apont, 
hora_ini_jornada, 
hora_ini_almoco, 
hora_fim_almoco, 
hora_fim_jornada, 
descr) values 
(CURRENT_DATE(), '2020-01-11', '13:00', '13:00', '13:45', '18:00', 'Teste');

insert into apontamentoJornadaTrab
(dat_reg, 
dat_apont, 
hora_ini_jornada, 
hora_ini_almoco, 
hora_fim_almoco, 
hora_fim_jornada, 
descr) values 
(CURRENT_DATE(), '2020-02-11', '13:00', '13:00', '13:45', '18:00', 'Projeto: "Apontamentos de jornada de trabalho"');

insert into apontamentoJornadaTrab
(dat_reg, 
dat_apont, 
hora_ini_jornada, 
hora_ini_almoco, 
hora_fim_almoco, 
hora_fim_jornada, 
descr) values 
(CURRENT_DATE(), '2020-02-11', '', '', '', '', ''); # data é requerida
#'2020-02-12', '2020-02-11', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '', '6'

delete from apontamentoJornadaTrab where id >= 3;

delete from apontamentoJornadaTrab where id=1;

update apontamentoJornadaTrab set descr='Projeto: "Apontamentos de jornada de trabalho Apontamentos de jornada de trabalho Apontamentos de jornada de trabalhoApontamentos de jornada de trabalho"' where id=9;
