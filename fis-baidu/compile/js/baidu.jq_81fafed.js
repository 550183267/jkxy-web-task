$(document).ready(function(){$(".ul_d,.sidebar").hover(function(){$(".sidebar").toggle()}),$(".ul_c,.pos2").hover(function(){$(".pos2").toggle()}),$(".ul_b,.pos1").hover(function(){$(".pos1").toggle()})}),$("a.skin1").click(function(){$(".skin-box").show()}),$(".stop").click(function(){$(".skin-box").hide()});var i=1;$(".skin-shr img").hover(function(){i=$(this).index(),$(".bg").css("background","url(image/land/skin/"+i+".jpg)"),$(".bg").css("background-size","264px 180px"),$(".skin-page").css("background","url(image/land/skin.png"),$(".skin-page").css("background-position","0px 0px")}),$(".skin-shr img").click(function(){$("body").css("background","url(image/land/skin/"+i+".jpg)"),$(".baidu-logo1").css("background","url(image/land/baidu-white.png"),$(".baidu-logo1").css("background-size","270px 129px"),$(".white").css("color","#fff"),$(".head-nav").toggleClass("head-nav1"),$(".pc-botton").toggleClass("pc-botton1"),$(".roll i").css("background-position","-107px -22px")}),$(document).ready(function(){$(".rec-con-nav li").each(function(o){$(this).click(function(){$(".rec div.lab-block").removeClass("lab-block"),$(".rec-con-nav li.con-li1").removeClass("con-li1"),$("div.rec1").eq(o).addClass("lab-block"),$(this).addClass("con-li1")})})}),$(document).ready(function(){$(".rec-fol-tit").hover(function(){$(".rec-fol-edit").toggle()}),$(".fol-div").click(function(){$(".rec-fol-link").toggle(),$(".fol-icon1").toggleClass("fol-icon2")}),$(".cus1").click(function(){$(".cus-hide").toggle(),$(".cus1").toggleClass("cus2"),$(".cus-close").toggleClass("cus-close1")}),$(".cus-clo").click(function(){$(".cus-hide").hide(),$(".cus1").toggleClass("cus2"),$(".cus-close").toggleClass("cus-close1")}),$(".roll").click(function(){$(".rec-inf").toggle(),$(".rol-hide").hide()})}),$(document).ready(function(){0==$(this).scrollTop()&&$(".top").hide(),$(window).scroll(function(){0==$(this).scrollTop()&&$(".top").hide(),0!=$(this).scrollTop()&&$(".top").show()}),$(".top").click(function(){$("html,body").animate({scrollTop:"0px"})})});