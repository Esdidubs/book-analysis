// Prevents random outlier years from messing up years charts
let outlierData = bookData.filter((d) => d.pubDate > 1970);

// Variables and calling of the graphs
let width = 500;
let height = 500;
barGraph(0, 1300, 0, 1300, 13, 'pages', 'pages', '9c27b0', 'Page Count', 'Number of Books');
barGraph(1, 6, 0, 5, 5, 'myRating', 'myRating', 'EE5939', 'My Rating', 'Number of Books');
barGraph(2.0, 5.0, 2.0, 5.0, 15, 'avgRating', 'avgRating', '00A572', 'Average Goodreads Rating', 'Number of Books');
barGraph(1970, 2021, 1970, 2021, 51, 'pubDate', 'myYearRating', '9c27b0', 'Publication Year', 'Number of Books');
scatterplots(bookData, 'pages', 'pageRating', 'Pages');
scatterplots(outlierData, 'pubDate', 'yearRating', 'Years');
averages(outlierData, 'pubDate', 'Average Years', 'avgYear');
averages(bookData, 'avgRating', 'Goodreads Average Rating', 'grAvg');
averages(bookData, 'myRating', 'My Average Rating', 'avgMyRating');
averages(bookData, 'pages', 'Average Pages', 'avgPages');

// The bar graphs
function barGraph(d1, d2, a1, a2, ticks, data, id, color, text1, text2){
	
	let barPadding = 1; // padding in between bars on graph
	let padding = 30; // padding of the full graph

	// creates a linear scale of the x-axis starts at the first number of the domain and ends at the second number
	// the domain is mapped from the start of the range to the end of the range
	let xScale = d3.scaleLinear().domain([ d1, d2 ]).rangeRound([ padding, width - padding ]);
	let xScale2 = d3.scaleLinear().domain([ a1, a2 ]).rangeRound([ padding, width - padding ]);

	// the histogram plots the values of the requested data internally (still needs to be drawn)
	let histogram = d3.histogram().domain(xScale.domain()).thresholds(ticks).value((d) => d[data]);

	// creates a linear scale for the y-axis
	let bins = histogram(bookData);
	let yScale = d3.scaleLinear().domain([ 0, d3.max(bins, (d) => d.length) ]).range([ height - padding, padding ]);
	
	// creates the actual axis with the ticks
	let xAxis = d3.axisBottom(xScale2).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis = d3.axisLeft(yScale).tickSize(-height + 2 * padding).tickSizeOuter(0);

	// draws the axis in the element of a specific id
	d3.select(`#${id}`).append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis);
	d3.select(`#${id}`).append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis);

	// sets up the bars before actually drawing them
	let bars = d3.select(`#${id}`).attr('width', width).attr('height', height).selectAll('.bar').data(bins).enter().append('g').classed('bar', true);

	// draws the bars
	bars
		.append('rect')
		.attr('x', (d, i) => xScale(d.x0))
		.attr('y', (d) => yScale(d.length))
		.attr('height', (d) => height - yScale(d.length) - padding)
		.attr('width', (d) => xScale(d.x1) - xScale(d.x0) - barPadding)
		.attr('fill', `#${color}`); 

	// sets the axis titles
	bars.append('text').attr('x', width / 2).attr('y', height - padding).attr('dy', '1.5em').style('text-anchor', 'middle').text(text1);
	bars.append('text').attr('transform', 'rotate(-90)').attr('x', -height / 2).attr('y', padding).attr('dy', '-1.1em').style('text-anchor', 'middle').text(text2);
}

// The scatterplot graphs
function scatterplots(source, data, id, xLegend){

	let padding = 30; // padding of the full graph

	// creates linear scales for the 2 axes
	let xScale = d3.scaleLinear().domain(d3.extent(source, (d) => d[data])).range([ padding, width - padding ]);
	let yScale = d3.scaleLinear().domain(d3.extent(source, (d) => d.avgRating)).range([ height - padding, padding ]);

	// establishes the linear color scale for the circles
	let colorScale = d3.scaleLinear().domain(d3.extent(source, (d) => d.myRating)).range([ 'pink', 'maroon' ]);

	// sets up the axes and ticks
	let xAxis = d3.axisBottom(xScale).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis = d3.axisLeft(yScale).tickSize(-height + 2 * padding).tickSizeOuter(0);

	// draws both of the axes
	d3.select(`#${id}`).append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis);
	d3.select(`#${id}`).append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis);

	// plots the circles on the graph and sets their colors
	d3
		.select(`#${id}`)
		.attr('width', width)
		.attr('height', height)
		.selectAll('circle')
		.data(source)
		.enter()
		.append('circle')
		.attr('cx', (d) => xScale(d[data]))
		.attr('cy', (d) => yScale(d.avgRating))
		.attr('fill', (d) => colorScale(d.myRating))
		.attr('r', (d) => 5);

	// Sets the text for the x axis
	d3.select(`#${id}`).append('text').attr('x', width / 2).attr('y', height - padding).attr('dy', '1.5em').style('text-anchor', 'middle').text(xLegend);

	// sets the text for the y axis
	d3
		.select(`#${id}`)
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Goodreads Rating');

}

// Calculates the average year of book read
function averages(arr, thingToAvg, msg, id) {
	let sum = 0;
	let avg;	

	for (let book in arr){
		sum += arr[book][thingToAvg];
	}

	if(thingToAvg === 'pubDate'){
		avg = (sum / arr.length).toFixed(0);
	} else {
		avg = (sum / arr.length).toFixed(2);
	}
	

	$(`#${id}`).html(`${msg}: ${avg}`)
}

