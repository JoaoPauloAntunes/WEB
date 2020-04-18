/* BUSCA CASE-INSENSITIVE (padrão)*/
SELECT
    cid.id as id_cidade, cid.nome,
    est.id as id_estado, est.nome 
FROM 
    tb_estado est
        JOIN
    tb_cidade cid ON cid.id_estado = est.id 
WHERE BINARY 
    cid.nome = 'Rio ClAro' and est.uf = 'SP';

/* BUSCA CASE-SENSITIVE (usando palavra reservada BINARY)*/
SELECT
    cid.id as id_cidade, cid.nome,
    est.id as id_estado, est.nome 
FROM 
    tb_estado est
        JOIN
    tb_cidade cid ON cid.id_estado = est.id 
WHERE BINARY 
    cid.nome = 'Rio ClAro' and est.uf = 'SP';