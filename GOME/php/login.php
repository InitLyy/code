<?php
//登陆操作
    include ('globalFun.php');
    session_start();
    $conn = getConnect();
    $info=$_GET['info'];
	$username=$info[0];
	$password=$info[1];
    unset($_SESSION['LOGIN_ERROR_IN_SESSION']);

    //调用验证函数
    //validateEntry($username,$password);
    //validatePwd($username,$password,$conn);

    //查询数据库 存入 ID 和 NICKNAME PHOTO方便使用
    $conn = getConnect();
    // $password=md5($password);
    $sql = "SELECT id,nickname FROM users WHERE username = '$username' AND password = '$password'";
    $result =$conn->query($sql);
    $row = $result->fetch_array();
    $res="";
    if (mysqli_num_rows($result) == 0)
    {
        closeConnect($conn);
        $conn = getConnect();
        $sql = "SELECT id FROM users WHERE username = '$username'";
        $result =$conn->query($sql);
        if (mysqli_num_rows($result) == 0){
            $res = "wronginput";
        }
        else{
            $res = "wrongpwd";
        }

    }
    else{
        $_SESSION['NICKNAME_IN_SESSION']=$row["nickname"];
        $_SESSION['USERID_IN_SESSION']=$row["id"];
        $res = "ok";
    }
    closeConnect($conn);
    exit(json_encode($res));
?>