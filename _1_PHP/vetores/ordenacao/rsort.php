<html>
	<body>
		<?php
			$v[] = 5;
			$v[] = 3;
			$v[] = 4;
			$v[] = 2;
			
			rsort($v); #ordena vetor em ordem reversa
			
			for($i=0; $i<4; $i++) echo "$v[$i] ";
			echo "<br><br>";
		?>
		</pre>
	</body>
</html>