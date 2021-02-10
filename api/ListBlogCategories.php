<?php
	include 'DBConfig.php';
	$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT ID, title FROM blog_category ORDER BY title ASC";
	$result = $conn->query($sql);
	if ($result->num_rows >0) {
		while($row[] = $result->fetch_assoc()) {
			$item = $row;
			$json = json_encode($item);
			}
		} else {
		echo "No Results Found.";
	}
	echo $json;
	$conn->close();
?>