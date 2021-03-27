$("#box-proj-info").flip({
    axis: 'y',
    trigger: 'click'
  });

$("#box-terms").flip({
    axis: 'y',
    trigger: 'hover'
  });

d3.select('#box-proj-info').on('mouseover', function() {
  d3.select('#hidden-text').style('display', 'inline-block');
}).on('mouseout', function() {
  d3.select('#hidden-text').style('display', 'none');
});