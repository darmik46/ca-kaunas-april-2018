$("button").click(function () {
    alert("Veikia");
});


$('#rodyti').click(function () {
    showResult();
});


function showResult() {
    let vardas = $('#vardas').val();
    let b_day = $('#gimimas').val();

    let h = "";
    if (vardas && b_day) {
        h = h + "<h2>" + vardas + "</h2><p>Gimimo diena:" + b_day + "</p>";
    } else if (vardas && b_day) {
        h = h + "<p>Neivestas  gimtdienis</p>";
    } else if (vardas && b_day) {
        h = h + "<p>Neivestas vardas</p>";
    } else {
        h = h + "<p>Neivestas vardas ir Gimtadienis</p>";
    }

    if (b_day) {
        let d = new Date(b_day);
        console.log(d);

        let day_number = d.getDate();
        let month_number = d.getMonth();

        console.log(day_number);
        console.log(month_number);

        let zodiac = getZodiacSign(day_number, month_number);

        h = h + "<p>Zodiako zenklas: " + zodiac + "</p>";

        let zodiac = getZodiacSign(day_number, month_number);
        h = h + "<p>Zodiako zenklas: " + zodiac + "</p>";
        let izimybes = getFamousPeople(day_number, month_number);
        if (izimybes.legth > 0) {
            h - h + "<p>Gime ta pacia diena: </p><ul>";
            for (let i = 0; i < izimybes.legth; i++) {
                h = h + "<li>" + izimybes[i].vardas + " " + izimybes[i].pavarde + "</li>";
            }
            h - h + "</ul>";
        } else {
            h = h + "<p>Izimybiu nerasta</p>";
        }
    }

    $("#result").html(h);
}


function printPeopleFromLt() {
    let PeopleFromLt = [];
    PeopleFromLt = PEOPLE.ilter(function (person) {
        return person.salis == "Lithuania";
    });

    let h = "";
    for (let i = 0; i < PeopleFromLt.length; i++);
    h - h + "<p>" + PeopleFromLt[i].vardas + "" + PeopleFromLt[i].pavarde + "</p>";

}

