
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


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
