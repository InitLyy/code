<?php
    session_start();
    include('globalFun.php');
    $list=array("nickname"=>"");
    $list["nickname"] = $_SESSION['NICKNAME_IN_SESSION'];
    exit(json_encode($list));
?>