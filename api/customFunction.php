<?php	
	
	$json = file_get_contents('php://input');
	$obj 	= json_decode($json,true);
	$base64string = $obj['base64_data'];
	$image = time().'.png';
	file_put_contents('upload/'.$image, base64_decode($base64string));
	echo json_encode('Great');
?>		