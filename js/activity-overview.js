 /*jshint esversion: 6 */
const margin = {top:0, right:20, bottom:20, left:30};

let data = [
  {"ts":"2018-06-27T01:15:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T01:20:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T01:25:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T01:30:00.000Z","s3.amazonaws.com:80":39,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T01:35:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T01:40:00.000Z","s3.amazonaws.com:80":19,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T01:45:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T01:50:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T01:55:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T02:00:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:05:00.000Z","s3.amazonaws.com:80":17,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:10:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T02:15:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:20:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:25:00.000Z","s3.amazonaws.com:80":17,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:30:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T02:35:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:40:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T02:45:00.000Z","s3.amazonaws.com:80":17,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T02:50:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T02:55:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T03:00:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T03:05:00.000Z","s3.amazonaws.com:80":17,"s3.amazonaws.com:443":11},
  {"ts":"2018-06-27T03:10:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":9},
  {"ts":"2018-06-27T03:15:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T03:20:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T03:25:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T03:30:00.000Z","s3.amazonaws.com:80":30,"s3.amazonaws.com:443":20},
  {"ts":"2018-06-27T03:35:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T03:40:00.000Z","s3.amazonaws.com:80":16,"s3.amazonaws.com:443":5},
  {"ts":"2018-06-27T03:45:00.000Z","s3.amazonaws.com:80":12,"s3.amazonaws.com:443":6},
  {"ts":"2018-06-27T03:50:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T03:55:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T04:00:00.000Z","s3.amazonaws.com:80":11,"s3.amazonaws.com:443":6},
  {"ts":"2018-06-27T04:05:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T04:10:00.000Z","s3.amazonaws.com:80":14,"s3.amazonaws.com:443":4},
  {"ts":"2018-06-27T04:15:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T04:20:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T04:25:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T04:30:00.000Z","s3.amazonaws.com:80":11,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T04:35:00.000Z","s3.amazonaws.com:80":24,"s3.amazonaws.com:443":8},
  {"ts":"2018-06-27T04:40:00.000Z","s3.amazonaws.com:80":11,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T04:45:00.000Z","s3.amazonaws.com:80":20,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T04:50:00.000Z","s3.amazonaws.com:80":22,"s3.amazonaws.com:443":7},
  {"ts":"2018-06-27T04:55:00.000Z","s3.amazonaws.com:80":11,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T05:00:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T05:05:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":12},
  {"ts":"2018-06-27T05:10:00.000Z","s3.amazonaws.com:80":11,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T05:15:00.000Z","s3.amazonaws.com:80":13,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T05:20:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":5},
  {"ts":"2018-06-27T05:25:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T05:30:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T05:35:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T05:40:00.000Z","s3.amazonaws.com:80":11,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T05:45:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T05:50:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":3},
  {"ts":"2018-06-27T05:55:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":12},
  {"ts":"2018-06-27T06:00:00.000Z","s3.amazonaws.com:80":17,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:05:00.000Z","s3.amazonaws.com:80":16,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T06:10:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T06:15:00.000Z","s3.amazonaws.com:80":16,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:20:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T06:25:00.000Z","s3.amazonaws.com:80":10,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:30:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:35:00.000Z","s3.amazonaws.com:80":16,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:40:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:45:00.000Z","s3.amazonaws.com:80":16,"s3.amazonaws.com:443":1},
  {"ts":"2018-06-27T06:50:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T06:55:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T07:00:00.000Z","s3.amazonaws.com:80":8,"s3.amazonaws.com:443":2},
  {"ts":"2018-06-27T07:05:00.000Z","s3.amazonaws.com:80":9,"s3.amazonaws.com:443":10},
  {"ts":"2018-06-27T07:10:00.000Z","s3.amazonaws.com:80":16,"s3.amazonaws.com:443":2}
];
for (var i=0; i<data.length; i++) {
  data[i].ts = new Date(data[i].ts);
}

let parentWidth = $('#wrapper').parent().width();
let parentHeight = $('#wrapper').parent().height();
let width = parentWidth - margin.left - margin.right;
let height = parentHeight - margin.top - margin.bottom;

// Determine labels - e.g. ['s3.amazonaws.com:80', 's3.amazonaws.com:443']
let labels = [];
for (var i=0; i<data.length; i++) {
  Object.keys(data[i]).forEach((key) => {
    if (key === 'ts') {return;}
    if (labels.indexOf(key) === -1) {
      labels.push(key);
    }
  });
}
console.log('labels:', labels);

let svg = d3.select('#wrapper');
let g = svg.append('g')
  .attr('transform', 'translate('+margin.left+','+margin.top+')');

// set ranges
let x = d3.scaleTime().range([0, width]);
let y = d3.scaleLinear().range([height, 0]);

const warningThresholdMillis = 11.4;
const errorThresholdMillis = 1500;

// scale the range of data
x.domain(d3.extent(data, function(d) {
  return d.ts;
}));
y.domain([0, d3.max(data, function(d) {
  return Math.max(d[labels[0]], d[labels[1]]);
})]);

// background for green y-range
g.append('rect')
  .attr('class', 'y-range-background value1')
  .attr('x', 0)
  .attr('y', y(warningThresholdMillis))
  .attr('width', width)
  .attr('height', y(0) - y(warningThresholdMillis))
  .attr('fill', 'green');

// background for yellow y-range
g.append('rect')
  .attr('class', 'y-range-background value2')
  .attr('x', 0)
  .attr('y', y(errorThresholdMillis))
  .attr('width', width)
  .attr('height', y(warningThresholdMillis) - y(errorThresholdMillis))
  .attr('fill', 'yellow');

// define the 1st line
let valueLine = d3.line()
  .x(function(d) {return x(d.ts);})
  .y(function(d) {
    console.log('  * .y1 d=', d);
    return y(d[labels[0]]);});

// define the 2nd line
let valueLine2 = d3.line()
  .x(function(d) {return x(d.ts);})
  .y(function(d) {
    console.log('  * .y2 d=', d);
    return y(d[labels[1]]);});

// add the valueLine path
g.append('path')
  .data([data])
  .attr('class', 'line value1')
  .attr('d', valueLine);

// add the valueLine2 path
g.append('path')
  .data([data])
  .attr('class', 'line value2')
  .attr('d', valueLine2);

// draw x-axis
g.append('g')
  .attr('class', 'axis axis-x')
  .attr('transform', 'translate(0,' + height + ')')
  .call(d3.axisBottom(x));

// draw y-axis
g.append('g')
  .attr('class', 'axis axis-y')
  .call(d3.axisLeft(y))
  .append('text')
  .attr('transform', 'rotate(-90)')
  .attr('y', -32)
  .attr('text-anchor', 'end')
  .attr('dy', '0.71em')
  .attr('fill', 'black')
  .text('Latency (ms)');

// draw legend
let legend = svg.append('g')
  .attr('class', 'legend')
  .attr('transform', 'translate(50,0)')
  .style('font-size', '12px');
const legendWidth = 170, legendHeight = 35;
legend.append('rect')
  .attr('width', legendWidth)
  .attr('height', legendHeight)
  .style('fill', 'white')
  .style('fill-opacity', '0.7')
  .style('stroke', 'gray');
legend.append('line')
  .attr('class', 'value1')
  .attr('x1', '4')
  .attr('y1', '10')
  .attr('x2', '15')
  .attr('y2', '10');
legend.append('line')
  .attr('class', 'value2')
  .attr('x1', '4')
  .attr('y1', '25')
  .attr('x2', '15')
  .attr('y2', '25');
legend.append('text')
  .attr('x', '20')
  .attr('y', '12')
  .text(labels[0]);
legend.append('text')
  .attr('x', '20')
  .attr('y', '30')
  .text(labels[1]);
