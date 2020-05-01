<html>
	<body>
		<?php
			function soma() {
				$v = func_get_args();
				$q = func_num_args();
				for($s=0, $i=0; $i < $q; $i++)
				{
					$s += $v[$i];
				}
				return $s;
			}
		?>
	</body>
</html>