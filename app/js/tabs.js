$(document).ready(function () {
    $('#wrapper .tabs, #wrapper2 .tabs').click(function () {
        if ($(this).attr('class') != $('#wrapper, #wrapper2').attr('class')) {
            $('#wrapper, #wrapper2').attr('class', $(this).attr('class'));
        }
        return false;
    });

    var arrayTabs = ["family h3", "bisness h3", "turism h3"],
        j, result;
    for(j = arrayTabs.length - 1; j >= 0; j--){
        result = arrayTabs[j];
        tabsClick(arrayTabs, result);
    }

    function tabsClick(arrayTabs, result){
        $("#" + result).on("click",function() {
            for (j = arrayTabs.length - 1; j >= 0; j--) {
                if (result == arrayTabs[j]) {
                    $("." + result).addClass("active-services");
                } else{
                    $("." + arrayTabs[j]).removeClass("active-services");
                }

            };
        });
    }

    $('#bisness h3').addClass("active-services");

});