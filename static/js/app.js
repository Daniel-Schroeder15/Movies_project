var genre;
var popularity;

// functions for assigning variables from selections
function genreSelect(select) {
    genre = select;
};
    
function popSelect(select) {
    popularity = select;
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
            popSelect.append("option").text(popularity).attr("value", popularity)
        })
    })
};

// Call functions on loading HTML template
Onload();

// Add button code for running Selectmovie fuction

// Generating movie list for HTML drop down based on genre selection
function Selectmovie() {
    console.log(genre, popularity);
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

// Creating tables for HTML based on movie selection
function GenerateTables(movie) {  
    d3.json(`/api/recommendation/${movie}`).then(res => {
    buildTable(res);
    })
};

// Function for creating the table in HTML
function buildTable(data) {
    // Reference the HTML table using d3
    var tbody = d3.select("tbody");
    // Clear out any existing data
    tbody.html("");
    // Loop through all objects in the array and adding thme to the table.
    data.forEach((dataRow) => {
        // Append a row to the HTML table
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            // Add each value as a table cell (td)
            let cell = row.append("td");
            // Add each value to a cell
            cell.text(val);
        });
    });
};