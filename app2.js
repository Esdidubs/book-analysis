// Hide everything then display something when dropdown is changed
$('#dataSelection').on('change', function() {
	event.preventDefault();
	makeHidden();
	displayData();
});

// Hides all elements
function makeHidden() {
	$('.svgContainer').hide();
	$('.fiveStarBox').hide();
	$('.highGRBox').hide();
	$('.yearBox').hide();
	$('.allReads').hide();
	$('.toReadBox').hide();
	$('.rankBox').hide();
	$('.pagesBox').hide();
	$('.pubBox').hide();
}

// Shows the selected section and runs its function
function displayData() {
	if ($('#dataSelection').val() == 'graphBtn') {		
		$('.svgContainer').show();
	} else if ($('#dataSelection').val() == 'highGRBtn') {
		highRatingSetup();
		$('.highGRBox').show();		
	} else if ($('#dataSelection').val() == 'years') {
		let selectedYear = $('#dataSelection option:selected').text();
		let yearVal = parseInt(selectedYear.substr(selectedYear.length - 4));
		yearSearch(yearVal);
		$('.yearBox').show();
	} else if ($('#dataSelection').val() == 'all') {
		allBooks();
		$('.allReads').show();
	} else if ($('#dataSelection').val() == 'toRead') {
		toReadSetup();	
		$('.toReadBox').show();
	} else if ($('#dataSelection').val() == 'rankedBtn') {
		rankSetup();
		$('.rankBox').show();
	} else if ($('#dataSelection').val() == 'pages') {
		pageSetup();
		$('.pagesBox').show();
	} else if ($('#dataSelection').val() == 'pubDate') {
		pubDateSetup();
		$('.pubBox').show();
	}
}

// Pulls all of the books and displays them
function allBooks() {
	let allReads = ``;
	let pagesForAll = 0;
	let booksForAll = 0;
	let pagesForAllUnique = 0;
	let booksForAllUnique = 0;

	// Appends the next book (in HTML) and adds to the count and pages of the variables
	for (let book in bookData) {
		allReads += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
			.author}</div><div class="pages">Pages: ${bookData[book].pages}</div><div class="rating">Rating: ${bookData[book].myWeightedRating}/10</div></div>`;
		pagesForAll += bookData[book].pages * bookData[book].yearRead.length;
		booksForAll += bookData[book].yearRead.length;
		pagesForAllUnique += bookData[book].pages;
		booksForAllUnique++;
	}

	$('.allReads').replaceWith(`     
		<div class="allReads">
			<h3>${booksForAll} books & ${pagesForAll} pages - ${booksForAllUnique} unique books & ${pagesForAllUnique} pages</h3>
			<div class="bookList">${allReads}</div>
		</div>
    `);
}

// Sorts all of the books by page count and displays them
function pageSetup() {
	let pageArr = JSON.parse(JSON.stringify(bookData));

	let pageCount = [
		{name: 'Under 100 pages', pageLimit: 0, count: 0, books: ''},
		{name: '100 to 199 pages', pageLimit: 100, count: 0, books: ''},
		{name: '200 to 299 pages', pageLimit: 200, count: 0, books: ''},
		{name: '300 to 399 pages', pageLimit: 300, count: 0, books: ''},
		{name: '400 to 499 pages', pageLimit: 400, count: 0, books: ''},
		{name: '500 to 599 pages', pageLimit: 500, count: 0, books: ''},
		{name: '600 to 699 pages', pageLimit: 600, count: 0, books: ''},
		{name: '700 to 799 pages', pageLimit: 700, count: 0, books: ''},
		{name: '800 or more pages', pageLimit: 800, count: 0, books: ''}
	];

	// Sorts the array from highest to lowest pages
	pageArr.sort(function(a, b) {
		return b.pages - a.pages;
	});	

	// Adds book to appropriate section based on pages
	for (let book in pageArr) {
		for(let i = pageCount.length-1; i>=0; i--) {
			if(pageArr[book].pages > pageCount[i].pageLimit){
				pageCount[i].books += `<div class="book"> <img src="${pageArr[book].thumb}"><div class="title">${pageArr[book].title}</div><div class="author">${pageArr[book]
					.author}</div><div class="pages">Pages: ${pageArr[book].pages}</div><div class="rating">Rating: ${pageArr[book].myWeightedRating}/10</div></div>`;
				pageCount[i].count++;
				break;
			}
		}
	}
	
	$('.pagesBox').replaceWith(`     
		<div class="pagesBox">
			<p>${pageCount[8].name} - (${pageCount[8].count})</p>	
			<div class="ranked">${pageCount[8].books}</div>
			<p>${pageCount[7].name} - (${pageCount[7].count})</p>	
			<div class="ranked">${pageCount[7].books}</div>
			<p>${pageCount[6].name} - (${pageCount[6].count})</p>	
			<div class="ranked">${pageCount[6].books}</div>
			<p>${pageCount[5].name} - (${pageCount[5].count})</p>	
			<div class="ranked">${pageCount[5].books}</div>
			<p>${pageCount[4].name} - (${pageCount[4].count})</p>	
			<div class="ranked">${pageCount[4].books}</div>
			<p>${pageCount[3].name} - (${pageCount[3].count})</p>	
			<div class="ranked">${pageCount[3].books}</div>
			<p>${pageCount[2].name} - (${pageCount[2].count})</p>	
			<div class="ranked">${pageCount[2].books}</div>
			<p>${pageCount[1].name} - (${pageCount[1].count})</p>	
			<div class="ranked">${pageCount[1].books}</div>
			<p>${pageCount[0].name} - (${pageCount[0].count})</p>	
			<div class="ranked">${pageCount[0].books}</div>			
		</div>
    `);
}

// Sorts all of the books by page count and displays them
function pubDateSetup() {
	let yearArr = JSON.parse(JSON.stringify(bookData));
	let yearBooks = ``;

	// Sorts the array from highest to lowest pages
	yearArr.sort(function(a, b) {
		return b.pubDate - a.pubDate;
	});	

	for (let book in yearArr) {
		yearBooks += `<div class="book"> <img src="${yearArr[book].thumb}"><div class="title">${yearArr[book].title}</div><div class="author">${yearArr[book]
			.author}</div><div class="rating">Rating: ${yearArr[book].myWeightedRating}/10</div><div class="year">${yearArr[book].pubDate}</div></div>`;
	}

	$('.pubBox').html(`<div class="bookList">${yearBooks}</div>`);

}

// Displays the books from the To Read section
function toReadSetup() {
	let toReadList = ``;
	for (let book in toRead) {
		toReadList += `<div class="book"> <img src="${toRead[book].thumb}"><div class="title">${toRead[book].title}</div><div class="author">${toRead[book]
			.author}</div></div>`;
	}

	$('.toReadBox').replaceWith(`     
		<div class="toReadBox">
			<div class="bookList">${toReadList}</div>
		</div>
    `);
}

// Grabs all books that are 4.5 or higher on Goodreads and displays them
function highRatingSetup() {
	let highGoodReads = ``;
	for (let book in bookData) {
		if (bookData[book].avgRating >= 4.5) {
			highGoodReads += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
				.author}</div><div class="good-rating">GR Rating: ${bookData[book].avgRating}/5</div><div class="rating">My Rating: ${bookData[book].myWeightedRating}/10</div></div>`;
		}
	}
	$('.highGRBox').replaceWith(` 
    <div class="highGRBox">
            ${highGoodReads}
        </div>  
    `);
}

// Grabs the books read in a given year and displays them
function yearSearch(yearVal) {
	let yearReads = ``;
	let pagesForYear = 0;
	let booksForYear = 0;
	for (let book in bookData) {
		if (bookData[book].yearRead.includes(yearVal) == undefined) {
		} else {
			if (bookData[book].yearRead.includes(yearVal) == true) {
				yearReads += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div><div class="pages">Pages: ${bookData[book].pages}</div><div class="rating">Rating: ${bookData[book].myWeightedRating}/10</div></div>`;
				pagesForYear += bookData[book].pages;
				booksForYear++;
			}
		}
	}
	$('.yearBox').replaceWith(`     
		<div class="yearBox">
		<h3>${booksForYear} books & ${pagesForYear} pages</h3>
		<div class="bookList">${yearReads}</div>
		</div>
    `);
}

// Sorts all of the read books by rating
function rankSetup(){
		let ranks = {
			r10: '',
			r9: '',
			r8: '',
			r7: '',
			r6: '',
			r5: '',
			r4: '',
			r3: '',
			r2: '',
			r1: ''
		}

		for (let book in bookData) {
			let rating = bookData[book].myWeightedRating;	

			ranks["r"+rating] += `<div class="book"><img src="${bookData[book].thumb}">
									<div class="title">${bookData[book].title}</div>
									<div class="author">${bookData[book].author}</div></div>`;
		}

		$('.rankBox').replaceWith(` 
			<div class="rankBox">
				<p>10 Rating</p>	
				<div class="ranked">${ranks.r10}</div>
				<p>9 Rating</p>
				<div class="ranked">${ranks.r9}</div>
				<p>8 Rating</p>
				<div class="ranked">${ranks.r8}</div>
				<p>7 Rating</p>
				<div class="ranked">${ranks.r7}</div>
				<p>6 Rating</p>
				<div class="ranked">${ranks.r6}</div>
				<p>5 Rating</p>
				<div class="ranked">${ranks.r5}</div>
				<p>4 Rating</p>
				<div class="ranked">${ranks.r4}</div>
				<p>3 Rating</p>
				<div class="ranked">${ranks.r3}</div>
				<p>2 Rating</p>
				<div class="ranked">${ranks.r2}</div>
				<p>1 Rating</p>
				<div class="ranked">${ranks.r1}</div>
			</div> 
		`); 	
}