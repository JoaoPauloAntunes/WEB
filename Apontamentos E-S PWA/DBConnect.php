<?php
	error_reporting(E_ALL);

	$host = "localhost";
	$usuario = "root";
	$senha = "p@ssjp";
	$bd = "apontamentosES";

	$mysqli = new mysqli($host, $usuario, $senha, $bd);
	if($mysqli->connect_errno)
		echo "Falha na conexão: (".$mysqli->connect_errno.") ".$mysqli->connect_error;
?>