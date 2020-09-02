var genre;
var popularity;

// function for calling function when genre is chosen
function genreSelect(genre) {
    Selectmovie(genre);
};

// // function for calling function when movie is chosen
// function movieSelect(movie) {
//     GenerateTables(movie);
// };

// Generating genre list for HTML drop down 
function Onload() {
    d3.json("/genres").then(res => {
        var genreSelect = d3.select("#selDatasetgenre")
        console.log(genreSelect)
        res.forEach(genre => {
            console.log(genre)
            genreSelect.append("option").text(genre).attr("value", genre)
        })
    })
};

// Call functions on loading HTML template
Onload();

// Generating movie list for HTML drop down based on genre selection
function Selectmovie(genre) {
    d3.json(`/api/movies/${genre}`).then(res => {
        var movieSelect = d3.select("#selDatasetmovie")
        console.log(movieSelect)
        res.forEach(movie => {
            console.log(movie)
            movieSelect.append("option").text(movie).attr("value", movie)
        })
    })
};

// // Creating tables for HTML based on movie selection
// function GenerateTables(movie) {  
//     d3.json("/api/ml/recommendation/<movie>").then(res => {
//         var mlMovies = d3.select("")
//         console.log(mlMovies)
//         res.forEach(row => {
//             console.log(row)
//             genreSelect.append("option").text(row).attr("value", row)
//         })
//     })
//     d3.json("/api/nlp/recommendation/<movie>").then(res => {
//         var nlpMovies = d3.select("")
//         console.log(nlpMovies)
//         res.forEach(row => {
//             console.log(row)
//             genreSelect.append("option").text(row).attr("value", row)
//         })
//     })
// };