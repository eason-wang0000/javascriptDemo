/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-03 10:50:54
 * @version $Id$
 */
 //注册返回按钮
function registed(){
	location.href="register.html";
}
//个人追剧轮播图
var topic=0;
var imgarr=['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg','images/05.jpg'];
var index=0;
function change(){
	var SNumber=document.getElementById("SNumber");
	var arr = SNumber.getElementsByTagName("div");
	for (var i = 0; i < arr.length; i++) {
 
    	};
    	update();
}

function update(){
	var img1 = document.getElementById("img1");
	 	img1.src=imgarr[index];
	 	
    	index++;
    		if(index==imgarr.length){
    			index=0;
    		}
      		window.setTimeout("update()",2000);
}

  

	

