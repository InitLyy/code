<?php
	include("globalFun.php");
	session_start();

    $info=$_GET['info'];
    $username=$info[0];
    $password=$info[1];
    $phone = $info[2];

	$conn = getConnect();
    // $password=md5($password)
    $res = "ok";
	$sql = "INSERT INTO users VALUES (null,'$username' ,'$password','$phone',null)";
	if (!$conn->query($sql) === TRUE)
    {
        $res = "wrong";
    }
    else {
        $sql = "SELECT id FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);
        $row = mysqli_fetch_array($result);
        $nickname ="国美_";
        $nickname.=$row["id"];
        $sql = "UPDATE users SET nickname = '$nickname' WHERE username = '$username'";
        if (!$conn->query($sql) === TRUE)
        {
            $res = "wrong";
        }
    }
    closeConnect($conn);
    exit(json_encode($res));
?>