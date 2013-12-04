<?php
		
	header("Expires: Sat, 26 Jul 2020 05:00:00 GMT"); // Date in the future//Setting an expiration date for the cached page is one useful way to cache it on the client side.


	

	 echo $_GET["number"]* $_GET["number"];
	$date = date('m/d/Y h:i:s a', time());
	 echo "__".$date;
?>