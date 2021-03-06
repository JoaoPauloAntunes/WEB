<?php
	# Criar arquivo xls
	
	//Verificar se a sessão não já está aberta.
	if (session_status() !== PHP_SESSION_ACTIVE) {
		// inicializa sessão
		@session_start();
	}

	// declara nome do arquivo
	$arquivo = 'planilha_'.$_SESSION["nome"].'.xls';

	header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

	// declara a data da última modificação
	header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");

	// declara que não guardará cachê
	header ("Cache-Control: no-cache, must-revalidate");
	header ("Pragma: no-cache");

	// declara o tipo de conteúdo como de arquivo planilha de Excel
	header ("Content-type: application/vnd.ms-excel; charset=utf-8");

	// declara que o navegador deverá abrir uma janela de download com o nome do arquivo
	header ("Content-Disposition: attachment; filename=\"{$arquivo}\"" );

	// declara que a descrição do conteúdo é "dado gerado pelo PHP"	
	header ("Content-Description: PHP Generated Data" );

	/*como funciona str_replace:
	*resultadoSubst = str_replace("buscar por", "substituir por", "na string")
	*/
	$table = "<table>
		<tr><td><strong>minsMes</strong></td><td><strong>horasMes</strong></td></tr>
		<tr><td>".$_SESSION['minsMes']."</td><td>".str_replace(".", ",", $_SESSION['horasMes'])."</td></tr>
	</table>
	<br/>".$_SESSION['table'];

	/*
	o Excel usa codificação de caracteres ISO-8859-1
	Como os dados estão na codificação UTF8, precisa 
	ser decodificado para ficar na codificação ISO-8859-1 
	https://www.php.net/manual/pt_BR/function.utf8-decode.php
	*/
	echo utf8_decode ($table);
	exit;
?>