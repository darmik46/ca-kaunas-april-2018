let product_array = [];

function sub() {
    //nuskaityti reiksme nuo laukelio
    let newProduct = document.getElementById("prod").value;


    //patikrinti ar elementas egzistuoja. Cia yra ivadas i patikrinimo funkcija!
    let rasta_dublikatu = false; // boolean

    // cia "rasta_dublikat" yra uzduotis funkcijai, o funkcija - "checkForDuplicates(newProduct, product_array)"
    // dar svarbi esme - tarp kai kuriu elementu (funkciniu) ir to kas yra skliaustuose NEGALI BUTI TARPELIO (kaip checkForDuplicates(newProduct, product_array))
    rasta_dublikatu = checkForDuplicates(newProduct, product_array);

    // issaugoti reiksme i masyva, ji parodo tikrinant, ar jau yra toks produktas. tokia funkcija TIKRINA esama padeti!
    if (rasta_dublikatu == false) {
        product_array.push(newProduct)
    } else {
        alert("DUBLIKATAS");
    }


    // atvaizduoti masyva
    printProducts(product_array);
}
function printProducts(product_array) {
    let h = "";
    h = h + "<ul>";
    for (let i = 0; i < product_array.length; i++) {
        h = h + "<li>" + product_array[i] + "</li>";
    }
    h = h + " </ul>";
    document.getElementById("result").innerHTML = h;
}

// F12 tikrina konkrecios funkcijos teisinguma - uzejus ant funkcijos ir paspaudus, parodo, yra tokia pati identiska, ar jos skiriasi. rodo klaida


// Sitos funkcijos uzduotis - generuoti klaidos radima.
// be jos neveiks auksciau esanti funkcija (rasta_dublikatu = checkForDuplicates(newProduct, product_array);)
function checkForDuplicates(newProduct, product_array) {
    let found = false;

    //  sita funkcija pereina per visa musu turima masyva - patikrinimui. esdme _ perziura NUO - IKI. tam sukuriama 
    for (let i = 0; i < product_array.length; i++) {
        if (product_array[i] == newProduct) {
            found = true;
        }
    }
    return found;
}