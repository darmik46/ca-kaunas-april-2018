let prod_array = [];

let stored_prod_string = localStorage.getItem("Products");
let stored_prod = JSON.parse(stored_prod_string);

console.log(stored_prod);

if (stored_prod != null) {
    prod_array = stored_prod;
}

printProd(prod_array);

function add() {

    let newProd = document.getElementById("prod").value;
    let rasta_dublikatu = false;
    rasta_dublikatu = checkForDuplicates(newProd, prod_array);

    if (rasta_dublikatu == false) {
        prod_array.push(newProd);
    } else {
        alert("reiksme jau yra!");
    }

    printProd(prod_array);

    let prod_array_as_string = JSON.stringify(prod_array);
    localStorage.setItem("Products", prod_array_as_string);
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



function checkForDuplicates (newProd, prod_array){
        let found = false;

        for (let i = 0; i < prod_array.length; i++) {
            if (prod_array[i] == newProd) {
                found = true;
            }
        }

        return found;
    }
    function releaseButton() {
        document.getElementById("btn_add").disabled = false;
    }