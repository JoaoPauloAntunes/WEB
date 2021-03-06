SELECT TIME_FORMAT("19:30:10", "%H %i %s");

SELECT CURRENT_DATE();

select * from apontamentoJornadaTrab;
select month(CURRENT_DATE());
select CURRENT_DATE();

SELECT 
    dat_reg,
    dat_apont,
    hora_ini_jornada,
    hora_ini_almoco,
    hora_fim_almoco,
    hora_fim_jornada,
    descr,
    id
FROM
    apontamentoJornadaTrab
WHERE
    MONTH(dat_apont) = MONTH(CURRENT_DATE());

SELECT 
	hora_fim_jornada - hora_ini_jornada
FROM
    apontamentoJornadaTrab
WHERE
    MONTH(dat_apont) = MONTH(CURRENT_DATE());

SELECT 
	hora_ini_jornada, hora_ini_almoco, hora_fim_almoco, hora_fim_jornada
FROM
    apontamentoJornadaTrab
WHERE
    MONTH(dat_apont) = MONTH(CURRENT_DATE()) order by hora_ini_jornada;

############# Quantidade de minutos por dia
SELECT 
	((hour(hora_fim_jornada)*60 + minute(hora_fim_jornada)) - (hour(hora_ini_jornada)*60 + minute(hora_ini_jornada)))
    -((hour(hora_fim_almoco)*60 + minute(hora_fim_almoco)) - (hour(hora_ini_almoco)*60 + minute(hora_ini_almoco))) as minsDia
FROM
    apontamentoJornadaTrab
WHERE
    MONTH(dat_apont) = MONTH(CURRENT_DATE()) order by hora_ini_jornada;

SELECT 
	SUM(((hour(hora_fim_jornada)*60 + minute(hora_fim_jornada)) - (hour(hora_ini_jornada)*60 + minute(hora_ini_jornada)))
    -((hour(hora_fim_almoco)*60 + minute(hora_fim_almoco)) - (hour(hora_ini_almoco)*60 + minute(hora_ini_almoco)))) as minsMes
FROM
    apontamentoJornadaTrab
WHERE
    MONTH(dat_apont) = MONTH(CURRENT_DATE()) order by hora_ini_jornada;

SELECT 
				((hour(hora_fim_jornada)*60 + minute(hora_fim_jornada)) - (hour(hora_ini_jornada)*60 + minute(hora_ini_jornada)))
			    -((hour(hora_fim_almoco)*60 + minute(hora_fim_almoco)) - (hour(hora_ini_almoco)*60 + minute(hora_ini_almoco))) as minsDia
			FROM
			    apontamentoJornadaTrab
			WHERE
			    MONTH(dat_apont) = MONTH(CURRENT_DATE()) order by hora_ini_jornada;

			SELECT 
				SUM(((hour(hora_fim_jornada)*60 + minute(hora_fim_jornada)) - (hour(hora_ini_jornada)*60 + minute(hora_ini_jornada)))
			    -((hour(hora_fim_almoco)*60 + minute(hora_fim_almoco)) - (hour(hora_ini_almoco)*60 + minute(hora_ini_almoco)))) as minsMes
			FROM
			    apontamentoJornadaTrab
			WHERE
			    MONTH(dat_apont) = MONTH(CURRENT_DATE()) order by hora_ini_jornada;

SELECT 
    *
FROM
    apontamentoJornadaTrab
WHERE
    dat_apont = '2020-02-22';