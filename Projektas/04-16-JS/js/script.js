// alert("PageLoad event!")

let cities = []; //kuriam nauja masyva// //su [] kuriamas naujas masyvas//
cities.push ("Jonava");
cities.push ("Kaunas");
cities.push ("Vilnius");
cities.push ("Palanga");
cities.push ("Taurage");
cities.push ("Ignalina");
cities.push ("Birzai");
cities.push ("Utena");

function test(){
   
   console.log(typeof cities); //tikrinam masyvo tipa//

   let newCity = document.getElementById("txt_city").value; //nuskaitom nauja miesta is text laukelio//
   cities.push(newCity); //kad pridet (ikelt) duomenis i masyva - turim pridet metoda PUSH//


   document.getElementById("result").innerText = cities;
}