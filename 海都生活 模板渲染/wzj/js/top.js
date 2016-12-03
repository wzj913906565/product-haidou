$(function(){
	
	/********* 顶部导航下拉效果*********/
	$('.menus').mouseover(function(){
		$(this).addClass('hover');
	})
	$('.menus').mouseout(function(){
		$(this).removeClass('hover');
	});
	
	$('.allCat').mouseover(function(){
		$(this).addClass('hover');
	})
	$('.allCat').mouseleave(function(){
		$(this).removeClass('hover');
	});
	
	$('.tShow').mouseover(function(){
		$(this).addClass('hover');
	})
	$('.tShow').mouseleave(function(){
		$(this).removeClass('hover');
	});
	
	/************顶部banner控制*************/
//	 $(".topclose").click(function() {
//          $(".topclose").hide();
//          $(".banner").slideUp(500)
//      });

//返回顶部
$(function(){
	var nowTime = new Date().getTime();
	if($(".s-top").length > 0){
		$(".s-top").click(function() {
			$("html, body").scrollTop(0);
		});
		var bToTop = function() {
			var st = $(document).scrollTop();
			(st > 0) ? $(".s-top").css("display","block") : $(".s-top").css("display","none");
		};
		$(window).bind("scroll", bToTop);
		bToTop();
	}
	if ( $(".topshow").length && !getCookie('is_first')){
	  var today = new Date();
	  //setCookie('is_first',1,new Date(today.getTime() + 3 * 60 * 60 * 1000));
	  $(".banner").hide();
	  $(".topclose").hide();
	  $(".topshow").slideDown(500,function(){setTimeout(function(){$(".topshow").slideUp(500);$(".banner").slideDown(500);$(".topclose").show();},5000);});
	  $(".topclose").click(function(){$(".topclose").hide();$(".banner").slideUp(500)});
	}	
	$("#ticket_close").click(function(){$("#ticket_close").hide();$(".q_ticket").slideUp(500)});
});
	
	
//	首页购物车弹出
	$('#HD_CARTINFO').mouseover(function(){
		$(this).addClass('hover')
	})
	$('#HD_CARTINFO').mouseleave(function(){
		$(this).removeClass('hover')
	});

function prevTimers() {
	return allTimers().slice( 0,$('#pager a.selected').index());
}
function allTimers() {
	return $('#pager a span');
}

$(function(){
	  $('#indexslider').slides({
		  effect: 'fade, fade',
		  crossfade: true,
		  container:'index-img',
		  paginationClass: 'index-pagination',
		  preloadImage: '',//loading ͼƬ��ַ
		  play:6000,
		  fadeSpeed: 500,
		  pause:10,
		  generatePagination: false,
		  animationStart: function(current){
			   $('.index-pagination span').stop().animate({width:0}).hide();
			  }	,
		  animationComplete: function(current){
			   var $back=$('.back');
			   var leftw=(current-1)*34;
			   $back.animate({left:leftw},1000,'easeOutBack');
			   $('.index-pagination li').eq(current-1).find('span').show().animate({width:30},6000);
},
		  slidesLoaded: function() {
		  $('.index-pagination li').eq(0).find('span').animate({width:30},6000);
		  }
	  });
})

//侧栏点击出现
 var fn=function(o){
	   var timer=null;
	   var obj=$(o.obj),obj2=$(o.obj2);
	   
	   obj.hover(function(){
		   clearTimeout(timer);
	   },function(){
		   timer=setTimeout(function(){
				obj.stop(true,false).animate({width:0});
			},500);
		});
	   
	   obj2.hover(function(){
		  obj.stop(true,false).animate({width:372});
		},function(){
			timer=setTimeout(function(){
				obj.stop(true,false).animate({width:0});
			},500);			
	   });   
	   
	}
  	fn({
		obj:".history",
		obj2:"#side_guang"
	});
	
	fn({
		obj:".weixin-open",
		obj2:"#side_app"
	});	
//楼层
	$(function(){
		// @ 给窗口加滚动条事件
		$(window).scroll(function(){
			// 获得窗口滚动上去的距离
			var ling = $(document).scrollTop();
			
			// 在标题栏显示滚动的距离
//			document.title = ling;
			// 如果滚动距离大于1534的时候让滚动框出来
			if(ling>450){
				$('#box').show();
			}
			if(450<ling && ling<950){
				// 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
				$('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<1470){
				$('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<2040){
				$('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<2560){
				$('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<3160){
				$('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<3680){
				$('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(5).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}else if(ling<4332){
				$('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display','block');
				$('#box ul li').eq(6).siblings('li').find('.num').css('display','block').siblings('.word').hide();
			}
			if(ling>4332 || ling<450){
				// $('#box').css('display','none');  // @ 这一句和下一句效果一样。
				$('#box').hide();
			}
			
		})

	})

	$(function(){
		$('#box ul li').hover(function(){
			$(this).find('.num').hide().siblings('.word').css({'display':'block','background':'#CB1C39','color':'white'});
		},function(){
		
			$(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
		})
	})
		
	
	

	
	/**************通用效果*****************/
	$(".small_topbanner3 a").mouseenter(function(){
		$(this).children("u").show();									 
	})
	$(".small_topbanner3 a").mouseleave(function(){
		$(this).children("u").hide();									 
	})
	
	$(".hd_login_wrap").mouseenter(function(){
		$(this).addClass("hd_login_hover");
		$(this).children("ul").show();									 
	})
	$(".hd_login_wrap").mouseleave(function(){
		$(this).removeClass("hd_login_hover");								
		$(this).children("ul").hide();									 
	})
		
	$("#shopping_list_btn").click(function(){

		if($("#shopping_list_index").hasClass("shoplistcur"))
		{
			$("#shopping_list_index").removeClass("shoplistcur");
		}
		else
		{
			$("#shopping_list_index").addClass("shoplistcur");
		}
		
		if($("#searchList_index").is(":hidden"))
		{
			$("#searchList_index").show();
			
			if(getCookie('guidance'))
			{
				var guidance_num = getCookie('guidance');
			}
			else
			{
				var guidance_num = 0;
				$("#guidance").show();
			}
			if(guidance_num == 0)
			{
				guidance_num++;
				setCookie('guidance',guidance_num,1);
			}
		}
		else
		{
			$("#searchList_index").hide();
		}
	})
	
	$(".shopClose").click(function(){
		$("#searchList_index").hide();
		$("#shopping_list_index").removeClass("shoplistcur");				   
	})
	
	$(".guide_next").click(function(){
		if($("#guidance").attr("class") == "guide_step1")
		{
			$("#guidance").removeClass("guide_step1");
			$("#guidance").addClass("guide_step2");
		}
		else if($("#guidance").attr("class") == "guide_step2")
		{
			$("#guidance").removeClass("guide_step2");
			$("#guidance").addClass("guide_step3");
		}
	})
	
	$(".guide_close").click(function(){
		$("#guidance").hide();		
		$("#guidance").removeClass("guide_step3");
		$("#guidance").addClass("guide_step1");
	})
	
	$("#operat").click(function(){
		$("#shopping_list_textarea").val("");							
	})
	
	$("#btn").click(function(){
		var key_word = $("#shopping_list_textarea").val();	
		var reg=new RegExp("[,|，]","g"); 
		key_word = key_word.replace(reg,"\n");
		var key_arr = new Array();
		var key_arr_dou = new Array();
		var key_arr = key_word.split("\n");
		var key_words = "";
		
		for(var i=0;i<key_arr.length;i++)
		{			
			if(i == key_arr.length-1)
			{
				key_words+= key_arr[i];
			}
			else
			{
				key_words+= key_arr[i]+" OR ";	
			}
		}
		var url = "search.php?keywords="+key_words;
		location.href=url;
	})
	
	$("#allSortOuterbox").mouseenter(function(){
		$("#allSortOuterbox .no_index").show();
	})
	
	$("#allSortOuterbox").mouseleave(function(){
		$("#allSortOuterbox .no_index").hide();
	})
	

	
	$(".hd_allsort li").mouseenter(function(){
		$("#allSortOuterbox").addClass("hover");
		$(this).addClass("cur");
		$(this).children("h3").css('width','166px');		
		$(this).children("div").show();
		
		var n = $("#allCategoryHeader").offset().top; 
		var l = $(this); 
		var m = l.offset().top - n; 
		var k = l.find(".hd_show_sort");  
		var j = $(document).scrollTop();
		var p = m + k.height() + n - j;
		var o = $(window).height();
		var i = p - o;
		if (p > o) {
			if (l.offset().top - j + l.height() - o > -10) {
				m = l.position().top - k.height() + l.height() - 2
			} else {
				m = m - i - 10
			}
		}
		if (k.height() > o) {
			 m = j - n
		}
		k.css({
			top: m
		})
	})
	
	$(".hd_allsort li").mouseleave(function(){							
		$(this).children("div").hide();	
		$(this).children("h3").css('width','165px');		
		$("#allSortOuterbox").removeClass("hover");
		$(this).removeClass("cur");
	})
		
	$(".close_sort").click(function(){
		var li_obj = $(this).parents("li");	
		li_obj.children("div").hide();	
		li_obj.children("h3").css('width','165px');		
		$("#allSortOuterbox").removeClass("hover");
		li_obj.removeClass("cur");
	})
	
	$("#HD_CARTINFO").mouseenter(function(){
		$("#showMiniCart").show();			
	})
	
	$("#HD_CARTINFO").mouseleave(function(){
		$("#showMiniCart").hide();			
	})
	
	$(".minicart_box").mouseenter(function(){
		$("#showMiniCart").stop(true,false);
		$("#showMiniCart").css({width:"auto",height:"auto",opacity:1})
		$("#showMiniCart").show();
	})
	
	$(".minicart_box").mouseleave(function(){
		$("#showMiniCart").stop(true,false);
		$("#showMiniCart").hide();
	})


})



////写入cookies
//function setCookie(c_name,value,expiredays)
//{
//	var exdate=new Date()
//	exdate.setDate(exdate.getDate()+expiredays)
//	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
//}
////读取cookies
//function getCookie(c_name)
//{
//	if (document.cookie.length>0)
//	{
//		c_start=document.cookie.indexOf(c_name + "=")
//		if (c_start!=-1)
//		{ 
//			c_start=c_start + c_name.length+1 
//			c_end=document.cookie.indexOf(";",c_start)
//			if (c_end==-1) c_end=document.cookie.length
//			return unescape(document.cookie.substring(c_start,c_end))
//		} 
//	}
//	
//	return ""
//}

//function bookmark() {
//  var c;
//  var a = /^http{1}s{0,1}:\/\/([a-z0-9_\\-]+\.)+(yihaodian|1mall|111|yhd){1}\.(com|com\.cn){1}\?(.+)+$/;
//  if (a.test(httpUrl)) {
//      c = "&ref=favorite"
//  } else {
//      c = "?ref=favorite"
//  }
//  var d = httpUrl + c;
//  if ('undefined' == typeof (document.body.style.maxHeight)) {
//      d = httpUrl
//  }
//  try {
//      if (document.all) {
//          window.external.AddFavorite(d, favorite)
//      } else {
//          try {
//              window.sidebar.addPanel(favorite, d, "")
//          } catch(b) {
//              alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
//          }
//      }
//  } catch(b) {
//      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
//  }
//}



///********迷你购物车加减********/
//function onClickCartNum(a,b)
//{
//	var b = parseInt(b);
//	var c = $("#minicart_num_"+a);
//	var d = parseInt(c.val());
//	if(d < 1 || !$.isNumeric(d))
//	{
//		alert("请输入正确的商品数量");	
//		e = 1;
//	}
//	
//	if(b == -1)		
//	{
//		if(d == 1)
//		{
//			alert("购买数量不能小于1件");	
//		}
//		else
//		{
//			e = d + b;
//		}
//	}
//	else
//	{
//		e = d + b;
//	}
//	
//	change_goods_number(a,e);
//}
//
//function keyUpCartNum(a,b)
//{
//	var c = parseInt($(a).val());
//	if(c < 1 || !$.isNumeric(c))
//	{
//		alert("请输入正确的商品数量");	
//		d = $(a).val(1);
//	}
//
//	change_goods_number(b,d);
//
//}
//
//
//function change_goods_number(rec_id, goods_number)
//{     
//	Ajax.call('flow.php?step=ajax_update_cart', 'rec_id=' + rec_id +'&goods_number=' + goods_number, change_goods_number_response, 'POST','JSON');
//}
//function change_goods_number_response(result)
//{               
//	if (result.error == 0)
//	{
//		var rec_id = result.rec_id;
//		$('#minicart_num_' +rec_id).val(result.goods_number);//更新数量		
//		$('#totalDesc').html("¥"+result.total_price); //更新合计
//		$('#totalNumber').html(result.total_goods_count);//更新购物车数量
//		$('#in_cart_num').html(result.total_goods_count)
//	}
//	else if (result.message != '')
//	{
//		alert(result.message);                
//	}
//}
