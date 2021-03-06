<?php
$date = date("Y-m-d H:i:s");
echo "<pre>";
var_dump($date);
var_dump(md5($date));
echo "</pre>";