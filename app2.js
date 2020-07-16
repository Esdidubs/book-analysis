// switch the buttons to just a single dropdown that toggles it on change

$(function() {
	buttons();
	fiveStarSetup();
	highRatingSetup();
	displayData();
	allBooks();
});

let fiveStarBooks = ``;
let highGoodReads = ``;
let yearReads = ``;
let allReads = ``;
let yearVal = 2020;

function buttons() {
	$('#buttons').on('click', '#graphBtn', function() {
		event.preventDefault();
		$('.svgContainer').toggleClass('hidden');
	});
	$('#buttons').on('click', '#fiveStarBtn', function() {
		event.preventDefault();
		$('.fiveStarBox').toggleClass('hidden');
	});
	$('#buttons').on('click', '#highGRBtn', function() {
		event.preventDefault();
		$('.highGRBox').toggleClass('hidden');
	});
	$('#dataSelection').on('change', function() {
		event.preventDefault();
		console.log($('#dataSelection').val());
		displayData();
	});
}

function displayData() {
	if ($('#dataSelection').val() == 'graphBtn') {
		makeHidden();
		$('.svgContainer').removeClass('hidden');
	} else if ($('#dataSelection').val() == 'fiveStarBtn') {
		makeHidden();
		$('.fiveStarBox').removeClass('hidden');
	} else if ($('#dataSelection').val() == 'highGRBtn') {
		makeHidden();
		$('.highGRBox').removeClass('hidden');
	} else if ($('#dataSelection').val() == 'years') {
		makeHidden();
		$('.yearBox').removeClass('hidden');
		let selectedYear = $('#dataSelection option:selected').text();
		yearVal = parseInt(selectedYear.substr(selectedYear.length - 4));
		yearSearch();
	} else if ($('#dataSelection').val() == 'all') {
		makeHidden();
		$('.allReads').removeClass('hidden');
	}
}

function makeHidden() {
	$('.svgContainer').hasClass('hidden') ? '' : $('.svgContainer').toggleClass('hidden');
	$('.fiveStarBox').hasClass('hidden') ? '' : $('.fiveStarBox').toggleClass('hidden');
	$('.highGRBox').hasClass('hidden') ? '' : $('.highGRBox').toggleClass('hidden');
	$('.yearBox').hasClass('hidden') ? '' : $('.yearBox').toggleClass('hidden');
	$('.allReads').hasClass('hidden') ? '' : $('.allReads').toggleClass('hidden');
}

function allBooks() {
	allReads = ``;
	let pagesForAll = 0;
	let booksForAll = 0;
	let pagesForAllUnique = 0;
	let booksForAllUnique = 0;
	for (let book in bookData) {
		allReads += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
			.author}</div></div>`;
		pagesForAll += bookData[book].pages * bookData[book].yearRead.length;
		booksForAll += bookData[book].yearRead.length;
		pagesForAllUnique += bookData[book].pages;
		booksForAllUnique++;
	}

	$('.allReads').replaceWith(`     
		<div class="allReads hidden">
			<h3>${booksForAll} books & ${pagesForAll} pages - ${booksForAllUnique} unique books & ${pagesForAllUnique} pages</h3>
			<div class="bookList">${allReads}</div>
		</div>
    `);
}

function fiveStarSetup() {
	for (let book in bookData) {
		if (bookData[book].myRating == 5) {
			fiveStarBooks += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
				.author}</div></div>`;
		}
	}
	$('.fiveStarBox').replaceWith(` 
    <div class="fiveStarBox hidden">
            ${fiveStarBooks}
        </div>  
    `);
}

function highRatingSetup() {
	for (let book in bookData) {
		if (bookData[book].avgRating >= 4.5) {
			highGoodReads += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
				.author}</div></div>`;
		}
	}
	$('.highGRBox').replaceWith(` 
    <div class="highGRBox hidden">
            ${highGoodReads}
        </div>  
    `);
}

function yearSearch() {
	yearReads = ``;
	let pagesForYear = 0;
	let booksForYear = 0;
	for (let book in bookData) {
		if (bookData[book].yearRead.includes(yearVal) == undefined) {
		} else {
			if (bookData[book].yearRead.includes(yearVal) == true) {
				yearReads += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
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
