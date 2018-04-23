var produktai = [];

//istraukiam issaugotas produktus is LocalStorage
var prod_list_string = localStorage.getItem("Prod_sarasas");
//console.log(prod_list_string);

//atgaunam Issaugotu produktu masyva.
var Prod_sarasas = JSON.parse(prod_list_string);
//console.log(Prod_sarasas);

if (Prod_sarasas != null) {
    produktai = Prod_sarasas;
}

printProduktai(produktai);

function add() {
    //Input
    var pavadinimas_input = document.getElementById("pavadinimas").value;
    var kaina_input = document.getElementById("kaina").value;
    var kiekis_input = document.getElementById("kiekis").value;
    var miestas_input = document.getElementById("miestas").value;

    let errors_found = false;
    // Tikrinam "Kaina laukeli"

    if (kaina_input) {

        if (kaina_input.length < -1) {
            // cia yra klaida, perilgas produkto pavadinimas			
            $("#kaina-validation-error").text("Tokių duomenų nėra");
            $("#kaina-validation-error").fadeIn('fast');
            $("#kaina").addClass("is-invalid");
            errors_found = true;
        } else {
            $("#kaina-validation-error").fadeOut('fast');
            $("#kaina").removeClass("is-invalid");
        }
    }
    else {
        $("#kaina-validation-error").text("Prašome parašyti taisyklingai");
        $("#kaina-validation-error").fadeIn('fast');
        $("#kaina").addClass("is-invalid");
        errors_found = true;
    }

    // Laukelis nera tuscias. viskas tvarkoi, tesiam toliau
    //     // patikrinti ar klaina turi "+" ARBA "-"
    //     if (kaina_input.indexOf('+') > -1 || kaina_input.indexOf('-') > -1) {
    //         // rastas neleistinas "+" zenklas - klaida
    //         // alert("Demesio rastas + arba -");
    //         errors_found = true;
    //     } else {
    //         // klaidu nerasta, viskas gerai
    //     }
    // } else {
    //     // KLAIDA: "Kaina" laukelis yra privalomas ir negali buti tuscias
    //     alert("Kaina yra privaloma");
    //     errors_found = true;
    // }

    if (kiekis_input) {
        if (kiekis_input.length < -1) {
            // cia yra klaida, perilgas produkto pavadinimas			
            $("#kiekis-validation-error").text("Netinkami duomenys");
            $("#kiekis-validation-error").fadeIn('fast');
            $("#kiekis").addClass("is-invalid");
            errors_found = true;
        } else {
            $("#kiekis-validation-error").fadeOut('fast');
            $("#kiekis").removeClass("is-invalid");
        }
    }
    else {
        $("#kiekis-validation-error").text("Prašome parašyti taisyklingai");
        $("#kiekis-validation-error").fadeIn('fast');
        $("#kiekis").addClass("is-invalid");
        errors_found = true;
    }


    if (pavadinimas_input) {
        if (pavadinimas_input.length > 50) {
            // cia yra klaida, perilgas produkto pavadinimas			
            $("#pavadinimas-validation-error").text("Tokios prekės nėra");
            $("#pavadinimas-validation-error").fadeIn('fast');
            $("#pavadinimas").addClass("is-invalid");
            errors_found = true;
        } else {
            $("#pavadinimas-validation-error").fadeOut('fast');
            $("#pavadinimas").removeClass("is-invalid");
        }
    }
    else {
        $("#pavadinimas-validation-error").text("Nurodykite teisingą prekę");
        $("#pavadinimas-validation-error").fadeIn('fast');
        $("#pavadinimas").addClass("is-invalid");
        errors_found = true;
    }


    // galima naudoti bootstrap klase, kuri yra cia - https://getbootstrap.com/docs/4.0/components/forms/#server-side
    if (miestas_input) {
        if (miestas_input.length > 50) {
            // cia yra klaida, perilgas produkto pavadinimas			
            $("#city-validation-error").text("Per ilgas miesto pavadinimas.");
            $("#city-validation-error").fadeIn('fast');
            $("#miestas").addClass("is-invalid");
            errors_found = true;
        } else {
            $("#city-validation-error").fadeOut('fast');
            $("#miestas").removeClass("is-invalid");
        }
    }
    else {
        $("#city-validation-error").text("Prašome parašyti taisyklingą miestą.");
        $("#city-validation-error").fadeIn('fast');
        $("#miestas").addClass("is-invalid");
        errors_found = true;
    }





    if (!errors_found) {
        // Jeigu klaidu nera, viskas gerai - galima registruot nauja produkta.
        //Logic
        let product = {
            pavadinimas: pavadinimas_input,
            kaina: Number(kaina_input),
            kiekis: Number(kiekis_input),
            miestas: miestas_input
        }
        produktai.push(product);
        console.log(produktai);

        //Output
        printProduktai(produktai);

        //Nera privaloma, bet mes issaugom i "localStorage".
        let p_string = JSON.stringify(produktai);
        localStorage.setItem("Prod_sarasas", p_string);

        //Isvalyti forma
        resetForm();
    } else {
        // Jeigu klaidu yra, reikia apsaugoti duomenis
        alert("buvo rasta klaida, registracija neiviko.");
    }
}

function printProduktai(produktai) {
    var h = "";
    h = h + "<table class='table table-striped' id=myTable>";
    h = h + "<tr><thead class='thead-dark'><th> Pavadinimas </th> <th>Kiekis</th> <th>Kaina</th> <th>Miestas</th> <th>Veiksmas</th></thead></tr>"
    for (var i = 0; i < produktai.length; i++) {
        let prod = produktai[i];
        h = h + "<tr><td>" + prod.pavadinimas + "</td>"
            + "<td>" + prod.kiekis + "</td>"
            + "<td>" + prod.kaina + "&euro;" + "</td>"
            + "<td>" + prod.miestas + "</td>"
            + "<td>" + "<button onclick='remove(" + i + ")' class='btn btn-link'>[Šalinti]</button>" + "</td></tr>";
        // console.log(p);
    }
    h = h + "</table>";
    document.getElementById("spausdinti").innerHTML = h;
}

function remove(index) {
    // reikia istrinti elementa pagal Indexa.
    //PASALINAM indexo dali
    produktai.splice(index, 1);

    //po pakeitimo, reikia is naujo atspausdint, ir is naujo issaugot

    //atspausdinam
    printProduktai(produktai);

    //issaugom i "localStorage".
    var p_string = JSON.stringify(produktai);
    localStorage.setItem("Prod_sarasas", p_string);
}

function resetForm() {
    document.getElementById("myForm").reset();
}

function clearSavedData() {
    localStorage.removeItem("Prod_sarasas");

    // is naujo persaugoti einama masiva
    produktai = [];
    //is naujo atvaizduot pasivo elementus
    printProduktai(produktai);
}

// sita funkcija mums leidzia "sutaupyti" vietos aprasant klaidos parodyma




function printProduktai(produktai) {
    let h = "";
    h = h + "<table class='table table-striped' id=myTable>";
    h = h + "<tr><thead class='thead-dark'><th> Pavadinimas </th> <th>Kiekis</th> <th>Kaina</th> <th>Miestas</th> <th>Veiksmas</th></thead></tr>"
    for (let i = 0; i < produktai.length; i++) {
        let prod = produktai[i];
        h = h + "<tr><td>" + prod.pavadinimas + "</td>"
            + "<td>" + prod.kiekis + "</td>"
            + "<td>" + prod.kaina + "&euro;" + "</td>"
            + "<td>" + prod.miestas + "</td>"
            + "<td>" + "<button onclick='remove(" + i + ")' class='btn btn-link'>[Šalinti]</button>" + "</td></tr>";
        // console.log(p);
    }
    h = h + "</table>";
    document.getElementById("spausdinti").innerHTML = h;
}

function remove(index) {
    // reikia istrinti elementa pagal Indexa.
    //PASALINAM indexo dali
    produktai.splice(index, 1);

    //po pakeitimo, reikia is naujo atspausdint, ir is naujo issaugot

    //atspausdinam
    printProduktai(produktai);

    //issaugom i "localStorage".
    let p_string = JSON.stringify(produktai);
    localStorage.setItem("Prod_sarasas", p_string);
}

function resetForm() {
    document.getElementById("myForm").reset();
}

function clearSavedData() {
    localStorage.removeItem("Prod_sarasas");

    // is naujo persaugoti einama masiva
    produktai = [];
    //is naujo atvaizduot pasivo elementus
    printProduktai(produktai);
}


