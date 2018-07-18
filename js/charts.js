/*jshint esversion: 6 */

const margin = {top:0, right:20, bottom:30, left:60};

const color1 = '#4ed4da';
const color2 = '#203657';
const color3 = '#4ed4da';
const color4 = '#203657';

for (var i=0; i<dataAWS.length; i++) {
    dataAWS[i].ts = new Date(dataAWS[i].ts);
}

for (var i=0; i<dataAnomaly.length; i++) {
    dataAnomaly[i].ts = new Date(dataAnomaly[i].ts);
}

function aws(){

    let parentWidth = $('#wrapper-aws').parent().width();
    let parentHeight = $('#wrapper-aws').parent().height();
    let width = parentWidth - margin.left - margin.right;
    let height = parentHeight - margin.top - margin.bottom;

    // Determine labels - e.g. ['s3.amazonaws.com:80', 's3.amazonaws.com:443']
    let labels = [];
    for (var i=0; i<dataAWS.length; i++) {
      Object.keys(dataAWS[i]).forEach((key) => {
        if (key === 'ts') {return;}
        if (labels.indexOf(key) === -1) {
          labels.push(key);
        }
      });
    }
    console.log('labels:', labels);

    let svg = d3.select('#wrapper-aws');
    let g = svg.append('g')
      .attr('transform', 'translate('+margin.left+','+margin.top+')');

    // set ranges
    let x = d3.scaleTime().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);

    const warningThresholdMillis = 11.4;
    const errorThresholdMillis = 1500;

    // scale the range of data
    x.domain(d3.extent(dataAWS, function(d) {
      return d.ts;
    }));
    y.domain([0, d3.max(dataAWS, function(d) {
      return Math.max(d[labels[0]], d[labels[1]]);
    })]);

    // background for green y-range
    g.append('rect')
      .attr('class', 'y-range-background value1')
      .attr('x', 0)
      .attr('y', y(warningThresholdMillis))
      .attr('width', width)
      .attr('height', y(0) - y(warningThresholdMillis))
      .attr('fill', 'white');

    // background for yellow y-range
    g.append('rect')
      .attr('class', 'y-range-background value2')
      .attr('x', 0)
      .attr('y', y(errorThresholdMillis))
      .attr('width', width)
      .attr('height', y(warningThresholdMillis) - y(errorThresholdMillis))
      .attr('fill', 'white');

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
      .data([dataAWS])
      .attr('class', 'line value1')
      .attr('d', valueLine);

    // add the valueLine2 path
    g.append('path')
      .data([dataAWS])
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
}

function anomaly(){

    let parentWidth = $('#wrapper-anomaly').parent().width();
    let parentHeight = $('#wrapper-anomaly').parent().height();
    let width = parentWidth - margin.left - margin.right;
    let height = parentHeight - margin.top - margin.bottom;

    let svg = d3.select('#wrapper-anomaly');
    let g = svg.append('g')
      .attr('transform', 'translate('+margin.left+','+margin.top+')');

    // set ranges
    let x = d3.scaleTime().range([0, width]);
    let y = d3.scaleLinear().range([height, 0]);

    // scale the range of data
    x.domain(d3.extent(dataAnomaly, function(d) {
      return d.ts;
    }));
    y.domain([
      d3.min(dataAnomaly, function(d) {
        return (d.median - 2*d.sigma) / 1000000;
      }),
      d3.max(dataAnomaly, function(d) {
        return (d.median + 2*d.sigma) / 1000000;
      })
    ]);

    // define the 1st line (bottom bank)
    let valueLine = d3.line()
      .x(function(d) {return x(d.ts);})
      .y(function(d) {
        return y((d.median - 2*d.sigma) / 1000000);
      });

    // define the 2nd line (top bank)
    let valueLine2 = d3.line()
      .x(function(d) {return x(d.ts);})
      .y(function(d) {
        return y((d.median + 2*d.sigma) / 1000000);
      });

    // define the 3rd line (actual)
    let valueLine3 = d3.line()
      .x(function(d) {return x(d.ts);})
      .y(function(d) {
        return y((d.median + d.zscore*d.sigma) / 1000000);
      });

    // define a 4th line
    let valueLine4 = d3.line()
      .x(function(d) {return x(d.ts);})
      .y(function(d) {
        return y((d.median) / 1000000);
      });

    // add the valueLine path
    g.append('path')
      .data([dataAnomaly])
      .attr('class', 'line')
      .attr('stroke', color1)
      .attr('d', valueLine);

    // add the valueLine2 path
    g.append('path')
      .data([dataAnomaly])
      .attr('class', 'line')
      .attr('stroke', color2)
      .attr('d', valueLine2);

    // add the valueLine3 path
    g.append('path')
      .data([dataAnomaly])
      .attr('class', 'line')
      .attr('stroke', color3)
      .attr('d', valueLine3);

    // add the valueLine4 path
    g.append('path')
      .data([dataAnomaly])
      .attr('class', 'line')
      .attr('stroke', color4)
      .attr('d', valueLine4);

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
      .attr('y', -60)
      .attr('text-anchor', 'end')
      .attr('dy', '0.71em')
      .attr('fill', 'black')
      .text('ifOutOctetsRate (MiB)');
}

aws();
anomaly();
