<?php
#fopen ($nomedoarquivo, $modo);
/*
https://eufacoprogramas.com/como-manipular-arquivos-em-php/#criar-arquivos-em-php

$nomedoarquivo – O nome do arquivo pode conter o caminho absoluto onde você deseja criar o seu arquivo. Por exemplo, ‘www/programa/arquivo.txt’.
$modo – O modo indica as permissões de acesso para o arquivo que foi criado. Por exemplo, ele pode ser criado apenas para leitura (consulta de dados) ou para escrita e leitura.
*/
$nomeArq = "arq.xls";
$modoAcesso = "w"; // read

$arq = fopen($nomeArq, $modoAcesso);
if($arq == false)
	// mata o processo e retorna a msg
	die('Não foi possível criar o arquivo.');
else{
	//fwrite($ponteiro, $string, $tamanho);
	/*
	$ponteiro – O ponteiro aqui utilizado, está armazenado na variável que você usou para abrir ou criar o arquivo.
	$string – O conteúdo textual que você deseja escrever em seu arquivo.
	$tamanho – É o tamanho em número de bytes que deve ser gravado no arquivo. Opcional.
	*/
	$content = 
	"<table>
		<thead>
			<tr>
				<th>col1</th>
				<th>col2</th>
				<th>col3</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>2</td>
				<td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>5</td>
				<td>6</td>
			</tr>
		</tbody>
	</table>";
	
	fwrite($arq, $content);
}
 
?>