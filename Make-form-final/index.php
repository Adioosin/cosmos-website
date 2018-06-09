<?php
$mysqli = new mysqli("127.0.0.1", "root", "", "cosmos360");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$college = $_POST['college'];
if($college == "Other Institute"){
	$college = $_POST['inst'];
}
$team_name = $_POST["team_name"];
$name1=$_POST['name'];
$reg_no1=$_POST['regno'];
$email_id1=$_POST['email'];
$mobile_no1=$_POST['mobile'];
$team_size=$_POST['team_size'];
$name2=$_POST['name1'];
$reg_no2=$_POST['regno1'];
$email_id2=$_POST['email1'];
$mobile_no2=$_POST['mobile1'];
$name3=$_POST['name2'];
$reg_no3=$_POST['regno2'];
$email3=$_POST['email2'];
$mobile_no3=$_POST['mobile2'];

if($stmt = $mysqli->prepare("INSERT INTO participants(college,team_name,name1,regno1,email_id1,mobile_no1,team_size,name2,regno2,email2,mobile_no2,name3,reg_no3,email3,mobile_no3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)")){
$stmt->bind_param("ssssssissssssss", $college, $team_name, $name1, $reg_no1, $email_id1, $mobile_no1, $team_size, $name2, $reg_no2, $email_id2, $mobile_no2, $name3, $reg_no3, $email_id3, $mobile_no3);
$stmt->execute();
}
echo "done";
?>