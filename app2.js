// switch the buttons to just a single dropdown that toggles it on change
$(function() {
	buttons();
	highRatingSetup();
	displayData();
	allBooks();
	toReadSetup();
	rankSetup();
});


let highGoodReads = ``;
let yearReads = ``;
let allReads = ``;
let toReadList = ``;
let yearVal = 2020;

function buttons() {
	$('#buttons').on('click', '#graphBtn', function() {
		event.preventDefault();
		$('.svgContainer').toggleClass('hidden');
	});
	$('#buttons').on('click', '#highGRBtn', function() {
		event.preventDefault();
		//$('.highGRBox').toggleClass('hidden');
	});
	$('#buttons').on('click', '#rankedBtn', function() {
		event.preventDefault();
		$('.rankBox').toggleClass('hidden');
	});
	$('#dataSelection').on('change', function() {
		event.preventDefault();
		displayData();
	});
}

function displayData() {
	if ($('#dataSelection').val() == 'graphBtn') {
		makeHidden();
		$('.svgContainer').removeClass('hidden');
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
	} else if ($('#dataSelection').val() == 'toRead') {
		makeHidden();
		$('.toReadBox').removeClass('hidden');
	} else if ($('#dataSelection').val() == 'rankedBtn') {
		makeHidden();
		$('.rankBox').removeClass('hidden');
	}
}

function makeHidden() {
	$('.svgContainer').hasClass('hidden') ? '' : $('.svgContainer').toggleClass('hidden');
	$('.fiveStarBox').hasClass('hidden') ? '' : $('.fiveStarBox').toggleClass('hidden');
	$('.highGRBox').hasClass('hidden') ? '' : $('.highGRBox').toggleClass('hidden');
	$('.yearBox').hasClass('hidden') ? '' : $('.yearBox').toggleClass('hidden');
	$('.allReads').hasClass('hidden') ? '' : $('.allReads').toggleClass('hidden');
	$('.toReadBox').hasClass('hidden') ? '' : $('.toReadBox').toggleClass('hidden');
	$('.rankBox').hasClass('hidden') ? '' : $('.rankBox').toggleClass('hidden');
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

function toReadSetup() {
	toReadList = ``;
	for (let book in toRead) {
		toReadList += `<div class="book"> <img src="${toRead[book].thumb}"><div class="title">${toRead[book].title}</div><div class="author">${toRead[book]
			.author}</div></div>`;
	}

	$('.toReadBox').replaceWith(`     
		<div class="toReadBox hidden">
			<div class="bookList">${toReadList}</div>
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

function rankSetup(){
	
		let rank10 = '';
		let rank9 = '';
		let rank8 = '';
		let rank7 = '';
		let rank6 = '';
		let rank5 = '';
		let rank4 = '';
		let rank3 = '';
		let rank2 = '';
		let rank1 = '';

		for (let book in bookData) {
			if (bookData[book].myWeightedRating == 10) {
				rank10 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 9) {
				rank9 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 8) {
				rank8 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 7) {
				rank7 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 6) {
				rank6 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 5) {
				rank5 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 4) {
				rank4 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 3) {
				rank3 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 2) {
				rank2 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			} else if (bookData[book].myWeightedRating == 1) {
				rank1 += `<div class="book"> <img src="${bookData[book].thumb}"><div class="title">${bookData[book].title}</div><div class="author">${bookData[book]
					.author}</div></div>`;
			}
		}

		$('.rankBox').replaceWith(` 
			<div class="rankBox hidden">
				<p>10 Rating</p>	
				<div class="ranked">${rank10}</div>
				<p>9 Rating</p>
				<div class="ranked">${rank9}</div>
				<p>8 Rating</p>
				<div class="ranked">${rank8}</div>
				<p>7 Rating</p>
				<div class="ranked">${rank7}</div>
				<p>6 Rating</p>
				<div class="ranked">${rank6}</div>
				<p>5 Rating</p>
				<div class="ranked">${rank5}</div>
				<p>4 Rating</p>
				<div class="ranked">${rank4}</div>
				<p>3 Rating</p>
				<div class="ranked">${rank3}</div>
				
			</div>  
		`);
	
}