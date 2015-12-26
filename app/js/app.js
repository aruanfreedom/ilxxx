
var pages = function() {

    //gallery
    var animText = function(){
        $("#bisnesman-1 h3, span").css("opacity", 1);
        $("#bisnesman-2 h3, span").css("opacity", 1);
        $("#tel-icon").show();
    };

    setTimeout(animText, 5000);

//menu

    $('#fullpage').fullpage({
        anchors: ['about', 'services', 'car_park', 'bid', 'contact'],
        menu: '#menu',
        scrollingSpeed: 500
    });

//end menu

//number telephon
    $(".phone").keypress(function(event){
        var btn = $(".btn");
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
                // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }

        if( $(this).val().length >= 10){
            btn.removeAttr('disabled', 'disabled');
            btn.addClass('true');
        } else{
            btn.attr('disabled', 'disabled');
            btn.removeClass('true');
        }
    });

//end number telephon


//alert
    var alert = function(){
        $("#tel-icon").click(function() {
                $(".alert-message").show();
        });
        $(".close, .black").click(function() {
            $(".alert-message").hide();
        });
    };

    alert();
//End alert
};

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
            setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 200);
        }
    }

    function animLoad(){
        animateText("dynamic-text", "АРЕНДА АВТО ", 0);
        setTimeout(hideAnim, 4500);
        function hideAnim(){
            $("#home").animate({
                "height": "0"
            }, 1000, function(){
                $("#home").hide();
            });
            pages();
        }
    }

    setTimeout(animLoad, 4000);


//Start machine Selection
    var machineSelection = function(){
      $(".part").click(function(){
          var img = $(this).find("img"),
          imgAttr = img.attr("src"),
          bigImg = $(".big_transport").find("img"),
          bigImgAttr = bigImg.attr("src", imgAttr),
          atrr = bigImgAttr.attr("src"),
          result = atrr.replace(".png", "_big.png"),// replace img_big for click

          status_des = $(".status-description h2"),
          status_des_p = $(".status-description p"),
          status_des_small = $(this).find(".status_transport");
          status_des_small_html = status_des_small.html();

          bigImg.attr("src", result);

          if(status_des_small_html === "Эконом класс") {
              status_des.html("Эконом класс");
              status_des_p.html("Это отличный выбор цены и качества. Вы получаете не только высокий уровень сервиса, но и арендуете надежный автомобиль, пригодный для решения деловых задач, семейных вопросов и ряд других мероприятий. Отчет времени идет после непосредственной подачи авто в указанное место.");
          } else if  (status_des_small_html === "Бизнес класс") {
              status_des.html("Бизнес класс");
              status_des_p.html("Это отличный выбор оптимального комфорта при выгодной стоимости услуг. <p> Вы получаете высокий уровень сервиса и арендуете надежный автомобиль, который по стоимости и комфорту является лучшей альтернативой представительскому и эконом классам.</p><p>Мы берем на себя полную координацию и предоставим подробный отчет по оказанной услуге.</p> ");
          } else if (status_des_small_html === "S класс") {
              status_des.html("S класс ");
              status_des_p.html("Это отличный выбор, чтобы подчеркнуть свой статус. <p>Вы получаете высокий уровень сервиса и арендуете надежный автомобиль, пригодный для решения повседневных деловых задач, встреч высокопоставленных гостей, проведения значимых мероприятий и не только.</p><p>Мы оказываем лучший сервис и оправдаем все Ваши ожидания!</p>");
          }



          console.log(result);
      });
    };
machineSelection();
//End machine Selection



