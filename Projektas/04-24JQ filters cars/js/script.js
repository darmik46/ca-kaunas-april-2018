$("#btn_filter").click(function () {

    // Input - Surinkti informacija is teksto laukeliu. cia "brandselect" eina is html id(select id=).
    let brand_text = $("#brandSelect").val();

    // Logic - padaryti CARS filtracija

    // Filtravimas! pagal brenda
    let filteredCars = CARS.filter(function (car) {
        // cia yra isgalvota fuunkcija, kad surasti mums laikina kintamaji cars (siuo atveju)
        // sukurtas isgalvotas laikinas kintamasis car mums leis pasirinkti kkonkretaus brando masinas is musu paspaustos masinu brendu eilutes
        return car.brand.toLowerCase() == brand_text.toLowerCase(); // Filtruojam pagal "brand", kad galetume veliau atlikti kitas uzduotis,
        // siuo atveju - isfiltruoti konkrecios pasirinktos markes masina pagal maziausia kilometrazo kieki  
    });

    // Get Top car
    let topCar = getTopCar(filteredCars);


    // Output - atvaizduoti resultata, kuri mes matysime kaireje puseje (sarasas masinu pasirinkto brando)
    printCars(filteredCars);
    // sita parodys masina desineje, jau7 musu isrinkta Top masina
    printTopCar(topCar);
});


// sita funkcija musu html surisa su foto galerija - surisa duomenis su konkrecia auto. kkintamasis h mums cia reprezentuoja html teksta
function printCars(array) {
    let h = "";
    for (let i = 0; i < array.length; i++) {
        h = h + "<div class='row'>";
        h = h + "<div class='col-12'>";
        h = h + "<h5>" + array[i].brand + " " + array[i].model + "</h5>";
        h = h + "<div class='brandImg'><img src='img/" + array[i].brand.toLowerCase() + ".png' /></div>";
        h = h + "<table class='car_table'>";
        h = h + "<tr><th>Seats:</th><td>" + array[i].seats + "</td></tr>";
        h = h + "<tr><th>HP:</th><td>" + array[i].power + "</td></tr>";
        h = h + "<tr><th>Mileage:</th><td>" + array[i].mileage + "</td></tr>";
        h = h + "<tr><th>Date:</th><td>" + array[i].date + "</td></tr>";
        h = h + "</table>";

        h = h + "<hr>";

        h = h + "</div>"; // uzdarom col-12
        h = h + "</div>"; // uzdarom row
    }

    $("#result").html(h);
}

function printTopCar(car) {
    let h = "";
    // arba galima rasyti taip:
    // let car = array[i];
    h = h + "<div class='row'>";
    h = h + "<div class='col-12'>";
    h = h + "<h5>" + car.brand + " " + car.model + "</h5>";
    h = h + "<div class='brandImg'><img src='img/" + car.brand.toLowerCase() + ".png' /></div>";
    h = h + "<table class='car_table'>";
    h = h + "<tr><th>Seats:</th><td>" + car.seats + "</td></tr>";
    h = h + "<tr><th>HP:</th><td>" + car.power + "</td></tr>";
    h = h + "<tr><th>Mileage:</th><td>" + car.mileage + "</td></tr>";
    h = h + "<tr><th>Date:</th><td>" + car.date + "</td></tr>";
    h = h + "</table>";

    h = h + "<hr>";

    h = h + "</div>";
    h = h + "</div>";

// sita funcija musu rasta duomeni nuveda i matymo lauka
    $("#newest").html(h);
}
//  cia "array" tai yra musu uzduotu kintamuju masyvas
function getTopCar(array) {
    let topCar = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].mileage < topCar.mileage) {
            topCar = array[i];
        }
    }
    // returnas butinas, kitaip nereiksminga bus 14 eilute,. mes nematysime uzduoto klausimo atsakymo
    return topCar;
}





// // veiksmu eiliskumas:
// 1. 1-os eilutes patikra mygtuko;
// 2. 4-os eilutes brand pasirinkimas;
// 3. toliau 9-a ir 17-a eilutes mums leidzia prafiltruoti brendo masinas;
// 4. 21-a ir 23-a eilutes mums parodo pasirinkto brando visas masinas, ir konkrecia masina pagal zemiau esancia funkcija;
// 5. tuomet jungiame 51-69 eilutes funkcijas, ir gauname isfiltravima;
// 6. butina nurodyti return veiksma (83 eilute), priesingu atveju mums nerodys musu norimo atsakymo; 
// 7. 28-oje eiluteje esantis "array" yra musu masinu eile (vagonas),
// kuris prasideda nuo pirmos masinos 9html tekste tai bus [0]).
// o toliau esantis i jau naudojamas kaip funkcijos dedamasis, kuris leidzia mums atlikti palyginimo veiksma ir gauti norima rezultata
// 8. 28-a-45-a eilutes yra funkcija, kuri mums leidzia atrasti ta vienintele pagal musu kriteriju ieskoma masina