var c = document.getElementById("canvas"),
    ctx = c.getContext("2d");


var draw = function(){
    var delay = 10,opacity = +"0.0";
    var light = new Image(), logo = new Image(),
        y, x;

    var loadImages = function(source, callback){
        var images = {},
            loadImages = 0,
            numImages = 0;
        for (var src in sources){
            numImages++;
        }
        for(var src in sources){
            images[src] = new Image();
            images[src].onload = function(){
                if(++loadImages >= numImages){
                    callback(images);
                }
            };
            images[src].src = sources[src];
        }
    };

    var sources = {
        light : '../img/bg2.png',
        logo : '../img/logo.png'
    };

    loadImages(sources, function(images){
        x = 840; y = 330;
        ctx.drawImage(images.logo, x, y);
        ctx.drawImage(images.light, 0, 0, 1920, 950);
    });

    var timer = setInterval (function(){
            opacityAnim();
        }, delay);

    var opacityAnim = function() {
                if (opacity <= 1.0) {
                    opacity += 0.005;
                }else {
                    clearInterval(timer);
                }
        console.log(opacity);

        loadImages(sources, function(images){
            ctx.clearRect(0, 0, images.logo.width, images.logo.height);
            ctx.clearRect(0, 0, images.light.width, 950);
        });

        ctx.globalAlpha = opacity;

        loadImages(sources, function(images){
            ctx.drawImage(images.logo, x, y);
            ctx.drawImage(images.light, 0, 0, images.light.width, 950);
        });

    };

};

draw();

