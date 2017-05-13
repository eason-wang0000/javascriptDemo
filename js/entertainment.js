/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-05 14:17:36
 * @version $Id$
 */
/*兴趣爱好*/
$(function(){
	$("#ee").click(dj);
});
function dj(){
	window.setTimeout("tt()",4000);
	window.setInterval("xx()",20);	
}
	
	function tt(){
		
			$(".b").animate({left:'250px'},1500,function(){
				$(".c").animate({left:'550px'},1500,function(){
					$(".zb").animate({left:'30px'},1500,function(){
						$(".fk").animate({left:'300px'},1500,function(){
							$(".yl").animate({left:'570px'},1500,function(){
								$(".yl").animate({left:'-250px'},1500,function(){
									$(".fk").animate({left:'-250px'},1500,function(){
										$(".zb").animate({left:'-250px'},1500,function(){
											$(".c").animate({left:'-550px'},1500,function(){
												$(".b").animate({left:'-550px'},1500,function(){tt()});
										});
									});
								});
							});
						});
					});	
				});
			});
		});
	}
	x=0;
	function xx(){
		x+=2;
		$(".a").css("backgroundPosition",x+"px",function(){
			x+=2;
			$(".b").css("backgroundPosition",x+"px");
		});
	}
	