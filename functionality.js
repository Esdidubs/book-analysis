/*
	Things to add:

*/


/*===========================
	SETUP
===========================*/
//#region Setup
$(document).ready(function() {
    makeHidden();
	displayData();

	let dcount = 0;
	let nondcount = 0;
	

	for(let book in bookData){
		if(bookData[book].description === '' || bookData[book].description === undefined){
			nondcount++;
		} else {
			dcount++;
		}
	}

	let cpercent =(dcount / (dcount + nondcount)) * 100;
	

	console.log(dcount + " books complete, " + nondcount + " to go. We're " + cpercent.toFixed(2) + " percent done.");

	setRandomColor();

});

function setRandomColor(){
	$('.book').each(function () {
		$(this).css("background-color", random_color());
	})
}

function random_color() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	color+='40';
	return color;
};

// Hide everything then display something when dropdown is changed
$('#dataSelection').on('change', function() {
	event.preventDefault();
	makeHidden();
	displayData();
});

$(document).on('click', '.book', function() {
	event.preventDefault();
	let bookTitle = $(this).find('.title').text();
	getModalPopup(bookTitle);
});

$('#dataSelection').on('change', function() {
	event.preventDefault();
	makeHidden();
	displayData();
});

$(document).on('change', '#categorySelection', function(){
    event.preventDefault();
	displayCategory();
	setRandomColor();
});

$(document).on('change', '#yearSelection', function(){
    event.preventDefault();
	displayYears();
	setRandomColor();
});

$(document).on('change', '#rankSelection', function(){
    event.preventDefault();
	displayRanks();
	setRandomColor();
});

$(document).on('change', '#pubDateSelection', function(){
    event.preventDefault();
	displayPubDates();
	setRandomColor();
});

$(document).on('change', '#pageSelection', function(){
    event.preventDefault();
	displayPages();
	setRandomColor();
});

//#endregion

//#region Hide/Show

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
			setRandomColor();
			break;
		case 'all':
			allBooks();
			$('.allReads').show();
			setRandomColor();
			break;
		case 'category':
			categorySetup();	
			$('.categoryBox').show();
			setRandomColor();
			break;
		case 'rankedBtn':
			rankSetup();
			$('.rankBox').show();
			setRandomColor();
			break;
		case 'pages':
			pageSetup();
			$('.pagesBox').show();
			setRandomColor();
			break;
		case 'pubDate':
			pubDateSetup();
			$('.pubBox').show();
			setRandomColor();
			break;
		case 'reRead':
			reReadSetup();	
			$('.reReadBox').show();
			setRandomColor();
			break;
		case 'authors':
			authorSetup();	
			$('.authorBox').show();
			setRandomColor();
			break;
	}
}
//#endregion

/*===========================
	ALL BOOKS READ
===========================*/
//#region All Books
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
			.author}</div><div class="pages">Pages: ${bookData[book].pages.toLocaleString("en-US")}</div><div class="rating">Rating: ${bookData[book].myRating}/10</div></div>`;
		pagesForAll += bookData[book].pages * bookData[book].yearRead.length;
		booksForAll += bookData[book].yearRead.length;
		pagesForAllUnique += bookData[book].pages;
		booksForAllUnique++;
		bookData[book].id = book;
	}

	$('.allReads').html(`     
			<h3>${booksForAll} books & ${pagesForAll.toLocaleString("en-US")} pages - ${booksForAllUnique} unique books & ${pagesForAllUnique.toLocaleString("en-US")} pages</h3>
			<div class="bookList">${allReads}</div>
    `);
}
//#endregion

/*===========================
	BOOKS BY PAGES
===========================*/
//#region By Pages

function pageSetup() {

	let pageCount = [
		{name: 'Under 100 pages', pageLimit: [0, 100], count: 0},
		{name: '100 to 199 pages', pageLimit: [100, 200], count: 0},
		{name: '200 to 299 pages', pageLimit: [200, 300], count: 0},
		{name: '300 to 399 pages', pageLimit: [300, 400], count: 0},
		{name: '400 to 499 pages', pageLimit: [400, 500], count: 0},
		{name: '500 to 599 pages', pageLimit: [500, 600], count: 0},
		{name: '600 to 699 pages', pageLimit: [600, 700], count: 0},
		{name: '700 to 799 pages', pageLimit: [700, 800], count: 0},
		{name: '800 or more pages', pageLimit: [800, 9999], count: 0}
	];

	let pageStr = ``;
	for(let page in pageCount) {
		pageStr += `<option value="${pageCount[page].pageLimit}">${pageCount[page].name}</option>`
	}

	$('.pagesBox').html(`
			<label for="pageSelection" id="pageLabel">Select an amount of pages</label>
			<select name="pageSelection" id="pageSelection" class="dataDrop">
				<option disabled selected>Pages</option>      
				${pageStr}
			</select>
			<div class="pageBooks"></div>
    `);
}

function displayPages() {
	let pagesChoice = $('#pageSelection').val().split(',');
	let pagesBookList = ``;
	let bookCount = 0;
	let bookWord = 'books';

	let pageArr = JSON.parse(JSON.stringify(bookData));
	pageArr.sort(function(a, b) {
		return a.pages - b.pages;
	});	

	for (let book in pageArr) {
		if (pageArr[book].pages == undefined) {
		}else {
				if (pageArr[book].pages >= parseInt(pagesChoice[0]) && pageArr[book].pages < parseInt(pagesChoice[1])) {	
					pagesBookList += `<div class="book"> <img src="${pageArr[book].thumb}"><div class="title">${pageArr[book].title}</div><div class="author">${pageArr[book]
						.author}</div><div class="pages">Pages: ${pageArr[book].pages}</div></div>`;
					bookCount++;
				}
			}
	}

	if(bookCount==1){
		bookWord = 'book';
	}

	$('.pageBooks').html(`     
		<h3>${bookCount} ${bookWord}</h3>	
		<div class="bookList">${pagesBookList}</div>
    `);
}

//#endregion

/*===========================
	BOOKS BY PUBLICATION DATE
===========================*/
//#region PubDate
function pubDateSetup() {
	let bookArr = JSON.parse(JSON.stringify(bookData));
	let pubDates = [];
	for(let book in bookArr){
		if(bookArr[book].pubDate != undefined){
			if(!pubDates.includes(bookArr[book].pubDate)){
				pubDates.push(bookArr[book].pubDate);
			}
		}
	}
	
	pubDates.sort((a, b) => b - a);
	printpubDates(pubDates);
}

function printpubDates(pubDates) {
	let pubDateStr = ``;
	for(let pubDate in pubDates) {
		pubDateStr += `<option value="${pubDates[pubDate]}">${pubDates[pubDate]}</option>`
	}

	$('.pubBox').html(`
			<label for="pubDateSelection" id="pubDateLabel">Select a release year</label>
			<select name="pubDateSelection" id="pubDateSelection" class="dataDrop">
				<option disabled selected>Year</option>
				<option value="all">All Years</option>        
				${pubDateStr}
			</select>
			<div class="pubDateBooks"></div>
    `);
}

function displayPubDates() {
	let pubDatesChoice = $('#pubDateSelection').val();
	let pubDatesBookList = ``;
	let bookCount = 0;
	let bookWord = 'books';

	let yearArr = JSON.parse(JSON.stringify(bookData));
	yearArr.sort(function(a, b) {
		return b.pubDate - a.pubDate;
	});	

	for (let book in bookData) {
		if (bookData[book].pubDate == undefined) {
		} else if(pubDatesChoice == "all"){
			

			pubDatesBookList += `<div class="book"> <img src="${yearArr[book].thumb}"><div class="title">${yearArr[book].title}</div><div class="author">${yearArr[book]
				.author}</div><div class="pages">${yearArr[book].pubDate}</div></div>`;
			bookCount++;
		} else {
				if (bookData[book].pubDate == pubDatesChoice) {	
					pubDatesBookList += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
						.author}</div><div class="pages">Pages: ${bookData[book].pages}</div></div>`;
					bookCount++;
				}
			}
	}

	if(bookCount==1){
		bookWord = 'book';
	}

	$('.pubDateBooks').html(`     
		<h3>${bookCount} ${bookWord}</h3>	
		<div class="bookList">${pubDatesBookList}</div>
    `);
}
//#endregion

/*===========================
	BOOKS BY YEAR I READ
===========================*/
//#region Year Diary
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
	let ficCount = 0;
	let nonficCount = 0;
	let totalRating = 0;
	let authors = {};
	
	let shortestBook = {title: 'Nothing', author: 'Nobody', pages: 9999, img: 'nice'};
	let longestBook = {title: 'Nothing', author: 'Nobody', pages: 0, img: 'nice'};
	let oldestBook = {title: 'Nothing', author: 'Nobody', year: 9999, img: 'nice'};
	let booksThisYear = [];
	let categories = {};
	

	for (let book in bookData) {
		if (bookData[book].yearRead == undefined) { 
		} else { 
			if (bookData[book].yearRead.includes(parseInt(yearChoice)) == true) {
				for (let i=0; i<bookData[book].yearRead.length; i++){
					if (yearChoice == bookData[book].yearRead[i]){

						yearBookList += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
							.author}</div><div class="pages">Pages: ${bookData[book].pages.toLocaleString("en-US")}</div><div class="rating">Rating: ${bookData[book].myRating}/10</div></div>`;

						pagesForYear += bookData[book].pages;
						booksForYear++;
						totalRating += bookData[book].myRating;

						if(bookData[book].keywords.includes('fiction')){
							ficCount++;
						} else if(bookData[book].keywords.includes('nonfiction')){
							nonficCount++;
						}
						
						getMostAuthors(authors, book);
						getOldestBook(oldestBook, book);
						getShortestBook(shortestBook, book);
						getLongestBook(longestBook, book);
						getCategories(categories, book);
						

						if(bookData[book].pubDate == yearChoice){
							booksThisYear.push({title: bookData[book].title, author: bookData[book].author});
						}
					}
				}
			}
		}
	}

	let mostCategories = [];
	alterCategories(categories, mostCategories);
	let topCategories = printTopCategories(mostCategories);

	let mostAuthors = [];
	findMostAuthors(authors, mostAuthors);
	let topAuthors = printTopAuthors(mostAuthors);

	let newBooks = ``;
	for(let book in booksThisYear){
		newBooks += `<div>- ${booksThisYear[book].title}</div>`
	}

	let avgPages = pagesForYear / booksForYear;
	let ficPercentage = ficCount / (ficCount + nonficCount) * 100;
	let nonficPercentage = nonficCount / (ficCount + nonficCount) * 100;
	let avgRating = totalRating / booksForYear;

	$('.yearBooks').html(`
		<h2>Stats for ${yearChoice}</h2>
		<div class="bookList">
			<div class="mostReadAuthors"><div class="title">Quick Stats</div><div>${booksForYear} books</div><div>${pagesForYear
				.toLocaleString("en-US")} pages</div><div>Average Pages: ${avgPages.toFixed(2)}</div><div>Average Rating: ${avgRating.toFixed(2)}/10</div></div>
			<div class="mostReadAuthors"><div class="title">Fiction vs Nonfiction</div><div>Fiction: ${ficCount} (${ficPercentage
				.toFixed(0)}%)</div><div>Nonfiction: ${nonficCount} (${nonficPercentage.toFixed(0)}%)</div></div>
			<div class="mostReadAuthors"><div class="title">Most Read Authors</div><div>${topAuthors}</div></div>
			<div class="mostReadAuthors"><div class="title">Most Common Keywords</div><div>${topCategories}</div></div>
			<div class="mostReadAuthors"><div class="title">Oldest Book</div><img src="${oldestBook.img}"><div>${oldestBook
				.title}</div><div>${oldestBook.author}</div><div>${oldestBook.year}</div></div>
			<div class="mostReadAuthors"><div class="title">Books Released This Year</div><div>${newBooks}</div></div>	
			<div class="mostReadAuthors"><div class="title">Shortest Book</div><img src="${shortestBook.img}"><div>${shortestBook
				.title}</div><div>${shortestBook.author}</div><div>${shortestBook.pages} pages</div></div>
			<div class="mostReadAuthors"><div class="title">Longest Book</div><img src="${longestBook.img}"><div>${longestBook
				.title}</div><div>${longestBook.author}</div><div>${longestBook.pages} pages</div></div>
		</div>		
		<h2>Books</h2>
		<div class="bookList">${yearBookList}</div>
    `);
}

function getShortestBook(shortestBook, book){
	if(bookData[book].pages < shortestBook.pages){
		shortestBook.img = bookData[book].thumb;
		shortestBook.title = bookData[book].title;
		shortestBook.author = bookData[book].author;
		shortestBook.pages = bookData[book].pages;
	}
}

function getLongestBook(longestBook, book){
	if(bookData[book].pages > longestBook.pages){
		longestBook.img = bookData[book].thumb;
		longestBook.title = bookData[book].title;
		longestBook.author = bookData[book].author;
		longestBook.pages = bookData[book].pages;
	}
}

function getOldestBook(oldestBook, book){
	if(bookData[book].pubDate < oldestBook.year){
		oldestBook.img = bookData[book].thumb;
		oldestBook.title = bookData[book].title;
		oldestBook.author = bookData[book].author;
		oldestBook.year = bookData[book].pubDate;
	}
}

function getCategories(categories, book){
	for(let category in bookData[book].keywords){
		if(categories[bookData[book].keywords[category]]==undefined){
			categories[bookData[book].keywords[category]] = {count: 1};
		} else {
			categories[bookData[book].keywords[category]].count ++;
		}
	}
}

function getMostAuthors(authors, book){
	if(authors[bookData[book].author]==undefined){
		authors[bookData[book].author] = {count: 1};
	} else {
		authors[bookData[book].author].count ++;
	}
}

function alterCategories(categories, mostCategories){
	delete categories.nonfiction;
	delete categories.fiction;
	delete categories.series;
	delete categories.tv;
	delete categories.movies;
	delete categories['female author'];

	findMostCategories(categories, mostCategories);
}

function findMostCategories(categories, mostCategories){
	for(let category in categories){ 
		mostCategories.push([category, categories[category].count]);
	}

	mostCategories.sort((a, b) => b[1] - a[1]);
}

function printTopCategories(mostCategories){
	let tempTop = ``;

	for(let i=0; i<5; i++){
		if(mostCategories[i][1]>1){
			tempTop += `<div>${mostCategories[i][0]} - ${mostCategories[i][1]}</div>`
		}
	}

	if(tempTop == ''){
		tempTop = 'No most read categories.'
	} 

	return tempTop;
}

function findMostAuthors(authors, mostAuthors){
	for(let author in authors){ 
		mostAuthors.push([author, authors[author].count, authors[author].combinedRating]);
	}

	mostAuthors.sort((a, b) => b[1] - a[1]);
}

function printTopAuthors(mostAuthors){
	let tempTop = ``;

	for(let i=0; i<3; i++){
		if(mostAuthors[i][1]>1){
			tempTop += `<div>${mostAuthors[i][0]} - ${mostAuthors[i][1]}</div>`
		}
	}

	if(tempTop == ''){
		tempTop = 'No most read authors.'
	} 

	return tempTop;
}

//#endregion

/*===========================
	BOOKS I'VE RE-READ
===========================*/
//#region Re-Read
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
//#endregion

/*===========================
	BOOKS BY CATEGORY KEYWORD
===========================*/
//#region Keyword
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
	let bookCount = 0;
	let bookWord = 'books';


	for (let book in bookData) {
		if (bookData[book].keywords == undefined) {
		} else {
				if (bookData[book].keywords.includes(categoryChoice) == true) {	
					categoryBookList += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
						.author}</div><div class="pages">Pages: ${bookData[book].pages}</div></div>`;
					bookCount++;
				}
			}
	}

	if(bookCount==1){
		bookWord = 'book';
	}

	$('.categoryBooks').html(`     
		<h3>${bookCount} ${bookWord}</h3>	
		<div class="bookList">${categoryBookList}</div>
    `);
}
//#endregion

/*===========================
	BOOKS BY MY RATING
===========================*/
//#region Rating
// Sorts all of the read books by rating

function rankSetup() {
	let bookArr = JSON.parse(JSON.stringify(bookData));
	let ranks = [];
	for(let book in bookArr){
		if(bookArr[book].myRating != undefined){
			if(!ranks.includes(bookArr[book].myRating)){
				ranks.push(bookArr[book].myRating);
			}
		}
	}
	
	ranks.sort((a, b) => b - a);
	printRanks(ranks);
}

function printRanks(ranks) {
	let rankStr = ``;
	for(let rank in ranks) {
		rankStr += `<option value="${ranks[rank]}">${ranks[rank]}</option>`
	}

	$('.rankBox').html(`
			<label for="rankSelection" id="rankLabel">Select a rating</label>
			<select name="rankSelection" id="rankSelection" class="dataDrop">
				<option disabled selected>Rating</option>          
				${rankStr}
			</select>
			<div class="rankBooks"></div>
    `);
}

function displayRanks() {
	let rankChoice = $('#rankSelection').val();
	let rankBookList = ``;
	let bookCount = 0;
	let ficCount = 0;
	let nonficCount = 0;
	let totalReadCount = 0;
	let pagesForRating = 0;
	let categories = {};


	for (let book in bookData) {
		if (bookData[book].myRating == undefined) {
		} else {
				if (bookData[book].myRating == rankChoice) {	
					rankBookList += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
						.author}</div></div>`;
					bookCount++;
					totalReadCount += bookData[book].yearRead.length;
					pagesForRating += bookData[book].pages;

					getCategories(categories, book);

					if(bookData[book].keywords.includes('fiction')){
						ficCount++;
					} else if(bookData[book].keywords.includes('nonfiction')){
						nonficCount++;
					}
				}
			}
	}

	let ficPercentage = ficCount / (ficCount + nonficCount) * 100;
	let nonficPercentage = nonficCount / (ficCount + nonficCount) * 100;
	let avgPages = pagesForRating / bookCount;

	let mostCategories = [];
	alterCategories(categories, mostCategories);
	let topCategories = printTopCategories(mostCategories);

	$('.rankBooks').html(`  
		<div class="bookList">
			<div class="mostReadAuthors"><div class="title">Quick Stats</div><div>Books: ${bookCount}</div>
				<div>Total Read Count: ${totalReadCount}</div><div>Average Pages: ${avgPages.toFixed(2)}</div></div>
			<div class="mostReadAuthors"><div class="title">Fiction vs Nonfiction</div><div>Fiction: ${ficCount} (${ficPercentage
				.toFixed(0)}%)</div><div>Nonfiction: ${nonficCount} (${nonficPercentage.toFixed(0)}%)</div></div>
			<div class="mostReadAuthors"><div class="title">Top Keywords</div><div>${topCategories}</div></div>
		</div>
		<hr />
		<div class="bookList">${rankBookList}</div>
    `);
}
//#endregion

/*===========================
	AUTHORS I'VE RE-READ
===========================*/
//#region Authors
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
			authors[bookCopy[book].author] = {
				count: 1, 
				combinedRating: bookCopy[book].myRating,
				totalReads: bookCopy[book].yearRead.length,
				pages: bookCopy[book].pages
			};
		} else {
			authors[bookCopy[book].author].count ++;
			authors[bookCopy[book].author].combinedRating += bookCopy[book].myRating;
			authors[bookCopy[book].author].totalReads += bookCopy[book].yearRead.length;
			authors[bookCopy[book].author].pages += bookCopy[book].pages;
		}
	}
	

	for(let author in authors){ 
		if(authors[author].totalReads > 4){
			mostAuthors.push([author, authors[author].count, authors[author].combinedRating, authors[author].totalReads, authors[author].pages]);
		}
	}

	mostAuthors.sort((a, b) => b[3] - a[3]);

	for (let author in mostAuthors) {
		let avgRating = mostAuthors[author][2] / mostAuthors[author][1];
		let avgPages = mostAuthors[author][4] / mostAuthors[author][1];

		printedAuthors += `<div class="mostReadAuthors">
								<div class="title">${mostAuthors[author][0]}</div>
								<div>${mostAuthors[author][1]} books</div>
								<div>${mostAuthors[author][3]} total reads</div>
								<div>${avgRating.toFixed(2)} average rating</div>
								<div>${avgPages.toFixed(2)} average pages</div>
							</div>`;
	}


	$('.authorBox').html(`
			<div class="bookList">${printedAuthors}</div>
    `);
}
//#endregion

/*===========================
	MODAL POPUP
===========================*/
//#region Modal/
function getModalPopup(bookTitle){
	let selectedBook = {};

	for (var i=0; i < bookData.length; i++) {
        if (bookData[i].title === bookTitle) {
            selectedBook.title = bookData[i].title;
        	selectedBook.author = bookData[i].author;
        	selectedBook.myRating = bookData[i].myRating;
        	selectedBook.pages = bookData[i].pages;
        	selectedBook.pubDate = bookData[i].pubDate;
        	selectedBook.yearRead = bookData[i].yearRead;
			selectedBook.readCount = bookData[i].yearRead.length;
        	selectedBook.thumb = bookData[i].thumb;
        	selectedBook.keywords = bookData[i].keywords;
			selectedBook.similar = bookData[i].similar;
			selectedBook.description = bookData[i].description;
			break;
        }
    }
	setupBookDetails(selectedBook);
}

function setupBookDetails(selectedBook){
	let bookYears = selectedBook.yearRead.join(', ');
	let bookKeywords = selectedBook.keywords.join(', ');
	let similarArr = [];
	let similarPrinted = ``;

	if(selectedBook.similar != undefined){
		for(var i=0; i < selectedBook.similar.length; i++) {
			for (var j=0; j < bookData.length; j++) {
				if (bookData[j].title === selectedBook.similar[i]) {
					similarArr.push([bookData[j].title, bookData[j].thumb]);
					break;
				}
			}
		}
	}
	
	if(selectedBook.similar != undefined){
		for(let book in similarArr){
			similarPrinted +=  `<div class="book"> <img src="${similarArr[book][1]}"><div class="title">${similarArr[book][0]}</div></div>`;
		}
	}

	showModalPopup(selectedBook, bookYears, bookKeywords, similarPrinted);
}

function showModalPopup(selectedBook, bookYears, bookKeywords, similarPrinted){
	$('.modal').show();
	$('.overlay').show();

	$('.modal').html(`
		<div class="modalContent">
			<img src="${selectedBook.thumb}" />
			<div><span class="bookDetail">Title:</span> ${selectedBook.title}</div>
			<div><span class="bookDetail">Author:</span> ${selectedBook.author}</div>
			<div><span class="bookDetail">Rating:</span> ${selectedBook.myRating}/10</div>
			<div><span class="bookDetail">Pages:</span> ${selectedBook.pages}</div>
			<div><span class="bookDetail">Released:</span> ${selectedBook.pubDate}</div>
			<div><span class="bookDetail">Read Count:</span> ${selectedBook.readCount}</div>
			<div><span class="bookDetail">Years Read:</span> ${bookYears}</div>
			<div><span class="bookDetail">Keywords:</span> ${bookKeywords}</div>
			<div><span class="bookDetail">Description:</span> ${selectedBook.description}</div>
			<div>
				<span class="bookDetail">You may like:</span> 
				<div class="similarBooks">${similarPrinted}</div>
			</div>
		<div>
		<button onclick="hideModalPopup()" class="modalButton">Close</button>
	`);

	setRandomColor();
}

function hideModalPopup(){
	$('.modal').hide();
	$('.overlay').hide();
}

//#endregion