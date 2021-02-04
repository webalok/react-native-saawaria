<?php
	include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	
 $json 										= file_get_contents('php://input');
 $obj 											= json_decode($json,true);

	$ID 												= $obj['ID'];
	$title 									= $obj['title'];
	$description 			= $obj['description'];

 $Sql_Query 					= "UPDATE blog SET title= '$title', description = '$description' WHERE ID = $ID";
 if(mysqli_query($con,$Sql_Query)){
		$MSG = 'Record Successfully updated in MySQL Database.' ;
	$json = json_encode($MSG);
		echo $json ;
 }
 else{
 echo 'Try Again';
 }
 mysqli_close($con);
?>