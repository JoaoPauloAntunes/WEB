<html>
	<body>
		<div>
			<pre>
				<table border="1"><tr>
					 <?php
						$v = range(2,10,2);
						/* Para cada elemento do vetor $v, tratado como $n, faça (repetição)*/
						foreach($v as $n) { 
							echo "<td>$n ";
						}
					 ?>
				 </table>
			 </pre>
		</div>
	</body>
</html>