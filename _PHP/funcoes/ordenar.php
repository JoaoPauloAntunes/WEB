<html>
	<body>
		<?php
			function ordenar() {
				$v = func_get_args();
				$na = func_num_args();
				for($j=0; $j<$na; $j++) {
					$im=$j;
					for($i=$j+1; $i<$na; $i++) {
						if($v[$i] < $v[$im]) $im = $i;
					}
					if($im > $j) {
						$aux = $v[$j];
						$v[$j] = $v[$im];
						$v[$im] = $aux;
					}
				}
				for($i=0; $i<$na; $i++) echo "$v[$i] ";
				echo "<br>";
			}
		?>
	</body>
</html>