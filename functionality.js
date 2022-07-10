$(document).ready(function() {
	yearSetup();
	listSetup('all');
});

function setRandomColor(){
	let colorArray = ['.summaryStats', '.front', '.back'];
	
	for (let colorElement in colorArray) {
		$(colorArray[colorElement]).each(function () {
			$(this).css("background-color", random_color());
		}) 
	}
}

function random_color() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	color += '40';
	return color;
};

$(document).on('change', '#yearSelection', function(){
    event.preventDefault();
	var id = $("button.selected").prop("id");
	listSetup(id);
	setRandomColor();
});

function listSetup(sortType) { 
	let orderArray = JSON.parse(JSON.stringify(bookData));
	
	switch(sortType){
		case 'ranking':
			buttonSelect('ranking');
			for(let book in orderArray){
				orderArray[book].orderRanking = allBooksOrderedRankings.indexOf(orderArray[book].title) + 1;
			}
			orderArray.sort((a,b) => a.orderRanking - b.orderRanking);
			break;
		case 'pages':
			buttonSelect('pages');
			orderArray.sort((a,b) => b.pages - a.pages);
			break;
		case 'words':
			buttonSelect('words');
			orderArray.sort((a,b) => b.wordCount - a.wordCount);
			break;
		case 'pubDate':
			buttonSelect('pubDate');
			orderArray.sort((a,b) => b.pubDate - a.pubDate);
			break;
		case 'readCount':
			buttonSelect('readCount');
			orderArray.sort((a,b) => b.yearRead.length - a.yearRead.length);
			break;
		case 'authorFirst':
			buttonSelect('authorFirst');
			orderArray.sort((a,b) => (a.author > b.author) ? 1 : ((b.author > a.author) ? -1 : 0));
			break;
		case 'authorLast':
			buttonSelect('authorLast');
			orderArray.sort((a,b) => (a.authorLast > b.authorLast) ? 1 : ((b.authorLast > a.authorLast) ? -1 : 0));
			break;
		case 'title':
			buttonSelect('title');
			orderArray.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
			break;
		default:
			buttonSelect('authorFirst');
			break;
	}
	displayBooks(orderArray);
	$('.bookContainer').show();
	setRandomColor();
}

function buttonSelect(idOfButton){
	$(".button-80").removeClass("selected");
	$(`#${idOfButton}`).addClass("selected");
}

function displayBooks(sortedArray) {
	let bookContainer = ``;
	let pagesForAll, booksForAll, wordsForAll, timeForAll, pagesForAllUnique, booksForAllUnique, wordsForAllUnique, timeForAllUnique;
	pagesForAll = booksForAll = wordsForAll = timeForAll = pagesForAllUnique = booksForAllUnique = wordsForAllUnique = timeForAllUnique = 0;
	let averageReadingSpeed = 250;
	let yearChoice = $('#yearSelection').val();

	for (let book in sortedArray) {
		if (yearChoice == 'all' || sortedArray[book].yearRead.includes(parseInt(yearChoice)) == true) {
			let orderRanking = allBooksOrderedRankings.indexOf(sortedArray[book].title) + 1;
			bookContainer += 
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
										<span class="bold">Year:</span> ${sortedArray[book].pubDate}
									</div>
									<div class="author">
										<span class="bold">Pages:</span> ${sortedArray[book].pages}
									</div>
									<div class="author">
										<span class="bold">Words:</span> ${sortedArray[book].wordCount}
									</div>
									<div class="author">
										<span class="bold">Read Time:</span> ${convertTime(Math.floor(sortedArray[book].wordCount/averageReadingSpeed))}
									</div>
									<div class="author">
										<span class="bold">Read Count:</span> ${sortedArray[book].yearRead.length}
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

	$('.bookContainer').html(`     
		<h2>Summary</h2>
		<div class="bookList">
			<div class="summaryStats">
				<div class="title">Books Read:</div>
				<div>${booksForAllUnique}</div>
				${bookCountRereadString}
			</div>
			<div class="summaryStats">
				<div class="title">Pages Read:</div>
				<div>${pagesForAllUnique.toLocaleString("en-US")}</div>
				<div>Average: ${Math.floor(pagesForAllUnique/booksForAllUnique).toLocaleString("en-US")}</div>
				${pageCountRereadString}
			</div>
			<div class="summaryStats">
				<div class="title">Words Read:</div>
				<div>${wordsForAllUnique.toLocaleString("en-US")}</div>
				<div>Average: ${Math.floor(wordsForAllUnique/booksForAllUnique).toLocaleString("en-US")}</div>
				${wordCountRereadString}
			</div>
			<div class="summaryStats">
				<div class="title">Time Reading (at 250WPM):</div>
				<div>${convertTime(timeForAllUnique)}</div>
				<div>Average: ${convertTime(Math.floor(timeForAllUnique/booksForAllUnique))}</div>
				${timeCountRereadString}
			</div>
		</div>
		<h2>Books</h2>
		
		<div class="bookList">${bookContainer}</div>
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
			<label for="yearSelection" id="yearLabel">Select a year:</label>
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
	
	if(rminutes == 60){
		rminutes = 0;
		rhours++;
	}
	
	if(rhours == 24){
		rhours = 0;
		rdays++;
	}

	let dayWord = rdays == 1 ? 'day' : 'days';
	let hourWord = rhours == 1 ? 'hour' : 'hours';
	let minuteWord = rminutes == 1 ? 'minute' : 'minutes';

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