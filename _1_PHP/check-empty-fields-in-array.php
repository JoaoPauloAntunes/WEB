<?php

$aFiltros = [
    'id_cliente'    => "a",    
    'frotas'        => "8, 5, 2, 199, 4",
    'initial_date'  => "", #"28/04/2020",
    'final_date'    => "01/01/2020",
];

$loop = 0;
$validado = true;
foreach ($aFiltros as $filtro) {
    if (!$filtro) {
        $validado = false;
        break;
    }
    $loop ++;
}

echo "<pre>";
var_dump($validado);
var_dump($loop);
echo "</pre>";
