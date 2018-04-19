let CARS = []

let cars_list_string = localStorage.getItem("CARS");


let CARS_stored = JSON.parse(cars_list_string);

console.log(CARS_stored)

CARS = CARS_stored; {
    if (CARS_stored != null) 
}
{
        CARS.push(car);
        console.log(CARS);


        let car_json = JSON.stringify(car);

        console.log(car_json);


        let CARS_string = JSON.stringify(CARS);


        localStorage.setItem("CARS", CARS_string);

        localStorage.getItem("CARS", CARS_string);

    }

    function say_hi(car) {
        console.log(c.brand + " " + c.model + "Automobilis sako labas")
    }


