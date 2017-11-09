//slider

$(function () {
	var moveSlide = function(container, slideNum) {
			var items = container.find('.burgers__slider_list_item'),
			activeSlide = items.filter('.activeSlide_item'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index(),
			list = container.find('.burgers__slider_list'),
			duration = 500;

		if (reqItem.length){
			list.animate({
				'left' : -reqIndex * 100 + '%'
			}, duration, function() {
				activeSlide.removeClass('activeSlide_item');
				reqItem.addClass('activeSlide_item');
			});
		}
	}

	$('.burgers__controls_btn').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
		container = $this.closest('.burgers__slider_wrapper'),
		items = $('.burgers__slider_list_item', container),
		activeItem = items.filter('.activeSlide_item'),
		nextItem = activeItem.next(),
		prevItem = activeItem.prev();

		if ($this.hasClass('btn-next')) {
			if (nextItem.length){
				moveSlide(container, nextItem.index());
			} else {
				moveSlide(container, 0);
			}
		} else {
			moveSlide(container, prevItem.index());
		}
	});


});


//OPS

$('.main').onepage_scroll({
	sectionContainer: 'section',
	easing: 'ease',
	animationTime: 1000,
	pagination: true,
	updateURL: false
});


$('.arrow__link').on('click', function(e){
	e.preventDefault();
	$(".main").moveDown();
});

$('.header__link-1').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(2);
});
$('.header__link-2').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(3);
});
$('.header__link-3').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(4);
});
$('.header__link-4').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(5);
});
$('.header__link-5').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(6);
});
$('.header__link-6').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(8);
});
$('.header__link-7').on('click', function(e){
	e.preventDefault();
	$(".main").moveTo(7);
});


//Order form

$(function(){

	$('#forma').on('submit', function(e){

		e.preventDefault();

		var form = $(this),
			formData = form.serialize();

		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: formData,


			success: function (data) {
				if (data.status) {
					alert('Ваше сообщение отправлено');
					$('#forma').trigger('reset');
				} else {
					alert('Произошла ошибка');
				}

			}
		})

	});

});

