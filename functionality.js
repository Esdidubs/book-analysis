$(document).ready(function () {
    yearSetup();
    listSetup("all");
});

function setRandomColor() {
    let colorArray = [".summaryStats", ".front", ".back"];

    for (let colorElement in colorArray) {
        $(colorArray[colorElement]).each(function () {
            $(this).css("background-color", random_color());
        });
    }
}

function random_color() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    color += "40";
    return color;
}

$(document).on("change", "#yearSelection", function () {
    event.preventDefault();
    var id = $("button.selected").prop("id");
    listSetup(id);
    setRandomColor();
});

function listSetup(sortType) {
    let orderArray = JSON.parse(JSON.stringify(bookData));

    switch (sortType) {
        case "pubDate":
            buttonSelect("pubDate");
            orderArray.sort((a, b) => b.pubDate - a.pubDate);
            break;
        case "readCount":
            buttonSelect("readCount");
            orderArray.sort((a, b) => b.yearRead.length - a.yearRead.length);
            break;
        case "authorFirst":
            buttonSelect("authorFirst");
            orderArray.sort((a, b) => (a.author > b.author ? 1 : b.author > a.author ? -1 : 0));
            break;
        case "authorLast":
            buttonSelect("authorLast");
            orderArray.sort((a, b) => (a.authorLast > b.authorLast ? 1 : b.authorLast > a.authorLast ? -1 : 0));
            break;
        case "title":
            buttonSelect("title");
            orderArray.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
            break;
        default:
            buttonSelect("authorFirst");
            break;
    }
    displayBooks(orderArray);
    $(".bookContainer").show();
    setRandomColor();
}

function buttonSelect(idOfButton) {
    $(".button-80").removeClass("selected");
    $(`#${idOfButton}`).addClass("selected");
}

function displayBooks(sortedArray) {
    let bookContainer = ``;
    let booksForAll, booksForAllUnique;
    pagesForAll = booksForAll = wordsForAll = timeForAll = pagesForAllUnique = booksForAllUnique = wordsForAllUnique = timeForAllUnique = 0;
    let yearChoice = $("#yearSelection").val();

    for (let book in sortedArray) {
        if (yearChoice == "all" || sortedArray[book].yearRead.includes(parseInt(yearChoice)) == true) {
            bookContainer += `<div class="flip-container">
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
										<span class="bold">Year:</span> ${sortedArray[book].pubDate}
									</div>
									<div class="author">
										<span class="bold">Read Count:</span> ${sortedArray[book].yearRead.length}
									</div>
									<div class="author">
										${sortedArray[book].myRating}
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

    let bookCountRereadString = yearChoice == "all" ? `<div>(${booksForAll} with re-reads)</div>` : ``;

    $(".bookContainer").html(`     
		<h2>Summary</h2>
		<div class="bookList">
			<div class="summaryStats">
				<div class="title">Books Read:</div>
				<div>${booksForAllUnique}</div>
				${bookCountRereadString}
			</div>
			
		</div>
		<h2>Books</h2>
		
		<div class="bookList">${bookContainer}</div>
    `);
}

function yearSetup() {
    let bookArr = JSON.parse(JSON.stringify(bookData));
    let years = [];
    for (let book in bookArr) {
        if (bookArr[book].yearRead != undefined) {
            for (let i = 0; i < bookArr[book].yearRead.length; i++) {
                if (!years.includes(bookArr[book].yearRead[i])) {
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
    for (let year in years) {
        yearStr += `<option value="${years[year]}">${years[year]}</option>`;
    }

    $(".yearBox").html(`
			<label for="yearSelection" id="yearLabel">Select a year:</label>
			<select name="yearSelection" id="yearSelection" class="dataDrop">
				<option disabled>Year</option>
				<option value="all">All Years</option>        
				${yearStr}
			</select>
			<div class="yearBooks"></div>
    `);

    $("#yearSelection").val("all");
}
