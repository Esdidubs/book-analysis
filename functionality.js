$(document).ready(function () {
    listSetup();
});

function setRandomColor() {
    let colorArray = [".summaryStats", ".front"];

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

$(document).on("change", "#dataSelection", function () {
    event.preventDefault();
    listSetup();
    setRandomColor();
});

function listSetup() {
    let orderArray = JSON.parse(JSON.stringify(bookData));

    switch ($("#dataSelection").val()) {
        case "pubDate":
            orderArray.sort((a, b) => b.pubDate - a.pubDate);
            break;
        case "authorFirst":
            orderArray.sort((a, b) => (a.author > b.author ? 1 : b.author > a.author ? -1 : 0));
            break;
        case "authorLast":
            orderArray.sort((a, b) => (a.authorLast > b.authorLast ? 1 : b.authorLast > a.authorLast ? -1 : 0));
            break;
        case "title":
            orderArray.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
            break;
        default:
            break;
    }
    displayBooks(orderArray);
    $(".bookContainer").show();
    setRandomColor();
}

function displayBooks(sortedArray) {
    let bookContainer = ``;
    let booksForAllUnique = 0;

    for (let book in sortedArray) {
        bookContainer += `<div class="flip-container">
					<div class="flipper">
						<div class="front">
							<div class="front-items-container">
								<div class="front-items">
									<div class="title">
										${sortedArray[book].title}
									</div>
									<div class="author">
										${sortedArray[book].author}
									</div>
									<div class="author">
										${sortedArray[book].pubDate}
									</div>
									<div class="author">
										${sortedArray[book].myRating}
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>`;
            booksForAllUnique++;
            sortedArray[book].id = book;
    }

    $(".bookContainer").html(`
		<h3>${booksForAllUnique} books</h3>
		<div class="bookList">${bookContainer}</div>
    `);
}