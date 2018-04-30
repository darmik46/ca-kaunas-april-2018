$("#btn_filter").click(function () {
    alert("Veikia");
});

document.getElementById("result").innerHTML = "<h3>" + Filmas + "</h3>";

$("#btn_filter").click(function () {
    let release_date = $("#yearSelect").val();
    let filteredMovies = Movies.filter(function (mov) {
        return mov.release_date.toLowerCase() == release_date.toLowerCase();
    });
    let topMovies = getTopMovie(filteredMovie);
    printMovie(filteredMovies);
    printTopMovie(topMovies);
});
