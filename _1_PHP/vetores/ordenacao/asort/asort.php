<html>
	<head>
		<?php
			$v[]=array('João Paulo','Maria','Júlia','Melissa','Letícia');
			$v[]=array(3,2,5,1,4);
			
			asort($v[1]);
			#Para cada $v de índice associado ao elemento, faça
			echo "<table>";
			foreach($v[1] as $i=>$e){
				printf("<tr><td>%s</td><td>%d</td><br></tr>",$v[0][$i],$e);
			}
			echo "</table>";
		?>
	</head>
</html>