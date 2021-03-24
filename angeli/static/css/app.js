// Graph Ideas
// DB scatter plot or line graph :  
// Genre normalized stacked area chart : https://plotly.com/javascript/filled-area-plots/


// Copy of Sarah's app.js
var path = '../data/dance.csv'

d3.csv(path).then(function(data) {
    console.log(data)

 // changing types
 data.forEach(function(d) {
    d.year = +d.year;
    d.dnce = d.dnce;

});

// Create empty arrays to store the dish and spice values
var year = [];
var dance = [];

// Iterate through each recipe object
data.forEach((x) => {

    // Iterate through each key and value
    Object.entries(x).forEach(([key, value]) => {
  
      // Use the key to determine which array to push the value to
      if (key === "year") {
        year.push(value);
        console.log(value);
      }
      else {
        dance.push(value);
        console.log(value);
      }
     });
  });
  
var Xvalue = year;
var Yvalue = dance;

// var trace1 = {
//   x: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
//   // x: year,
//   y: dance,
//   type: 'bar'
// };

// var data = [trace1];

//   var layout = {
//     title: {
//       text:'Danceability By Year',
//       font: {
//         family: 'Courier New, monospace',
//         size: 24
//       },
//       xref: 'paper',
//       x: 0.02,
//     },
//     xaxis: {
//       title: {
//         text: 'Year',
//         font: {
//           family: 'Courier New, monospace',
//           size: 18
//           ,
//           color: '#7f7f7f'
//         }
//       },
//       tickangle: -45
//     },
//     yaxis: {
//       title: {
//         text: 'Daceability Level',
//         font: {
//           family: 'Courier New, monospace',
//           size: 18,
//           color: '#7f7f7f'
//         }
//       }
//     }
//   };
  
//   Plotly.newPlot('dance', data, layout);


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
    barmode: 'stack'
  };
  
  Plotly.newPlot('dance', data, layout);

});


