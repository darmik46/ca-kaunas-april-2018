$("#btn_search").click(function () {

	// input - nuskaityti reiksmes nuo laukeliu
	let brand_text = $("#txt_brand").val();

	// logic - atfiltruoti reikiamus duomenys
	let filtered_cars = CARS.filter(function (car) {
		let s_brand = car.brand.toLowerCase();
		let s_brand_text = brand_text.toLowerCase();

		return s_brand.indexOf(s_brand_text) > -1; // paliginimo funkcija - Filtruojam pagal branda
	});

	// rasti galingiausiamasina
	let powerCar = getMostPowerfulCar(filtered_cars);
	printCar(powerCar);

	// output - atvaizduoti atrilftruotus duomenys
	printCars(filtered_cars);
});

//funkcija sarasui atvaizduoti
function printCars(filtered_cars){
	let h = "";

	for(let i = 0; i < filtered_cars.length; i++){
		
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+filtered_cars[i].brand+" "+filtered_cars[i].model+"</h5>";
		h = h + "<div class='brandImg'><img src='img/" + filtered_cars[i].brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+filtered_cars[i].seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+filtered_cars[i].power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+filtered_cars[i].mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+filtered_cars[i].date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row
	}

	$("#result").html(h);
}

//next function
function getMostPowerfulCar(array){
	let powerful_car = array[0];

	for(let i = 0; i < array.length; i++){
		if(array[i].power > powerful_car.power){
			powerful_car = array[i];
		}
	}
	
	return powerful_car;
}

//next function
function printCar(car){
	let h = "";
		
		h = h + "<div class='row'>";
		h = h + "<div class='col-12'>";
		h = h + "<h5>"+car.brand+" "+car.model+"</h5>";
		h = h + "<div class='brandImg'><img src='img/" + car.brand.toLowerCase() + ".png' /></div>";
		h = h + "<table class='car_table'>";
		h = h + "<tr><th>Seats:</th><td>"+car.seats+"</td></tr>";
		h = h + "<tr><th>HP:</th><td>"+car.power+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+car.mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+car.date+"</td></tr>";
		h = h +"</table>";

		h = h +"<hr>";
		
		h = h + "</div>"; // uzdarom col-12
		h = h + "</div>"; // uzdarom row	

	$("#topCar").html(h);
}

//next function...