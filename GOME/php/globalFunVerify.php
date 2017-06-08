<?php
    //mb_strlen中文字符占2个字节
    //账号 要求 长度大于等于6 小于等于20 英文加数字 没有空格等
    function validate_register_username($username)
    {
        if(isEmpty($username))
        {
            return "用户名不能为空";
        }
        if(mb_strlen($username)<6)
        {
            return "用户名长度不能小于6";
        }
        if(mb_strlen($username)>20)
        {
            return "用户名长度不能超过20";
        }
        $pattern = "/\w{".mb_strlen($username)."}/";
        $flag=preg_match($pattern,$username)?true:false;
        if(!$flag)
        {
            return "用户名格式不正确 请输入英文或数字或下划线";
        }
        $conn = getConnect();
        $sql = "SELECT * FROM users WHERE username= '$username'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) != 0)
        {
            return "此用户名已被注册";
        }
        closeConnect($conn);
        return "ok";
    }

    //密码 要求 长度大于等于6 小于等于20 英文加数字 没有空格等
    function validate_register_password($password)
    {
        if(isEmpty($password))
        {
            return "密码不能为空";
        }
        if(mb_strlen($password)<6)
        {
            return "密码长度不能小于6";
        }
        if(mb_strlen($password)>20)
        {
            return "密码长度不能超过20";
        }
        $pattern = "/\w{".mb_strlen($password)."}/";
        $flag=preg_match($pattern,$password)?true:false;
        if(!$flag)
        {
            return "密码格式不正确 请输入英文或数字或下划线";
        }
        return "ok";
    }

    function validate_register_confirm($confirm,$password)
    {
        if(isEmpty($confirm))
        {
            return "密码不能为空";
        }
        if($confirm!=$password)
        {
            return "两次密码不相同";
        }
        return "ok";
    }

    //想通过AC自动机来进行敏感词过滤
    //不知道能不能在服务器启动时 运行一个php程序 将数据读入 存到内存中
    function validate_register_nickname($nickname)
    {
        if(isEmpty($nickname))
        {
            return "昵称不能为空";
        }
        if(utf8_strlen($nickname)>20)
        {
            return "昵称长度不能超过20";
        }
        return "ok";
    }

    //验证真实姓名 长度不大于20 中文英文不同时出现 英文用空格隔开
    //中文[\x4e00-\x9fa5] 匹配错误
    //([\x{4e00}-\x{9fa5}] character value in \x{} or \o{} is too large at offset 10
    //[\u4e00-\u9fa5] PCRE does not support \L, \l, \N{name}, \U, or \u at offset 4
    //如果全是中文 $pattern = "/^[\x80-\xff]+$/"; 判断长度 是不是大于30 即 中文10
    function validate_register_realname($realname)
    {
        if(isEmpty($realname))
        {
            return "真实姓名不能为空";
        }
        $pattern = "/^[\x80-\xff]+$/";
        $flag1=preg_match($pattern,$realname)?true:false;
        if($flag1&&mb_strlen($realname)>30)
        {
            return "中文名长度不能大于10";
        }
        $pattern = "/^[a-zA-Z\s]+$/";
        $flag2=preg_match($pattern,$realname)?true:false;
        if($flag2&&mb_strlen($realname)>20)
        {
            return "英文名长度不能大于20";
        }
        if(!$flag1&&!$flag2)
        {
            return "真实姓名格式不正确 全中文或英文加空格";
        }
        return "ok";
    }

    //验证身份证 现在应该只有18位身份证了 年份要基本正确
    function validate_register_idcard($idcard)
    {
        if(isEmpty($idcard))
        {
            return "身份证不能为空";
        }
        if(strlen($idcard)!=18)
        {
            return "身份证长度不正确";
        }
        $pattern="/^[1-9]\d{16}([0-9]|X)/";
        $flag=preg_match($pattern,$idcard)?true:false;
        if(!$flag)
        {
            return "身份证格式不正确 如果最后为X请大写";
        }
        $year=$idcard[6].$idcard[7].$idcard[8].$idcard[9];
        if($year>=2017||$year<1900)
        {
            return "身份证未满1周岁或者超过117周岁";
        }
        return "ok";
    }

    //验证手机号 不能为空 长度不能超过11 11位 13开头 145 147 150-3 155-9 180 185-9开头
    function validate_register_phone($phone)
    {
        if(isEmpty($phone))
        {
            return "ok";
        }

        $pattern = "/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/";
        $flag=preg_match($pattern,$phone)?true:false;
        if(strlen($phone)!=11||!$flag)
        {
            return "手机号格式不正确";
        }
        return "ok";
    }

    //邮箱不能为空 长度不能超过50 邮箱的格式要正确
    function validate_register_email($email)
    {
        if(isEmpty($email))
        {
            return "邮箱不能为空";
        }
        if(strlen($email)>=50)
        {
            return "邮箱的长度不能超过50";
        }
        $pattern = " /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/"; //邮箱检测
        $flag=preg_match($pattern,$email)?true:false;
        if(!$flag)
        {
            return "邮箱格式不正确".$flag;
        }
        return "ok";
    }
?>