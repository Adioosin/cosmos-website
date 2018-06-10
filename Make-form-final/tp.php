<?php
$servername="127.0.0.1";
$username="root";
$password="";
$dbname="dsaproject";

$connect = new mysqli("$servername",$username,$password,$dbname); 

$name1=$_POST['name'];
echo "
<script>
	alert('Hello1');
</script>
";
$q1 = "INSERT INTO records VALUES ($name1)";


if ($connect->query($q1) === TRUE) 
    echo "<br>"."New record created successfully";
else 
    echo "Error: " . $q1 . "<br>" . $connect->error;

?>