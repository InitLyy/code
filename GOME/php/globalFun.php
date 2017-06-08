<?php
    header("Content-Type:text/html;charset=UTF-8");
    include('globalFunVerify.php');//验证
    function getConnect()
    {
        $ini_array = parse_ini_file("sql.ini");
        $conn = mysqli_connect("localhost",$ini_array["username"],$ini_array["password"],$ini_array["database"]);
        if (mysqli_connect_errno($conn))
        {
            die("连接 MySQL 失败: " . mysqli_connect_error());
        }
        $sql = "SET NAMES utf8";
        $conn->query($sql);
        return $conn;
    }

    function closeConnect($conn)
    {
        mysqli_close($conn);
    }

    function logMsg($content)
    {
        $logfile = '../logs/bicycle.log.'.date('Ymd').'.txt';
        $content=str_replace("  ","",$content);
        $content=str_replace("\n","",$content);
        if(!file_exists($logfile))
        {
            file_put_contents($logfile,date("[Y-m-d H:i:s]")."Creat\r\n");
        }
        file_put_contents($logfile, date("[Y-m-d H:i:s]")." -[".$_SERVER['REQUEST_URI']."] :".$content."\r\n",FILE_APPEND);
    }

    //判断String是不是空放回true|false
    function isEmpty($str)
    {
        if($str==null||trim($str)=='')
        {
            return true;
        }
        return false;
    }

    //控制跳转 当url为空 后退
    function page_redirect($info,$url,$mode)
    {
        echo "<script>";
        if(!is_null($info))
        {
            echo "alert(\"$info\");";
        }
        if(!is_null($url))
        {
            echo "window.location=\"$url\";";
        }
        else
        {
            if($mode==1)
            {
                echo "window.history.back(-1);";
            }
        }
        echo "</script>";
        if(!is_null($url) || !is_null($mode)) die();
    }
    //UTF-8下中英混合长度
    function utf8_strlen($string)
    {
        // 将字符串分解为单元
        preg_match_all("/./us", $string, $match);
        // 返回单元个数
        return count($match[0]);
    }



    //判断登陆是否正确 传入账号 密码 数据库连接
    //若账号密码为空 直接跳转
    function validateEntry($username,$password)
    {
        if(isEmpty($username))
        {
            $info='用户名不能为空';
            if(isEmpty($password))
            {
                $info.= '密码不能为空';
            }
            page_redirect($info,null,1);
            exit;
        }
        if(isEmpty($password))
        {
            $info='密码不能为空';
            page_redirect($info,null,1);
            exit;
        }
        return false;
    }
    //判断登陆是否正确 传入账号 密码 数据库连接
    //若账号密码错误 直接跳转
    //通常网页不会提示是账号还是密码的错误 所以我统一账号或密码错误
    function validatePwd($username,$password,$conn)
    {
        // $password=md5($password);
        $sql = "SELECT * FROM users WHERE username='".$username."' AND password='".$password."'";
        $result = mysqli_query($conn ,$sql);
        if(mysqli_num_rows($result)==0)
        {
            $info='用户名或密码错误';
            page_redirect($info,null,1);
            exit;
        }
    }



    //UUID是根据时间 硬件 等来生成的 重复率 千万分之一
    function create_uuid($prefix = "")
    {    //可以指定前缀
        $str = md5(uniqid(mt_rand(), true));
        $uuid  = substr($str,0,8) . '-';
        $uuid .= substr($str,8,4) . '-';
        $uuid .= substr($str,12,4) . '-';
        $uuid .= substr($str,16,4) . '-';
        $uuid .= substr($str,20,12);
        return $prefix . $uuid;
    }
?>