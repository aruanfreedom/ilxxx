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

    var delay = 1200;

    $(".jeep-mini").on("click", function() {
        $(".big_transport").addClass("jeep-big");
        $(".big_transport").removeClass("cars-big");
    });

    $(".cars-mini").on("click", function() {
        $(".big_transport").addClass("cars-big");
        $(".big_transport").removeClass("jeep-big");
    });


    $(".box_transport").on("click", function(){
        $(".box_transport").removeClass("active");
        $(this).addClass("active");

    });

    $(".part").on("click", function() {
        var img = $(this).find("img"),
            nameTransport = $(this).find(".name_transport").html(),
            imgAttr = img.attr("src"),
            bigImg = $(".big_transport img").attr("src", imgAttr),
            atrr = bigImg.attr("src"),
            result = atrr.replace(".png", "_big.png"), // replace img_big for click

            status_des = $(".status-description h2"),
            status_des_p = $(".status-description .description-p"),
            status_des_small = $(this).find(".status_transport");
        status_des_small_html = status_des_small.html();


        bigImg.attr("src", result);

        var r = result.slice(13),
            p = parseInt(r);

        if (status_des_small_html === "Эконом класс") {
            status_des.html("Эконом класс");
            status_des_p.html("<p>Это отличный выбор цены и качества.</p><p> Вы получаете не только высокий уровень сервиса,но и арендуете надежный автомобиль, пригодный для решения деловых задач, семейных вопросов и ряд других мероприятий.</p><p>Отчет времени идет после непосредственной подачи   авто в указанное место.</p>");
        } else if (status_des_small_html === "Бизнес класс") {
            status_des.html("Бизнес класс");
            status_des_p.html("<p>Это отличный выбор оптимального комфорта при выгодной стоимости услуг.</p> <p> Вы получаете высокий уровень сервиса и арендуете надежный автомобиль, который по стоимости и комфорту является лучшей альтернативой представительскому и эконом классам.</p><p>Мы берем на себя полную координацию и предоставим подробный отчет по оказанной услуге.</p> ");
        } else if (status_des_small_html === "S класс") {
            status_des.html("S класс ");
            status_des_p.html("<p>Это отличный выбор, чтобы подчеркнуть свой статус.</p> <p>Вы получаете высокий уровень сервиса и арендуете надежный автомобиль, пригодный для решения повседневных деловых задач, встреч высокопоставленных гостей, проведения значимых мероприятий и не только.</p><p>Мы оказываем лучший сервис и оправдаем все Ваши ожидания!</p>");
        } else{
            false;
        }

        $.getJSON('data/description-transport.json', {}, function(data){

            var items = [];
            $('.description_transport h2, .year, .body, .place, .salon, .equipment, .price, .price2').html('');

            $.each(data, function(key, val){

                if( key === nameTransport ){
                    $('.description_transport h2').html(val.name);
                    $('.description_transport .year').html(val.year);
                    $('.description_transport .body').html(val.body);
                    $('.description_transport .place').html(val.place);
                    $('.description_transport .salon').html(val.salon);
                    $('.description_transport .equipment').html(val.equipment);
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

        $(".select-cars").addClass("active");

        function camera(){
            $("#section2").animate({ //camera mikroautobus
                "backgroundSize": "150%"
            }, delay);

            $(".tab2 .big_transport img").animate({
                "width": "100%"
            }, delay);

            $(".tab3 .big_transport img").animate({
                "width": "100%"
            }, delay);

            $(".tab4 .big_transport img").animate({
                "width": "100%"
            }, delay);

            $(".tab1 .big_transport img").animate({
                "width": "100%"
            }, delay);
        }

        camera();

        var status_des = $(".status-description h2"),
            status_des_p = $(".status-description .description-p");

        status_des.html("");
        status_des_p.html("");

        status_des.html("Эконом класс");
        status_des_p.html("<p>Это отличный выбор цены и качества.</p><p> Вы получаете не только высокий уровень сервиса,но и арендуете надежный автомобиль, пригодный для решения деловых задач, семейных вопросов и ряд других мероприятий.</p><p>Отчет времени идет после непосредственной подачи   авто в указанное место.</p>");

        $('.description_transport h2').html("Toyota Corolla");
        $('.description_transport .year').html("от 2011");
        $('.description_transport .body').html("Седан");
        $('.description_transport .place').html("3 - 4");
        $('.description_transport .salon').html("Велюр");
        $('.description_transport .equipment').html("Климат контроль, подогрев передних сидений, USB, CD, DVD");
        $('.description_transport .price').html("3 000");
        $('.description_transport .price2').html("При заказе более 9 часов, цена от 2500тг."); //Characteristic tab1
    });




    $("#tab2").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_14_big.png");

        $(".select-micro").addClass("active");

            function camera(){
                $("#section2").animate({ //camera mikroautobus
                    "backgroundSize": "120%"
                }, delay);


                $(".tab2 .big_transport img").animate({
                    "width": "95%"
                }, delay);

                $(".tab1 .big_transport img").animate({
                    "width": "95%"
                }, delay);
            }

            camera();

        //animate(camera, 5000);

        var status_des = $(".status-description h2"),
            status_des_p = $(".status-description .description-p");

        status_des.html("");
        status_des_p.html("");

        status_des.html("Микроавтобус");
        status_des_p.html("<p>Это отличный выбор для поездки небольшой группы.</p> <p> Вы получаете не только высокий уровень сервиса, но и арендуете комфортабельное транспортное средство, обеспечивающее мобильность и вместительность равную четырем и более легковым авто.</p><p>Осуществляем внутригородские, междугородние и международные пассажирские перевозки</p>");

        $('.description_transport h2').html("Toyota Hiace");
        $('.description_transport .year').html("от 2010");
        $('.description_transport .body').html("Туристический");
        $('.description_transport .place').html("11");
        $('.description_transport .salon').html("Велюр");
        $('.description_transport .equipment').html("Климат контроль, регулируемые сиденья с ремнями безопасности, общее освещение, индивидуальный обдув");
        $('.description_transport .price').html("3 000");//Characteristic tab2
    });

    $("#tab3").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_18_big.png");

        $(".select-autobus").addClass("active");

        function camera(){
            $("#section2").animate({ //camera mikroautobus
                "backgroundSize": "120%"
            }, delay);


            $(".tab3 .big_transport img").animate({
                "width": "95%"
            }, delay);

            $(".tab1 .big_transport img").animate({
                "width": "95%"
            }, delay);
        }

        camera();

        var status_des = $(".status-description h2"),
            status_des_p = $(".status-description .description-p");

        status_des.html("");
        status_des_p.html("");

        status_des.html("Автобус");
        status_des_p.html("<p>Это отличный выбор для корпоративных, туристических (экскурсионных) поездок</p><p>Вы получаете высокий уровень сервиса и арендуете комфортабельное  транспортное средство, предназначенное для перевозок пассажиров в средних и больших количествах.</p><p>Предоставляем услуги по развозке персонала и организуем встречи гостей, деятелей культуры и официальных делегаций.</p>");

        $('.description_transport h2').html("Volvo");
        $('.description_transport .year').html("от 1999");
        $('.description_transport .body').html("Туристический - международный");
        $('.description_transport .place').html("45 - 50");
        $('.description_transport .salon').html("Велюр");
        $('.description_transport .equipment').html("DVD, TV/Video, место гида, панорамные окна, регулируемые сидения с ремнями, холодильник, микрофон, мониторов - 2, индивидуальное освещение, индивидуальный обдув, салон трансформер (сидячих - 50 мест, лежачих 40 мест)");
        $('.description_transport .price').html("5 000");//Characteristic tab3
    });

    $("#tab4").on("click", function() {
        $(".big_transport img").attr("src", "img/cars/car_20_big.png");

        $(".select-g").addClass("active");

        function camera(){
            $("#section2").animate({ //camera mikroautobus
                "backgroundSize": "120%"
            }, delay);


            $(".tab4 .big_transport img").animate({
                "width": "95%"
            }, delay);

            $(".tab1 .big_transport img").animate({
                "width": "95%"
            }, delay);
        }

        camera();

        var status_des = $(".status-description h2"),
            status_des_p = $(".status-description .description-p");

        status_des.html("");
        status_des_p.html("");

        status_des.html("Грузовые");
        status_des_p.html("<p>Это отличный выбор для перевозки грузов</p><p>Вы получаете ответственный экипаж и надежное транспортное средство позволяющее осуществлять перевозки по всей стране и ближнему зарубежью</p><p>Наш квалифицированный персонал предлагает лучшую логистику.</p>");

        $('.description_transport h2').html("Газель");
        $('.description_transport .year').html("1,5 тонн");
        $('.description_transport .body').html("Тентованный/термобудка");
        $('.description_transport .place').html("8 м<sup>3</sup>");
        $('.description_transport .equipment').html("При дополнительной оплате предоставим грузчиков.");
        $('.description_transport .price').html("3 000");//Characteristic tab4
    });

};
machineSelection();
//End machine Selection
