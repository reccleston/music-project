var path = 'static/data/data_cleaned.csv'

d3.csv(path).then(function(data) {
    data.forEach(function(datum) {
        console.log(datum.genre);
    })
    
    // var trace1 = {
    //     x: [1, 2, 3, 4],
    //     y: [10, 11, 12, 13],
    //     text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    //     mode: 'markers',
    //     marker: {
    //       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    //       size: [40, 60, 80, 100]
    //     }
    //   };
      
    //   var data = [trace1];
      
    //   var layout = {
    //     title: 'Bubble Chart Hover Text',
    //     showlegend: false,
    //     height: 600,
    //     width: 600
    //   };
      
    //   Plotly.newPlot('myDiv', data, layout);
});