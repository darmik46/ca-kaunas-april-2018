
$(".slideEffect").click(function () {
    $(this).fadeToggle(5000);
});

$(".fadeEffect").click(function () {
    $(this).fadeToggle(5000);;

});



$("#cv").click(function () {
    $(this).text("Sveiki. Esu Darius");
});

$("#cv").ready(function () {
    $("#cv").click(function () {
        $("#cv_laukas").slideToggle(6000);
    });
});


$("#savybes").click(function () {
    $(this).text("Sveiki. Esu Darius");
});

$("#savybes").ready(function () {
    $("#savybes").click(function () {
        $("#savybes_txt").slideToggle(6000);
    });
});

