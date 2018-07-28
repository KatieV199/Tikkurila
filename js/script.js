$(document).ready(function() {
    new WOW().init();
    var $container = $('.catalog-list');
    $container.isotope({
        filter: '*',
    });

    $('.filter-list a').click(function() {
        $('.filter-list .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    $('.mobile-menu_icon').click(function() {
        $('.mobile-menu_block').slideToggle();
    });

	$('.catalog-btn').click(function() {
		$(this).toggleClass('active');
		$('.header-bottom_btn').toggleClass('active');
		$('.mobile-menu_link span').toggleClass('active');
	});

	$('.header-bottom_btn, .mobile-menu_link.q').click(function() {
	    $('.modal').addClass("active");
	});

	$(".close").click(function() {
	    $(".modal").removeClass("active");
	});
	
});
