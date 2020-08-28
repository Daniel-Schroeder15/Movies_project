// function for calling function when genre is chosen
function genreSelect(NewGenre) {
    Selectmovie(NewGenre);
};

// function for calling function when movie is chosen
function movieSelect(NewMovie) {
    GenerateTables(NewMovie);
};

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

// Call function on loading HTML template
Onload();

// Generating movie list for HTML drop down based on genre selection
function Selectmovie(select) {
    
    // d3.json("/api/movies/<genre>").then(res => {
    //     var genreSelect = d3.select("#selDatasetgenre")
    //     console.log(genreSelect)
    //     res.forEach(genre => {
    //         console.log(genre)
    //         genreSelect.append("option").text(genre).attr("value", genre)
    //     })
    // })
};

// Creating tables for HTML based on movie selection
function GenerateTables(select) {
    
    // d3.json("/api/movies/<genre>").then(res => {
    //     var genreSelect = d3.select("#selDatasetgenre")
    //     console.log(genreSelect)
    //     res.forEach(genre => {
    //         console.log(genre)
    //         genreSelect.append("option").text(genre).attr("value", genre)
    //     })
    // })
};