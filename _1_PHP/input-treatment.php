<?php
// Input sanitize
function filterNumber($fieldName)
{
    return preg_replace(
        '/[^0-9]/',
        '',
        filter_input(INPUT_POST, $fieldName)
    );
}

function filterText($fieldName)
{
    return filter_var(trim(filter_input(INPUT_POST, $fieldName)), FILTER_SANITIZE_STRING);
}

function filterEmail($fieldName)
{
    return filter_var(filter_input(INPUT_POST, $fieldName), FILTER_SANITIZE_EMAIL);
}


// Input format
function formatCnpjCpf($cnpjCpf)
{
    if (strlen($cnpjCpf) === 11) {
        return preg_replace("/(\d{3})(\d{3})(\d{3})(\d{2})/", "\$1.\$2.\$3-\$4", $cnpjCpf);
    } else {
        return preg_replace("/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/", "\$1.\$2.\$3/\$4-\$5", $cnpjCpf);
    }
}

function formatCep($cep)
{
    return preg_replace("/(\d{5})(\d{3})/", "\$1-\$2", $cep);
}

function formatTel($tel)
{
    return preg_replace("/(\d{2})(\d{4})(\d{4})/", "(\$1)\$2-\$3", $tel);
}

function datetimeToDatahora($datetime)
{
    $datahora = DateTime::createFromFormat('Y-m-d H:i:s', $datetime);
    return $datahora->format('d/m/Y H:i:s');
}

function dateToData($date)
{
    $data = DateTime::createFromFormat('Y-m-d', $date);
    return $data->format('d/m/Y');
}

function dataToDate($data)
{
    $pieces = explode('/', $data);
    if (count($pieces) == 3) {
        return implode('-', array_reverse($pieces));
    } else {
        return false;
    }
}

function datahoraToDatetime($datahora)
{
    $pieces = explode(' ', $datahora);
    if ( count($pieces) == 2 ) {
    	$data = $pieces[0];
    	$time = $pieces[1];
    } else {
    	return false;
    }

    $pieces = explode('/', $data);
    if ( count($pieces) == 3 ) {
    	$date = implode( '-', array_reverse($pieces) );
        return $date . ' ' . $time;
    } else {
        return false;
    }
}


// input validation
function isValidCnpjCpf($cnpjCpf)
{
    return strlen($cnpjCpf) == 11 || strlen($cnpjCpf) == 14;
}

function isValidCep($cep)
{
    return strlen($cep) == 8;
}

function isValidTel($tel)
{
    return strlen($tel) == 10;
}

function isValidCel($cel)
{
    return strlen($cel) == 10 || strlen($cel) == 11;
}

function isValidEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isValidDate($date)
{
    $pieces = explode('-', $date);
    if (count($pieces) == 3) {
        // checkdate ( int $month , int $day , int $year ) : bool
        return checkdate($pieces[1], $pieces[2], $pieces[0]);
    }
    return false;
}

function dateVal($date)
{
    preg_replace("/(\d{4})-(\d{2})-(\d{2})/", "$1$2$3", $date);
}