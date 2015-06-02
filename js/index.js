 $(document).ready(function(){
 	$('.carousel').slick({
 		autoplay: true
 	});

 	$('.hamburger').on('click', function() {
		$('.navigation').slideToggle("slow");
	}
	);
	
 });

