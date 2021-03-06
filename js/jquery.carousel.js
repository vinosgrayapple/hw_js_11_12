;(function($) {
	$.fn.carouselPlugin=function() {
       var elementList = this;
    var leftUIEl = $('.crousel-arrow-left');
    var rightUIEl = $('.crousel-arrow-right');
    var pixelOffset = 325;
    var currentValue = 0;

    var elementCount = elementList.find("li").length;
    var minimumOffset = -((elementCount - 5) * pixelOffset);
    var maximumOffset = 0;
    leftUIEl.click(function() {
         if (currentValue != maximumOffset) {
        currentValue += pixelOffset;
        elementList.animate({marginLeft: currentValue + "px"}, 500);
    }
    });

    rightUIEl.click(function() {
        if (currentValue != minimumOffset) {
        currentValue -= pixelOffset;
        elementList.animate({marginLeft: currentValue + "px"}, 500);
    }
    });
        return this;

    };

})(jQuery);
