//  cia svarbus tinklapis!!!!!! http://www.3ligijus.lt/javascript.html


// 1. apsirasome sarasa, kuris buys susietas su masyvu 9value0
let miestai = ["New york", "Berlin", "Oslo", "Riga", "Moscow", "Rome", ""];

// 2. sita funkcija mums reikalinga tik pracekinimui, kai atverciamas tinklapis
function check() {
    alert("klikas veikia");

    // 3. kai yra kokie nors tekstiniai paieskos laukeliai, rasomas value! cia city bus tas id, kuris pas mus duodamas html tekste. ju gali buti ne vienas!
    let city = document.getElementById("city").value;

    // 4. reikalinga tik tikrinimui per inspecta!!!!!!!!!!!
    console.log(city);

// 5. cia sukuriame tarpini elemnta paieskai, be apibrezto teksto!
    let cityFound = "";
// 6. cia musu lygtis, kuria mes apibreziame, ko mums is tikro reikia
    if (miestai.indexOf(city) > - 1) {
        cityFound = "toks miestas yra";
    } else {
        cityFound = "tokio miesto nera";
    }

// 7.sitas uzrasas mums nurodo, ko mes siekiam uzduoto per html teksta (siuo atveju result, kuri mums turi duoti BUTTON, ir nurodo ( su h3), kurioje vietoje musu rezultatas pasirasomas!!!!!)
    document.getElementById("result").innerHTML = "<h3>" + cityFound + "</h3>";
}



// // //pop
// // //splice()
// // //split()
// // //slice()
// // //indexOf()
// // //toString()



// // let miestai_list = "New york", "Berlin","Oslo","Riga","Moscow","Rome","".split();

// function findDuplicates(miestai_list){
// console.log(miestai);
// if(miestai_list.split("") == -1){
//     console.log("miestas nerastas");
// }
// }

















// NEDUBLIUOTI tokiu paciu funkciju!!!!!

// function check(){
//     alert("Implement here");
// }


// // }else{
// //     //console.log("toks ");
// // }


// function clearDuplicates(list_A){
//     let list_B = [];

//      for(let i = 0; i < list_A.length; i++) {
//         if( list_B.indexOf(list_A[i]) == -1 ){
//             list_B.push(list_A[i]);
//         }
//      }

//     return list_B;
// }

//  function deleteWord(word, list_A){    
//      let x = list_A.indexOf(word);
//      list_A.splice(word, 1); 
//      return list_A;
//  }





// // let colors = ["red","green","blue"];
// // colors.push("red");
// // colors = clearDuplicates(colors);

// // let colors_as_string = colors.toString();
// // // sukuria stringa is masyvo "red,green,blue"

// // document.getElementById("result").innerText = colors_as_string;
// // //console.log(colors);


// // let split_list = "black,blue,yellow";
// // let splitted_colors = split_list.split(',');

// // splitted_colors = splitted_colors.reverse(); // Apvercia masyva, padaro "yellow,blue,black" 

// // // tikrinam ar zodis yra Rastas
// // let wordFound = splitted_colors.indexOf("black") > -1;

// // console.log(splitted_colors);


// // let color_list = "black,blue,yellow".split(',');
// // //console.log(colors2);
// // if(color_list.indexOf("red") == -1){
// //     //console.log("red nerasta");
// // }else{
// //     //console.log("Blue gyvena "+colors2.indexOf("blue")+" vagone");
// // }









// // // FUNKCIJOS


// // function clearDuplicates(list_A){
// //     let list_B = [];

// //      for(let i = 0; i < list_A.length; i++) {
// //         if( list_B.indexOf(list_A[i]) == -1 ){
// //             list_B.push(list_A[i]);
// //         }
// //      }

// //     return list_B;
// // }

// //  function deleteWord(word, list_A){    
// //      let x = list_A.indexOf(word);
// //      list_A.splice(word, 1); 
// //      return list_A;
// //  }



// // //pop
// // //splice()
// // //split()
// // //slice()
// // //indexOf()
// // //toString()

