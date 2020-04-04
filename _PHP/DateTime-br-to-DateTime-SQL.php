<?php
$search = "27/03/2020 00:00:00 ";

$pieces = explode(' ', $search);
if (count($pieces) == 1) {
	$dateTime = dateFormat($pieces[0]);
	if (!$dateTime) {
		$dateTime = $search;
	}
} else if (count($pieces) == 2) {
	$date = dateFormat($pieces[0]);
	if (!$date) {
		$dateTime = $search;
	} else {
		$time = $pieces[1];
		$dateTime = $date." ".$time;
	}
} else {
	echo "not is date".'<br>';
	$dateTime = $search;
}
echo "%{$dateTime}%";

function dateFormat($date) {
    $split_date = explode('/', $date);
    // $split_date = removeEmpty($split_date);
    // removes all NULL, FALSE and Empty Strings but leaves 0 (zero) values
    $split_date = array_filter( $split_date, 'strlen' );
    if (count($split_date) <= 3 && isDate($split_date)) {
        // year
        if (array_key_exists(2, $split_date) && strlen($split_date[2]) < 4) {
    		$split_date[2] .= '%';
        }

        // mounth
        if (array_key_exists(1, $split_date) && strlen($split_date[1]) == 1) {
    		$split_date[1] .= '%';
        }
        
        return implode('-', array_reverse($split_date));
    } else {
        // echo "not is date".'<br>';
        return false;
    }
}
function isDate($array) {
	foreach ($array as $date) {
		if (!is_numeric($date)) {
			return false;
		}
	}
	return true;
}