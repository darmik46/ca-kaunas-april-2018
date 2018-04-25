$("#btn_search").click(function () {
    alert("veikia");

    let brand_text = $("txt_brand").val();
    // alert(brand_text);

    let filtered_cars = CARS.filter(function (car) {
        let ful_string = car.brand.toLowerCase() + " " + car.model.toLowerCase();

        let part_of_string = brand_text.toLowerCase() + " " + model_text.toLowerCase();
        
        return ful_string.indexOf(part_of_string) > -1;
    });

    let powerCar = getMostPowerfulCar(filtered_cars);
    printCar(powerCar);
    // printCar(filtered_cars);
});

function printCar(filtered_cars) {

    let h = "";
    for (let i = 0; i < filtered_cars.length; i++) {
        h = h + "<div class='row'>";
        h = h + "<div class='col-12'>";
        h = h + "<h5>" + filtered_cars[i].brand + "-" + filtered_cars[i].model + "</h5>";
        h = h + "<div class='brandImg'><img src='img/" + filtered_cars[i].brand.toLowerCase() + ".png' /></div>";
        h = h + "<table class='car_table'>";
        h = h + "<tr><th>Seats:</th><td>" + filtered_cars[i].seats + "</td></tr>";
        h = h + "<tr><th>HP:</th><td>" + filtered_cars[i].power + "</td></tr>";
        h = h + "<tr><th>Mileage:</th><td>" + filtered_cars[i].mileage + "</td></tr>";
        h = h + "<tr><th>Date:</th><td>" + filtered_cars[i].date + "</td></tr>";
        h = h + "</table>";
        h = h + "<hr>";
        h = h + "</div>";
        h = h + "</div>";
    }

    $("#result").html(h);
}

function getMostPowerFulCar(array) {
    let powerful_car = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].powerful_car < powerful_car.power) {
        }
    }
    return powerful_car;
}

function printCar(car) {
    let h = "";
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
    h = h + "</div>"; // uzdarom col-12
    h = h + "</div>"; // uzdarom row	

    $("#topCar").html(h);
}











































//     let brand_text = $("#brandSelect").val();

//     let filteredCars = CARS.filter(function (car) {

//         return car.brand.toLowerCase() == brand_text.toLowerCase();
//     });

//     // let topCar = getTopCar(filteredCars);

//     // printCars(filteredCars);

//     // printTopCar(topCar);
// });



// function click(){
// 	//Input
// 	let brand_input = document.getElementById("brand").value;
// 	let date_input = document.getElementById("date").value;
// 	let mileage_input = document.getElementById("mileage").value;
// 	let power_input = document.getElementById("power").value;

// 	//Logic
// 	let cars = {
// 		brand: brand_input,
// 		date: Number(date_input),
// 		mileage: Number(mileage_input),
// 		power: power_input
// 	}
// 	cars.push(car);
// 	console.log(cars);



// function printCars(array){
// 	let h = "";
// 	for(let i = 0; i<array.length;i++){
// 		h = h + "<div class='row'>";
// 		h = h + "<div class='col-12'>";
// 		h = h + "<h5>"+array[i].brand+" "+array[i].model+"</h5>";
// 		h = h + "<div class='brandImg'><img src='img/" + array[i].brand.toLowerCase() + ".png' /></div>";
// 		h = h + "<table class='car_table'>";
// 		h = h + "<tr><th>Seats:</th><td>"+array[i].seats+"</td></tr>";
// 		h = h + "<tr><th>HP:</th><td>"+array[i].power+"</td></tr>";
// 		h = h + "<tr><th>Mileage:</th><td>"+array[i].mileage+"</td></tr>";
// 		h = h + "<tr><th>Date:</th><td>"+array[i].date+"</td></tr>";
// 		h = h +"</table>";

// 		h = h +"<hr>";

// 		h = h + "</div>";
// 		h = h + "</div>";
// 	}
// 	$("#result").html(h);
// }


// function printTopCar(car) {
//     let h = "";
//     // arba galima rasyti taip:
//     // let car = array[i];
//     h = h + "<div class='row'>";
//     h = h + "<div class='col-12'>";
//     h = h + "<h5>" + car.brand + " " + car.model + "</h5>";
//     h = h + "<div class='brandImg'><img src='img/" + car.brand.toLowerCase() + ".png' /></div>";
//     h = h + "<table class='car_table'>";
//     h = h + "<tr><th>Seats:</th><td>" + car.seats + "</td></tr>";
//     h = h + "<tr><th>HP:</th><td>" + car.power + "</td></tr>";
//     h = h + "<tr><th>Mileage:</th><td>" + car.mileage + "</td></tr>";
//     h = h + "<tr><th>Date:</th><td>" + car.date + "</td></tr>";
//     h = h + "</table>";

//     h = h + "<hr>";

//     h = h + "</div>";
//     h = h + "</div>";

// // sita funcija musu rasta duomeni nuveda i matymo lauka
//     $("#newest").html(h);
// }


// function getTopCar(array) {
//     let topCar = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].brand < topCar.brand) {
//             topCar = array[i];
//         }
//     }

//     let topCar = getTopCar(filteredCars);

//     printCars(filteredCars);

//     printTopCar(topCar);

// }

//   return topCar;
// }