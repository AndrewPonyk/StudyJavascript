<?
/*
 wrote an article on this issue a while back here: Cross Domain AJAX
The easiest way to handle this if you have control of the responding server is to add a response header for:
Access-Control-Allow-Origin: *
This will allow cross domain AJAX. In PHP you'll want to modify the response like so:
you can just put Header set Access-Control-Allow-Origin * setting on apache conf or htaccess file it just work like a charm*/

header('Cache-Control: no-cache'); // in IE without this dont refresh 
header('Access-Control-Allow-Origin: *');  
?>
<?php
/*
 * Created on Jun 10, 2013
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */
 
 echo 'Ukraine has not yet perished,
 The glory and the freedom!
 Still upon us brave brothers,
 Fate shall smile!
 Our enemies will vanish
 Like dew in the sun;
 We too shall rule
 In our country.';
?>
