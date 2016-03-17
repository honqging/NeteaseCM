<?php
	$p = $_GET["musicName"];
	// $p = "asang";
	$p = "%".$p."%";
	$con = mysql_connect('127.0.0.1','root','root');
	if(!con)
	{
		die('Could not connect : '.mysql_error());
	}

	mysql_select_db("NeteaseCM", $con);
	$sql = "SELECT * from NeteaseCM.Music where musicName like '".$p."'";
	$result = mysql_query($sql);

	echo "<table border='0'>";
		// <tr>
		// <th>musicName</th>
		// </tr>";

	while($row = mysql_fetch_array($result))
	{
		echo "<tr>";
		echo "<td>".$row['musicName']."</td>";
		echo "</tr>";

	}
	echo "</table>";
	mysql_close($con);

?>



