/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-04 15:12:08
 * @version $Id$
 */
 //登录验证
 	$(function(){
 		$("#dl").click(login);
 		var username="WYX";
      	var userxh="07150745";
     	function login(){
        var user = document.getElementById("user").value;
        var xh = document.getElementById("xh").value;
        if (user==username&&xh==userxh) {
          alert("登录成功");location.href="main.html";
        }else{
          alert("登录失败");location.href="index.html";
        }
      }
 	});
	  	