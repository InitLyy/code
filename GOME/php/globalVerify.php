<?php
session_start();
if(!isset($_SESSION['NICKNAME_IN_SESSION']))
{
    header('Location:../../html/login.html');
}
$_SESSION['TEMP_PHOTO_IN_SESSION']=null;
?>