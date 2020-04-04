<?php
/*
'::':  símbolo que permite acesso a métodos ou propriedades estáticas, constantes, e sobrecarregadas de uma classe.
'->': símbolo que permite acesso a métodos ou propriedades orientadas a objetos
*/
function validateDate($date, $format = 'd-m-Y H:i:s') 
{
    $d = DateTime::createFromFormat($format, $date); // cria um novo objeto DateTime contendo a data informada no formato informado usando um método estático da classe DateTime

    // valida a data se ela for armazenada corretamente em um objeto de instância da classe DateTime
    return $d // verifica se o objeto de instância da classe DateTime referenciou um bloco de memória
     && $d->format($format) == $date; // verifica se a data no formato criado é igual ao argumento $date
}