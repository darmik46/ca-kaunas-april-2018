let prod_array = [];

function add() {

    
    let newProd = document.getElementById("prod").value;


    
    prod_array.push(newProd);

    printProd(prod_array);
}

function printProd(prod_array) {
    let h = "";
    h = h + "<ul>";
    for (let i = 0; i < prod_array.length; i++) {
        h = h + "<li>" + prod_array[i] + "</li>";
    }
    h = h + " </ul>";
    document.getElementById("result").innerHTML = h;
}



function checkForDuplicates(newProd, prod_array) {
    let found = false;

    for (let i = 0; i < prod_array.length; i++) {
        if (prod_array[i] == newProd) {
            found = true;
        }
    }
    let prod_array = prod_array_stored;
    if (prod_array_stored != null) {

    }

    prod_array.push(prod);



    let prod_list_string = localStorage.getElementById("prod_array");

    document.getElementById("result").innerText = prod_as_string;

    let prod_array_string = localStorage.getItem("prod_array");

    let atgautas_prod_array_stored = JSON.parse(prod_array);


    let prod_json = JSON.stringify(prod);

    let prod_array_string = JSON.stringify(prod_array);


    localStorage.setItem("prod_array", prod_array_string);

    console.log(prod_json);

}