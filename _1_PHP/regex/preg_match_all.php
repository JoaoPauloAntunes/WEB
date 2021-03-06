<?php
preg_match_all("/-(\w+)-/", "teste-abcd-b-a-rsfasd-f-sadasfsadfgsadf-s-sd", $matches);

echo "<pre>";
var_dump($matches);
echo "</pre>";

// preg_match_all("/\(?  (\d{3})?  \)?  (?(1)  [\-\s] ) \d{3}-\d{4}/x",
// "Call 555-1212 or 1-800-555-1212", $phones);

// echo "<pre>";
// var_dump($phones);
// echo "</pre>";

// preg_match_all("|<[^>]+>(.*)</[^>]+>|U",
//     "<b>example: </b><div align=left>this is a test</div>",
//     $out, PREG_PATTERN_ORDER);

// echo $out[0][0] . ", " . $out[0][1] . "\n";
// echo $out[1][0] . ", " . $out[1][1] . "\n";
?>