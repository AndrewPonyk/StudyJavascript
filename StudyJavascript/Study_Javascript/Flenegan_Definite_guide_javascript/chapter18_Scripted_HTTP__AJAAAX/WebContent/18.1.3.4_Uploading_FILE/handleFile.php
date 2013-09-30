<?php

//$fn = (isset($_SERVER['HTTP_X']) ? $_SERVER['HTTP_X'] : false); // it doesn't work , i don't know why )

$fn=$_COOKIE['fileName'];
if ($fn) {
	// AJAX call
	file_put_contents(
		'uploads/' . $fn,
		file_get_contents('php://input')
	);
        
	echo "$fn uploaded";
             setcookie("fileName", "", time()-3600);
	exit();
}


$target_path = "uploads/";

$target_path = $target_path.basename( $_FILES['fileName']['name']); 

if(move_uploaded_file($_FILES['fileName']['tmp_name'], $target_path)) {
    echo "The file ".basename( $_FILES['fileName']['name']). 
    " has been uploaded";
} else{
    echo "There was an error uploading the file, please try again!";
};

?>