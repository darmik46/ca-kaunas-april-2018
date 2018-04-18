// alert("JS veikia");
//  sitos {} kabutes reiskia, kad tai yra OBJEKTAS!!!!
// bet kur, tinklapio tekste ar JS paskyroje

let CARS = []
// cia parasoma funkcija 

// situo mes istraukiame musu objektus is suformuoto localinio storago(saugyklos)
let cars_list_string = localStorage.getItem("CARS");

//  situo veiksmu mes atgauname tai, ka esame issaugoje localiniame sarase
let CARS_stored = JSON.parse(cars_list_string);
// patikriname ar veikia uzduota funkcija
console.log(CARS_stored)

// sitas mums leidzia sutapatinti du atsiradusius masyvus! nors ju turinys - reiskia ta pati
CARS = CARS_stored;
if (CARS_stored != null) {
}

// cia yra funkcija duomenu suvedimui ir nauju objektu formavimui
function reg() {
    alert("registracija veikia");

    let brand_text = document.getElementById("brand").value;

    let model_text = document.getElementById("model").value;

    let engine_text = document.getElementById("engine").value;
    let engine_number = Number(engine_text);

    let hp_text = document.getElementById("hp").value;
    let hp_number = Number(hp_text);




    //  galime patikrinti per console, ar mums tokias reiksmes ismeta, irasius 
    let car = {
        brand: brand_text,
        // jei norime, kad butu saugomi teisingi duomenys, privalime deti KABUTES!
        model: model_text,
        engine: engine_number,
        hp: hp_number,

        //  sita papildoma funkcija mums sudaro galimybe, kad mes tkrai dirbame su mums rupimu objektu!
        // taciau kai mes jungiame JSON, sita patikrinimo console jau neveikia! 
        print: function () {
            console.log(this.brand + " " + this.model + "Automobilis sako labas");

        }
    }


    CARS.push(car);
    // cia nereikejo kabuciu! skliaustuose
    console.log(CARS);



    //  sita patikra galime naudoti viso saraso tikrinimui per 
    let car_json = JSON.stringify(car);

    console.log(car_json);


    //  paverciam CARS duomenu masyva vidiniam saugojimui
    let CARS_string = JSON.stringify(CARS);

    //  sita formule leidzia mums irasyti paskutinius duomenis i vietine atminti (inspect-application).
    // taciau jei clearinam kompo duomenu history, viskas dingsta
    // mes suformuojame vidineje servo bazeje surinkta sarasa
    localStorage.setItem("CARS", CARS_string);
    // kad 
    localStorage.getItem("CARS", CARS_string);

    // localStorage.getItem("newcar", car_json);
}

function say_hi(car){
    console.log(c.brand + " " + c.model + "Automobilis sako labas")
}




// (document.getElementById("result").innerText=CARS_as_string;

// let CARS_list = " ";)


