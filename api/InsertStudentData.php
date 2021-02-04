<?php
	include 'DBConfig.php';
	$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	
	$json = file_get_contents('php://input');
	$obj 	= json_decode($json,true);
	
	$S_Name 								= $obj['student_name'];
	$S_Class 							= $obj['student_class'];
	$S_Phone_Number = $obj['student_phone_number'];
	$S_Email 							= $obj['student_email'];
	$Sql_Query 					= "insert into StudentDetailsTable (student_name,student_class,student_phone_number,student_email) values ('$S_Name','$S_Class','$S_Phone_Number','$S_Email')";
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