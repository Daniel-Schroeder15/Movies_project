var genre;
var popularity;

// // function for calling function when genre is chosen (Button)
// function genreSelect(genre) {
//     Selectmovie(genre);
// };

// // function for calling function when movie is chosen (onchange)
// function movieSelect(movie) {
//     GenerateTables(movie);
// };

// Generating genre list for HTML drop down 
function Onload() {
    d3.json("/api/genres").then(res => {
        var genreSelect = d3.select("#selDatasetgenre")
        console.log(genreSelect)
        res.forEach(genre => {
            console.log(genre)
            genreSelect.append("option").text(genre).attr("value", genre)
        })
    })
    d3.json("/api/popularities").then(res => {
        var popSelect = d3.select("#selDatasetpop")
        console.log(popSelect)
        res.forEach(popularity => {
            console.log(popularity)
            pop.append("option").text(popularity).attr("value", popularity)
        })
    })
};

// Call functions on loading HTML template
Onload();

// Add button code for running Selectmovie fuction

// Generating movie list for HTML drop down based on genre selection
function Selectmovie(genre, popularity) {
    d3.json(`/api/${genre}/${popularity}`).then(res => {
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
//     d3.json("/api/recommendation/<movie>").then(res => {
//         var mlMovies = d3.select("")
//         console.log(mlMovies)
//         res.forEach(row => {
//             console.log(row)
//             genreSelect.append("option").text(row).attr("value", row)
//         })
//     })
// };