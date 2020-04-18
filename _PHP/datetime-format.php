<?php
$format = 'Y-m-d H:i:s';
$date = DateTime::createFromFormat($format, '2009-02-15 15:16:17');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "<br />";
echo "Format: $format; " . $date->format('d-m-Y H:i:s') . "<br />";