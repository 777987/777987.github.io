$(function(){
			var num = 0; //循环变量,定义图片页数
			var delay = 4000; //播放时间间隔
			var length = 4; //图片张数
			
			
			// <!--1. 播放图片-- >
			function playImage(n) {
				$('.play .imgList li').removeClass('current').siblings().eq(n).addClass('current');
				$('.play-list span').removeClass('current').siblings().eq(n).addClass('current');
			}
			// <!--2. 循环轮播图片函数-- >
			function scrollPicsPlay() {
				num++;
				if (num >= length) {
					num = 0;
				}
				playImage(num);
			}
			var timeSpan = setInterval(scrollPicsPlay, delay);
			//鼠标悬浮 不轮播
			$('.play').on('mouseenter', function() {
				clearInterval(timeSpan);
			}).on('mouseleave', function() {
				timeSpan = setInterval(scrollPicsPlay, delay)
			});
			
			 //给圆点按钮绑定事件
			$('.play-list span').on('click', function() {
				
				num = $(this).index();
				playImage(num);
			});
			//右边图片绑定事件
			$('.slide-right').on('click', function() {
				num++;
				if (num >= length) {
					num = 0;
				}
				playImage(num)
			}); 
			//左边图片绑定事件
			$('.slide-left').on('click', function() {
				num--;
				if (num < 0) {
					num = length - 1
				}
				playImage(num)
			
			}); 
				// 右边侧边栏
			$(window).scroll(function(){
				if($(document).scrollTop() >= $(".llll").offset().top){
				$(".a1").css("display","block")
				}else{
					$(".a1").css("display","none")
				}
			})
			
			
			
			$(".remen a").mousemove(function(){
				$(".ypwatch").css({
					display:"block",
				})
				$(".yscdp").css("display","none")
				xhx(this)
			})
			$(".remen a").eq(1).mousemove(function(){
				$(".yscdp").css("display","block")
				$(".ypwatch").css("display","none")
			})
			
			
			$(".hemen a").mousemove(function(){
				$(".udianshi").css({
					display:"block",
				})
				$(".ceshi").css({
					display:"none",
				})
				xhx(this)
			})
			$(".hemen a").eq(1).mousemove(function(){
				$(".ceshi").css("display","block")
				$(".udianshi").css("display","none")
			})
			
			function xhx(this_){
				$(this_).css({
					color:"#FF6700",
					borderBottom:"2px solid #FF6700" 
				}).siblings().css({
					color:"black",
					borderBottom:"none",
				})
			}
			
			function qie(q1,q2){
				$(q1).mousemove(function(){
					xhx(this)
					$(q2).eq(0).css("display","block").siblings().css("display","none")
				})
				$(q1).eq(1).mousemove(function(){
					xhx(this)
					$(q2).eq(1).css("display","block").siblings().css("display","none")
					
				})
				$(q1).eq(2).mousemove(function(){
					xhx(this)
					$(q2).eq(2).css("display","block").siblings().css("display","none")
					
				})
				$(q1).eq(3).mousemove(function(){
					xhx(this)
					$(q2).eq(3).css("display","block").siblings().css("display","none")
				})
				
			}
			qie(".vk a",".ttt .pp")
			qie(".vuxk a",".kpl .pp")
			qie(".luxk a",".alx .pp")
			qie(".jqxk a",".uph .pp")
			qie(".icxk a",".dlx .pp")
			
			
			function xiaopan(q4,q5,q6,q7){
				$(q4).click(function(){
					$(q5).fadeOut()
				})
				$(q6).click(function(){
					$(q7).fadeIn()
				})	
			}
			xiaopan(".right",".beijing",".shipin .spy",".beijing")
			xiaopan(".rightb",".beijingb",".shipin .qpy",".beijingb")
			xiaopan(".rightc",".beijingc",".shipin .lpy",".beijingb")
			xiaopan(".rightd",".beijingd",".shipin .apy",".beijingd")
			xiaopan(".rig11",".dbbeijing",".quxiaodd",".dbbeijing")
			
		})	
		