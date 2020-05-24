let fiveStar = d3.max(bookData, (d) => d.myRating);
let fiveStarData = bookData.filter((d) => d.myRating === fiveStar);

let outlierData = bookData.filter((d) => d.pubDate > 1970);

// Items to run in the beginning of the page load
$(function() {
	histograms();
	pageAverage(bookData);
	myRatingAverage(bookData);
	totalRatingAverage(bookData);
	yearAverage(outlierData);
});

function histograms() {
	let width = 500;
	let height = 500;
	let barPadding = 1;
	let padding = 30;

	let xScale = d3
		.scaleLinear()
		.domain([ 0, d3.max(bookData, (d) => Math.ceil(d.pages / 100) * 100 - 1) ])
		.rangeRound([ padding, width - padding ]);
	let histogram = d3.histogram().domain(xScale.domain()).thresholds(xScale.ticks()).value((d) => d.pages);
	let bins = histogram(bookData);
	let barWidth = width / bins.length - barPadding;
	let yScale = d3.scaleLinear().domain([ 0, d3.max(bins, (d) => d.length) ]).range([ height - padding, padding ]);
	let xAxis = d3.axisBottom(xScale).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis = d3.axisLeft(yScale).tickSize(-height + 2 * padding).tickSizeOuter(0);
	d3.select('#pages').append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis);
	d3.select('#pages').append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis);

	let xScale2 = d3.scaleLinear().domain([ 1, 6 ]).rangeRound([ padding, width - padding ]);
	let alteredXScale2 = d3.scaleLinear().domain([ 0, 5 ]).rangeRound([ padding, width - padding ]);
	let histogram2 = d3.histogram().domain(xScale2.domain()).thresholds(5).value((d) => d.myRating);
	let bins2 = histogram2(bookData);
	let barWidth2 = width / bins2.length - barPadding;
	let yScale2 = d3.scaleLinear().domain([ 0, d3.max(bins2, (d) => d.length) ]).range([ height - padding, padding ]);
	let xAxis2 = d3.axisBottom(alteredXScale2).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis2 = d3.axisLeft(yScale2).tickSize(-height + 2 * padding).tickSizeOuter(0);
	d3.select('#myRating').append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis2);
	d3.select('#myRating').append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis2);

	let xScale3 = d3.scaleLinear().domain([ 2.0, 5.0 ]).range([ padding, width - padding ]);
	let histogram3 = d3.histogram().domain(xScale3.domain()).thresholds(15).value((d) => d.avgRating);
	let bins3 = histogram3(bookData);
	let barWidth3 = width / bins3.length - barPadding;
	let yScale3 = d3.scaleLinear().domain([ 0, d3.max(bins3, (d) => d.length) ]).range([ height - padding, padding ]);
	let xAxis3 = d3.axisBottom(xScale3).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis3 = d3.axisLeft(yScale3).tickSize(-height + 2 * padding).tickSizeOuter(0);
	d3.select('#avgRating').append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis3);
	d3.select('#avgRating').append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis3);

	let bars = d3
		.select('#pages')
		.attr('width', width)
		.attr('height', height)
		.selectAll('.bar')
		.data(bins)
		.enter()
		.append('g')
		.classed('bar', true);

	bars
		.append('rect')
		.attr('x', (d, i) => xScale(d.x0))
		.attr('y', (d) => yScale(d.length))
		.attr('height', (d) => height - yScale(d.length) - padding)
		.attr('width', (d) => xScale(d.x1) - xScale(d.x0) - barPadding)
		.attr('fill', '#9c27b0');

	bars
		.append('text')
		.attr('x', width / 2)
		.attr('y', height - padding)
		.attr('dy', '1.5em')
		.style('text-anchor', 'middle')
		.text('Page Count');

	bars
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Number of Books');

	let bars2 = d3
		.select('#myRating')
		.attr('width', width)
		.attr('height', height)
		.selectAll('.bar')
		.data(bins2)
		.enter()
		.append('g')
		.classed('bar', true);

	bars2
		.append('rect')
		.attr('x', (d, i) => xScale2(d.x0))
		.attr('y', (d) => yScale2(d.length))
		.attr('height', (d) => height - yScale2(d.length) - padding)
		.attr('width', (d) => xScale2(d.x1) - xScale2(d.x0) - barPadding)
		.attr('fill', '#EE5939');

	bars2
		.append('text')
		.attr('x', width / 2)
		.attr('y', height - padding)
		.attr('dy', '1.5em')
		.style('text-anchor', 'middle')
		.text('My Rating');

	bars2
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding - 2)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Number of Books');

	let bars3 = d3
		.select('#avgRating')
		.attr('width', width)
		.attr('height', height)
		.selectAll('.bar')
		.data(bins3)
		.enter()
		.append('g')
		.classed('bar', true);

	bars3
		.append('rect')
		.attr('x', (d, i) => xScale3(d.x0))
		.attr('y', (d) => yScale3(d.length))
		.attr('height', (d) => height - yScale3(d.length) - padding)
		.attr('width', (d) => xScale3(d.x1) - xScale3(d.x0) - barPadding)
		.attr('fill', '#00A572');

	bars3
		.append('text')
		.attr('x', width / 2)
		.attr('y', height - padding)
		.attr('dy', '1.5em')
		.style('text-anchor', 'middle')
		.text('Average Goodreads Rating');

	bars3
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Number of Books');

	let xScale4 = d3.scaleLinear().domain(d3.extent(bookData, (d) => d.pages)).range([ padding, width - padding ]);
	let yScale4 = d3.scaleLinear().domain(d3.extent(bookData, (d) => d.avgRating)).range([ height - padding, padding ]);
	let colorScale = d3.scaleLinear().domain(d3.extent(bookData, (d) => d.myRating)).range([ 'pink', 'maroon' ]);
	let xAxis4 = d3.axisBottom(xScale4).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis4 = d3.axisLeft(yScale4).tickSize(-height + 2 * padding).tickSizeOuter(0);
	// let tooltip = d3.select('body').append('div').classed('tooltip', true);

	d3.select('#pageRating').append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis4);
	d3.select('#pageRating').append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis4);

	d3
		.select('#pageRating')
		.attr('width', width)
		.attr('height', height)
		.selectAll('circle')
		.data(bookData)
		.enter()
		.append('circle')
		.attr('cx', (d) => xScale4(d.pages))
		.attr('cy', (d) => yScale4(d.avgRating))
		.attr('fill', (d) => colorScale(d.myRating))
		.attr('r', (d) => 5);
	/*
			.attr('r', (d) => radiusScale(d.births))
			
		
		.on('mousemove', function(d) {
			tooltip.style('opacity', 1).style('left', d3.event.x - 85 + 'px').style('top', d3.event.x + 'px').html(`
			  <p>Title: ${d.title}</p>
			  <p>Pages: ${d.pages}</p>
			  <p>My Rating: ${d.myRating}</p>
			  <p>Goodreads Rating: ${d.avgRating}</p>
			`);
		})
		.on('mouseout', function() {
			tooltip.style('opacity', 0);
		}); */

	d3
		.select('#pageRating')
		.append('text')
		.attr('x', width / 2)
		.attr('y', height - padding)
		.attr('dy', '1.5em')
		.style('text-anchor', 'middle')
		.text('Pages');

	/*

	d3
		.select('#pageRating')
		.append('text')
		.attr('x', width / 2)
		.attr('y', 15)
		.style('text-anchor', 'middle')
		.style('font-size', '1em')
		.text('Data on Pages vs Ratings');

		*/

	d3
		.select('#pageRating')
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Goodreads Rating');

	let xScale5 = d3.scaleLinear().domain(d3.extent(outlierData, (d) => d.pubDate)).range([ padding, width - padding ]);
	let yScale5 = d3
		.scaleLinear()
		.domain(d3.extent(outlierData, (d) => d.avgRating))
		.range([ height - padding, padding ]);
	let colorScale2 = d3.scaleLinear().domain(d3.extent(outlierData, (d) => d.myRating)).range([ 'pink', 'maroon' ]);
	let xAxis5 = d3.axisBottom(xScale5).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis5 = d3.axisLeft(yScale5).tickSize(-height + 2 * padding).tickSizeOuter(0);
	//let tooltip2 = d3.select('body').append('div').classed('tooltip', true);

	d3.select('#yearRating').append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis5);
	d3.select('#yearRating').append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis5);

	d3
		.select('#yearRating')
		.attr('width', width)
		.attr('height', height)
		.selectAll('circle')
		.data(outlierData)
		.enter()
		.append('circle')
		.attr('cx', (d) => xScale5(d.pubDate))
		.attr('cy', (d) => yScale5(d.avgRating))
		.attr('fill', (d) => colorScale2(d.myRating))
		.attr('r', (d) => 5);
	/*
			.attr('r', (d) => radiusScale(d.births))
			
		
		.on('mousemove', function(d) {
			tooltip2.style('opacity', 1).style('left', d3.event.x - 85 + 'px').style('top', d3.event.x + 'px').html(`
			  <p>Title: ${d.title}</p>
			  <p>Pages: ${d.pages}</p>
			  <p>My Rating: ${d.myRating}</p>
			  <p>Goodreads Rating: ${d.avgRating}</p>
			`);
		})
		.on('mouseout', function() {
			tooltip2.style('opacity', 0);
		});*/

	d3
		.select('#yearRating')
		.append('text')
		.attr('x', width / 2)
		.attr('y', height - padding)
		.attr('dy', '1.5em')
		.style('text-anchor', 'middle')
		.text('Pages');

	/*

	d3
		.select('#pageRating')
		.append('text')
		.attr('x', width / 2)
		.attr('y', 15)
		.style('text-anchor', 'middle')
		.style('font-size', '1em')
		.text('Data on Pages vs Ratings');

		*/

	d3
		.select('#yearRating')
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Goodreads Rating');

	let xScale6 = d3.scaleLinear().domain(d3.extent(outlierData, (d) => d.pubDate)).range([ padding, width - padding ]);
	let histogram6 = d3.histogram().domain(xScale6.domain()).thresholds(51).value((d) => d.pubDate);
	let bins6 = histogram6(outlierData);
	let barWidth6 = width / bins6.length - barPadding;
	let yScale6 = d3.scaleLinear().domain([ 0, d3.max(bins6, (d) => d.length) ]).range([ height - padding, padding ]);
	let xAxis6 = d3.axisBottom(xScale6).tickSize(-width + 2 * padding).tickSizeOuter(0);
	let yAxis6 = d3.axisLeft(yScale6).tickSize(-height + 2 * padding).tickSizeOuter(0);
	d3.select('#myYearRating').append('g').attr('transform', 'translate(0, ' + (height - padding) + ')').call(xAxis6);
	d3.select('#myYearRating').append('g').attr('transform', 'translate(' + padding + ', 0)').call(yAxis6);

	console.log(bins6);

	let bars6 = d3
		.select('#myYearRating')
		.attr('width', width)
		.attr('height', height)
		.selectAll('.bar')
		.data(bins6)
		.enter()
		.append('g')
		.classed('bar', true);

	bars6
		.append('rect')
		.attr('x', (d, i) => xScale6(d.x0))
		.attr('y', (d) => yScale6(d.length))
		.attr('height', (d) => height - yScale6(d.length) - padding)
		.attr('width', (d) => xScale6(d.x1) - xScale6(d.x0) - barPadding)
		.attr('fill', '#9c27b0');

	bars6
		.append('text')
		.attr('x', width / 2)
		.attr('y', height - padding)
		.attr('dy', '1.5em')
		.style('text-anchor', 'middle')
		.text('Publication Year');

	bars6
		.append('text')
		.attr('transform', 'rotate(-90)')
		.attr('x', -height / 2)
		.attr('y', padding)
		.attr('dy', '-1.1em')
		.style('text-anchor', 'middle')
		.text('Number of Books');
}

function pageAverage(arr) {
	let pageSum = 0;
	let pageCount = arr.length;
	let pageAvg = 0;

	for (let i = 0; i < arr.length; i++) {
		pageSum += arr[i].pages;
	}

	pageAvg = (pageSum / pageCount).toFixed(2);

	$('#pageSection').replaceWith(
		`<div class="graph" id="pageSection">
		<h2 class="graph__title">Books Read by Page Count</h2>
		<p class="graph__data" id="avgPages">Average Pages: ${pageAvg} & Total Pages: ${pageSum.toLocaleString()}</p>
	  </div>`
	);
}

function myRatingAverage(arr) {
	let ratingSum = 0;
	let ratingCount = arr.length;
	let ratingAvg = 0;

	for (let i = 0; i < arr.length; i++) {
		ratingSum += arr[i].myRating;
	}

	ratingAvg = (ratingSum / ratingCount).toFixed(2);

	$('#myRatingSection').replaceWith(
		`<div class="graph" id="myRatingSection">
		<h2 class="graph__title">Books Read by My Rating</h2>
		<p class="graph__data" id="avgMyRating">My Average Rating: ${ratingAvg}</p>
	  </div>`
	);
}

function totalRatingAverage(arr) {
	let ratingSum = 0;
	let ratingCount = arr.length;
	let ratingAvg = 0;

	for (let i = 0; i < arr.length; i++) {
		ratingSum += arr[i].avgRating;
	}

	ratingAvg = (ratingSum / ratingCount).toFixed(2);

	$('#avgRatingSection').replaceWith(
		`<div class="graph" id="avgRatingSection">
		<h2 class="graph__title">Books Read by Average Rating</h2>
		<p class="graph__data" id="avgTotalRating">Goodreads Average Rating: ${ratingAvg}</p>
	  </div> `
	);
}

function yearAverage(arr) {
	let yearSum = 0;
	let yearCount = arr.length;
	let yearAvg = 0;

	for (let i = 0; i < arr.length; i++) {
		yearSum += arr[i].pubDate;
	}

	yearAvg = (yearSum / yearCount).toFixed(0);

	$('#myYearRatingSection').replaceWith(
		`<div class="graph" id="myYearRatingSection">
		<h2 class="graph__title">Books Read by Publication Year (Past 50 Years)</h2>
		<p class="graph__data" id="avgTotalRating">Average Year: ${yearAvg}</p>
	  </div> `
	);
}
