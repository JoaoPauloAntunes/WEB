<!--
https://exercicios.brasilescola.uol.com.br/exercicios-matematica/exercicios-sobre-estatistica.htm#resp-4
ex4
-->

<html>
	<body>
		<div>
			<?php
				require "requeridos/soma.php";
				require "requeridos/maior.php";
				
				$tab =array('A' => array('ptv' => .26),
						'B' => array('ptv' => .24),
						'C' => array('ptv' => .22),
						'NB'=> array(			 'nv' => 196));
				#echo $tab['NB']['nv']."<br>";
				
				$s = soma($tab['A']['ptv'] + $tab['B']['ptv'] + $tab['C']['ptv']);
				$tab['NB']['ptv'] = 1-$s;
				#echo $tab['NB']['ptv'];
				
				$m = maior($tab['A']['ptv'],$tab['B']['ptv'],$tab['C']['ptv']);
				#echo $m;
				
				$cv = $tab['NB']['nv']/$tab['NB']['ptv']*$m;
				#echo $cv;
				
				echo "Número de votos obtidos pelo candidato vencedor: $cv<br>";
			?>
		</div>
	</body>
</html>