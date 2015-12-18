$(document).ready(function () {
    //services
    $('#wrapper .tabs').click(function () {
        if ($(this).attr('class') != $('#wrapper').attr('class')) {
            $('#wrapper').attr('class', $(this).attr('class'));
        }
        return false;
    });

    //avtopark
    $('#wrapper2 .tabs').click(function () {
        if ($(this).attr('class') != $('#wrapper2').attr('class')) {
            $('#wrapper2').attr('class', $(this).attr('class'));
        }
        return false;
    });

    //var arrayTabs = ["family h3", "bisness h3", "turism h3"],
    //    j, result;
    //for(j = arrayTabs.length - 1; j >= 0; j--){
    //    result = arrayTabs[j];
    //    tabsClick(arrayTabs, result);
    //}
    //
    //function tabsClick(arrayTabs, result){
    //    $("#" + result).on("click",function() {
    //        for (j = arrayTabs.length - 1; j >= 0; j--) {
    //            if (result == arrayTabs[j]) {
    //                $("." + result).addClass("active-services");
    //            } else{
    //                $("." + arrayTabs[j]).removeClass("active-services");
    //            }
    //
    //        };
    //    });
    //}
    //
    //$('#bisness h3').addClass("active-services");

});