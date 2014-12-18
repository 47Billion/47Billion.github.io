$(document).ready(
	
	function(){
  $(".landing__header a").hover(function(){
    $(this).css("border-color","rgba(255,255,255,0.2)");
	$(this).find("span").animate({opacity: "1"}, {queue: false, duration: 500});
    },function(){
    $(this).css("border-color","transparent");
	$(this).find("span").animate({opacity: "0"}, {queue: false, duration: 500});
 });
	
  $("body a").hover(function(){
	  //alert("1");
    $(".landing__header a").css("border-color","rgba(255,255,255,0.2)");
	$(".landing__header a").find("span").animate({opacity: "1"}, {queue: false, duration: 500});
    },function(){
    $(".landing__header a").css("border-color","transparent");
	$(".landing__header a").find("span").animate({opacity: "0"}, {queue: false, duration: 500});
 });

function cliplarging(){
	$(".landing__slide--you h1").removeAttr("style");
	$(".landing__slide--you h1").attr('style', ' clip : rect(-293.5px, auto, 250px, 0px) !important');	
}
window.setTimeout(cliplarging, 10000);
	
	}
	

);

