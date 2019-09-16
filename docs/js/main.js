$(document).ready(function(){
	
	// Вызов слайдера owl-carousel
	$("#top-slider").owlCarousel({
		singleItem: true,
        navigation: true,
        pagination: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});
	
	//MixItUp - фильтрация работ в портфолио
	$('#products-sunglasses').mixItUp();
	
    var filterProducts = $('.products-filter__button');

    filterProducts.on('click', function(e) {
        e.preventDefault();
        if (filterProducts.hasClass('products-filter__button--active')) {
            filterProducts.removeClass('products-filter__button--active');
            $(this).addClass('products-filter__button--active');
        } else {
            $(this).addClass('products-filter__button--active');
        }
    });

});