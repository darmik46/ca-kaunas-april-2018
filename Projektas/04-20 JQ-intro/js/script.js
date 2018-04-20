// function button_clic(btn) {
// let btnID = btn.id;
//     // document.getElementById("").innerHTML = "<h3>" + "btnID" + "was clicked </h3>";

//     alert(btnID + "was clcked")
// }

// document.getElementById("btn1");

// $(".content .result")


// sita JQuery funkcija leidzia mums sutaupyti html teksto dali, nukreipiant per ja uzklausa i konkretu veiksma. leidzia sutaupyti viska, kas isdestyta auksciau
$(".btn").click(function () {
    $(this).text("Paspaudei mane!");
    //  cia atvaizduojama musu konkretaus elemento prilyginimas vienodumui
    let button = $(this);
    // sita vieta leidzia, nelendant i html, mums kreiptis i kazkoki mums rupima elementa(objekta). siuo atveju _ i button. cia gauname tikslesni apibudinima - button1, button2 ir pan
    // let text = $(this).text();
    // alert("button was clicked");

    // padaro fuksa - paspaudus mygtuka, jis dingsta. uzkrovus tinklapi, vel atsiranda!
    // cia skliaustuose - mygtuko dingimo greitis mlsekundemis! idomumui 
    $(this).fadeOut(3000).fadeIn(3000);
});


// padaro animacija pries ivikdant mygtuko veiksma!. 
$(".specialBtn").hover(function () { // cia vadinama "Call-back" funkcija JQuery!
    $(this).text("Nejudink manes!");
}, function(){
    $(this).text("Baik judint!");
}
);


//  cia pradzia musu ivikio apraso, konkrecioje klaseje, siuo atveju - div'e result.
$(".result").click(function () {
    // cia aprasomas musu ivikio veiksmas! siuo atveju paspaudus - uzdaromas fonas, esantis div'e result
    $(this).fadeToggle("slow");
});


$('#btn_getValue_1').click(function (){
    let carBrand=$("#car_select").val();
alert(carBrand);
});

$(".slideEffect").click(function (){
    $(this).fadeToggle(5000);
});

$(".fadeEffect").click(function () {
    $(this).fadeToggle(5000);;

});

//  cia mano sumastyta! galima nenaudoti
// $(this).ready(function () {

