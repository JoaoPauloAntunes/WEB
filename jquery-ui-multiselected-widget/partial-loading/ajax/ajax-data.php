<?php

$key = filter_input(INPUT_POST, 'key');
if (!isset($key)) {
    json_encode("INVALID KEY!!!", E_USER_ERROR);
    exit;
}

$aDados = [
    [
        ['frota' => 'f1'],
        ['frota' => 'f2'],
        ['frota' => 'f3'],
        ['frota' => 'f4'],
    ],
    [
        ['frota' => 'f5'],
        ['frota' => 'f6'],
        ['frota' => 'f7'],
        ['frota' => 'f8'],
    ],
    [
        ['frota' => 'f9'],
        ['frota' => 'f10'],
        ['frota' => 'f11'],
        ['frota' => 'f12'],
    ],
    [
        ['frota' => 'Corola Vírus'],
        ['frota' => 'Celta'],
        ['frota' => 'Trator JD'],
        ['frota' => 'Ferrari'],
    ],
];

echo json_encode($aDados[$key % count($aDados)]);
exit;
?>