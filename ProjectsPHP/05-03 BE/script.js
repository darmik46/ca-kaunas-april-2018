$("#btn_filter").click(function () {
    alert("Veikia");
});

function myFunction() {
    let x = document.getElementById("myEmail").value;
    document.getElementById("demo").innerHTML = x;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

//cia yra kintamieji(objektai)
let o = {
    gamintojas: 'honda',
    galia: 35kW,
}

//cia yra masyvai
let a2=[5.7.3]

//cia yra funkcija
alert(m.length);


//cia yra funkcija ir jos tikrinimas. duomenys skliaustuose atitinka savas vietas!
function fnc(a,b){
    return a*b;
}
alert (fnc(5.6));


//cia ta pati funkcija, tik anoninime
let fnc=function(a,b){
    return a*b;
}
alert (fnc(5.6));

//kintamojo perrasymas
let c=fnc,

    let a=5;
a=a+6;
//arba
a+=6;

//ci yr cikla vaizduojanti funkcija, nurodanti, kiek kartu funkcija kartos jai uzduodama koda
var a=[1,5,7];
var s=";
    for(var i=0; i<a.length; i++){
    s += ' ';+a[i]
    }

var a=5;
var s= ' ';
if (a>3){
    s='labas';
}else{
    s='rytas';
}
alert(s);

//kitoks variantas funkcijos
if (salyga){
    kodas;
}else{
    kodas;
}else if{
    kodas;
}
//alternatyva - switch
switch(a){
    case:5;  kodas; break;
}else{
    case: 7; kodas; break;
}