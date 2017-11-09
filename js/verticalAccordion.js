//vertical acoordion

$(document).ready(function() {
	$('.team__list_link').on('click', function(er) {
		er.preventDefault();

		var item = $(this).closest('.team__list_item'),
			textBlock = item.find('.team__content_pic'),
			reqHeight = textBlock.outerHeight(true),
			cotainerTextBlock = item.find('.team__content'),
			otherItems = item.siblings(),
			otherItemsText = otherItems.find('.team__content');

		if (item.hasClass('team__list_item-active')) {
			cotainerTextBlock.css('height', 0);
			item.removeClass('team__list_item-active');
		} else {
			item.addClass('team__list_item-active');
			cotainerTextBlock.css('height', reqHeight);
			otherItemsText.css('height', 0);
			otherItems.removeClass('team__list_item-active');
		}

	});


});