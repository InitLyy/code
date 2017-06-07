<?php
	include("globalFun.php");
	session_start();

    $info=$_GET['info'];
    $username = $info[0];

	$conn = getConnect();
    // $password=md5($password)
    $res = "ok";
    $sql = "SELECT id FROM users WHERE username = '$username'";
    $result =$conn->query($sql);
    $row = $result->fetch_array();
	if (mysqli_num_rows($result) == 0)
    {
        $res = "ok";
    }
    else {
        $res = "wrong";
    }
    closeConnect($conn);
    exit(json_encode($res));
?>