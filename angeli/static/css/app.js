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
  

var data = [
    {
      x: year,
      y: dance,
      type: 'bar'
    }
  ];
  
  var layout = {
    title: {
      text:'Danceability By Year',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'Year',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Daceability Level',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };
  
  Plotly.newPlot('dance', data, layout);
  

});


