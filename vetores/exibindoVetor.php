<html>
	<body>
		<?php
			$v[] = 5;
			$v[] = 3;
			$v[] = 4;
			$v[] = 2;
			
			for($i=0; $i<4; $i++) echo "$v[$i] ";
			echo "<br><br>";
			
			foreach($v as $i) {
				echo "$i ";
			}
			echo "<br>";
			
			echo "<pre>";
			print_r($v);
			
			echo "<br>";
			var_dump($v); #despejo variável
		?>
		</pre>
	</body>
</html>