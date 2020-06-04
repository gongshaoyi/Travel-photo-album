$(document).ready(function () {
    var index = 0,
        wrap = $('.container'),
        alink = wrap.find('a'),
        images = wrap.find('img');

    var mouseEvrnt = function(event){
        event.stopPropagation();
        index = $(this).index();
        swiper();
    };    

    var keyEvent = function(e){
        e.stopPropagation();
        if(e.keyCode == 37){
            index = index > 0 ? --index : alink.length - 1;
        } else if(e.keyCode == 39){
            index = index < alink.length -1 ? ++index : 0;
        }else{
            return true;
        }
        swiper();
    }

    var event = {
        mouseenter: mouseEvrnt,
        keydown: keyEvent
    }

    alink.add(document).on(event)
    

    var swiper = function (){
        images.eq(index)
        .stop().fadeIn('slow').siblings().stop().fadeOut('slow');
    }
});