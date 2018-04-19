let Products = [];

let prod_list_string = localStorage.getItem("Products_list");
let Products_list = JSON.parse(prod_list_string);

// Products = products_list;

if (Products_list != null) {
    Products = Products_list;
}

printProducts(Products_list);

function add() {
    let Pavadinimas_input = document.getElementById("Pavadinimas").value;
    let Kaina_input = document.getElementById("Kaina").value;
    let Kiekis_input = document.getElementById("Kiekis").value;
    let Miestas_input = document.getElementById("Miestas").value;


    let product = {
        Pavadinimas: Pavadinimas_input,
        Kaina: Number(Kaina_input),
        Kiekis: Number(Kiekis_input),
        Miestas: Miestas_input
    }

    Products.push(product)
    console.log(Products);

    printProducts(Products);

    let h_string = JSON.stringify(products);
    localStorage.setItem("Products_list", h_string);
}


// ISSINAGRINETI!
function printProducts(Products) {
    let h = "";
    h = h + "<table class='table table-stripped' id=myTable>";
    h = h + "<tr><td>" + prod.Pavadinimas + "</td>"
        + "<td>" + prod.Kiekis + "</td>"
        + "<td>" + prod.Kaina + "&euro;" + "</td>"
        + "<td>" + prod.Miestas + "</td>"
        + +"<td>" + "<button class='btn btn-primary'>[Šalinti]</button>" + "</td></tr>";
    h = h + "</table";
    document.getElementById("spausdinti").innerHTML = h;
}

let clear = document.getElementById("sukurti");
let form = document.getElementById("myForm");
