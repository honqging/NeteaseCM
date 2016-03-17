<?php
	$p = $_GET["singerName"];
	// $p = "$".singerName."$";
	$con = mysql_connect('127.0.0.1','root','root');
	if(!con)
	{
		die('Could not connect : '.mysql_error());
	}

	mysql_select_db("NeteaseCM", $con);
	$sql = "SELECT * from NeteaseCM.Music where singerName = '".$p."'";
	$result = mysql_query($sql);

	echo "<table border='1'>";

	while($row = mysql_fetch_array($result))
	{
		echo "<tr>";
		echo "<td>".$row['musicName']."</td>";
		echo "</tr>";

	}
	echo "</table>";
	mysql_close($con);

?>



