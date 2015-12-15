
    function animateText(id, text, i) {
        document.getElementById(id).innerHTML = text.substring(0, i);
        i++;
        set();
        if (i > text.length) {
            i = 0;

        }else if( i === text.length){
            clearTimeout(set());
        }

    function set(){
            setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 600);
        }

    }

    function animLoad(){
        animateText("dynamic-text", "АРЕНДА АВТО ", 0);
    }

$(document).ready(function() {
    var animText = function(){
        $("#bisnesman-1 h3, span").css("opacity", 1);
        $("#bisnesman-2 h3, span").css("opacity", 1);
    };

    setTimeout(animText, 5000);

//menu

    $('#fullpage').fullpage({
        anchors: ['about', 'services', 'car_park', 'bid', 'contact'],
        menu: '#menu',
        scrollingSpeed: 500
    });

//end menu



});

