function makeResponsive() {
    // making chart width and height dependant on page width/height
    var chartWidth = window.innerWidth * 5/6;
    var chartHeight = 800;

    // funct to fill dropdowns
    function dropdownFill(year_data, columns) {
        // subsetting the col names
        var cols_for_dd = columns.slice(6, columns.length+1);

        // appending to dropdowns
        // defining dropdown variables
        var year_dropdown = d3.select('#year-dropdown').select('.dropdown-menu');
        var x_dropdown = d3.select('#x-axis-dropdown').select('.dropdown-menu');
        var y_dropdown = d3.select('#y-axis-dropdown').select('.dropdown-menu');
        // appending years
        year_data.forEach(year => {
            year_dropdown.append('a').attr('class', 'dropdown-item')
                .attr('href', '#').text(year);
        });
        // appending same data to both x and y dropdowns
        cols_for_dd.forEach(col => {
            x_dropdown.append('a').attr('class', 'dropdown-item')
                .attr('href', '#').text(col);
            y_dropdown.append('a').attr('class', 'dropdown-item')
                .attr('href', '#').text(col);
        });

    };
    function buildChart(year, x_choice, y_choice, data) {
        // clearing any previous charts
        d3.select('#bubble').empty()
        // filtering data based on year choice
        var data_year_filter = data.filter(function(d) {
            return d.year == year;
        });  
        // other graph factors
        var genre_nums = data_year_filter.map(d => d.genre_num);
        var genre = data_year_filter.map(d => d.genre);
        var pop = data_year_filter.map(d => d.pop);
        
        // deriving x_axis and y_axis
        var x_axis = data_year_filter.map(d => d[x_choice]);
        var y_axis = data_year_filter.map(d => d[y_choice]);

        // creating the plot: colour is determined by genre, size is determined by popularity
        var traceA = {
            type: 'scatter',
            mode: 'markers',
            showlegend: true,
            x: x_axis,
            y: y_axis,
            text: data_year_filter.map(function(d) {
                return `Track Name: ${d.title}<br>Track Genre: ${d.genre}<br>Track Subgenre: ${d.subgenre}`
            }),
            marker: {
                color: genre_nums,
                colorscale: 'Rainbow',
                cmin: d3.min(genre_nums),
                cmax: d3.max(genre_nums),
                size: pop,
                sizeref: 2,
                sizemode: 'radius'
            },
            transforms: [{ type: "groupby", groups: genre }],
            hovertemplate:
                `<b>%{text}</b><br>%{yaxis.title.text}: %{y}<br>%{xaxis.title.text}: %{x}<br><extra></extra>`
        };
        
        var data = [traceA];
        
        var layout = {
            autosize: false,
            width: chartWidth,
            height: chartHeight,
            title: `${x_choice} vs. ${y_choice} in ${year}`,
            hovermode: 'closest',
            legend: {orientation: 'v', x: 0.87, y: 0.05},
            xaxis: {
                title: `${x_choice}`,
                autotick: false,
                ticks: 'outside',
                tick0: 0,
                dtick: 4,
                ticklen: 8,
                tickwidth: 2,
                tickcolor: '#000',
                zeroline: false
            },
            yaxis: {
                title: `${y_choice}`,
                autotick: false,
                ticks: 'outside',
                tick0: 0,
                dtick: 2,
                ticklen: 8,
                tickwidth: 2,
                tickcolor: '#000',
                zeroline: false
            }
        };
        // make responsive to page size
        var config = {responsive: true}
        // appending to html page
        Plotly.newPlot('bubble', data, layout, config);
    };

    var path = 'static/data/data_cleaned.csv'

    d3.csv(path).then(function(data) {
        // console.log(data.columns);
        // changing types
        data.forEach(function(d) {
            d.genre_num = +d.genre_num;
            d.bpm = d.bpm;
            d.nrgy = +d.nrgy;
            d.dnce = +d.dnce;
            d.dB = +d.dB;
            d.live = +d.live;
            d.val = +d.val;
            d.dur = +d.dur;
            d.acous = +d.acous;
            d.spch = +d.spch;
            d.pop = +d.pop;
        });
        // sending to dropdown fill funct
        var columns = data.columns;
        var year_data = [...new Set(data.map(d => d.year))];
        dropdownFill(year_data, columns);

        var year = 2011;
        var x_choice = 'bpm';
        var y_choice = 'nrgy';
        buildChart(year, x_choice, y_choice, data);
    })
};
makeResponsive();
// event listener for resizing graphs
d3.select(window).on('resize', makeResponsive);