// cia yra pirminis musu masyvas. jo pagrindu vyks visos funkcijos.
// toks isdestymas taupo vieta, eiluciu kieki ir pan. o reiksme tokia pati!
let colors = ["red","green","blue"]; 

// sitas reiskia, kad kazka i funkcija IDEDAME
colors.push("red");

// cia mini funkcija, kuri leidzia mums grazinti is listo jau esama, kaip nors netycia patekusi, elementa
colors = clearDuplicates(colors);

let colors_as_string = colors.toString();

document.getElementById("result").innerText=colors_as_string;
 
let color_list = "red,green,blue"
console.log(typeof colors_as_string);
console.log(colors_as_string);


function clearDuplicates(colors){

    let unique_colors_list= [];
    for(let i = 0; i < colors.lenght; i++) {
        if(unique_colors_list.indexOf(colors[i])==-1){
            unique_colors_list.push(colors[i]);
        }
    }

    // return unique_color_list;
// function deleteColor(colors, colors) {
// reikia mums rasti duplicata
// reikia pasalinti duplicata. butenet funkcija pop() ji ir pasalina
// let x= colors.indexOf(colors);
// colors.indexOf(delete_word);

// colors.spl/ice(x, 1);

    // let colors_filtered = [];
// return colors;
}

// sitas reiskia, kad kazka ismetame is funkcijos
// colors.pop(2, 1);

// dazniausiai naudojami funkciniai tagai. issamiai - cia https://www.w3schools.com/jsref/jsref_obj_array.asp
// pop()
// splice()
// toString()
// sort()
// indexOf()
// reverse()

// issamus pavyzdziai - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// sitas dokumentas egzistuos visada kiek egzistuos pats pagrindinis dkumentas.
// tas getElementById yra FUNKCIJOS KVIETIMO tagas





// let product_array = [];

// function sub() {
//     //nuskaityti reiksme nuo laukelio
//     let newProduct = document.getElementById("prod").value;


//     //patikrinti ar elementas egzistuoja. Cia yra ivadas i patikrinimo funkcija!
//     let rasta_dublikatu = false; // boolean

//     // cia "rasta_dublikat" yra uzduotis funkcijai, o funkcija - "checkForDuplicates(newProduct, product_array)"
//     // dar svarbi esme - tarp kai kuriu elementu (funkciniu) ir to kas yra skliaustuose NEGALI BUTI TARPELIO (kaip checkForDuplicates(newProduct, product_array))
//     rasta_dublikatu = checkForDuplicates(newProduct, product_array);

//     // issaugoti reiksme i masyva, ji parodo tikrinant, ar jau yra toks produktas. tokia funkcija TIKRINA esama padeti!
//     if (rasta_dublikatu == false) {
//         product_array.push(newProduct)
//     } else {
//         alert("DUBLIKATAS");
//     }


//     // atvaizduoti masyva
//     printProducts(product_array);
// }
// function printProducts(product_array) {
//     let h = "";
//     h = h + "<ul>";
//     for (let i = 0; i < product_array.length; i++) {
//         h = h + "<li>" + product_array[i] + "</li>";
//     }
//     h = h + " </ul>";
//     document.getElementById("result").innerHTML = h;
// }

// // F12 tikrina konkrecios funkcijos teisinguma - uzejus ant funkcijos ir paspaudus, parodo, yra tokia pati identiska, ar jos skiriasi. rodo klaida


// // Sitos funkcijos uzduotis - generuoti klaidos radima.
// // be jos neveiks auksciau esanti funkcija (rasta_dublikatu = checkForDuplicates(newProduct, product_array);)
// function checkForDuplicates(newProduct, product_array) {
//     let found = false;

//     //  sita funkcija pereina per visa musu turima masyva - patikrinimui. esdme _ perziura NUO - IKI. tam sukuriama 
//     for (let i = 0; i < product_array.length; i++) {
//         if (product_array[i] == newProduct) {
//             found = true;
//         }
//     }
//     return found;
// }

// toString padaro mums norima objekta i sarasini - zodzius su kableliu ir pan
