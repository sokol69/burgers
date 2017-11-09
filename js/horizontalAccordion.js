//Horizontal accordion

$(document).ready(function() {
	$('.menu__link').on('click', function(ee) {
		ee.preventDefault();

		var menuItem = $(this).closest('.menu__list_item'),
			menuBlock = menuItem.find('.menu__content_text'),
			reqWidth = menuBlock.outerWidth(true),
			containerMenuBlock = menuItem.find('.menu__content'),
			otherMenuItems = menuItem.siblings(),
			otherMenuItemsText = otherMenuItems.find('.menu__content');

		if (menuItem.hasClass('menu__list_item-active')) {
			containerMenuBlock.css('width', 0);
			menuItem.removeClass('menu__list_item-active');
		} else {
			menuItem.addClass('menu__list_item-active');
			containerMenuBlock.css('width', reqWidth);
			otherMenuItemsText.css('width', 0);
			otherMenuItems.removeClass('menu__list_item-active');
		}


	});



});