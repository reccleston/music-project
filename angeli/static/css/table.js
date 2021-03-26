

// Copy of Sarah's app.js
var path = '../data/year.csv'

d3.csv(path).then(function(data) {
    console.log(data)

 // changing types
 data.forEach(function(d) {
    d.year = +d.year;
    d.dnce = d.dnce;
    d.nrgy = d.nrgy;
    d.val = d.val;
    d.pop = d.pop;
});

// Create empty arrays to store the dish and spice values
var year = [];
var dance = [];
var energy = [];
var val = [];
var pop = [];

// Iterate through each recipe object
data.forEach((x) => {

    // Iterate through each key and value
    Object.entries(x).forEach(([key, value]) => {
  
      // Use the key to determine which array to push the value to
      if (key === "year") {
        year.push(value);
        console.log('year');
        console.log(value);
      }
      else if (key === "dnce") {
        dance.push(value);
        console.log('dance');
        console.log(value);
      }
      else if (key === "nrgy") {
        energy.push(value);
        console.log('energy');
        console.log(value);
      }
      else if (key === "val") {
        val.push(value);
        console.log('val');
        console.log(value);
      }
      else {
        pop.push(value);
        console.log('pop');
        console.log(value);
      }
     });
  });
  
  var xValue = year;
  var yValue = dance;
  
  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    text: yValue.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
      color: 'rgb(158,202,225)',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5
      }
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Danceability by Year',
    barmode: 'stack',
    xaxis: {
      tickangle: 0,
      showticklabels: true,
      type: 'category',
  }
  };
  
  Plotly.newPlot('bar', data, layout);

});

// 
// Need to make this work 
// 

// Initializes the page with a default plot
function init() {
  data = [{
    x: year,
    y: dance
   }];

  Plotly.newPlot("bar", data);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  var x = [];
  var y = [];

  if (dataset === 'dataset1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  else if (dataset === 'dataset2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
