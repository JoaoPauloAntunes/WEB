<html>
	<body>
		<?php
			function maior() {
				$v = func_get_args();
				
				$m=$v['A']['ptv'];
				foreach($v as $e) { /* Para cada elemento do vetor $v tratado como $e, faça*/
					if($e > $m) $m = $e;
				}
				return $m;
			}
			#echo maior(0,2,0,0);
		?>
	</body>
</html>