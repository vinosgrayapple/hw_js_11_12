$(function($) {
	$.fn.carouselPlugin=function() {


	var leftUIEl = $('.crousel-arrow-left');
    var rightUIEl = $('.crousel-arrow-right');
    var elementList = $(".carousel-list");
    var pixelOffset = 125;
    var currentValue = 0;
 	
 	var elementCount = elementList.find("li").length;
 	var minimumOffset = -((elementCount - 5) * pixelOffset);
 	var maximumOffset = 0;
    leftUIEl.click(function() {
    	 if (currentValue != maximumOffset) {
    	currentValue += pixelOffset;
    	elementList.animate({left: currentValue + "px"}, 500);
    }
    });
 
    rightUIEl.click(function() {
    	if (currentValue != minimumOffset) {
    	currentValue -= pixelOffset;
    	elementList.animate({left: currentValue + "px"}, 500);
    }
    });
		return this;
	}

})(jQuery);
