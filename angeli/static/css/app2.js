// Data Table - taken from class activity 

var path = '../data/data_cleaned.csv'

d3.csv(path).then(function(data) {
    console.log(data)

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.log each Object
data.forEach(function(song) {
  console.log(song);
});

// // Step 2:  Use d3 to append one table row `tr` for each song object.
data.forEach(function(append) {
  console.log(append);
  var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each value
data.forEach(function(value) {
  console.log(value);
  var row = tbody.append("tr");

  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(cell) {
  console.log(cell);
  var row = tbody.append("tr");

  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
  });
})});
