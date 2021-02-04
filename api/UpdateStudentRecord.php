<?php
	include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	
 $json 										= file_get_contents('php://input');
 $obj 											= json_decode($json,true);
 $S_ID 										= $obj['student_id'];
 $S_Name 								= $obj['student_name'];
 $S_Class 							= $obj['student_class'];
 $S_Phone_Number = $obj['student_phone_number'];
 $S_Email 							= $obj['student_email'];
 $Sql_Query 					= "UPDATE StudentDetailsTable SET student_name= '$S_Name', student_class = '$S_Class', student_phone_number = '$S_Phone_Number', student_email = '$S_Email' WHERE student_id = $S_ID";
 if(mysqli_query($con,$Sql_Query)){
		$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
	$json = json_encode($MSG);
		echo $json ;
 }
 else{
 echo 'Try Again';
 }
 mysqli_close($con);
?>