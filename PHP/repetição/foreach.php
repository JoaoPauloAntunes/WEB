<?php

// // Atribuições de $e pelo valor
// $arr = array(1, 2);
// // Para cada elemento de $arr atribui um $e 
// // com o valor do elemento 
// foreach($arr as $e) {
// 	echo $e."<br/>";
// }

// Atribuições de $e pela referência
$arr = array(1, 2);
// Para cada elemento de $arr atribui um $e 
// com a referência do elemento
foreach ($arr as &$e) {
	echo $e."<br/>";
}

// // $e ainda tem a referência de $arr[1]:
// $e = 5;
// echo $arr[1]."<br/>";

// Remove a refência:
unset($e);
$e = 5;
echo $arr[1]."<br/>";