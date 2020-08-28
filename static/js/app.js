// Navigate to localhost:8000 once running python -m http.server in the terminal

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

Onload()

// // import the data from HTML
// function myData(data) {
//     return data
// }

// myData(movies);

// // Assign tableData variable
// const tableData = data;

// // Reference the HTML table using d3
// var tbody = d3.select("tbody");

// // Function for creating the table in HTML
// function buildTable(data) {
//     // Clear out any existing data
//     tbody.html("");
//     // Loop through all objects in the array and adding thme to the table.
//     data.forEach((dataRow) => {
//         // Append a row to the HTML table
//         let row = tbody.append("tr");
//         // Loop through each field in the dataRow
//         Object.values(dataRow).forEach((val) => {
//             // Add each value as a table cell (td)
//             let cell = row.append("td");
//             // Add each value to a cell
//             cell.text(val);
//         });
//     });
// };

// // Keep track of all filters
// let filters = {};

// // Function for pulling key and values for filters 
// function handleChange() {
//     // Select the input bars that contain a filter input
//     let inputedElement = d3.select(this);
//     // Grab the value of the input and trim it so spaces don't affect the function
//     let filterValue = inputedElement.property("value").trim();
//     // Grab the id key of the input
//     let filterId = inputedElement.attr("id");
//     // Print in console to confirm if the correct values and keys are being pulled
//     console.log(filterValue, filterId);
//     // Add input values to filters or delete old values if no new inputs are avaliable
//     if (filterValue) {
//         filters[filterId] = filterValue
//     }
//     else {
//         delete filters[filterId]
//     };
//     // Print filters to confirm if/else statment functioned correctly
//     console.log(filters);
//     // Run filterTable function
//     filterTable();
// };

// // Function for applying filters 
// function filterTable() {
//     // Set the filteredData to the tableData
//     let filteredData = tableData;
//     // Loop through all of the filters and keep any data that matches the filter values
//     // print values to ensure they were assigned from the filter variable correctly
//     Object.entries(filters).forEach(([key, value]) => {
//         console.log(value);
//         filteredData = filteredData.filter(row => row[key] === value);
//     });
//     // Rebuild the table using the filtered Data
//     buildTable(filteredData);
// };

// // Fuction for clearing the filters
// function clearFilters() {
//     // Select all input bars and set them to an empty string
//     d3.selectAll("input").property("value", "");
//     // Set filters variable to an empty object
//     filters = {};
//     // Build original table
//     buildTable(tableData);
// };

// // Event listening for changes to each filter's input bar
// d3.selectAll("input").on("change", handleChange);

// // Event tied to clear filters button in HTML
// d3.selectAll("#filter-btn").on("click", clearFilters);

// // Build the table when the page loads
// buildTable(tableData);

// // function for placing patient ids into dropdown menu and generating inital stating data
// function init() {
//     var selector = d3.select("#selDataset");

//     // Assigning patient ids from samples.json to sampleNames
//     d3.json("samples.json").then((data) => {
//         console.log(data);
//         var sampleNames = data.names;

//         // Append patiend ids to dropdown menu
//         sampleNames.forEach((sample) => {
//             selector
//             .append("option")
//             .text(sample)
//             .property("value", sample);
//         });
//     });

//     // //Call optionChanged funtion for patient id 940
//     // optionChanged("940")
// };

// // function for calling functions when patient's id is chosen
// function optionChanged(newSample) {
//     buildMetadata(newSample);
//     buildCharts(newSample);
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

//         console.log(result[6][1]);
//         var traceG = {
//             domain: { x: [0, 1], y: [0, 1] },
//             value: result[6][1],
//             title: "Belly Button Washing Frequency per Week",
//             type: "indicator",
//             mode: "gauge+number",
//             gauge: {
//                 axis: { range: [null, 9] },
//                 // steps: [
//                 //   { range: [0, 250], color: "lightgray" },
//                 //   { range: [250, 400], color: "gray" }
//                 // ],
//                 threshold: {
//                   line: { color: "red", width: 4 },
//                   thickness: 0.75,
//                   value: result[6][1]
//                 }
//             }
//         };

//         var layoutG = { width: 600, height: 450, margin: { t: 0, b: 0 } };

//         Plotly.newPlot('gauge', [traceG], layoutG);
//     });
// };

// // function for building charts based on chosen sample
// function buildCharts(sample) {
//     d3.json("samples.json").then((data) => {
//         // Identify the sample data for the chosen id
//         var samples = data.samples;
//         var resultArrays = samples.filter(sampleObj => sampleObj.id == sample);
//         var results = Object.entries(resultArrays[0]);
//         console.log(results);

//         // Identify unique otu labels
//         const distinct = (value, index, self) => {
//             return self.indexOf(value) === index;
//         };
//         var allOtuLabels = Object.entries(samples[0])[3][1];
//         console.log(allOtuLabels);
//         const otuLabelsUnique = allOtuLabels.filter(distinct);
//         console.log(otuLabelsUnique);

//         // Create color array to correspond with unique labels
//         const correspondingColor = ["#F08080", "#B0E0E6", "#BA55D3", "#87CEFA", "#ADD8E6", "#4169E1","#DB7093", 
//         "#8FBC8F", "#000080", "#90EE90", "#006400", "#00BFFF", "#800080", "#87CEEB", "#DDA0DD", "#FF4500", 
//         "#AFEEEE", "#FF6347", "#4682B4", "#40E0D0", "#98FB98", "#228B22", "#4B0082"];

//         // Assign arrays to variables
//         var otuIdsArr = results[1][1];
//         var sampleValuesArr = results[2][1];
//         var otuLabelsArr = results[3][1];

//         // Loop through arrays and assign them to an object group 
//         // Push them to sampleData array
//         var sampleData = [];
//         for (var i = 0; i < otuIdsArr.length; i++) {
//             // Loop through unique otu labels and corresponding color array to assign otu_label_color
//             for (var j = 0; j < otuLabelsUnique.length; j++) {
//                 if (otuLabelsArr[i] === otuLabelsUnique[j]) {
//                     var otuLabelColor = correspondingColor[j];
//                 };
//             };
//             sampleData.push({
//                 "otu_ids" : otuIdsArr[i],
//                 "otu_id" : `OTU ${otuIdsArr[i]}`,
//                 "sample_value" : sampleValuesArr[i],
//                 "otu_label" : otuLabelsArr[i],
//                 "otu_label_color" : otuLabelColor
//             });
//         };
//         console.log(sampleData);

//         // Sort the data by decending sample values
//         var sortedBacteria = sampleData.sort((a,b) => 
//             a.sample_value - b.sample_value).reverse();
//         // Slice the top 10 bacteria for plotting
//         var top10Bacteria = sortedBacteria.slice(0,10);
//         console.log(top10Bacteria);

//         // Reverse the array for correct plot orientation
//         reversedData = top10Bacteria.reverse();

//         // Trace for the bacteria data
//         var traceB = {
//             x: reversedData.map(object => object.sample_value),
//             y: reversedData.map(object => object.otu_id),
//             text: reversedData.map(object => object.otu_label),
//             type: "bar",
//             orientation: "h"
//         };
        
//         // Chart layout for titles
//         var layoutB = {
//             title: {
//                 text: 'Top 10 Bacteria Present',
//                 font: {
//                     size: 20
//                 }
//             },
//             xaxis: {
//                 title: {
//                     text: 'Bacteria Concentration',
//                     font: {
//                         size: 16
//                     }
//                 }
//             },
//             margin: {
//             l: 100,
//             r: 100,
//             t: 100,
//             b: 100
//             }
//         };
        
//         // Rendering the plot to the div tag with id "bar"
//         Plotly.newPlot("bar", [traceB], layoutB);

//         // Use sampleData to create bubble plot
//         var desired_maximum_marker_size = 80;
//         var size = sampleData.map(object => object.sample_value);
//         var traceS = {
//             x: sampleData.map(object => object.otu_ids),
//             y: sampleData.map(object => object.sample_value),
//             text: sampleData.map(object => object.otu_label),
//             mode: 'markers',
//             marker: {
//                 color: sampleData.map(object => object.otu_label_color),
//                 size: size,
//                 // Set 'sizeref' to an ideal size distribution
//                 sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
//                 sizemode: 'area'
//             }
//         };
        
//         // Chart layout for titles
//         var layoutS = {
//             title: {
//                 text: 'Bacteria Biodiversity Overview',
//                 font: {
//                     size: 24
//                 }
//             },
//             xaxis: {
//                 title: {
//                     text: 'OTU ID',
//                     font: {
//                         size: 18
//                     }
//                 },
//             },
//             yaxis: {
//                 title: {
//                     text: 'Bacteria Concentration',
//                     font: {
//                         size: 18
//                     }
//                 }
//             }
//         };
        
//         // Rendering the plot to the div tag with id "bubble"
//         Plotly.newPlot('bubble', [traceS], layoutS);
//     });
// };

// // Call patient id dropdown and inital stating data function
// init();