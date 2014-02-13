<?php
/*
 * Created on Sep 2, 2013
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */

 $responce->page = $_GET['page'];  // page 1,2.... jqgrid to display
 $responce->records=6;                // total record , jqgrid must know
$responce->total = 2;  // total pages in table


////////////first method using core php arrays

/*
	if($responce->page==1){
    $responce->rows[0]['id']=400;
    $responce->rows[0]['cell']=array(400,"CH","19","Pekin","47","35");

	    $responce->rows[1]['id']=400;
    $responce->rows[1]['cell']=array(400,"CH","19","Pekin","47","35");

	    $responce->rows[2]['id']=400;
    $responce->rows[2]['cell']=array(400,"CH","19","Pekin","47","35");

	    $responce->rows[3]['id']=400;
    $responce->rows[3]['cell']=array(400,"CH","19","Pekin","47","35");

	    $responce->rows[4]['id']=400;
    $responce->rows[4]['cell']=array(400,"CH","19","Pekin","47","35");

	    $responce->rows[5]['id']=400;
    $responce->rows[5]['cell']=array(400,"CH","19","Pekin","47","35");

	
	echo json_encode($responce);
}else{
	$responce->rows[0]['id']=400;
    $responce->rows[0]['cell']=array(400,"CH","19","Pekin","47","35");
	
	echo json_encode($responce);
	}
*/


//=====================================


	
	// dummy method (must be json object which is array of objects with "id" and "cell" properties
	if($responce->page==1)
	echo '{ "page":1, "total":2 , "records":6, "rows":[{"id":400,"cell":[400,"CH","19","Pekin","47","35"]} ,
					{"id":401,"cell":[400,"CH","19","Pekin","47","35"]},
					{"id":8039, "cell":[8039,"CH", "19", "1Aadorf","47.4833", "8.9"]},
					{"id":8040, "cell":[8040,"CH", "19", "1Aadorf","47.4833", "8.9"]},
					{"id":8041, "cell":[8041,"CH", "19", "1Aadorf","47.4833", "8.9"]}
					]}';
				
				
	if($responce->page==2)
	echo '{ "page":2, "total":2, "records":6,"rows":[{"id":125,"cell":[400,"CH","19","Pekin","47","35"]}]} ';
		

	?>
