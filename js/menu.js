/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-04 16:04:39
 * @version $Id$
 */
/*导航*/
$(function(){
	var arr=document.getElementsByTagName("li");
	for(var i=0;i<arr.length;i++){
		arr[i].onmouseover = function(){
			this.style.backgroundColor="#ccc";
			this.style.fontSize="14px";
		};
		arr[i].onmouseout = function(){
			this.style.backgroundColor="#eee";
			this.style.fontSize="12px";
		}
	}
});

	function one(){
		document.getElementById("myinfo").style.display='block';
		document.getElementById("subject").style.display='none';
		document.getElementById("sy").style.display='none';
		document.getElementById("div1").style.display='none';
		document.getElementById("entertainment").style.display='none';
	}
	function two(){
		document.getElementById("sy").style.display='block';
		document.getElementById("subject").style.display='none';
		document.getElementById("myinfo").style.display='none';
		document.getElementById("div1").style.display='none';
		document.getElementById("entertainment").style.display='none';
	}
	function three(){
		document.getElementById("sy").style.display='none';
		document.getElementById("subject").style.display='block';
		document.getElementById("myinfo").style.display='none';
		document.getElementById("div1").style.display='none';
		document.getElementById("entertainment").style.display='none';
	}
		function four(){
		document.getElementById("sy").style.display='none';
		document.getElementById("subject").style.display='none';
		document.getElementById("myinfo").style.display='none';
		document.getElementById("div1").style.display='block';
		document.getElementById("entertainment").style.display='none';
	}
		function five(){
		document.getElementById("sy").style.display='none';
		document.getElementById("subject").style.display='none';
		document.getElementById("myinfo").style.display='none';
		document.getElementById("div1").style.display='none';
		document.getElementById("entertainment").style.display='block';
	}

