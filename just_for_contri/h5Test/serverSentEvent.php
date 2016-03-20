<!--serverSentEvent.php -->
<?php
	header('Content-Type:text/event-stream');
	header('Cache-Control:no-cache');

	$time = data('r');
	echo "data: The server time is:{$time}\n\n";
	flush();

?>
