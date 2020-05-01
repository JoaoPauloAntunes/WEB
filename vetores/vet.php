<html>
	<body>
		<pre>
		<?php
			$n = array(3,2);
			$n[2] = 4;
			$n[] = 5; #coloca automáticamente na última posição
			#modificar valor
			$n[1] = 0;
			print_r($n);
		?>
		</pre>
	</body>
</html>