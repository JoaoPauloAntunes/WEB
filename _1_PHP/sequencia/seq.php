<html>
	<body>
		<?php
			$ini= isset($_GET['ini'])?$_GET['ini']:0;
			$fim=$_GET['fim']?$_GET['fim']:0;
			$inc=$_GET['inc']?$_GET['inc']:0;
			#echo "$ini $fim $inc<br><br>";
			
			if($ini < $fim)
			{
				for($i=$ini; $i <= $fim; $i += $inc)
				{
					echo "$i ";
				}
			}
			else
			{
				for($i=$ini; $i >= $fim; $i -= $inc)
				{
					echo "$i ";
				}
			}
		?>
	</body>
</html>