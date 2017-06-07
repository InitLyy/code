<?php
//登出操作 删除SESSION的一些信息
    session_start();
    unset($_SESSION['NICKNAME_IN_SESSION']);
?>