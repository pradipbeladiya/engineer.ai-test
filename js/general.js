$(document).ready(function () {

	/* hamburger menu*/
	$(".hamburger-menu").click(function () {
		$("html,body").toggleClass("open-menu");
	});

  // Custom carousel
  var winWidth = $(window).innerWidth(),
  items = $(".slider li").length;
  $(".slider li:first-child").addClass('active');  
  $(".slider li").width(winWidth);
  $(".slider ul").width(winWidth * items);
  $(".prev-slide").addClass('disabled');


  $(".next-slide").click(function () {
  	if($(".slider li.active").next().length) {
  		$(".slider li.active").removeClass('active').next().addClass('active');      
  		var activeSlide = $(".slider li.active").index();
  		$(".slider ul").css("transform", "translateX(" + -(activeSlide * winWidth) + "px)");
  	}
  	$(".prev-slide").removeClass('disabled');
  	if(!$(".slider li.active").next().length)
  		$(".next-slide").addClass('disabled');
  	
  });

  $(".prev-slide").click(function () {
  	if ($(".slider li.active").prev().length) {
  		$(".slider li.active").removeClass('active').prev().addClass('active');      
  		var activeSlide = $(".slider li.active").index();
  		$(".slider ul").css("transform", "translateX(" + -(activeSlide * winWidth) + "px)");
  	}
  	$(".next-slide").removeClass('disabled');
  	if(!$(".slider li.active").prev().length)
  		$(".prev-slide").addClass('disabled');
  });

  $("a[href='#']").click(function (e) {
  	e.preventDefault();
  });

  $(window).resize(function (event) {
  	winWidth = $(window).innerWidth(),
  	items = $(".slider li").length;    
  	$(".slider li").width(winWidth);
  	$(".slider ul").width(winWidth * items);
  	var activeSlide = $(".slider li.active").index();    
  	$(".slider ul").css("transform", "translateX(" + -(activeSlide * winWidth) + "px)");
  });

});

$(window).scroll(function () {
	var scrollTopPos = $(window).scrollTop();
	$(".slider li.active .hero-img").css({ "transform": "translateY(" + scrollTopPos*1.3 + "px)" })

	if ($(window).scrollTop() > 100) 
		$("body").addClass('sticky-header');
	else 
		$("body").removeClass('sticky-header');    
});