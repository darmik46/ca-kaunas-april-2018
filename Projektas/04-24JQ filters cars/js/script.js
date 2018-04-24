$("#btn_filter").click(function () {
    alert("viskas gerai");
    let brand_text = $("#brandSelect").val()
    let filteredCars = CARS;
    // alert(brand_txt);
    printCars(filteredCars);
    printTopCars=topCars;
});


function printCars(array) {
    let h = "";
    for (let i = 0; i < array.lenght; i++) {
        h = h + "<p>" + array[i] + "</p>";
    }
    $("#result").html(h);
}

