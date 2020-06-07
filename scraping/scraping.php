<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
// Assuming you installed from Composer:
require "vendor/autoload.php";
use PHPHtmlParser\Dom;

$dom = new Dom;
$dom->load('http://agrofit.agricultura.gov.br/agrofit_cons/!ap_produto_form_detalhe_cons?p_id_produto=&p_nm_marca_comercial=&p_id_registrante_empresa=&p_id_ingrediente_ativo=&p_nm_comum_portugues=&p_id_tecnica_aplicacao=&p_id_classe=&p_nr_registro=&p_id_classificacao_tox=&p_id_classificacao_amb=&p_tipo_aplicacao=C&p_id_cultura=&p_id_praga_inseto=&p_id_cultura_planta=&p_id_planta_daninha=&p_id_cultura_praga=&p_id_cultura_inseto=&p_id_praga=&p_nm_sort=nm_marca_comercial&p_linha_inicial=0&p_id_produto_formulado_tecnico=10775');
// $a = $dom->find('a')[0];
// echo $a->text; // "click here"