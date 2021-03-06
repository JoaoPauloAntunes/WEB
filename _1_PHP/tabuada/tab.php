<html>
	<body>
		<?php
			$n = $_GET['tab'];
			for($i=1; $i<=10; $i++)
			{
				echo "$n X $i = ".$n*$i."<br>";
			}
		?>
	</body>
	<br><a href='javascript: history.go(-1)'>Voltar</a>
</html>