<html>
	<body>
		<form method='get' action='tab.php'>
			<label for='tab'>Valor:</label>
			<select name='tab'>
				<?php
					for($i=1; $i<=10; $i++)
					{
						echo " <option value='$i'>$i</option>";
					}
				?>
			</select>
			<input type="submit" value='Tabuada'>
		</form>
	</body>
</html>