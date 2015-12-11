
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

    setTimeout(animLoad, 3000);


$(document).ready(function() {

    var animationBg = function(){
      $("#anim").animate({
              height: 0
      }, 2000, function(){
          $(this).css('display', 'none')
      });
    };

    //setTimeout(animationBg, 10000);

    var afterAnimBg = function(){
      var pages = ['menu', 'about'],
          i;
        for(i = 0; pages.length > i; i++){
            $('#' + pages[i]).show();
        }
    };

    //setTimeout(afterAnimBg, 9000);

    var animText = function(){
        $("#bisnesman-1 h3, span").css("opacity", 1);
    };

    //setTimeout(animText, 12000);

    var logoAnim = function() {
        var logo = parseInt( $("#logo").height()),
            shine = $("#logo").before();

        shine.css('display', 'none');
    };

    //logoAnim();

});





