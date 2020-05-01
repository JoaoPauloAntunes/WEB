<html>
	<body>
		<style>
			span {
				color: red;
			}
		</style>
	</body>
	<head>
		<?php
			$n = isset($_GET['fat'])?$_GET['fat']:-1;
			if($n < 0) echo "&empty;";
			else if($n == 0) echo "$n! = <span>1</span>";
			else
			{
				$fat = 1;
				$i = $n;
				do
				{
					$fat *= $i;
					$i--;
				}while($i>1);
				echo "$n! = <span>$fat</span>";
			}
		?>
		<br><br>
		<a href="javascript: history.go(-1)">Voltar</a>
	</head>
</html>