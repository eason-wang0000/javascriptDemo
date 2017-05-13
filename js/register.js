/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-03 10:29:59
 * @version $Id$
 */
   var p = false;
   function check1() {
    var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    var div1=document.getElementById("div1");
    if(!reg.test(document.form1.input1.value)){
       div1.innerHTML="用户名必须是4-16字母或数字组成且以字母开始";
    }else{
        div1.innerHTML="√";
        return true;
    }
}
function checkxh(){
  var reg =/^[0-9]{8,8}$/;
  var yxh=document.getElementById("yxh");
  if (!reg.test(document.form1.xh.value)) {
    yxh.innerHTML="学号只能包含数字并且长度为八位";
  }else{
    yxh.innerHTML="√";
    return true;
  }
}

function check4() {
    var reg=/^\d{6}$/;
    var div4=document.getElementById("div4");
    if(!reg.test(document.form1.input4.value)){
        div4.innerHTML="邮政编码必须是6个数字";
    }
    else{
        div4.innerHTML="√";
        return true;
    }
}

function check5() {
    var reg=/^1\d{10}$/;
    var div5=document.getElementById("div5");
    if(!reg.test(document.form1.input5.value)){
       div5.innerHTML="手机号必须是11个数字且1开始";
    }else{
        div5.innerHTML="√";
        return true;
    }
}

function check6() {
    var reg=/^[a-zA-Z][a-zA-Z0-9_]+@([a-zA-Z0-9]+.)+(com|cn)$/;
    var div6=document.getElementById("div6");
    if(!reg.test(document.form1.input6.value)){
       div6.innerHTML="邮箱地址不是这种格式";
    }else{
        div6.innerHTML="√";
        return true;
    }
}

function check7() {
    var reg=/^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    var div7=document.getElementById("div7");
    var arr=reg.exec(document.form1.input7.value);
    if(arr==null){
        div7.innerHTML="生日格式为1980-05-12或1988-05-04的形式";

    }else if (arr[1]<1900||arr[1]>2016) {
        div7.innerHTML="生日必须在1900-2014";

    }else if (arr[2]<1||arr[2]>12) {
        div7.innerHTML="生日的月份在01~12之间";

    }else if (arr[3]<1||arr[3]>31) {
        div7.innerHTML="生日的日期必须在01-31之间";
    }else {
         
        div7.innerHTML="√";
       	p = true;
    }
}


function sub(){
		if(check1()==true&&p==true&&checkxh()==true&&check4()==true&&check5()==true&&check6()==true&&document.getElementById("zs").checked==true){

        	alert("注册成功");
            location.href="index.html";
        }else{
        	alert("注册失败，你还有信息没填或不符合格式或者没有同意遵守会员协议");
        }
	}
