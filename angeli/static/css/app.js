

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
var barcolor = ""

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
  var yValue = val;
  
  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    text: yValue.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
      color: barcolor,
      opacity: 0.6,
      line: {
        color: barcolor,
        width: 1.5
      }
    }
  };

  // ????????


  switch(yValue) {
    case "dance":
        barcolor = 'rgb(0, 0, 255)';
      break;
    case "energy":
        barcolor = 'rgb(60, 179, 113)';
      break;
    case "val":
        barcolor = 'rgb(255, 165, 0)';
      break;
    case "pop":
        barcolor = 'rgb(238, 130, 238)';
      break;
    default:
         barcolor = 'rgb(0, 0, 255)';
      break;
  }

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

// // switch

// // Getting a reference to the button on the page with the id property set to `click-me`
// var button = d3.select("button");


//   var CHART = d3.selectAll("bar").node();

//   // Initialize x and y arrays
//   var x = [];
//   var y = [];

//   switch(dataset) {
//     case "dance":
//       x = year;
//       y = dance;
//       break;
//     case "energy":
//       x = year;
//       y = energy;
//       break;
//     case "valence":
//       x = year;
//       y = val;
//       break;
//     case "pop":
//       x = year;
//       y = pop;
//       break;
//     default:
//       x = year;
//       y = dance;
//       break;
//   }


//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle(CHART, "x", [x]);
//   Plotly.restyle(CHART, "y", [y]);
// }

// init();

