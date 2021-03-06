<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// tudo certo:
$validado = false;
if ($validado && $var) {
	echo "OK!"; 
} else {
	echo ":(";
}

// mostra mensagem de variável indefinida por causa da configuração de erro arteriormente declarada:
// Notice: Undefined variable: var in C:\wamp\apache\htdocs\WEB\_PHP\teste-isset.php on line 6
// if (!$var) {
//     echo "OK!";

// } else {
//     echo ":(";
// }
