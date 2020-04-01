<?php
// https://www.php.net/manual/pt_BR/language.references.whatare.php

// // =&: atribuição de referência
// $b = 3;
// $a =& $b; // "$a = $b" significa atribuição de valor
// echo "a,b: ".$a.",".$b;

// // variáveis podem ser vinculadas antes de serem atribuídas
// $a =& $b;
// $a = 2;
// echo "a,b: ".$a.",".$b;

// elementos de array referenciando variáveis escalares (monovaloradas):
$a = 1;
$b = 2;
$c = array(&$a, &$b);

$a = 3;
$b = 4;
echo "c: $c[0],$c[1]<br />"; // 3,4

$c[0] = 5;
$c[1] = 6;
echo "a,b: $a,$b<br />"; // 5,6

// referencias entre arrays 
$d = array(1,2);
$e =& $d;

$d[0] = 3;
$d[1] = 4;
echo "e: $e[0],$e[1]<br/>"; // 3,4

$e[0] = 5;
$e[1] = 6;
echo "d: $d[0],$d[1]<br/>"; // 5,6

$e = 7;
echo "d: $d<br/>"; // 7 ( agora $d não é mais um array, é um inteiro)

/*
Iterando referências de array usando o construtor foreach 
*/
foreach($f as $x) // se $x é inicializado pelo valor, ele não altera as variáveis referenciadas
  $x = 3;
echo "a,b: $a,$b\n"; // 1,2

foreach($f as &$x) // se $x é inicializado pela referência, ele altera as variáveis referenciadas
  $x = 3;
echo "a,b: $a,$b\n"; // 3,3

// Esteja ciente de que após o loop, $x ainda faz referência a $f[1] e, portanto, $b
$x = 4;
echo "a,b: $a,$b\n"; // 3,4 ( $b é afetado )

// Para evitar efeitos colaterais anteriores é recomendável desreferenciar x, desvinculando-o de $f[1] e $b 
unset($x);
$x = 5;
echo "a,b: $a,$b\n"; // 3,4 ( $b not affected )

?>

<?php
/*
Object property referencing a scalar variable
*/

$a = 1;
$b = new stdClass();
$b->x =& $a;

$a = 2;
echo "b->x: $b->x\n"; // 2

$b->x = 3;
echo "a: $a\n"; // 3

/* Reference between objects */
$c = new stdClass();
$c->x = 1;
$d =& $c;

$d->x = 2;
echo "c->x: $c->x\n"; // 2

$d = new stdClass();
$d->y = 3;
echo "c->y: $c->y\n"; // 3
echo "c->x: $c->x\n"; // Undefined property: stdClass::$x

?>