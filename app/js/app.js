var pages = function() {

    //gallery
    var animText = function() {
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
    $(".phone").keypress(function(event) {
        var btn = $(".btn");
        // Разрешаем: backspace, delete, tab и escape
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        } else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }

        if ($(this).val().length >= 10) {
            btn.removeAttr('disabled', 'disabled');
            btn.addClass('true');
        } else {
            btn.attr('disabled', 'disabled');
            btn.removeClass('true');
        }
    });

    //end number telephon


    //alert
    var alert = function() {
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

    } else if (i === text.length) {
        clearTimeout(set());
    }

    function set() {
        setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 200);
    }
}

function animLoad() {
    animateText("dynamic-text", "АРЕНДА АВТО ", 0);
    setTimeout(hideAnim, 4500);

    function hideAnim() {
        $("#home").animate({
            "height": "0"
        }, 1000, function() {
            $("#home").hide();
        });
        pages();
    }
}

setTimeout(animLoad, 4000);

$("#logoAnim").click(function(){
    window.location.reload();
});

//Start machine Selection
var machineSelection = function() {

    $(".part").on("click", function() {
        var img = $(this).find("img"),
            nameTransport = $(this).find(".name_transport").html(),
            imgAttr = img.attr("src"),
            bigImg = $(".big_transport img").attr("src", imgAttr),
            atrr = bigImg.attr("src"),
            result = atrr.replace(".png", "_big.png"), // replace img_big for click

            status_des = $(".status-description h2"),
            status_des_p = $(".status-description p"),
            status_des_small = $(this).find(".status_transport");
        status_des_small_html = status_des_small.html();

        console.log(nameTransport);

        bigImg.attr("src", result);

        var r = result.slice(13),
            p = parseInt(r);

        if (status_des_small_html === "Эконом класс") {
            status_des.html("Эконом класс");
            status_des_p.html("Это отличный выбор цены и качества. Вы получаете не только высокий уровень сервиса, но и арендуете надежный автомобиль, пригодный для решения деловых задач, семейных вопросов и ряд других мероприятий. Отчет времени идет после непосредственной подачи авто в указанное место.");
        } else if (status_des_small_html === "Бизнес класс") {
            status_des.html("Бизнес класс");
            status_des_p.html("Это отличный выбор оптимального комфорта при выгодной стоимости услуг. <p> Вы получаете высокий уровень сервиса и арендуете надежный автомобиль, который по стоимости и комфорту является лучшей альтернативой представительскому и эконом классам.</p><p>Мы берем на себя полную координацию и предоставим подробный отчет по оказанной услуге.</p> ");
        } else if (status_des_small_html === "S класс") {
            status_des.html("S класс ");
            status_des_p.html("Это отличный выбор, чтобы подчеркнуть свой статус. <p>Вы получаете высокий уровень сервиса и арендуете надежный автомобиль, пригодный для решения повседневных деловых задач, встреч высокопоставленных гостей, проведения значимых мероприятий и не только.</p><p>Мы оказываем лучший сервис и оправдаем все Ваши ожидания!</p>");
        }

         $.getJSON('data/description-transport.json', {}, function(data){
                
                var items = [];
                $('.description_transport h2, .year, .body, .place, .salon, .equipment, .equipment2, .price, .price2').html('');
 
            $.each(data, function(key, val){

              if( key === nameTransport ){
                  $('.description_transport h2').html(val.name);
                  $('.description_transport .year').html(val.year);
                  $('.description_transport .body').html(val.body);
                  $('.description_transport .place').html(val.place);
                  $('.description_transport .salon').html(val.salon);
                  $('.description_transport .equipment').html(val.equipment);
                  $('.description_transport .equipment2').html(val.equipment2);
                  $('.description_transport .price').html(val.price);
                  $('.description_transport .price2').html(val.price2); //Characteristic transport
              }
            });
           
            //$('<ul/>', {
            //  html: items.join('')
            //}).appendTo('.description_transport h2');

            });      


    });

    $("#tab1").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_1_big.png");

        $('.description_transport h2').html("Toyota Corolla");
        $('.description_transport .year').html("от 2011");
        $('.description_transport .body').html("Седан");
        $('.description_transport .place').html("3 - 4");
        $('.description_transport .salon').html("Велюр");
        $('.description_transport .equipment').html("Климат контроль, подогрев передних");
        $('.description_transport .equipment2').html("сидений, USB, CD, DVD");
        $('.description_transport .price').html("3 000");
        $('.description_transport .price2').html("При заказе более 9 часов, цена от 2500тг."); //Characteristic tab1
    });

    $("#tab2").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_14_big.png");

        $('.description_transport h2').html("Toyota Hiace");
        $('.description_transport .year').html("от 2010");
        $('.description_transport .body').html("Туристический");
        $('.description_transport .place').html("11");
        $('.description_transport .salon').html("Велюр");
        $('.description_transport .equipment').html("Климат контроль, регулируемые");
        $('.description_transport .equipment2').html(" сиденья с ремнями безопасности, общее освещение, индивидуальный обдув");
        $('.description_transport .price').html("3 000");//Characteristic tab2
    });

    $("#tab3").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_18_big.png");

        $('.description_transport h2').html("Volvo");
        $('.description_transport .year').html("от 1999");
        $('.description_transport .body').html("Туристический");
        $('.description_transport .place').html("45 - 50");
        $('.description_transport .salon').html("Велюр");
        $('.description_transport .equipment').html("DVD, TV/Video, место гида,");
        $('.description_transport .equipment2').html(" панорамные окна, регулируемые сидения с ремнями, холодильник, микрофон, мониторов - 2, индивидуальное освещение, индивидуальный обдув, салон трансформер (сидячих - 50 мест, лежачих 40 мест)");
        $('.description_transport .price').html("5 000");//Characteristic tab3
    });

    $("#tab4").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_20_big.png");

        $('.description_transport h2').html("Газель");
        $('.description_transport .year').html("1,5 тонн");
        $('.description_transport .body').html("Тентованный/термобудка");
        $('.description_transport .place').html("8 м.куб (можно м3 с малой троечкой");
        $('.description_transport .equipment').html("При дополнительной оплате");
        $('.description_transport .equipment2').html(" предоставим грузчиков.");
        $('.description_transport .price').html("3 000");//Characteristic tab4
    });


        $(this).find(".name_transport").click(function(){
            $.getJSON('data/description-transport.json', {}, function(json){

                $('.description_transport h2').html('');

                $('.description_transport h2').append( json.note.to );
            });
            console.log("ok");
        });

};
machineSelection();
//End machine Selection
