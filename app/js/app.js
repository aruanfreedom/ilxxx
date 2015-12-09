//$(document).ready(function() {
//    function animateText(id, text, i) {
//        document.getElementById(id).innerHTML = text.substring(0, i);
//        i++;
//        set();
//        if (i > text.length) {
//            i = 0;
//
//        }else if( i === text.length){
//            clearTimeout(set());
//        }
//
//    function set(){
//            setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 200);
//        }
//
//    }
//
//    function animLoad(){
//        animateText("dynamic-text", "АРЕНДА АВТО ", 0);
//    }
//
//    setTimeout(animLoad, 2000);


//});

$(document).ready(function() {
    var animText = function(){
        $("#bisnesman-1 h3, span").css("opacity", 1);
        console.log("ok")
    }
    setTimeout(animText, 6000);
});

