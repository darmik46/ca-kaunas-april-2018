let produktai = [];
// cia yra busimas musu suvedamu produktu masyvas

// masyva sudaro sitie veiksmai - aprasoma busimo produkto atsiradimo funkcija

printProduktai(produktai);
// sitas veiksmas produkta iveda i atminti  


// sitie veiksmai suformuoja bsuimo produkto prasme 
function add(){
	//Input
let pavadinimas_input = document.getElementById("pavadinimas").value;
let kaina_input = document.getElementById("kaina").value;
let kiekis_input = document.getElementById("kiekis").value;
let miestas_input = document.getElementById("miestas").value;

//  sitie veiksmai suformuoja logika, kada ir kaip busimas kintamasis pproduct atsiranda 
let product = {
		pavadinimas: pavadinimas_input,
		kaina: Number(kaina_input),
		kiekis: Number(kiekis_input),
		miestas: miestas_input
    }

//  sita funkcija nuveda musu suvedamus duomenis i lentele 
    function printProduktai(produktai){
        let h = "";
            h = h + "<table class='table table-striped' id=myTable>";
            h = h + "<tr><thead class='thead-dark'><th> Pavadinimas </th> <th>Kiekis</th> <th>Kaina</th> <th>Miestas</th> <th>Veiksmas</th></thead></tr>"
            for (let i = 0; i < produktai.length; i++){
                let prod = produktai[i];
                h = h + "<tr><td>" + prod.pavadinimas + "</td>"
                 + "<td>" + prod.kiekis + "</td>"
                 + "<td>" + prod.kaina + "&euro;" + "</td>"
                 + "<td>" + prod.miestas + "</td>"
                 + "<td>" +"<button onclick='remove("+i+")' class='btn btn-link'>[Šalinti]</button>" + "</td></tr>";
                // console.log(p);
            }
            h = h + "</table>";

        //  sitas veiksmas mums sukelia duomenis i formuojama sarasa (lentele) 
            document.getElementById("spausdinti").innerHTML = h;
        }
        
//istraukiam issaugotas produktus is LocalStorage
let prod_list_string = localStorage.getItem("Prod_sarasas");
//console.log(prod_list_string);

//atgaunam Issaugotu produktu masyva.
let Prod_sarasas = JSON.parse(prod_list_string);
//console.log(Prod_sarasas);



if(Prod_sarasas != null){
	produktai = Prod_sarasas;
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
}

function printProduktai(produktai){
let h = "";
	h = h + "<table class='table table-striped' id=myTable>";
	h = h + "<tr><thead class='thead-dark'><th> Pavadinimas </th> <th>Kiekis</th> <th>Kaina</th> <th>Miestas</th> <th>Veiksmas</th></thead></tr>"
	for (let i = 0; i < produktai.length; i++){
		let prod = produktai[i];
		h = h + "<tr><td>" + prod.pavadinimas + "</td>"
		 + "<td>" + prod.kiekis + "</td>"
		 + "<td>" + prod.kaina + "&euro;" + "</td>"
		 + "<td>" + prod.miestas + "</td>"
		 + "<td>" +"<button onclick='remove("+i+")' class='btn btn-link'>[Šalinti]</button>" + "</td></tr>";
		// console.log(p);
	}
	h = h + "</table>";
	document.getElementById("spausdinti").innerHTML = h;
}

function remove(index){
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

function resetForm(){
	document.getElementById("myForm").reset();
}

function clearSavedData(){
	localStorage.removeItem("Prod_sarasas");
	
	// is naujo persaugoti einama masiva
	produktai = [];
	//is naujo atvaizduot pasivo elementus
	printProduktai(produktai);
}