alert("PageLoad event!")

let cities = []; //kuriam nauja masyva// //su [] kuriamas naujas masyvas//

cities.push("Jonava");
cities.push("Kaunas");
cities.push("Vilnius");
cities.push("Klaipeda");
cities.push("Utena");
cities.push("Ignalina");
cities.push("Palanga");
cities.push("Taurage");
cities.push("Kazlu Ruda");


console.log(cities);
console.log(cities.toString());

function test(){

   console.log(typeof cities); //tikrinam masyvo tipa//

   let newCity = document.getElementById("txt_city").value; //nuskaitom nauja miesta is text laukelio//
   cities.push(newCity); //kad pridet (ikelt) duomenis i masyva - turim pridet metoda PUSH//

   document.getElementById("result").innerText = cities;
   printCities(cities); //su funkcijos kvietimu - siunciami kintamieji (masyvas) "cities"//
}

function printCities(cities){ //funkcijai reikalingas masyvas "cities"//
   let h = "";
   for(let i = 0; i < cities.length; i++){
       console.log(i);
       console.log(cities[i]);
       h = h + "<div><h3 class='prettyText'>"+cities[i]+"</h3></div>"; // string aggregation //
   }
   document.getElementById("result").innerHTML = h;
   }