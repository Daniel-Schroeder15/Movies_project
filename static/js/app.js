var genre;
var popularity;

// functions for assigning variables from selections
function genreSelect(select) {
    var genre = select;
};
    
function popSelect(select) {
    var popularity = select;
};

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

// Add button code for running Selectmovie fuction
d3.selectAll("#select-btn").on("click", Selectmovie);

// // Creating tables for HTML based on movie selection
// function GenerateTables(movie) {  
//     d3.json("/api/recommendation/<movie>").then(res => {
//         var recomendations = res
//         console.log(recomendations)
//         res.forEach(row => {
//             console.log(row)
//             genreSelect.append("option").text(row).attr("value", row)
//         })
//         // assign data to sample-metadata id in HTML
//         var PANEL = d3.select("#sample-metadata");
//         PANEL.html("");
//         result.forEach(([key, value]) => {
//             PANEL.append("h6").text(key + ': ' + value);
//         });
//     })
// };

// // function for building demographic info based on chosen sample
// function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//         // Identify the sample data for the chosen id
//         var metadata = data.metadata;
//         var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//         var result = Object.entries(resultArray[0]);
//         console.log(result);

//         // assign data to sample-metadata id in HTML
//         var PANEL = d3.select("#sample-metadata");
//         PANEL.html("");
//         result.forEach(([key, value]) => {
//             PANEL.append("h6").text(key + ': ' + value);
//         });