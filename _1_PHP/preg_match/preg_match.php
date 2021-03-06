<?php

$search = trim("01-gm - t");
$exprFrota = "f.codigo_frota LIKE '%{$search}%' OR f.nome_unidade LIKE '%{$search}%'";

echo '<pre>';
if (preg_match('/^(\S+)(\s+-)?$/', $search, $matches)) {
    // var_dump("------------1-------------");
    $exprFrota = "f.codigo_frota LIKE '%{$matches[1]}%' OR f.nome_unidade LIKE '%{$matches[1]}%'";
} else if (preg_match('/^(\w+) - (.+)$/', $search, $matches)) {
    // var_dump("------------2-------------");
    $exprFrota = "f.codigo_frota LIKE '%{$matches[1]}' AND f.nome_unidade LIKE '{$matches[2]}%'";
}
var_dump($exprFrota);
echo '</pre>';
exit;


// if (!empty($matches) && !empty($codigoFrota = $matches[1])) {
//     if (empty($nomeUnidade = $matches[2])) {
//         $exprFrota = "f.codigo_frota LIKE '%{$codigoFrota}%' OR f.nome_unidade LIKE '%{$codigoFrota}%'";
//     } else {
//         $exprFrota = "f.codigo_frota LIKE '%{$codigoFrota}' AND f.nome_unidade LIKE '{$nomeUnidade}%'";
//     }
// }

?>