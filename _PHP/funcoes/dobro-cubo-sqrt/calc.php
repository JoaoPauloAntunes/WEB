<html>
	<head>
		<style>
			p{
				font-size: 16pt;
				color: red;
			}
		</style>
	</head>
	<body>
		<?php
			$n = isset($_GET["n"])?$_GET["n"]:0;
			$func = isset($_GET["func"])?$_GET["func"]:"dobro";
			#echo "$n e $func";
			echo "<p>";
			switch($func)
			{
			case "dobro":
				echo "dobro de $n: ".$n*2;
				break;
			case "triplo":
				echo "triplo de $n: ".$n*3;
				break;
			case "raiz":
				echo "raíz quadrada de $n: ".number_format(sqrt($n),2);
				break;
			}
			echo "</p>";
		?>
		<p><a href="javascript:history.go(-1)" class=botao>Voltar</a></p> <!-- volta 1 pagina no histórico-->
	</body>
</html>