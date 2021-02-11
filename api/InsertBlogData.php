<?php
	include 'DBConfig.php';
	$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	
	$json = file_get_contents('php://input');
	$obj 	= json_decode($json,true);
	
	$title 									= $obj['title'];
	$description 			= $obj['description'];
	$base64string 		= $obj['base64_data'];
	$blog_cat_id 			= $obj['catID'];	
	$status 								= $obj['blog_status'];
	
	$image = time().'.png';
	file_put_contents('upload/'.$image, base64_decode($base64string));
	
	$Sql_Query 					= "insert into blog (title,description,image,blog_cat_id,status) values ('$title','$description','$image',$blog_cat_id, $status)";
	if(mysqli_query($con,$Sql_Query)){
		$MSG = 'Record Successfully Inserted Into MySQL Database.';
		$json = json_encode($MSG);
		echo $json ;
	}
	else{
		echo 'Try Again';
	}
	mysqli_close($con);
?>