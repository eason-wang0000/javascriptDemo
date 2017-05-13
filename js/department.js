/*部门*/
 $(function(){
 	/*所有图片加上滤镜*/
    	$("#div2 img").addClass('alpha');
    	//第一张清除滤镜
    	$("#div2 img:first").removeClass('alpha');
    	//每张图片增加图片效果
    	$("#div2 img").mouseover(function(event) {
    		//小图的路径
    		var path = $(this).attr("src");
    		//小图设置到大图显示
    		$("#img11").attr("src",path);
    		//把兄弟元素添加路径，自身去除
    		$(this).removeClass('alpha').siblings().addClass('alpha');
    	});
    })