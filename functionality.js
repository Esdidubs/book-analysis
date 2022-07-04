/*
	Things to add:
	- May need to fix the ranking logic if 2 books have the same title
	- Have author with penname look like JK Rowling (Newt Scamander). Include penname key?
	- Have secondary authors
	- Add re-reads to quick stats?
	- Rename variables and classes to be more accurate
	- Default year is current year
*/

$(document).ready(function() {
	yearSetup();
	displayData('all');
	setRandomColor();
});

function setRandomColor(){
	$('.book').each(function () {
		$(this).css("background-color", random_color());
	}) 
	$('.mostReadAuthors').each(function () {
		$(this).css("background-color", random_color());
	})

	$('.front').each(function () {
		$(this).css("background-color", random_color());
	}) 

	$('.back').each(function () {
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

$(document).on('change', '#yearSelection', function(){
    event.preventDefault();
	displayData('all');
	setRandomColor();
});


// Shows the selected section and runs its function
function displayData(sortType) { 
	let orderArray = JSON.parse(JSON.stringify(bookData));
	
	switch(sortType){
		case 'ranking':
			for(let book in orderArray){
				orderArray[book].orderRanking = allBooksOrderedRankings.indexOf(orderArray[book].title) + 1;
			}
			orderArray.sort((a,b) => a.orderRanking - b.orderRanking);
			break;
		case 'pages':
			orderArray.sort((a,b) => b.pages - a.pages);
			break;
		case 'words':
			orderArray.sort((a,b) => b.wordCount - a.wordCount);
			break;
		case 'pubDate':
			orderArray.sort((a,b) => b.pubDate - a.pubDate);
			break;
		case 'readCount':
			orderArray.sort((a,b) => b.yearRead.length - a.yearRead.length);
			break;
		case 'authorsFirst':
			orderArray.sort((a,b) => (a.author > b.author) ? 1 : ((b.author > a.author) ? -1 : 0));
			break;
		case 'authorsLast':
			orderArray.sort((a,b) => (a.authorLast > b.authorLast) ? 1 : ((b.authorLast > a.authorLast) ? -1 : 0));
			break;
		case 'title':
			orderArray.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
			break;
		default:
			break;
	}
	allBooks(orderArray);
	$('.allReads').show();
	setRandomColor();
}

function allBooks(sortedArray) {
	let allReads = ``;
	let pagesForAll = 0;
	let booksForAll = 0;
	let wordsForAll = 0;
	let timeForAll = 0;
	let pagesForAllUnique = 0;
	let booksForAllUnique = 0;
	let wordsForAllUnique = 0;
	let timeForAllUnique = 0;
	let averageReadingSpeed = 250;
	let yearChoice = $('#yearSelection').val();

	// Appends the next book (in HTML) and adds to the count and pages of the variables
	for (let book in sortedArray) {
		if (yearChoice == 'all' || sortedArray[book].yearRead.includes(parseInt(yearChoice)) == true) {
			let orderRanking = allBooksOrderedRankings.indexOf(sortedArray[book].title) + 1;
			allReads += 
				`<div class="flip-container">
					<div class="flipper">
						<div class="front">
							<div class="front-items-container">
								<div class="front-items">
									<img src="${sortedArray[book].thumb}">
									<div class="title">
										${sortedArray[book].title}
									</div>
									<div class="author">
										${sortedArray[book].author}
									</div>
									<div class="author">
										${sortedArray[book].myRating}/10
									</div>
									<div class="author">
										Rank: ${orderRanking}
									</div>
								</div>
							</div>
						</div>
						<div class="back">
							<div class="back-items-container">
								<div class="back-items">
									<div class="author">
										Year: ${sortedArray[book].pubDate}
									</div>
									<div class="author">
										Pages: ${sortedArray[book].pages}
									</div>
									<div class="author">
										Words: ${sortedArray[book].wordCount}
									</div>
									<div class="author">
										Read Time: ${convertTime(Math.floor(sortedArray[book].wordCount/averageReadingSpeed))}
									</div>
									<div class="author">
										Read Count: ${sortedArray[book].yearRead.length}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`;
			pagesForAll += sortedArray[book].pages * sortedArray[book].yearRead.length;
			booksForAll += sortedArray[book].yearRead.length;
			wordsForAll += sortedArray[book].wordCount * sortedArray[book].yearRead.length;
			pagesForAllUnique += sortedArray[book].pages;
			booksForAllUnique++;
			wordsForAllUnique += sortedArray[book].wordCount;
			sortedArray[book].id = book;
		}
	}
	
	timeForAll = Math.floor(wordsForAll/averageReadingSpeed);
	timeForAllUnique = Math.floor(wordsForAllUnique/averageReadingSpeed);

	let bookCountRereadString = yearChoice == 'all' ? `<div>(${booksForAll} with re-reads)</div>`: ``;
	let pageCountRereadString = yearChoice == 'all' ? `<div>(${pagesForAll.toLocaleString("en-US")} with re-reads)</div>`: ``;
	let wordCountRereadString = yearChoice == 'all' ? `<div>(${wordsForAll.toLocaleString("en-US")} with re-reads)</div>`: ``;
	let timeCountRereadString = yearChoice == 'all' ? `<div>(${convertTime(timeForAll)} with re-reads)</div>`: ``;

	$('.allReads').html(`     
		<h2>Summary</h2>
		<div class="bookList">
			<div class="mostReadAuthors">
				<div class="title">Books Read:</div>
				<div>${booksForAllUnique}</div>
				${bookCountRereadString}
			</div>
			<div class="mostReadAuthors">
				<div class="title">Pages Read:</div>
				<div>${pagesForAllUnique.toLocaleString("en-US")}</div>
				<div>Average: ${Math.floor(pagesForAllUnique/booksForAllUnique).toLocaleString("en-US")}</div>
				${pageCountRereadString}
			</div>
			<div class="mostReadAuthors">
				<div class="title">Words Read:</div>
				<div>${wordsForAllUnique.toLocaleString("en-US")}</div>
				<div>Average: ${Math.floor(wordsForAllUnique/booksForAllUnique).toLocaleString("en-US")}</div>
				${wordCountRereadString}
			</div>
			<div class="mostReadAuthors">
				<div class="title">Time Reading (at 250WPM):</div>
				<div>${convertTime(timeForAllUnique)}</div>
				<div>Average: ${convertTime(Math.floor(timeForAllUnique/booksForAllUnique))}</div>
				${timeCountRereadString}
			</div>
		</div>
		<h2>Books</h2>
		
		<div class="bookList">${allReads}</div>
    `);
}

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
				<option disabled>Year</option>
				<option value="all">All Years</option>        
				${yearStr}
			</select>
			<div class="yearBooks"></div>
    `);

	$('#yearSelection').val('all');
}

function convertTime(timeInMinutes){
	let num = timeInMinutes;
	let days = (num / 60 / 24);
	let rdays = Math.floor(days);
	let hours = (days - rdays) * 24;
	let rhours = Math.floor(hours);
	let minutes = (hours - rhours) * 60;
	let rminutes = Math.round(minutes);
	let dayWord = 'days';
	let hourWord = 'hours';
	let minuteWord = 'minutes';
	if(rminutes == 60){
		rminutes = 0;
		rhours++;
	}
	if(rhours == 24){
		rhours = 0;
		rdays++;
	}
	if(rdays == 1){dayWord = 'day';}
	if(rhours == 1){hourWord = 'hour';}
	if(rminutes == 1){minuteWord = 'minute';}

	if(rdays > 0){
		if(rhours > 0 && rminutes > 0) {return `${rdays} ${dayWord}, ${rhours} ${hourWord}, ${rminutes} ${minuteWord}`;}
		else if(rhours > 0) {return `${rdays} ${dayWord}, ${rhours} ${hourWord}`;}
		else {return `${rdays} ${dayWord}, ${rminutes} ${minuteWord}`;}
	} else {
		if(rhours > 0 && rminutes > 0) {return `${rhours} ${hourWord}, ${rminutes} ${minuteWord}`;}
		else if(rhours > 0) {return `${rhours} ${hourWord}`;}
		else {return `${rminutes} ${minuteWord}`;}
	}
}