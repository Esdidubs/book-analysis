/*
	- add more keywords
	- add author read count
	- add multiple books in series keyword
*/

/*===========================
	SETUP
===========================*/

$(document).ready(function() {
    makeHidden();
	displayData();
});

// Hide everything then display something when dropdown is changed
$('#dataSelection').on('change', function() {
	event.preventDefault();
	makeHidden();
	displayData();
});

$(document).on('change', '#categorySelection', function(){
    event.preventDefault();
	displayCategory();
});

$(document).on('change', '#yearSelection', function(){
    event.preventDefault();
	displayYears();
});

// Hides all elements
function makeHidden() {
	$('.yearBox').hide();
	$('.categoryBox').hide();
	$('.allReads').hide();
	$('.rankBox').hide();
	$('.pagesBox').hide();
	$('.pubBox').hide();
	$('.reReadBox').hide();
	$('.authorBox').hide();
}

// Shows the selected section and runs its function
function displayData() { 
	switch($('#dataSelection').val()){
		case 'years':
			yearSetup();
			$('.yearBox').show();
			break;
		case 'all':
			allBooks();
			$('.allReads').show();
			break;
		case 'category':
			categorySetup();	
			$('.categoryBox').show();
			break;
		case 'rankedBtn':
			rankSetup();
			$('.rankBox').show();
			break;
		case 'pages':
			pageSetup();
			$('.pagesBox').show();
			break;
		case 'pubDate':
			pubDateSetup();
			$('.pubBox').show();
			break;
		case 'reRead':
			reReadSetup();	
			$('.reReadBox').show();
			break;
		case 'authors':
			authorSetup();	
			$('.authorBox').show();
			break;
	}
}

/*===========================
	ALL BOOKS READ
===========================*/

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

	$('.allReads').html(`     
			<h3>${booksForAll} books & ${pagesForAll} pages - ${booksForAllUnique} unique books & ${pagesForAllUnique} pages</h3>
			<div class="bookList">${allReads}</div>
    `);
}

/*===========================
	BOOKS BY PAGES
===========================*/

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
	
	$('.pagesBox').html(`
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
    `);
}

/*===========================
	BOOKS BY PUBLICATION DATE
===========================*/

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

/*===========================
	BOOKS BY YEAR I READ
===========================*/

function yearSetup() {
	let bookArr = JSON.parse(JSON.stringify(bookData));
	let years = [];
	for(let book in bookArr){
		if(bookArr[book].yearRead != undefined){
			for(let i=0; i<bookArr[book].yearRead.length; i++){
				if(!years.includes(bookArr[book].yearRead[i])){
					years.push(bookArr[book].yearRead[i]);
				}
			}
		}
	}
	
	years.sort((a, b) => b - a);
	printYears(years);
}

function printYears(years) {
	let yearStr = ``;
	for(let year in years) {
		yearStr += `<option value="${years[year]}">${years[year]}</option>`
	}

	$('.yearBox').html(`
			<label for="yearSelection" id="yearLabel">Select a year</label>
			<select name="yearSelection" id="yearSelection" class="dataDrop">
				<option disabled selected>Year</option>          
				${yearStr}
			</select>
			<div class="yearBooks"></div>
    `);
}

function displayYears() {
	let yearChoice = $('#yearSelection').val();
	let yearBookList = ``;
	let pagesForYear = 0;
	let booksForYear = 0;

	for (let book in bookData) {
		if (bookData[book].yearRead == undefined) { 
		} else { 
				if (bookData[book].yearRead.includes(parseInt(yearChoice)) == true) {
					for (let i=0; i<bookData[book].yearRead.length; i++){
						if (yearChoice == bookData[book].yearRead[i]){
							yearBookList += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
								.author}</div><div class="pages">Pages: ${bookData[book].pages}</div><div class="rating">Rating: ${bookData[book].myWeightedRating}/10</div></div>`;
							pagesForYear += bookData[book].pages;
							booksForYear++;
						}
					}
				}
			}
	}
	$('.yearBooks').html(`
		<h3>${booksForYear} books & ${pagesForYear} pages</h3>
		<div class="bookList">${yearBookList}</div>
    `);
}

/*===========================
	BOOKS I'VE RE-READ
===========================*/

// Pulls all books read more than once and displays them
function reReadSetup() {
	let reReads = ``;
	let totalBooksReRead = 0;
	let readCountArr = JSON.parse(JSON.stringify(bookData));

	// Sorts the array from highest to lowest read count
	readCountArr.sort(function(a, b) {
		return b.yearRead.length - a.yearRead.length;
	});	

	// Appends the next book (in HTML) and adds to the count of the variables
	for (let book in readCountArr) {
		if(readCountArr[book].yearRead.length > 1){
			reReads += `<div class="book"> <img src="${readCountArr[book].thumb}"><div class="title">${readCountArr[book].title}</div><div class="author">${readCountArr[book]
				.author}</div><div class="pages">Read Count: ${readCountArr[book].yearRead.length}</div></div>`;
			totalBooksReRead++;
		}
		
	}

	$('.reReadBox').html(`
			<h3>${totalBooksReRead} Books Re-Read</h3>
			<div class="bookList">${reReads}</div>
    `);
}

/*===========================
	BOOKS BY CATEGORY KEYWORD
===========================*/

function categorySetup() {
	let bookArr = JSON.parse(JSON.stringify(bookData));
	let keywords = [];
	for(let book in bookArr){
		if(bookArr[book].keywords != undefined){
			for(let i=0; i<bookArr[book].keywords.length; i++){
				if(!keywords.includes(bookArr[book].keywords[i])){
					keywords.push(bookArr[book].keywords[i]);
				}
			}
		}
	}
	
	keywords.sort(); 
	printCategories(keywords);
}

function printCategories(keywords) {
	let keywordStr = ``;
	for(let category in keywords) {
		keywordStr += `<option value="${keywords[category]}">${keywords[category]}</option>`
	}

	$('.categoryBox').html(`
			<label for="categorySelection" id="categoryLabel">Select a keyword</label>
			<select name="categorySelection" id="categorySelection" class="dataDrop">
				<option disabled selected>Keyword</option>          
				${keywordStr}
			</select>
			<div class="categoryBooks"></div>
    `);
}

function displayCategory() {
	let categoryChoice = $('#categorySelection').val();
	let categoryBookList = ``;

	for (let book in bookData) {
		if (bookData[book].keywords == undefined) {
		} else {
				if (bookData[book].keywords.includes(categoryChoice) == true) {	
					categoryBookList += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
						.author}</div><div class="pages">Pages: ${bookData[book].pages}</div></div>`;	
				}
			}
	}

	$('.categoryBooks').html(`     
			<div class="bookList">${categoryBookList}</div>
    `);
}

/*===========================
	BOOKS BY MY RATING
===========================*/

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

		$('.rankBox').html(`
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
		`); 	
}

/*===========================
	AUTHORS I'VE RE-READ
===========================*/

// Pulls all books read more than once and displays them
function authorSetup() {
	let authors = {};
	let mostAuthors = [];
	let printedAuthors = ``; 

	let bookCopy = JSON.parse(JSON.stringify(bookData));

	for(let book in bookCopy){
		if(bookCopy[book].author == 'Newt Scamander' || bookCopy[book].author == 'Kennilworthy Whisp'){
			bookCopy[book].author = 'J.K. Rowling';
		}
	}

	for (let book in bookCopy) {
		if(authors[bookCopy[book].author]==undefined){
			authors[bookCopy[book].author] = {count: 1};
		} else {
			authors[bookCopy[book].author].count ++;
		}
	}
	

	for(let author in authors){ 
		if(authors[author].count > 1){
			mostAuthors.push([author, authors[author].count]);
		}
	}

	mostAuthors.sort((a, b) => b[1] - a[1]);

	for (let author in mostAuthors) {

		printedAuthors += `<div class="book">
								<div class="title">${mostAuthors[author][0]}</div>
								<div>${mostAuthors[author][1]} books</div>
							</div>`;
	}


	$('.authorBox').html(`
			<div class="bookList">${printedAuthors}</div>
    `);
}