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

    //setTimeout(animLoad, 3000);


$(document).ready(function() {
    var animText = function(){
        $("#bisnesman-1 h3, span").css("opacity", 1);
    };

    //setTimeout(animText, 12000);

    var logoAnim = function() {
        var logo = $("#logo"),
            shine = $("#shine"),
            logoH = parseInt(logo.height()),
            logoW = parseInt(logo.width()),
            shineH = parseInt(shine.height()),
            shineW = parseInt(shine.width()),
            moveShine,
            coordinatX = 5,
            coordinatY = 5,
            delay = 500,
            x, y;

        x = -(shineW / 3.1);
        y = -(shineH / 3.1);

        moveShine = {
            start: {
                    x: -(shineW / 3.1),
                    y: -(shineH / 3.2)
            },
            top: {
                    x: -(shineW / 40),
                    y: -(shineH / 2.7)
            },
            topRight: {
                    x: shineW / 7,
                    y: -(shineH / 3)
            },
            right: {
                    x: -(shineW / 2),
                    y: -(shineH / 8)
            },
            rightBottom: {
                    x: shineW / 2,
                    y: shineH / 8
            }
        };

        var shineAnim = function(){
            if(moveShine.start.x <= moveShine.top.x){
                moveShine.start.x += coordinatX;
            } else if(moveShine.start.x <= moveShine.topRight.x){
                moveShine.start.x += coordinatX;
            } else if(moveShine.start.x <= moveShine.right.x || moveShine.start.y <= moveShine.right.y ){
                moveShine.start.x += coordinatX;
                moveShine.start.y += coordinatY;
            } else if(moveShine.start.x <= moveShine.rightBottom.x && moveShine.start.y <= moveShine.rightBottom.y ){
                moveShine.start.x += coordinatX;
                moveShine.start.y += coordinatY;
                console.log("start " + moveShine.start.x + " < " + "rightBottomX " + moveShine.rightBottom.x + "\n");
                console.log(" OR \n");
                console.log("start " + moveShine.start.y + " < " + "rightBottomY " + moveShine.rightBottom.y + "\n");
            }
          shine.css({
              'left': moveShine.start.x,
              'top': moveShine.start.y
          });

        };

        setInterval(shineAnim, 50);

        /*shine.animate({
                'left': x,
                'top': y
            }, delay).animate({
                'left': moveShine.start.x,
                'top': moveShine.start.y
            },delay).animate({
                'left': moveShine.top.x,
                'top': moveShine.top.y
            },delay).animate({
                'left': moveShine.topRight.x,
                'top': moveShine.topRight.y
            },delay);*/

        console.log(x);
        console.log(y);

    };

    logoAnim();

    setTimeout(animText, 6000);
});

