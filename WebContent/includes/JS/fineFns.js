$(document).ready( function() {
	
	$('.carousal-wrp').slick({
		  arrows: true,
		  dots: true,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 1,
		  adaptiveHeight: false,
		  autoplay: true,
		  autoplaySpeed: 1500,
		  fade: true,
		  cssEase: 'linear'
		});
	
	$("#sign-in").click( function() {
		$("#myModal").show();
	});
	
	$(".close").click( function() {
		$("#myModal").hide();
	});
	
	$(".menu-com-inner").click( function() {
		$("#myModal").show();
	});
	
	var x = 0;
	
	$(".plus").click( function() {
		x++;
		$(".show-qty").val(x);
		$("#item1").val(x);
	});
	
	$(".minus").click( function() {
		x--;
		$(".show-qty").val(x);
		$("#item1").val(x);
	});
	
});