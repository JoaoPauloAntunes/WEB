<html>
	<body>
		<?php
			$n = isset($_GET['n'])?$_GET['n']:-1;
			if($n == 2) echo "É primo!";
			else if($n < 2 || $n % 2 == 0) echo "Não é primo!";
			else
			{
				for($i=3; $i<$n; $i+=2) if($n % $i == 0) break;
				if($i == $n) echo "É primo!";
				else echo "Não é primo!";
			}
		?>
		<br><br>
		<a href="javascript: history.go(-1)">Voltar</a>
	</body>
</html>