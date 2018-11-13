jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['20150729211313.jpg','20180213193938.jpg','北谷町景色１.jpg'],
        interval: 3000,
        loop: true,
        effect:"blind",
        duration: 500,
        easing:"swing"
    });

});