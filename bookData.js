let bookData = [
	/*===========================
		Author First Name - A's
	===========================*/
	{
		title     : 'Hocus Pocus & The All New Sequel',
		author    : 'A.W. Jantha',
		myRating  : 4,
		avgRating : 3.49,
		pages     : 521,
		pubDate   : 2018,
		yearRead  : [ 2018 ],
		thumb     : './images/hocus-pocus.jpg'
	},
	{
		title     : 'One Day in the Life of Ivan Denisovich',
		author    : 'Aleksandr Solzhenitsyn',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 182,
		pubDate   : 1962,
		yearRead  : [ 2006 ],
		thumb     : './images/one-day.jpg'
	},
	{
		title     : 'Unprotected Lexicon',
		author    : 'Alexa Chrisbacher',
		myRating  : 5,
		avgRating : 4.25,
		pages     : 110,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/lexicon.jpg'
	},
	{
		title     : 'Learning Chinese Characters',
		author    : 'Alison Matthews',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 384,
		pubDate   : 2007,
		yearRead  : [ 2013 ],
		thumb     : './images/chinese-characters.jpg'
	},
	{ title: 'Matched', author: 'Ally Condie', myRating: 4, avgRating: 3.66, pages: 369, pubDate: 2010, yearRead: [ 2016 ], thumb: './images/matched.jpg' },
	{ title: 'Crossed', author: 'Ally Condie', myRating: 3, avgRating: 3.52, pages: 367, pubDate: 2011, yearRead: [ 2016 ], thumb: './images/crossed.jpg' },
	{ title: 'Reached', author: 'Ally Condie', myRating: 3, avgRating: 3.56, pages: 512, pubDate: 2012, yearRead: [ 2016 ], thumb: './images/reached.jpg' },
	{
		title     : 'Scary Stories to Tell in the Dark',
		author    : 'Alvin Schwartz',
		myRating  : 4,
		avgRating : 4.06,
		pages     : 111,
		pubDate   : 1981,
		yearRead  : [ 1999 ],
		thumb     : './images/scary-stories1.jpg'
	},
	{
		title     : 'More Scary Stories to Tell in the Dark',
		author    : 'Alvin Schwartz',
		myRating  : 4,
		avgRating : 4.12,
		pages     : 100,
		pubDate   : 1984,
		yearRead  : [ 1999 ],
		thumb     : './images/scary-stories2.jpg'
	},
	{
		title     : 'More Tales to Chill Your Bones',
		author    : 'Alvin Schwartz',
		myRating  : 4,
		avgRating : 4.19,
		pages     : 128,
		pubDate   : 1991,
		yearRead  : [ 2000 ],
		thumb     : './images/scary-stories3.jpg'
	},
	{
		title     : 'Humility: The Journey Toward Holiness',
		author    : 'Andrew Murray',
		myRating  : 4,
		avgRating : 4.4,
		pages     : 112,
		pubDate   : 1895,
		yearRead  : [ 2014 ],
		thumb     : './images/humility.jpg'
	},
	{ title: 'The Martian', author: 'Andy Weir', myRating: 5, avgRating: 4.4, pages: 435, pubDate: 2012, yearRead: [ 2015 ], thumb: './images/martian.jpg' },
	{ title: 'Artemis', author: 'Andy Weir', myRating: 4, avgRating: 3.66, pages: 305, pubDate: 2017, yearRead: [ 2018 ], thumb: './images/artemis.jpg' },
	{ title: 'Grit', author: 'Angela Duckworth', myRating: 3, avgRating: 4.08, pages: 277, pubDate: 2016, yearRead: [ 2019 ], thumb: './images/grit.jpg' },
	{
		title     : 'The History and Uncertain Future of Handwriting',
		author    : 'Anne Trubek',
		myRating  : 4,
		avgRating : 3.58,
		pages     : 192,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/handwriting.jpg'
	},
	{
		title     : 'Unshakeable',
		author    : 'Anthony Robbins',
		myRating  : 5,
		avgRating : 4.11,
		pages     : 257,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/unshakeable.jpg'
	},
	{
		title     : 'How Much is Enough?',
		author    : 'Arthur Simon',
		myRating  : 4,
		avgRating : 3.62,
		pages     : 192,
		pubDate   : 2003,
		yearRead  : [ 2015 ],
		thumb     : './images/how-much.jpg'
	},
	{
		title     : 'Nothing But the Truth',
		author    : 'Avi',
		myRating  : 2,
		avgRating : 3.21,
		pages     : 177,
		pubDate   : 1991,
		yearRead  : [ 2003 ],
		thumb     : './images/nothing-but-truth.jpg'
	},

	/*===========================
		Author First Name - B's
	===========================*/
	{ title: 'Go Ask Alice', author: 'Beatrice Sparks', myRating: 3, avgRating: 3.76, pages: 213, pubDate: 1971, yearRead: [], thumb: './images/alice.jpg' },
	{
		title     : 'Beyond Awkward',
		author    : 'Beau Crosetto',
		myRating  : 4,
		avgRating : 4,
		pages     : 206,
		pubDate   : 2014,
		yearRead  : [ 2015 ],
		thumb     : './images/awkward.jpg'
	},
	{
		title     : "What If It's Us",
		author    : 'Becky Albertalli',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 448,
		pubDate   : 2018,
		yearRead  : [ 2018 ],
		thumb     : './images/what-if-its-us.jpg'
	},
	{
		title     : 'The Upside of Unrequited',
		author    : 'Becky Albertalli',
		myRating  : 5,
		avgRating : 3.97,
		pages     : 336,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/upside.jpg'
	},
	{
		title     : 'Simon vs. the Homo Sapiens Agenda',
		author    : 'Becky Albertalli',
		myRating  : 5,
		avgRating : 4.31,
		pages     : 303,
		pubDate   : 2015,
		yearRead  : [ 2017, 2018 ],
		thumb     : './images/simon.jpg'
	},
	{
		title     : 'Leah on the Offbeat',
		author    : 'Becky Albertalli',
		myRating  : 5,
		avgRating : 3.89,
		pages     : 352,
		pubDate   : 2018,
		yearRead  : [ 2018 ],
		thumb     : './images/leah.jpg'
	},
	{
		title     : '101 Video Games to Play Before You Grow Up',
		author    : 'Ben Bertoli',
		myRating  : 3,
		avgRating : 3.95,
		pages     : 144,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/games-before-grow.jpg'
	},
	{
		title     : 'Math with Bad Drawings',
		author    : 'Ben Orlin',
		myRating  : 5,
		avgRating : 4.25,
		pages     : 376,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/math-bad-drawings.jpg'
	},
	{
		title     : 'Aristotle and Dante Discover the Secrets of the Universe',
		author    : 'Benjamin Alire Sáenz',
		myRating  : 5,
		avgRating : 4.34,
		pages     : 359,
		pubDate   : 2012,
		yearRead  : [ 2017 ],
		thumb     : './images/aristotle-dante.jpg'
	},
	{
		title     : 'Fluent in 3 Months',
		author    : 'Benny Lewis',
		myRating  : 4,
		avgRating : 3.66,
		pages     : 249,
		pubDate   : 2014,
		yearRead  : [ 2015 ],
		thumb     : './images/fluent-in-3.jpg'
	},
	{
		title     : 'The Mouse and the Motorcycle',
		author    : 'Beverly Cleary',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 186,
		pubDate   : 1965,
		yearRead  : [ 2000 ],
		thumb     : './images/mouse-motorcycle.jpg'
	},
	{
		title     : 'Courageous Leadership',
		author    : 'Bill Hybels',
		myRating  : 3,
		avgRating : 4.12,
		pages     : 275,
		pubDate   : 2002,
		yearRead  : [ 2014 ],
		thumb     : './images/courageous-leadership.jpg'
	},
	{
		title     : 'When Heaven Invades Earth',
		author    : 'Bill Johnson',
		myRating  : 4,
		avgRating : 4.42,
		pages     : 190,
		pubDate   : 2005,
		yearRead  : [ 2012, 2014 ],
		thumb     : './images/heaven-invades.jpg'
	},
	{
		title     : 'Openly Straight',
		author    : 'Bill Konigsberg',
		myRating  : 4,
		avgRating : 3.9,
		pages     : 320,
		pubDate   : 2013,
		yearRead  : [ 2017 ],
		thumb     : './images/openly-straight.jpg'
	},
	{
		title     : 'Who Is the Greatest: Elvis or the Beatles?',
		author    : 'Bill Slater',
		myRating  : 4,
		avgRating : 4.1,
		pages     : 223,
		pubDate   : 2007,
		yearRead  : [ 2009 ],
		thumb     : './images/elvis-beatles.jpg'
	},
	{
		title     : "Fail Until You Don't",
		author    : 'Bobby Bones',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 224,
		pubDate   : 2018,
		yearRead  : [ 2018 ],
		thumb     : './images/fail-until.jpg'
	},
	{
		title     : 'Elantris',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.18,
		pages     : 638,
		pubDate   : 2006,
		yearRead  : [ 2020 ],
		thumb     : './images/elantris.jpg'
	},
	{
		title     : 'The Hope of Elantris',
		author    : 'Brandon Sanderson',
		myRating  : 4,
		avgRating : 3.72,
		pages     : 25,
		pubDate   : 2006,
		yearRead  : [ 2020 ],
		thumb     : './images/hope-elantris.jpg'
	},
	{
		title     : "The Emperor's Soul",
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.35,
		pages     : 175,
		pubDate   : 2012,
		yearRead  : [ 2020 ],
		thumb     : './images/emperors-soul.jpg'
	},
	{
		title     : 'Warbreaker',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.27,
		pages     : 688,
		pubDate   : 2009,
		yearRead  : [ 2020 ],
		thumb     : './images/warbreaker.jpg'
	},
	{
		title     : 'The Final Empire',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.45,
		pages     : 541,
		pubDate   : 2006,
		yearRead  : [ 2019 ],
		thumb     : './images/final-empire.jpg'
	},
	{
		title     : 'The Well of Ascension',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.37,
		pages     : 590,
		pubDate   : 2007,
		yearRead  : [ 2020 ],
		thumb     : './images/well-ascension.jpg'
	},
	{
		title     : 'The Hero of Ages',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.49,
		pages     : 572,
		pubDate   : 2008,
		yearRead  : [ 2020 ],
		thumb     : './images/hero-ages.jpg'
	},
	{
		title     : 'The Eleventh Metal',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 3.89,
		pages     : 21,
		pubDate   : 2012,
		yearRead  : [ 2020 ],
		thumb     : './images/eleventh-metal.jpg'
	},
	{
		title     : 'High Performance Habits',
		author    : 'Brendon Burchard',
		myRating  : 3,
		avgRating : 4.22,
		pages     : 393,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/high-performance.jpg'
	},
	{
		title     : 'The Rising',
		author    : 'Brian Keene',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 321,
		pubDate   : 2003,
		yearRead  : [ 2018 ],
		thumb     : './images/rising.jpg'
	},
	{
		title     : 'Guardians of the Galaxy, Volume 1',
		author    : 'Brian Michael Bendis',
		myRating  : 4,
		avgRating : 3.87,
		pages     : 136,
		pubDate   : 2013,
		yearRead  : [ 2016 ],
		thumb     : './images/guardians1.jpg'
	},
	{
		title     : 'Guardians of the Galaxy, Volume 2',
		author    : 'Brian Michael Bendis',
		myRating  : 4,
		avgRating : 3.6,
		pages     : 168,
		pubDate   : 2014,
		yearRead  : [ 2016 ],
		thumb     : './images/guardians2.jpg'
	},
	{
		title     : 'Guardians of the Galaxy/All-New X-Men',
		author    : 'Brian Michael Bendis',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 144,
		pubDate   : 2014,
		yearRead  : [ 2016 ],
		thumb     : './images/guardians-xmen.jpg'
	},
	{
		title     : 'Eat That Frog!',
		author    : 'Brian Tracy',
		myRating  : 4,
		avgRating : 3.87,
		pages     : 128,
		pubDate   : 2001,
		yearRead  : [ 2018 ],
		thumb     : './images/eat-frog.jpg'
	},
	{
		title     : 'God Is in the Small Stuff',
		author    : 'Bruce Bickel',
		myRating  : 4,
		avgRating : 3.97,
		pages     : 256,
		pubDate   : 1998,
		yearRead  : [ 2017 ],
		thumb     : './images/god-in-small-stuff.jpg'
	},
	{
		title     : 'My Teacher is an Alien',
		author    : 'Bruce Coville',
		myRating  : 4,
		avgRating : 3.78,
		pages     : 124,
		pubDate   : 1989,
		yearRead  : [ 2001 ],
		thumb     : './images/teacher-is-alien.jpg'
	},
	{
		title     : 'My Teacher Glows in the Dark',
		author    : 'Bruce Coville',
		myRating  : 4,
		avgRating : 3.8,
		pages     : 144,
		pubDate   : 1991,
		yearRead  : [ 2001 ],
		thumb     : './images/teacher-is-alien3.jpg'
	},
	{
		title     : 'Scott Pilgrim, Volume 1',
		author    : "Bryan Lee O'Malley",
		myRating  : 5,
		avgRating : 4.17,
		pages     : 168,
		pubDate   : 2004,
		yearRead  : [ 2016 ],
		thumb     : './images/scott-pilgrim1.jpg'
	},
	{
		title     : 'Scott Pilgrim, Volume 2',
		author    : "Bryan Lee O'Malley",
		myRating  : 5,
		avgRating : 4.24,
		pages     : 200,
		pubDate   : 2005,
		yearRead  : [ 2016 ],
		thumb     : './images/scott-pilgrim2.jpg'
	},
	{
		title     : 'Scott Pilgrim, Volume 3',
		author    : "Bryan Lee O'Malley",
		myRating  : 5,
		avgRating : 4.29,
		pages     : 192,
		pubDate   : 2006,
		yearRead  : [ 2016 ],
		thumb     : './images/scott-pilgrim3.jpg'
	},
	{
		title     : 'Scott Pilgrim, Volume 4',
		author    : "Bryan Lee O'Malley",
		myRating  : 4,
		avgRating : 4.32,
		pages     : 205,
		pubDate   : 2007,
		yearRead  : [ 2016 ],
		thumb     : './images/scott-pilgrim4.jpg'
	},
	{
		title     : 'Scott Pilgrim, Vol. 5',
		author    : "Bryan Lee O'Malley",
		myRating  : 4,
		avgRating : 4.33,
		pages     : 178,
		pubDate   : 2009,
		yearRead  : [ 2016 ],
		thumb     : './images/scott-pilgrim5.jpg'
	},
	{
		title     : 'Scott Pilgrim, Vol. 6',
		author    : "Bryan Lee O'Malley",
		myRating  : 4,
		avgRating : 4.42,
		pages     : 245,
		pubDate   : 2010,
		yearRead  : [ 2016 ],
		thumb     : './images/scott-pilgrim6.jpg'
	},
	/*===========================
		Author First Name - C's
	===========================*/
	{
		title     : "The Magician's Nephew",
		author    : 'C.S. Lewis',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 221,
		pubDate   : 1955,
		yearRead  : [ 2010, 2014 ],
		thumb     : './images/magician-nephew.jpg'
	},
	{
		title     : 'The Lion, the Witch and the Wardrobe',
		author    : 'C.S. Lewis',
		myRating  : 3,
		avgRating : 4.22,
		pages     : 206,
		pubDate   : 1950,
		yearRead  : [ 2012, 2017 ],
		thumb     : './images/lion-witch-wardrobe.jpg'
	},
	{
		title     : 'The Screwtape Letters',
		author    : 'C.S. Lewis',
		myRating  : 4,
		avgRating : 4.22,
		pages     : 209,
		pubDate   : 1942,
		yearRead  : [ 2013 ],
		thumb     : './images/screwtape-letters.jpg'
	},
	{
		title     : 'The Year of Less',
		author    : 'Cait Flanders',
		myRating  : 2,
		avgRating : 3.5,
		pages     : 189,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/year-of-less.jpg'
	},
	{
		title     : 'Digital Minimalism',
		author    : 'Cal Newport',
		myRating  : 4,
		avgRating : 4.07,
		pages     : 286,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/digital-minimalism.jpg'
	},
	{
		title     : "So Good They Can't Ignore You",
		author    : 'Cal Newport',
		myRating  : 4,
		avgRating : 4.11,
		pages     : 288,
		pubDate   : 2012,
		yearRead  : [ 2019 ],
		thumb     : './images/cant-ignore-you.jpg'
	},
	{
		title     : 'Seven Brief Lessons on Physics',
		author    : 'Carlo Rovelli',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 81,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/seven-lessons.jpg'
	},
	{
		title     : 'Dead Until Dark',
		author    : 'Charlaine Harris',
		myRating  : 5,
		avgRating : 3.96,
		pages     : 292,
		pubDate   : 2001,
		yearRead  : [ 2015 ],
		thumb     : './images/dead-until-dark.jpg'
	},
	{
		title     : 'Python for Everybody',
		author    : 'Charles Severance',
		myRating  : 4,
		avgRating : 4.28,
		pages     : 246,
		pubDate   : 2016,
		yearRead  : [ 2020 ],
		thumb     : './images/py4e.jpg'
	},
	{
		title     : 'The Yellow Wallpaper',
		author    : 'Charlotte Perkins Gilman',
		myRating  : 5,
		avgRating : 4.12,
		pages     : 32,
		pubDate   : 1892,
		yearRead  : [ 2007, 2018 ],
		thumb     : './images/yellow-wallpaper.jpg'
	},
	{
		title     : 'We Should All Be Feminists',
		author    : 'Chimamanda Ngozi Adichie',
		myRating  : 5,
		avgRating : 4.45,
		pages     : 52,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/should-be-feminist.jpg'
	},
	{
		title     : 'Dear Ijeawele',
		author    : 'Chimamanda Ngozi Adichie',
		myRating  : 5,
		avgRating : 4.53,
		pages     : 63,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/ijeawele.jpg'
	},
	{
		title     : 'Things Fall Apart',
		author    : 'Chinua Achebe',
		myRating  : 4,
		avgRating : 3.67,
		pages     : 209,
		pubDate   : 1958,
		yearRead  : [ 2007 ],
		thumb     : './images/things-fall-apart.jpg'
	},
	{
		title     : 'Struck By Lightning',
		author    : 'Chris Colfer',
		myRating  : 3,
		avgRating : 3.84,
		pages     : 272,
		pubDate   : 2012,
		yearRead  : [ 2016 ],
		thumb     : './images/struck-by-lightning.jpg'
	},
	{
		title     : 'The Nerdist Way',
		author    : 'Chris Hardwick',
		myRating  : 5,
		avgRating : 3.71,
		pages     : 279,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/nerdist-way.jpg'
	},
	{
		title     : 'Retire Inspired',
		author    : 'Chris Hogan',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 256,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/retire-inspired.jpg'
	},
	{
		title     : "The Gamer's Bucket List",
		author    : 'Chris Watters',
		myRating  : 3,
		avgRating : 3.36,
		pages     : 139,
		pubDate   : 2015,
		yearRead  : [ 2017 ],
		thumb     : './images/gamer-bucket.jpg'
	},
	{
		title     : 'A Dirty Job',
		author    : 'Christopher Moore',
		myRating  : 4,
		avgRating : 4.07,
		pages     : 387,
		pubDate   : 2006,
		yearRead  : [ 2018 ],
		thumb     : './images/dirty-job.jpg'
	},
	{
		title     : 'Fight Club',
		author    : 'Chuck Palahniuk',
		myRating  : 4,
		avgRating : 4.19,
		pages     : 218,
		pubDate   : 1996,
		yearRead  : [ 2015 ],
		thumb     : './images/fight-club.jpg'
	},
	{
		title     : 'Fight Club 2',
		author    : 'Chuck Palahniuk',
		myRating  : 2,
		avgRating : 3.06,
		pages     : 256,
		pubDate   : 2015,
		yearRead  : [ 2018 ],
		thumb     : './images/fight-club2.jpg'
	},
	{
		title     : 'Choke',
		author    : 'Chuck Palahniuk',
		myRating  : 3,
		avgRating : 3.7,
		pages     : 293,
		pubDate   : 2001,
		yearRead  : [ 2015 ],
		thumb     : './images/choke.jpg'
	},
	{
		title     : 'Science Hacks',
		author    : 'Colin Barras',
		myRating  : 4,
		avgRating : 4.07,
		pages     : 208,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/science-hacks.jpg'
	},
	{
		title     : 'Night of the Living Deadpool',
		author    : 'Cullen Bunn',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 96,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/night-of-deadpool.jpg'
	},
	{
		title     : 'Return of the Living Deadpool',
		author    : 'Cullen Bunn',
		myRating  : 4,
		avgRating : 3.98,
		pages     : 112,
		pubDate   : 2015,
		yearRead  : [ 2019 ],
		thumb     : './images/return-of-deadpool.jpg'
	},
	/*===========================
		Author First Name - D's
	===========================*/
	{
		title     : 'The God Who Is There',
		author    : 'D.A. Carson',
		myRating  : 3,
		avgRating : 4.3,
		pages     : 232,
		pubDate   : 2010,
		yearRead  : [ 2015 ],
		thumb     : './images/god-who-is-there.jpg'
	},
	{
		title     : 'Angels & Demons',
		author    : 'Dan Brown',
		myRating  : 5,
		avgRating : 3.9,
		pages     : 496,
		pubDate   : 2000,
		yearRead  : [ 2015 ],
		thumb     : './images/angels-and-demons.jpg'
	},
	{
		title     : 'The Da Vinci Code',
		author    : 'Dan Brown',
		myRating  : 5,
		avgRating : 3.85,
		pages     : 489,
		pubDate   : 2003,
		yearRead  : [ 2015 ],
		thumb     : './images/da-vinci-code.jpg'
	},
	{
		title     : 'The Lost Symbol',
		author    : 'Dan Brown',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 670,
		pubDate   : 2009,
		yearRead  : [ 2015 ],
		thumb     : './images/lost-symbol.jpg'
	},
	{
		title     : 'Inferno',
		author    : 'Dan Brown',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 463,
		pubDate   : 2013,
		yearRead  : [ 2016 ],
		thumb     : './images/inferno.jpg'
	},
	{
		title     : 'The Kid Who Ran for President',
		author    : 'Dan Gutman',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 156,
		pubDate   : 1996,
		yearRead  : [ 1999 ],
		thumb     : './images/kid-president.jpg'
	},
	{
		title     : 'The Little Book of Talent',
		author    : 'Daniel Coyle',
		myRating  : 5,
		avgRating : 4.09,
		pages     : 160,
		pubDate   : 2012,
		yearRead  : [ 2019 ],
		thumb     : './images/little-book-talent.jpg'
	},
	{
		title     : 'Minecraft',
		author    : 'Daniel Goldberg',
		myRating  : 5,
		avgRating : 3.86,
		pages     : 256,
		pubDate   : 2012,
		yearRead  : [ 2019 ],
		thumb     : './images/minecraft.jpg'
	},
	{
		title     : 'Drive',
		author    : 'Daniel H. Pink',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 242,
		pubDate   : 2009,
		yearRead  : [ 2019 ],
		thumb     : './images/drive.jpg'
	},
	{
		title     : 'Flowers for Algernon',
		author    : 'Daniel Keyes',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 311,
		pubDate   : 1966,
		yearRead  : [ 2002 ],
		thumb     : './images/algernon.jpg'
	},
	{
		title     : 'World of Warcraft',
		author    : 'Daniel Lisi',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 128,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/wow.jpg'
	},
	{
		title     : 'The Inferno',
		author    : 'Dante Alighieri',
		myRating  : 4,
		avgRating : 4,
		pages     : 302,
		pubDate   : 1320,
		yearRead  : [ 2008 ],
		thumb     : './images/the-inferno.jpg'
	},
	{
		title     : 'The Adventures of Captain Underpants',
		author    : 'Dav Pilkey',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 125,
		pubDate   : 2000,
		yearRead  : [ 2000 ],
		thumb     : './images/captain-underpants.jpg'
	},
	{
		title     : 'The Circle',
		author    : 'Dave Eggers',
		myRating  : 4,
		avgRating : 3.43,
		pages     : 493,
		pubDate   : 2013,
		yearRead  : [ 2019 ],
		thumb     : './images/circle.jpg'
	},
	{
		title     : 'The Money Answer Book',
		author    : 'Dave Ramsey',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 160,
		pubDate   : 2005,
		yearRead  : [ 2012, 2018, 2020 ],
		thumb     : './images/money-answer.jpg'
	},
	{
		title     : 'The Total Money Makeover',
		author    : 'Dave Ramsey',
		myRating  : 4,
		avgRating : 4.28,
		pages     : 229,
		pubDate   : 2003,
		yearRead  : [ 2018 ],
		thumb     : './images/tmm.jpg'
	},
	{
		title     : "Dave Ramsey's Complete Guide to Money",
		author    : 'Dave Ramsey',
		myRating  : 5,
		avgRating : 4.43,
		pages     : 330,
		pubDate   : 2011,
		yearRead  : [ 2018 ],
		thumb     : './images/guide-to-money.jpg'
	},
	{
		title     : 'The Caretaker of Lorne Field',
		author    : 'Dave Zeltserman',
		myRating  : 5,
		avgRating : 3.79,
		pages     : 237,
		pubDate   : 2010,
		yearRead  : [ 2018 ],
		thumb     : './images/lorne.jpg'
	},
	{
		title     : 'The Soccer Book',
		author    : 'David Goldblatt',
		myRating  : 4,
		avgRating : 4.24,
		pages     : 400,
		pubDate   : 2009,
		yearRead  : [ 2018 ],
		thumb     : './images/soccer.jpg'
	},
	{
		title     : 'Rise of the Dungeon Master',
		author    : 'David Kushner',
		myRating  : 4,
		avgRating : 3.56,
		pages     : 144,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/rise-of-dm.jpg'
	},
	{
		title     : 'Every Day',
		author    : 'David Levithan',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 322,
		pubDate   : 2012,
		yearRead  : [ 2016 ],
		thumb     : './images/every-day.jpg'
	},
	{
		title     : 'Another Day',
		author    : 'David Levithan',
		myRating  : 5,
		avgRating : 3.62,
		pages     : 327,
		pubDate   : 2015,
		yearRead  : [ 2016 ],
		thumb     : './images/another-day.jpg'
	},
	{
		title     : 'Slade House',
		author    : 'David Mitchell',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 238,
		pubDate   : 2015,
		yearRead  : [ 2018 ],
		thumb     : './images/slade-house.jpg'
	},
	{
		title     : 'Radical',
		author    : 'David Platt',
		myRating  : 5,
		avgRating : 4.18,
		pages     : 230,
		pubDate   : 2010,
		yearRead  : [ 2013 ],
		thumb     : './images/radical.jpg'
	},
	{
		title     : 'Follow Me',
		author    : 'David Platt',
		myRating  : 4,
		avgRating : 4.24,
		pages     : 245,
		pubDate   : 2013,
		yearRead  : [ 2013 ],
		thumb     : './images/follow-me.jpg'
	},
	{
		title     : 'The Revenge of Analog',
		author    : 'David Sax',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 304,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/analog.jpg'
	},
	{
		title     : 'Whispers',
		author    : 'Dean Koontz',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 464,
		pubDate   : 2006,
		yearRead  : [ 2006 ],
		thumb     : './images/whispers.jpg'
	},
	{
		title     : "Santa Claus Doesn't Mop Floors",
		author    : 'Debbie Dadey',
		myRating  : 4,
		avgRating : 3.75,
		pages     : 80,
		pubDate   : 1991,
		yearRead  : [ 2018 ],
		thumb     : './images/santa.jpg'
	},
	{
		title     : "Werewolves Don't Go to Summer Camp",
		author    : 'Debbie Dadey',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 96,
		pubDate   : 1991,
		yearRead  : [ 2018 ],
		thumb     : './images/werewolves.jpg'
	},
	{
		title     : 'A Discovery of Witches',
		author    : 'Deborah Harkness',
		myRating  : 5,
		avgRating : 4,
		pages     : 579,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/discovery-witches.jpg'
	},
	{
		title     : 'Spelunky',
		author    : 'Derek Yu',
		myRating  : 4,
		avgRating : 4.43,
		pages     : 140,
		pubDate   : 2015,
		yearRead  : [ 2019 ],
		thumb     : './images/spelunky.jpg'
	},
	{
		title     : 'Virtual Vandals',
		author    : 'Diane Duane',
		myRating  : 4,
		avgRating : 4,
		pages     : 192,
		pubDate   : 1998,
		yearRead  : [ 2002 ],
		thumb     : './images/virtual-vandals.jpg'
	},
	{
		title     : 'Eat This And Live',
		author    : 'Don Colbert',
		myRating  : 4,
		avgRating : 3.93,
		pages     : 192,
		pubDate   : 2008,
		yearRead  : [ 2013, 2014, 2017, 2020 ],
		thumb     : './images/eat-this.jpg'
	},
	{
		title     : 'A Million Miles in a Thousand Years',
		author    : 'Donald Miller',
		myRating  : 3,
		avgRating : 4.18,
		pages     : 256,
		pubDate   : 2009,
		yearRead  : [ 2016 ],
		thumb     : './images/million-miles.jpg'
	},
	{
		title     : 'Encyclopedia Brown Takes the Cake!',
		author    : 'Donald Sobol',
		myRating  : 4,
		avgRating : 3.88,
		pages     : 128,
		pubDate   : 1982,
		yearRead  : [ 1999 ],
		thumb     : './images/encyclopedia-brown.jpg'
	},
	{
		title     : 'Encyclopedia Brown and the Case of the Disgusting Sneakers',
		author    : 'Donald Sobol',
		myRating  : 4,
		avgRating : 4.11,
		pages     : 112,
		pubDate   : 1990,
		yearRead  : [ 1999 ],
		thumb     : './images/encyclopedia-brown-sneakers.jpg'
	},
	{
		title     : "The Hitchhiker's Guide to the Galaxy",
		author    : 'Douglas Adams',
		myRating  : 5,
		avgRating : 4.22,
		pages     : 215,
		pubDate   : 1979,
		yearRead  : [ 2015, 2019 ],
		thumb     : './images/hitchhiker.jpg'
	},
	{
		title     : 'The Restaurant at the End of the Universe',
		author    : 'Douglas Adams',
		myRating  : 4,
		avgRating : 4.22,
		pages     : 187,
		pubDate   : 1980,
		yearRead  : [ 2016 ],
		thumb     : './images/restaurant-end-universe.jpg'
	},
	{
		title     : 'Game On!',
		author    : 'Dustin Hansen',
		myRating  : 5,
		avgRating : 4.05,
		pages     : 368,
		pubDate   : 2016,
		yearRead  : [ 2017 ],
		thumb     : './images/game-on.jpg'
	},
	/*===========================
		Author First Name - E's
	===========================*/
	{
		title     : 'We Were Liars',
		author    : 'E. Lockhart',
		myRating  : 3,
		avgRating : 3.84,
		pages     : 242,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/we-were-liars.jpg'
	},
	{
		title     : "Charlotte's Web",
		author    : 'E.B. White',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 184,
		pubDate   : 1952,
		yearRead  : [ 2002 ],
		thumb     : './images/charlottes-web.jpg'
	},
	{
		title     : 'Creativity, Inc.',
		author    : 'Ed Catmull',
		myRating  : 4,
		avgRating : 4.21,
		pages     : 368,
		pubDate   : 2009,
		yearRead  : [ 2019 ],
		thumb     : './images/creativity.jpg'
	},
	{
		title     : 'Night',
		author    : 'Elie Wiesel',
		myRating  : 4,
		avgRating : 4.33,
		pages     : 115,
		pubDate   : 1956,
		yearRead  : [ 2009 ],
		thumb     : './images/night.jpg'
	},
	{
		title     : 'The Happiness Hack',
		author    : 'Ellen Petry Leanse',
		myRating  : 2,
		avgRating : 3.26,
		pages     : 128,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/happiness-hack.jpg'
	},
	{
		title     : '10,000 Things You Need to Know',
		author    : 'Elspeth Beidas',
		myRating  : 4,
		avgRating : 4.32,
		pages     : 1000,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/ten-thousand-things.jpg'
	},
	{
		title     : 'Wuthering Heights',
		author    : 'Emily Brontë',
		myRating  : 3,
		avgRating : 3.85,
		pages     : 464,
		pubDate   : 1847,
		yearRead  : [ 2006 ],
		thumb     : './images/wuthering.jpg'
	},
	{
		title     : 'The Forests of Silence',
		author    : 'Emily Rodda',
		myRating  : 3,
		avgRating : 3.91,
		pages     : 131,
		pubDate   : 2000,
		yearRead  : [ 2016 ],
		thumb     : './images/forests-of-silence.jpg'
	},
	{
		title     : 'Artemis Fowl',
		author    : 'Eoin Colfer',
		myRating  : 5,
		avgRating : 3.85,
		pages     : 288,
		pubDate   : 2001,
		yearRead  : [ 2004, 2018 ],
		thumb     : './images/artemis-fowl1.jpg'
	},
	{
		title     : 'The Arctic Incident',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 398,
		pubDate   : 2002,
		yearRead  : [ 2004, 2018 ],
		thumb     : './images/artemis-fowl2.jpg'
	},
	{
		title     : 'The Eternity Code',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 352,
		pubDate   : 2003,
		yearRead  : [ 2018 ],
		thumb     : './images/artemis-fowl3.jpg'
	},
	{
		title     : 'The Opal Deception',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 416,
		pubDate   : 2005,
		yearRead  : [ 2018 ],
		thumb     : './images/artemis-fowl4.jpg'
	},
	{
		title     : 'The Lost Colony',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4,
		pages     : 385,
		pubDate   : 2006,
		yearRead  : [ 2018 ],
		thumb     : './images/artemis-fowl5.jpg'
	},
	{
		title     : 'The Time Paradox',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.08,
		pages     : 391,
		pubDate   : 2008,
		yearRead  : [ 2018 ],
		thumb     : './images/artemis-fowl6.jpg'
	},
	{
		title     : 'The Atlantis Complex',
		author    : 'Eoin Colfer',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 357,
		pubDate   : 2010,
		yearRead  : [],
		thumb     : './images/artemis-fowl7.jpg'
	},
	{
		title     : 'The Last Guardian',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.15,
		pages     : 328,
		pubDate   : 2012,
		yearRead  : [ 2020 ],
		thumb     : './images/artemis-fowl8.jpg'
	},
	{
		title     : 'Ready Player One',
		author    : 'Ernest Cline',
		myRating  : 5,
		avgRating : 4.27,
		pages     : 374,
		pubDate   : 2011,
		yearRead  : [ 2013, 2017, 2018 ],
		thumb     : './images/rp1.jpg'
	},
	/*===========================
		Author First Name - F's
	===========================*/
	{
		title     : 'The Great Gatsby',
		author    : 'F. Scott Fitzgerald',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 168,
		pubDate   : 1925,
		yearRead  : [ 2006 ],
		thumb     : './images/great-gatsby.jpg'
	},
	{
		title     : 'The Ultimate Guide to Video Game Writing and Design',
		author    : 'Flint Dille',
		myRating  : 4,
		avgRating : 3.6,
		pages     : 272,
		pubDate   : 2006,
		yearRead  : [ 2013 ],
		thumb     : './images/ultimate-guide-vgs.jpg'
	},
	{
		title     : 'The Father Heart of God',
		author    : 'Floyd McClung',
		myRating  : 4,
		avgRating : 4.21,
		pages     : 144,
		pubDate   : 1984,
		yearRead  : [ 2014 ],
		thumb     : './images/father-heart.jpg'
	},
	{
		title     : 'Living the Martial Way',
		author    : 'Forrest E. Morgan',
		myRating  : 3,
		avgRating : 4.18,
		pages     : 312,
		pubDate   : 1992,
		yearRead  : [ 2013 ],
		thumb     : './images/living-martial-way.jpg'
	},
	{
		title     : 'Erasing Hell',
		author    : 'Francis Chan',
		myRating  : 5,
		avgRating : 3.94,
		pages     : 197,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/erasing-hell.jpg'
	},
	{
		title     : 'Goodbye, Things',
		author    : 'Fumio Sasaki',
		myRating  : 5,
		avgRating : 3.81,
		pages     : 272,
		pubDate   : 2015,
		yearRead  : [ 2019 ],
		thumb     : './images/goodbye-things.jpg'
	},
	/*===========================
		Author First Name - G's
	===========================*/
	{
		title     : 'Be Prepared',
		author    : 'Gary Greenberg',
		myRating  : 5,
		avgRating : 4.08,
		pages     : 240,
		pubDate   : 2004,
		yearRead  : [ 2018 ],
		thumb     : './images/be-prepared.jpg'
	},
	{
		title     : 'The One Thing',
		author    : 'Gary Keller',
		myRating  : 4,
		avgRating : 4.15,
		pages     : 240,
		pubDate   : 2013,
		yearRead  : [ 2017, 2020 ],
		thumb     : './images/one-thing.jpg'
	},
	{
		title     : 'Hatchet',
		author    : 'Gary Paulsen',
		myRating  : 4,
		avgRating : 3.72,
		pages     : 186,
		pubDate   : 1986,
		yearRead  : [ 2001 ],
		thumb     : './images/hatchet.jpg'
	},
	{
		title     : 'The River',
		author    : 'Gary Paulsen',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 132,
		pubDate   : 1991,
		yearRead  : [ 2001 ],
		thumb     : './images/river.jpg'
	},
	{
		title     : "Brian's Winter",
		author    : 'Gary Paulsen',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 144,
		pubDate   : 1996,
		yearRead  : [ 2001 ],
		thumb     : './images/brians-winter.jpg'
	},
	{
		title     : 'Forks Over Knives',
		author    : 'Gene  Stone',
		myRating  : 5,
		avgRating : 4.08,
		pages     : 214,
		pubDate   : 2011,
		yearRead  : [ 2017 ],
		thumb     : './images/forks-over-knives.jpg'
	},
	{
		title     : 'Animal Farm',
		author    : 'George Orwell',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 141,
		pubDate   : 1945,
		yearRead  : [ 2001 ],
		thumb     : './images/animal-farm.jpg'
	},
	{
		title     : 'Horrorstör',
		author    : 'Grady Hendrix',
		myRating  : 4,
		avgRating : 3.63,
		pages     : 248,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/horrorstor.jpg'
	},
	{
		title     : "My Best Friend's Exorcism",
		author    : 'Grady Hendrix',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 337,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/bfs-exorcism.jpg'
	},
	{
		title     : 'Essentialism',
		author    : 'Greg McKeown',
		myRating  : 5,
		avgRating : 4.04,
		pages     : 260,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/essentialism.jpg'
	},
	/*===========================
		Author First Name - H's
	===========================*/
	{
		title     : 'The Miracle Morning',
		author    : 'Hal Elrod',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 172,
		pubDate   : 2012,
		yearRead  : [ 2017 ],
		thumb     : './images/miracle-morning.jpg'
	},
	{
		title     : 'An Absolutely Remarkable Thing',
		author    : 'Hank Green',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 352,
		pubDate   : 2018,
		yearRead  : [ 2018, 2019 ],
		thumb     : './images/remarkable1.jpg'
	},
	{
		title     : 'A Beautifully Foolish Endeavor',
		author    : 'Hank Green',
		myRating  : 5,
		avgRating : 4.55,
		pages     : 464,
		pubDate   : 2020,
		yearRead  : [ 2020 ],
		thumb     : './images/remarkable2.jpg'
	},
	{
		title     : 'To Kill a Mockingbird',
		author    : 'Harper Lee',
		myRating  : 3,
		avgRating : 4.27,
		pages     : 376,
		pubDate   : 1960,
		yearRead  : [ 2003 ],
		thumb     : './images/mockingbird.jpg'
	},
	{
		title     : 'The Index Card',
		author    : 'Helaine Olen',
		myRating  : 4,
		avgRating : 3.9,
		pages     : 256,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/index-card.jpg'
	},
	{
		title     : 'Navigating Genesis',
		author    : 'Hugh Ross',
		myRating  : 3,
		avgRating : 4.43,
		pages     : 298,
		pubDate   : 2014,
		yearRead  : [ 2015 ],
		thumb     : './images/nav-genesis.jpg'
	},
	/*===========================
		Author First Name - I's
	===========================*/
	{
		title     : 'The Road Back to You',
		author    : 'Ian Morgan Cron',
		myRating  : 4,
		avgRating : 4.26,
		pages     : 238,
		pubDate   : 2016,
		yearRead  : [ 2020 ],
		thumb     : './images/road-back.jpg'
	},
	{
		title     : 'Insight Guides: China',
		author    : 'Insight Guides',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 480,
		pubDate   : 1990,
		yearRead  : [ 2013 ],
		thumb     : './images/insight-china.jpg'
	},
	{
		title     : 'Warm Bodies',
		author    : 'Isaac Marion',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 256,
		pubDate   : 2010,
		yearRead  : [ 2016, 2019 ],
		thumb     : './images/warm-bodies.jpg'
	},
	{
		title     : 'The New Hunger',
		author    : 'Isaac Marion',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 170,
		pubDate   : 2013,
		yearRead  : [ 2018 ],
		thumb     : './images/new-hunger.jpg'
	},
	{
		title     : 'The Burning World',
		author    : 'Isaac Marion',
		myRating  : 5,
		avgRating : 3.91,
		pages     : 512,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/burning-world.jpg'
	},
	/*===========================
		Author First Name - J's
	===========================*/
	{
		title     : 'Very Good Lives',
		author    : 'J.K. Rowling',
		myRating  : 4,
		avgRating : 4.21,
		pages     : 74,
		pubDate   : 2015,
		yearRead  : [ 2018 ],
		thumb     : './images/very-good-lives.jpg'
	},
	{
		title     : "Harry Potter and the Sorcerer's Stone",
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.47,
		pages     : 309,
		pubDate   : 1997,
		yearRead  : [ 1999, 2000, 2001, 2002, 2010, 2011, 2012, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp1.jpg'
	},
	{
		title     : 'Harry Potter and the Chamber of Secrets',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.42,
		pages     : 341,
		pubDate   : 1998,
		yearRead  : [ 2000, 2002, 2010, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp2.jpg'
	},
	{
		title     : 'Harry Potter and the Prisoner of Azkaban',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.57,
		pages     : 435,
		pubDate   : 1999,
		yearRead  : [ 2000, 2002, 2010, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp3.jpg'
	},
	{
		title     : 'Harry Potter and the Goblet of Fire',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.56,
		pages     : 734,
		pubDate   : 2000,
		yearRead  : [ 2000, 2002, 2010, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp4.jpg'
	},
	{
		title     : 'Harry Potter and the Order of the Phoenix',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.5,
		pages     : 870,
		pubDate   : 2003,
		yearRead  : [ 2003, 2010, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp5.jpg'
	},
	{
		title     : 'Harry Potter and the Half-Blood Prince',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.57,
		pages     : 652,
		pubDate   : 2005,
		yearRead  : [ 2005, 2010, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp6.jpg'
	},
	{
		title     : 'Harry Potter and the Deathly Hallows',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.62,
		pages     : 759,
		pubDate   : 2007,
		yearRead  : [ 2007, 2010, 2017, 2018, 2019, 2020 ],
		thumb     : './images/hp7.jpg'
	},
	{
		title     : 'Short Stories from Hogwarts of Heroism, Hardship and Dangerous Hobbies',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.23,
		pages     : 71,
		pubDate   : 2016,
		yearRead  : [ 2016, 2019 ],
		thumb     : './images/hogwarts-hero.jpg'
	},
	{
		title     : 'Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.19,
		pages     : 71,
		pubDate   : 2016,
		yearRead  : [ 2016 ],
		thumb     : './images/hogwarts-power.jpg'
	},
	{
		title     : 'Hogwarts: An Incomplete and Unreliable Guide',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.21,
		pages     : 79,
		pubDate   : 2016,
		yearRead  : [ 2016, 2019 ],
		thumb     : './images/hogwarts.jpg'
	},
	{
		title     : 'The Tales of Beedle the Bard',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 111,
		pubDate   : 2008,
		yearRead  : [ 2015, 2017, 2020 ],
		thumb     : './images/beedle.jpg'
	},
	{
		title     : 'Fantastic Beasts and Where to Find Them: The Original Screenplay',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.26,
		pages     : 304,
		pubDate   : 2016,
		yearRead  : [ 2016 ],
		thumb     : './images/fantastic-beasts-screenplay.jpg'
	},
	{
		title     : 'The Hobbit',
		author    : 'J.R.R. Tolkien',
		myRating  : 4,
		avgRating : 4.27,
		pages     : 389,
		pubDate   : 1937,
		yearRead  : [ 2013 ],
		thumb     : './images/hobbit.jpg'
	},
	{
		title     : 'Surprised by the Power of the Spirit',
		author    : 'Jack Deere',
		myRating  : 3,
		avgRating : 4.29,
		pages     : 302,
		pubDate   : 1993,
		yearRead  : [ 2015 ],
		thumb     : './images/surprised-by-power.jpg'
	},
	{
		title     : 'Vegan for Life',
		author    : 'Jack Norris',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 283,
		pubDate   : 2011,
		yearRead  : [ 2018 ],
		thumb     : './images/vegan-for-life.jpg'
	},
	{
		title     : 'Chasing the Dragon',
		author    : 'Jackie Pullinger',
		myRating  : 3,
		avgRating : 4.39,
		pages     : 256,
		pubDate   : 1980,
		yearRead  : [ 2014 ],
		thumb     : './images/chasing-the-dragon.jpg'
	},
	{
		title     : 'The Maze Runner',
		author    : 'James Dashner',
		myRating  : 4,
		avgRating : 4.02,
		pages     : 384,
		pubDate   : 2009,
		yearRead  : [ 2018 ],
		thumb     : './images/maze-runner.jpg'
	},
	{
		title     : "America's History, For the AP* Course",
		author    : 'James Henretta',
		myRating  : 4,
		avgRating : 3.14,
		pages     : 1168,
		pubDate   : 2006,
		yearRead  : [ 2007 ],
		thumb     : './images/ap-history.jpg'
	},
	{
		title     : 'Return to Howliday Inn',
		author    : 'James Howe',
		myRating  : 4,
		avgRating : 3.97,
		pages     : 116,
		pubDate   : 1992,
		yearRead  : [ 1999 ],
		thumb     : './images/bunnicula5.jpg'
	},
	{
		title     : 'Bunnicula Strikes Again!',
		author    : 'James Howe',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 116,
		pubDate   : 1995,
		yearRead  : [ 1999 ],
		thumb     : './images/bunnicula6.jpg'
	},
	{
		title     : "Player's Handbook",
		author    : 'James Wyatt',
		myRating  : 5,
		avgRating : 4.57,
		pages     : 320,
		pubDate   : 2014,
		yearRead  : [],
		thumb     : './images/phb.jpg'
	},
	{
		title     : 'Super Better',
		author    : 'Jane McGonigal',
		myRating  : 4,
		avgRating : 3.98,
		pages     : 480,
		pubDate   : 2015,
		yearRead  : [ 2017 ],
		thumb     : './images/super-better.jpg'
	},
	{
		title     : 'Ten Arguments For Deleting Your Social Media Accounts Right Now',
		author    : 'Jaron Lanier',
		myRating  : 4,
		avgRating : 3.53,
		pages     : 146,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/delete-social-media.jpg'
	},
	{
		title     : 'The Living and the Dead',
		author    : 'Jason',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 48,
		pubDate   : 2006,
		yearRead  : [ 2018 ],
		thumb     : './images/living-and-dead.jpg'
	},
	{
		title     : 'Blood, Sweat, and Pixels',
		author    : 'Jason Schreier',
		myRating  : 5,
		avgRating : 4.24,
		pages     : 304,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/blood-sweat-pixels.jpg'
	},
	{
		title     : 'Thirteen Reasons Why',
		author    : 'Jay Asher',
		myRating  : 5,
		avgRating : 3.94,
		pages     : 288,
		pubDate   : 2007,
		yearRead  : [ 2016 ],
		thumb     : './images/thirteen-reasons.jpg'
	},
	{
		title     : 'Nerve',
		author    : 'Jeanne Ryan',
		myRating  : 4,
		avgRating : 3.38,
		pages     : 304,
		pubDate   : 2012,
		yearRead  : [ 2018 ],
		thumb     : './images/nerve.jpg'
	},
	{
		title     : 'Diary of a Wimpy Kid',
		author    : 'Jeff Kinney',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 224,
		pubDate   : 2004,
		yearRead  : [ 2015 ],
		thumb     : './images/diary-of-wimpy.jpg'
	},
	{
		title     : 'Annihilation',
		author    : 'Jeff VanderMeer',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 195,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/annihilation.jpg'
	},
	{
		title     : 'The No-Spend Challenge Guide',
		author    : 'Jen Smith',
		myRating  : 4,
		avgRating : 3.73,
		pages     : 99,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/no-spend.jpg'
	},
	{
		title     : '200+ Ways to Protect Your Privacy',
		author    : 'Jeni Rogers',
		myRating  : 4,
		avgRating : 3.52,
		pages     : 256,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/protect-privacy.jpg'
	},
	{
		title     : 'All the Bright Places',
		author    : 'Jennifer Niven',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 378,
		pubDate   : 2015,
		yearRead  : [ 2018 ],
		thumb     : './images/all-bright-places.jpg'
	},
	{
		title     : 'The Summer I Turned Pretty',
		author    : 'Jenny Han',
		myRating  : 5,
		avgRating : 3.93,
		pages     : 276,
		pubDate   : 2009,
		yearRead  : [ 2018 ],
		thumb     : './images/summer-pretty1.jpg'
	},
	{
		title     : "It's Not Summer Without You",
		author    : 'Jenny Han',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 288,
		pubDate   : 2010,
		yearRead  : [ 2018 ],
		thumb     : './images/summer-pretty2.jpg'
	},
	{
		title     : "We'll Always Have Summer",
		author    : 'Jenny Han',
		myRating  : 5,
		avgRating : 4.12,
		pages     : 291,
		pubDate   : 2011,
		yearRead  : [ 2018 ],
		thumb     : './images/summer-pretty3.jpg'
	},
	{
		title     : 'Remnant of Victory',
		author    : 'Jeri Odell',
		myRating  : 4,
		avgRating : 3.5,
		pages     : 176,
		pubDate   : 2000,
		yearRead  : [ 2000 ],
		thumb     : './images/remnant-victory.jpg'
	},
	{
		title     : 'The Vanishings',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 148,
		pubDate   : 1998,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids1.jpg'
	},
	{
		title     : 'Second Chance',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4,
		pages     : 144,
		pubDate   : 1998,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids2.jpg'
	},
	{
		title     : 'Through the Flames',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 146,
		pubDate   : 1998,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids3.jpg'
	},
	{
		title     : 'Facing the Future',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.02,
		pages     : 150,
		pubDate   : 1998,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids4.jpg'
	},
	{
		title     : 'Nicolae High',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.03,
		pages     : 118,
		pubDate   : 1999,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids5.jpg'
	},
	{
		title     : 'The Underground',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.01,
		pages     : 114,
		pubDate   : 1999,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids6.jpg'
	},
	{
		title     : 'Busted!',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 3.99,
		pages     : 128,
		pubDate   : 2000,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids7.jpg'
	},
	{
		title     : 'Death Strike',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4,
		pages     : 123,
		pubDate   : 2000,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids8.jpg'
	},
	{
		title     : 'The Search',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 3.99,
		pages     : 162,
		pubDate   : 2000,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids9.jpg'
	},
	{
		title     : 'On the Run',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.03,
		pages     : 160,
		pubDate   : 2000,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids10.jpg'
	},
	{
		title     : 'Into the Storm',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 160,
		pubDate   : 2000,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids11.jpg'
	},
	{
		title     : 'Earthquake!',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 140,
		pubDate   : 2000,
		yearRead  : [ 2002, 2009 ],
		thumb     : './images/left-behind-kids12.jpg'
	},
	{
		title     : 'The Showdown',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.06,
		pages     : 152,
		pubDate   : 2001,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids13.jpg'
	},
	{
		title     : 'Judgment Day',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 130,
		pubDate   : 2001,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids14.jpg'
	},
	{
		title     : 'Battling the Commander',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.06,
		pages     : 140,
		pubDate   : 2001,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids15.jpg'
	},
	{
		title     : 'Fire from Heaven',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.07,
		pages     : 142,
		pubDate   : 2001,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids16.jpg'
	},
	{
		title     : 'Terror in the Stadium',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.05,
		pages     : 152,
		pubDate   : 2001,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids17.jpg'
	},
	{
		title     : 'Darkening Skies',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.06,
		pages     : 149,
		pubDate   : 2001,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids18.jpg'
	},
	{
		title     : 'Attack of Apollyon',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.1,
		pages     : 150,
		pubDate   : 2002,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids19.jpg'
	},
	{
		title     : 'A Dangerous Plan',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.08,
		pages     : 176,
		pubDate   : 2002,
		yearRead  : [ 2003, 2009 ],
		thumb     : './images/left-behind-kids20.jpg'
	},
	{
		title     : 'Secrets of New Babylon',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.07,
		pages     : 152,
		pubDate   : 2002,
		yearRead  : [ 2009 ],
		thumb     : './images/left-behind-kids21.jpg'
	},
	{
		title     : 'Escape from New Babylon',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.09,
		pages     : 148,
		pubDate   : 2002,
		yearRead  : [ 2009 ],
		thumb     : './images/left-behind-kids22.jpg'
	},
	{
		title     : 'Horsemen of Terror',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.08,
		pages     : 150,
		pubDate   : 2002,
		yearRead  : [ 2009 ],
		thumb     : './images/left-behind-kids23.jpg'
	},
	{
		title     : 'Uplink from the Underground',
		author    : 'Jerry B. Jenkins',
		myRating  : 3,
		avgRating : 4.08,
		pages     : 160,
		pubDate   : 2002,
		yearRead  : [ 2009 ],
		thumb     : './images/left-behind-kids24.jpg'
	},
	{
		title     : 'A Vampire Tale',
		author    : 'Jess Smart Smiley',
		myRating  : 3,
		avgRating : 3.2,
		pages     : 144,
		pubDate   : 2012,
		yearRead  : [ 2018 ],
		thumb     : './images/vamp-tale.jpg'
	},
	{
		title     : 'Me and Earl and the Dying Girl',
		author    : 'Jesse Andrews',
		myRating  : 3,
		avgRating : 3.56,
		pages     : 295,
		pubDate   : 2012,
		yearRead  : [ 2015 ],
		thumb     : './images/me-earl.jpg'
	},
	{
		title     : 'The Danish Way of Parenting',
		author    : 'Jessica Joelle Alexander',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 224,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/danish-way.jpg'
	},
	{
		title     : 'Full Frontal Feminism',
		author    : 'Jessica Valenti',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 288,
		pubDate   : 2007,
		yearRead  : [ 2018 ],
		thumb     : './images/full-frontal.jpg'
	},
	{
		title     : 'Storm Front',
		author    : 'Jim Butcher',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 384,
		pubDate   : 2000,
		yearRead  : [ 2018 ],
		thumb     : './images/dresden1.jpg'
	},
	{
		title     : 'Fool Moon',
		author    : 'Jim Butcher',
		myRating  : 4,
		avgRating : 4.02,
		pages     : 401,
		pubDate   : 2001,
		yearRead  : [ 2020 ],
		thumb     : './images/dresden2.jpg'
	},
	{
		title     : 'Grave Peril',
		author    : 'Jim Butcher',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 378,
		pubDate   : 2001,
		yearRead  : [ 2020 ],
		thumb     : './images/dresden3.jpg'
	},
	{
		title     : 'Passion & Purpose',
		author    : 'Jimmy Seibert',
		myRating  : 4,
		avgRating : 4.41,
		pages     : 214,
		pubDate   : 2014,
		yearRead  : [ 2014 ],
		thumb     : './images/passion-purpose.jpg'
	},	
	{
		title     : 'Discipline Equals Freedom',
		author    : 'Jocko Willink',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 189,
		pubDate   : 2017,
		yearRead  : [ 2020 ],
		thumb     : './images/discipline.jpg'
	},
	{
		title     : 'Wild at Heart',
		author    : 'John Eldredge',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 242,
		pubDate   : 2001,
		yearRead  : [ 2009, 2011 ],
		thumb     : './images/wild-at-heart.jpg'
	},
	{
		title     : 'Looking for God in Harry Potter',
		author    : 'John Granger',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 234,
		pubDate   : 2004,
		yearRead  : [ 2010 ],
		thumb     : './images/god-in-hp.jpg'
	},
	{
		title     : 'Looking for Alaska',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 4.03,
		pages     : 221,
		pubDate   : 2005,
		yearRead  : [ 2015, 2017, 2019 ],
		thumb     : './images/alaska.jpg'
	},
	{
		title     : 'An Abundance of Katherines',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.58,
		pages     : 229,
		pubDate   : 2006,
		yearRead  : [ 2015, 2017 ],
		thumb     : './images/katherines.jpg'
	},
	{
		title     : 'Turtles All the Way Down',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.96,
		pages     : 286,
		pubDate   : 2017,
		yearRead  : [ 2017, 2019 ],
		thumb     : './images/turtles.jpg'
	},
	{
		title     : 'Will Grayson, Will Grayson',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.78,
		pages     : 310,
		pubDate   : 2010,
		yearRead  : [ 2015, 2017 ],
		thumb     : './images/will-grayson.jpg'
	},
	{
		title     : 'The Fault in Our Stars',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 4.22,
		pages     : 316,
		pubDate   : 2012,
		yearRead  : [ 2015 ],
		thumb     : './images/fault-stars.jpg'
	},
	{
		title     : 'Paper Towns',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.82,
		pages     : 336,
		pubDate   : 2008,
		yearRead  : [ 2015 ],
		thumb     : './images/paper-towns.jpg'
	},
	{
		title     : 'Let it Snow',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.77,
		pages     : 352,
		pubDate   : 2008,
		yearRead  : [ 2015, 2017 ],
		thumb     : './images/let-it-snow.jpg'
	},
	{
		title     : 'Mind Hacking',
		author    : 'John Hargrave',
		myRating  : 5,
		avgRating : 3.77,
		pages     : 256,
		pubDate   : 2015,
		yearRead  : [ 2019 ],
		thumb     : './images/mind-hacking.jpg'
	},
	{
		title     : 'Chew, Vol. 1',
		author    : 'John Layman',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 128,
		pubDate   : 2009,
		yearRead  : [ 2017 ],
		thumb     : './images/chew.jpg'
	},
	{
		title     : 'Harry Potter and the Cursed Child',
		author    : 'John Tiffany',
		myRating  : 5,
		avgRating : 3.64,
		pages     : 343,
		pubDate   : 2016,
		yearRead  : [ 2016, 2017 ],
		thumb     : './images/hp-cursed.jpg'
	},
	{
		title     : 'Into the Wild',
		author    : 'Jon Krakauer',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 207,
		pubDate   : 1996,
		yearRead  : [ 2013 ],
		thumb     : './images/into-wild.jpg'
	},
	{
		title     : 'Nights of the Living Dead',
		author    : 'Jonathan Maberry',
		myRating  : 3,
		avgRating : 3.84,
		pages     : 368,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/nights-living-dead.jpg'
	},
	{
		title     : 'A Modest Proposal',
		author    : 'Jonathan Swift',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 48,
		pubDate   : 1729,
		yearRead  : [ 2008, 2020 ],
		thumb     : './images/modest-proposal.jpg'
	},
	{
		title     : 'How Not to Be Wrong',
		author    : 'Jordan Ellenberg',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 480,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/how-not-to-be-wrong.jpg'
	},
	{
		title     : 'Bird Box',
		author    : 'Josh Malerman',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 262,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/bird-box.jpg'
	},
	{
		title     : 'Living With Less',
		author    : 'Joshua Becker',
		myRating  : 4,
		avgRating : 3.68,
		pages     : 114,
		pubDate   : 2012,
		yearRead  : [ 2016 ],
		thumb     : './images/living-with-less.jpg'
	},
	{
		title     : 'The More of Less',
		author    : 'Joshua Becker',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 240,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/more-of-less.jpg'
	},
	{
		title     : 'The Minimalist Home',
		author    : 'Joshua Becker',
		myRating  : 4,
		avgRating : 3.62,
		pages     : 256,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/minimalist-home.jpg'
	},
	{
		title     : 'The Club',
		author    : 'Joshua Robinson',
		myRating  : 5,
		avgRating : 4.33,
		pages     : 368,
		pubDate   : 2018,
		yearRead  : [ 2020 ],
		thumb     : './images/club.jpg'
	},
	{
		title     : 'Haunted Mansion',
		author    : 'Joshua Williamson',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 128,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/haunted-mansion.jpg'
	},
	{
		title     : 'Buffy the Vampire Slayer: The Long Way Home',
		author    : 'Joss Whedon',
		myRating  : 3,
		avgRating : 3.96,
		pages     : 136,
		pubDate   : 2007,
		yearRead  : [ 2016 ],
		thumb     : './images/buffy-s8.jpg'
	},
	/*===========================
		Author First Name - K's
	===========================*/
	{
		title     : 'Beautiful Creatures',
		author    : 'Kami Garcia',
		myRating  : 4,
		avgRating : 3.76,
		pages     : 563,
		pubDate   : 2009,
		yearRead  : [ 2018 ],
		thumb     : './images/beautiful-creatures.jpg'
	},
	{
		title     : 'One of Us Is Lying',
		author    : 'Karen M. McManus',
		myRating  : 5,
		avgRating : 4.06,
		pages     : 361,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/one-of-us-is-lying.jpg'
	},
	{
		title     : 'Bridge to Terabithia',
		author    : 'Katherine Paterson',
		myRating  : 3,
		avgRating : 4,
		pages     : 190,
		pubDate   : 1977,
		yearRead  : [ 1999 ],
		thumb     : './images/terabithia.jpg'
	},
	{
		title     : 'Finding Sisu',
		author    : 'Katja Pantzar',
		myRating  : 3,
		avgRating : 3.67,
		pages     : 272,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/sisu.jpg'
	},
	{
		title     : 'Independent Me',
		author    : 'Kely Braswell',
		myRating  : 3,
		avgRating : 3.27,
		pages     : 205,
		pubDate   : 2014,
		yearRead  : [ 2014 ],
		thumb     : './images/independent-me.jpg'
	},
	{
		title     : "The Geek Dad's Guide to Weekend Fun",
		author    : 'Ken Denmead',
		myRating  : 4,
		avgRating : 3.77,
		pages     : 240,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/geek-dad.jpg'
	},	
	{
		title     : "The New Answers Book 1",
		author    : 'Ken Ham',
		myRating  : 2,
		avgRating : 4.19,
		pages     : 378,
		pubDate   : 2007,
		yearRead  : [ 2009 ],
		thumb     : './images/new-answers.jpg'
	},
	{
		title     : "One Flew Over the Cuckoo's Nest",
		author    : 'Ken Kesey',
		myRating  : 4,
		avgRating : 4.2,
		pages     : 325,
		pubDate   : 1962,
		yearRead  : [ 2007 ],
		thumb     : './images/one-flew-over.jpg'
	},
	{
		title     : 'Quidditch Through the Ages',
		author    : 'Kennilworthy Whisp',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 56,
		pubDate   : 2001,
		yearRead  : [ 2001, 2007 ],
		thumb     : './images/quidditch.jpg'
	},
	{
		title     : 'Unlimited Memory',
		author    : 'Kevin Horsley',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 136,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/unlimited-memory.jpg'
	},
	{
		title     : 'For the Win',
		author    : 'Kevin Werbach',
		myRating  : 4,
		avgRating : 3.75,
		pages     : 148,
		pubDate   : 2012,
		yearRead  : [ 2013 ],
		thumb     : './images/ftw.jpg'
	},
	{
		title     : 'The A-Z of Atari 8-bit Games',
		author    : 'Kieren Hawken',
		myRating  : 3,
		avgRating : 2.58,
		pages     : 196,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/az-atari-8bit.jpg'
	},
	{
		title     : 'The DUFF',
		author    : 'Kody Keplinger',
		myRating  : 5,
		avgRating : 3.83,
		pages     : 280,
		pubDate   : 2010,
		yearRead  : [ 2016 ],
		thumb     : './images/duff.jpg'
	},
	{
		title     : 'Ring',
		author    : 'Kōji Suzuki',
		myRating  : 4,
		avgRating : 3.82,
		pages     : 282,
		pubDate   : 1991,
		yearRead  : [ 2018 ],
		thumb     : './images/ring.jpg'
	},
	{
		title     : "Don't Get Caught",
		author    : 'Kurt Dinan',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 340,
		pubDate   : 2016,
		yearRead  : [ 2017 ],
		thumb     : './images/dont-get-caught.jpg'
	},
	/*===========================
		Author First Name - L's
	===========================*/
	{
		title     : 'The Awakening',
		author    : 'L.J. Smith',
		myRating  : 3,
		avgRating : 3.4,
		pages     : 253,
		pubDate   : 1991,
		yearRead  : [ 2015 ],
		thumb     : './images/awakening.jpg'
	},
	{
		title     : 'The Struggle',
		author    : 'L.J. Smith',
		myRating  : 3,
		avgRating : 3.48,
		pages     : 256,
		pubDate   : 1991,
		yearRead  : [ 2015 ],
		thumb     : './images/struggle.jpg'
	},
	{
		title     : 'The Fury',
		author    : 'L.J. Smith',
		myRating  : 4,
		avgRating : 3.54,
		pages     : 285,
		pubDate   : 1991,
		yearRead  : [ 2016 ],
		thumb     : './images/fury.jpg'
	},
	{
		title     : 'Dark Reunion',
		author    : 'L.J. Smith',
		myRating  : 4,
		avgRating : 3.53,
		pages     : 311,
		pubDate   : 1991,
		yearRead  : [ 2016 ],
		thumb     : './images/dark-reunion.jpg'
	},
	{
		title     : 'I Love You, Beth Cooper',
		author    : 'Larry Doyle',
		myRating  : 4,
		avgRating : 3.29,
		pages     : 253,
		pubDate   : 2007,
		yearRead  : [ 2015 ],
		thumb     : './images/beth-cooper.jpg'
	},
	{
		title     : 'A Secret Life',
		author    : 'Laura Peyton Roberts',
		myRating  : 4,
		avgRating : 3.69,
		pages     : 202,
		pubDate   : 2003,
		yearRead  : [ 2019 ],
		thumb     : './images/secret-life.jpg'
	},
	{
		title     : 'What the Most Successful People Do Before Breakfast',
		author    : 'Laura Vanderkam',
		myRating  : 3,
		avgRating : 3.39,
		pages     : 32,
		pubDate   : 2012,
		yearRead  : [ 2018 ],
		thumb     : './images/successful-breakfast.jpg'
	},
	{
		title     : 'Guilty Pleasures',
		author    : 'Laurell K. Hamilton',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 355,
		pubDate   : 1993,
		yearRead  : [ 2017 ],
		thumb     : './images/guilty-pleasures.jpg'
	},
	{
		title     : 'Six of Crows',
		author    : 'Leigh Bardugo',
		myRating  : 5,
		avgRating : 4.46,
		pages     : 465,
		pubDate   : 2015,
		yearRead  : [ 2017 ],
		thumb     : './images/six-of-crows.jpg'
	},
	{
		title     : 'Crooked Kingdom',
		author    : 'Leigh Bardugo',
		myRating  : 5,
		avgRating : 4.6,
		pages     : 536,
		pubDate   : 2016,
		yearRead  : [ 2017 ],
		thumb     : './images/six-of-crows2.jpg'
	},
	{
		title     : 'The Bad Beginning',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 176,
		pubDate   : 1999,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate1.jpg'
	},
	{
		title     : 'The Reptile Room',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 192,
		pubDate   : 1999,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate2.jpg'
	},
	{
		title     : 'The Wide Window',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 214,
		pubDate   : 2000,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate3.jpg'
	},
	{
		title     : 'The Miserable Mill',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 194,
		pubDate   : 2000,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate4.jpg'
	},
	{
		title     : 'The Austere Academy',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 221,
		pubDate   : 2000,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate5.jpg'
	},
	{
		title     : 'The Ersatz Elevator',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 259,
		pubDate   : 2001,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate6.jpg'
	},
	{
		title     : 'The Vile Village',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 3.96,
		pages     : 272,
		pubDate   : 2001,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate7.jpg'
	},
	{
		title     : 'The Hostile Hospital',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 3.97,
		pages     : 272,
		pubDate   : 2001,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate8.jpg'
	},
	{
		title     : 'The Carnivorous Carnival',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 3.99,
		pages     : 286,
		pubDate   : 2002,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate9.jpg'
	},
	{
		title     : 'The Slippery Slope',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 4.03,
		pages     : 337,
		pubDate   : 2003,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate10.jpg'
	},
	{
		title     : 'The Grim Grotto',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 4.01,
		pages     : 323,
		pubDate   : 2004,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate11.jpg'
	},
	{
		title     : 'The Penultimate Peril',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 353,
		pubDate   : 2005,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate12.jpg'
	},
	{
		title     : 'The End',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 337,
		pubDate   : 2006,
		yearRead  : [ 2016 ],
		thumb     : './images/unfortunate13.jpg'
	},
	{
		title     : 'Read Japanese Today',
		author    : 'Len Welsh',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 168,
		pubDate   : 1969,
		yearRead  : [ 2017 ],
		thumb     : './images/read-japanese.jpg'
	},
	{
		title     : 'The Magicians',
		author    : 'Lev Grossman',
		myRating  : 3,
		avgRating : 3.51,
		pages     : 402,
		pubDate   : 2009,
		yearRead  : [ 2018 ],
		thumb     : './images/magicians.jpg'
	},
	{
		title     : 'Big Little Lies',
		author    : 'Liane Moriarty',
		myRating  : 5,
		avgRating : 4.27,
		pages     : 460,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/big-little-lies.jpg'
	},
	{
		title     : 'The Giver',
		author    : 'Lois Lowry',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 208,
		pubDate   : 1993,
		yearRead  : [ 2015 ],
		thumb     : './images/giver.jpg'
	},
	{
		title     : 'Gathering Blue',
		author    : 'Lois Lowry',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 240,
		pubDate   : 2000,
		yearRead  : [ 2016 ],
		thumb     : './images/gathering-blue.jpg'
	},
	{
		title     : 'Messenger',
		author    : 'Lois Lowry',
		myRating  : 3,
		avgRating : 3.91,
		pages     : 169,
		pubDate   : 2004,
		yearRead  : [ 2016 ],
		thumb     : './images/messenger.jpg'
	},
	{
		title     : 'Number the Stars',
		author    : 'Lois Lowry',
		myRating  : 5,
		avgRating : 4.15,
		pages     : 137,
		pubDate   : 1989,
		yearRead  : [ 2000, 2019 ],
		thumb     : './images/number-stars.jpg'
	},
	{
		title     : 'Nazirite DNA',
		author    : 'Lou Engle',
		myRating  : 4,
		avgRating : 4.58,
		pages     : 50,
		pubDate   : 2009,
		yearRead  : [ 2015 ],
		thumb     : './images/nazirite-dna.jpg'
	},
	{
		title     : 'Holes',
		author    : 'Louis Sachar',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 233,
		pubDate   : 1998,
		yearRead  : [ 2001 ],
		thumb     : './images/holes.jpg'
	},
	{
		title     : 'Sideways Stories from Wayside School',
		author    : 'Louis Sachar',
		myRating  : 5,
		avgRating : 4.15,
		pages     : 128,
		pubDate   : 1978,
		yearRead  : [ 2003, 2015 ],
		thumb     : './images/wayside1.jpg'
	},
	{
		title     : 'Wayside School Is Falling Down',
		author    : 'Louis Sachar',
		myRating  : 5,
		avgRating : 4.17,
		pages     : 152,
		pubDate   : 1989,
		yearRead  : [ 2003 ],
		thumb     : './images/wayside2.jpg'
	},
	{
		title     : 'Wayside School Gets a Little Stranger',
		author    : 'Louis Sachar',
		myRating  : 5,
		avgRating : 4.19,
		pages     : 168,
		pubDate   : 1995,
		yearRead  : [ 2003 ],
		thumb     : './images/wayside3.jpg'
	},
	{
		title     : 'Recruited',
		author    : 'Lynn Mason',
		myRating  : 4,
		avgRating : 3.66,
		pages     : 224,
		pubDate   : 2002,
		yearRead  : [ 2019 ],
		thumb     : './images/recruited.jpg'
	},
	/*===========================
		Author First Name - M's
	===========================*/
	{
		title     : 'A Wrinkle in Time',
		author    : "Madeleine L'Engle",
		myRating  : 5,
		avgRating : 4,
		pages     : 211,
		pubDate   : 1962,
		yearRead  : [ 2015, 2018 ],
		thumb     : './images/wrinkle-in-time.jpg'
	},
	{
		title     : 'Outliers',
		author    : 'Malcolm Gladwell',
		avgRating : 4.16,
		myRating  : 5,
		pages     : 309,
		pubDate   : 2008,
		yearRead  : [ 2020 ],
		thumb     : './images/outliers.jpg'
	},	
	{
		title     : 'Tipping Point',
		author    : 'Malcolm Gladwell',
		avgRating : 3.97,
		myRating  : 5,
		pages     : 301,
		pubDate   : 2002,
		yearRead  : [ 2020 ],
		thumb     : './images/tipping-point.jpg'
	},
	{
		title     : 'Bored and Brilliant',
		author    : 'Manoush Zomorodi',
		myRating  : 3,
		avgRating : 3.73,
		pages     : 192,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/bored.jpg'
	},
	{
		title     : 'The 125 Best Brain Teasers of All Time',
		author    : 'Marcel Danesi',
		myRating  : 3,
		avgRating : 3.62,
		pages     : 206,
		pubDate   : 2018,
		yearRead  : [ 2019 ],
		thumb     : './images/brain-teasers.jpg'
	},
	{
		title     : 'Vampire Baby',
		author    : 'Marcia Thornton Jones',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 69,
		pubDate   : 1999,
		yearRead  : [ 2001 ],
		thumb     : './images/vamp-baby.jpg'
	},
	{
		title     : 'The Official Pokémon Handbook',
		author    : 'Maria Barbo',
		myRating  : 5,
		avgRating : 4.43,
		pages     : 143,
		pubDate   : 1999,
		yearRead  : [ 2000 ],
		thumb     : './images/pokemon.jpg'
	},
	{
		title     : "Where'd You Go, Bernadette",
		author    : 'Maria Semple',
		myRating  : 5,
		avgRating : 3.9,
		pages     : 330,
		pubDate   : 2012,
		yearRead  : [ 2018 ],
		thumb     : './images/bernadette.jpg'
	},
	{
		title     : 'Beautiful',
		author    : "Marie D'Abreo",
		myRating  : 3,
		avgRating : 3.84,
		pages     : 134,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/beautiful.jpg'
	},
	{
		title     : 'Legend',
		author    : 'Marie Lu',
		myRating  : 5,
		avgRating : 4.18,
		pages     : 305,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/legend.jpg'
	},
	{
		title     : 'Doctrine',
		author    : 'Mark Driscoll',
		myRating  : 4,
		avgRating : 3.93,
		pages     : 463,
		pubDate   : 2010,
		yearRead  : [ 2012 ],
		thumb     : './images/doctrine.jpg'
	},
	{
		title     : 'The Radical Reformission',
		author    : 'Mark Driscoll',
		myRating  : 4,
		avgRating : 3.71,
		pages     : 208,
		pubDate   : 2004,
		yearRead  : [ 2012 ],
		thumb     : './images/radical-ref.jpg'
	},
	{
		title     : 'The Subtle Art of Not Giving a F*ck',
		author    : 'Mark Manson',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 224,
		pubDate   : 2016,
		yearRead  : [ 2019 ],
		thumb     : './images/subtle-art.jpg'
	},
	{
		title     : 'Archie, Vol. 1',
		author    : 'Mark Waid',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 160,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/archie.jpg'
	},
	{
		title     : 'House of Leaves',
		author    : 'Mark Z. Danielewski',
		myRating  : 4,
		avgRating : 4.1,
		pages     : 705,
		pubDate   : 2000,
		yearRead  : [ 2019 ],
		thumb     : './images/house-of-leaves.jpg'
	},
	{
		title     : 'Manna',
		author    : 'Marshall Brain',
		myRating  : 5,
		avgRating : 3.94,
		pages     : 79,
		pubDate   : 2003,
		yearRead  : [ 2017 ],
		thumb     : './images/manna.jpg'
	},
	{
		title     : 'Frankenstein',
		author    : 'Mary Wollstonecraft Shelley',
		myRating  : 3,
		avgRating : 3.8,
		pages     : 335,
		pubDate   : 1818,
		yearRead  : [ 2008 ],
		thumb     : './images/frankenstein.jpg'
	},
	{
		title     : '30 Days To Understanding the Bible',
		author    : 'Max Anders',
		myRating  : 5,
		avgRating : 3.67,
		pages     : 305,
		pubDate   : 2004,
		yearRead  : [ 2013 ],
		thumb     : './images/thirty-days-bible.jpg'
	},
	{
		title     : 'World War Z',
		author    : 'Max Brooks',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 342,
		pubDate   : 2006,
		yearRead  : [ 2018 ],
		thumb     : './images/wwz.jpg'
	},
	{
		title     : 'How Not to Die',
		author    : 'Michael Greger',
		myRating  : 5,
		avgRating : 4.52,
		pages     : 576,
		pubDate   : 2015,
		yearRead  : [ 2018 ],
		thumb     : './images/how-not-to-die.jpg'
	},
	{
		title     : 'Stupid White Men',
		author    : 'Michael Moore',
		myRating  : 3,
		avgRating : 3.32,
		pages     : 304,
		pubDate   : 2001,
		yearRead  : [ 2008 ],
		thumb     : './images/stupid-white-men.jpg'
	},
	{
		title     : 'Food Rules',
		author    : 'Michael Pollan',
		myRating  : 4,
		avgRating : 4,
		pages     : 152,
		pubDate   : 2009,
		yearRead  : [ 2020 ],
		thumb     : './images/food-rules.jpg'
	},
	{
		title     : 'Mean Girls',
		author    : 'Micol Ostow',
		myRating  : 5,
		avgRating : 3.84,
		pages     : 283,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/mean-girls.jpg'
	},
	{
		title     : "Dungeon Master's Guide",
		author    : 'Mike Mearls',
		myRating  : 5,
		avgRating : 4.53,
		pages     : 320,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/dmg.jpg'
	},
	{
		title     : 'The Kobold Guide to Board Game Design',
		author    : 'Mike Selinker',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 138,
		pubDate   : 2011,
		yearRead  : [ 2015 ],
		thumb     : './images/kobold-bgs.jpg'
	},
	{
		title     : "Shirley Jackson's The Lottery: The Authorized Graphic Adaptation",
		author    : 'Miles Hyman',
		myRating  : 3,
		avgRating : 3.68,
		pages     : 160,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/lottery-graphic.jpg'
	},
	/*===========================
		Author First Name - N's
	===========================*/
	{
		title     : 'Scythe',
		author    : 'Neal Shusterman',
		myRating  : 5,
		avgRating : 4.36,
		pages     : 435,
		pubDate   : 2016,
		yearRead  : [ 2017 ],
		thumb     : './images/scythe1.jpg'
	},
	{
		title     : 'Thunderhead',
		author    : 'Neal Shusterman',
		myRating  : 5,
		avgRating : 4.5,
		pages     : 504,
		pubDate   : 2018,
		yearRead  : [ 2018 ],
		thumb     : './images/scythe2.jpg'
	},
	{
		title     : 'The Toll',
		author    : 'Neal Shusterman',
		myRating  : 5,
		avgRating : 4.29,
		pages     : 625,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/scythe3.jpg'
	},
	{
		title     : 'Neverwhere (London Below, #1)',
		author    : 'Neil Gaiman',
		myRating  : 3,
		avgRating : 4.17,
		pages     : 370,
		pubDate   : 1996,
		yearRead  : [ 2018 ],
		thumb     : './images/neverwhere.jpg'
	},
	{
		title     : 'Coraline',
		author    : 'Neil Gaiman',
		myRating  : 4,
		avgRating : 4.06,
		pages     : 162,
		pubDate   : 2002,
		yearRead  : [ 2018 ],
		thumb     : './images/coraline.jpg'
	},
	{
		title     : 'The Graveyard Book',
		author    : 'Neil Gaiman',
		myRating  : 4,
		avgRating : 4.14,
		pages     : 307,
		pubDate   : 2008,
		yearRead  : [ 2018 ],
		thumb     : './images/graveyard-book.jpg'
	},
	{
		title     : 'Victory Over the Darkness',
		author    : 'Neil T. Anderson',
		myRating  : 4,
		avgRating : 4.26,
		pages     : 256,
		pubDate   : 1990,
		yearRead  : [ 2014 ],
		thumb     : './images/victory-over-darkness.jpg'
	},
	{
		title     : 'Fantastic Beasts and Where to Find Them',
		author    : 'Newt Scamander',
		myRating  : 5,
		avgRating : 3.99,
		pages     : 128,
		pubDate   : 2001,
		yearRead  : [ 2001, 2016 ],
		thumb     : './images/fantastic-beasts.jpg'
	},
	{
		title     : 'Everything, Everything',
		author    : 'Nicola Yoon',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 306,
		pubDate   : 2015,
		yearRead  : [ 2018 ],
		thumb     : './images/everything.jpg'
	},
	/*===========================
		Author First Name - O's
	===========================*/
	{
		title     : 'Cold Sassy Tree',
		author    : 'Olive Ann Burns',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 391,
		pubDate   : 1984,
		yearRead  : [ 2004 ],
		thumb     : './images/sassy-tree.jpg'
	},
	{
		title     : 'Ender’s Game',
		author    : 'Orson Scott Card',
		myRating  : 4,
		avgRating : 4.3,
		pages     : 324,
		pubDate   : 1985,
		yearRead  : [ 2004 ],
		thumb     : './images/enders-game.jpg'
	},
	/*===========================
		Author First Name - P's
	===========================*/
	{
		title     : 'The Windup Girl',
		author    : 'Paolo Bacigalupi',
		myRating  : 3,
		avgRating : 3.75,
		pages     : 359,
		pubDate   : 2009,
		yearRead  : [ 2015 ],
		thumb     : './images/windup-girl.jpg'
	},
	{
		title     : 'The Name of the Wind',
		author    : 'Patrick Rothfuss',
		myRating  : 5,
		avgRating : 4.54,
		pages     : 662,
		pubDate   : 2007,
		yearRead  : [ 2020 ],
		thumb     : './images/name-of-wind.jpg'
	},
	{
		title     : 'The Heavenly Man',
		author    : 'Paul Hattaway',
		myRating  : 4,
		avgRating : 4.35,
		pages     : 351,
		pubDate   : 2000,
		yearRead  : [ 2015 ],
		thumb     : './images/heavenly-man.jpg'
	},
	{
		title     : 'The Girl on the Train',
		author    : 'Paula Hawkins',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 325,
		pubDate   : 2015,
		yearRead  : [ 2016 ],
		thumb     : './images/girl-on-train.jpg'
	},
	{
		title     : 'Liverpool FC',
		author    : 'Paula Wilson',
		myRating  : 4,
		avgRating : 3.50,
		pages     : 32,
		pubDate   : 2018,
		yearRead  : [ 2020 ],
		thumb     : './images/liverpool.jpg'
	},
	{
		title     : 'The Alchemist',
		author    : 'Paulo Coelho',
		myRating  : 3,
		avgRating : 3.87,
		pages     : 197,
		pubDate   : 1988,
		yearRead  : [ 2018 ],
		thumb     : './images/alchemist.jpg'
	},
	{
		title     : 'The Good Earth',
		author    : 'Pearl S. Buck',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 418,
		pubDate   : 1931,
		yearRead  : [ 2006 ],
		thumb     : './images/good-earth.jpg'
	},
	{
		title     : 'Shortest Way Home',
		author    : 'Pete Buttigieg',
		myRating  : 5,
		avgRating : 4.21,
		pages     : 352,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/shortest-way-home.jpg'
	},
	{
		title     : '30 Years of Adventure: A Celebration of Dungeons & Dragons',
		author    : 'Peter Archer',
		myRating  : 3,
		avgRating : 3.71,
		pages     : 286,
		pubDate   : 2004,
		yearRead  : [ 2016 ],
		thumb     : './images/thirty-years.jpg'
	},
	{
		title     : '1001 Books You Must Read Before You Die',
		author    : 'Peter Boxall',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 960,
		pubDate   : 2006,
		yearRead  : [ 2017 ],
		thumb     : './images/thousand-one-books.jpg'
	},
	{
		title     : 'Resident Evil',
		author    : 'Philip Reed',
		myRating  : 4,
		avgRating : 4.08,
		pages     : 192,
		pubDate   : 2020,
		yearRead  : [ 2020 ],
		thumb     : './images/resident-evil.jpg'
	},
	{
		title     : 'Hidden Codes & Grand Designs',
		author    : 'Pierre Berloquin',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 375,
		pubDate   : 2007,
		yearRead  : [ 2014 ],
		thumb     : './images/hidden-codes.jpg'
	},
	/*===========================
		Author First Name - Q's
	===========================*/

	/*===========================
		Author First Name - R's
	===========================*/
	{
		title     : 'Dr. Maniac Will See You Now',
		author    : 'R.L. Stine',
		myRating  : 2,
		avgRating : 3.83,
		pages     : 160,
		pubDate   : 2013,
		yearRead  : [ 2017 ],
		thumb     : './images/dr-maniac.jpg'
	},
	{
		title     : 'Dr. Maniac vs. Robby Schwartz',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 3.7,
		pages     : 132,
		pubDate   : 2008,
		yearRead  : [ 2017 ],
		thumb     : './images/dr-maniac-vs.jpg'
	},
	{
		title     : 'Welcome To Camp Slither',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 3.91,
		pages     : 133,
		pubDate   : 2009,
		yearRead  : [ 2017 ],
		thumb     : './images/camp-slither.jpg'
	},
	{
		title     : 'Little Shop of Hamsters',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 3.93,
		pages     : 135,
		pubDate   : 2010,
		yearRead  : [ 2017 ],
		thumb     : './images/little-shop-hamsters.jpg'
	},
	{
		title     : 'When The Ghost Dog Howls',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 4.02,
		pages     : 137,
		pubDate   : 2010,
		yearRead  : [ 2017 ],
		thumb     : './images/ghost-dog-howls.jpg'
	},
	{
		title     : 'Slappy Birthday to You',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 4.11,
		pages     : 139,
		pubDate   : 2017,
		yearRead  : [ 2017 ],
		thumb     : './images/slappy-birthday.jpg'
	},
	{
		title     : 'Slappy New Year!',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 4.09,
		pages     : 160,
		pubDate   : 2010,
		yearRead  : [ 2017 ],
		thumb     : './images/slappy-new-year.jpg'
	},
	{
		title     : 'It Came from Beneath the Sink!',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.55,
		pages     : 112,
		pubDate   : 1995,
		yearRead  : [ 2016 ],
		thumb     : './images/it-came-from-beneath.jpg'
	},
	{
		title     : 'Werewolf Skin',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 125,
		pubDate   : 1997,
		yearRead  : [ 2015 ],
		thumb     : './images/werewolf-skin.jpg'
	},
	{
		title     : 'Say Cheese and Die!',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.76,
		pages     : 144,
		pubDate   : 1992,
		yearRead  : [ 1999 ],
		thumb     : './images/say-cheese-die.jpg'
	},
	{
		title     : 'Say Cheese - And Die Screaming',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 125,
		pubDate   : 2009,
		yearRead  : [ 2017 ],
		thumb     : './images/say-cheese-die-screaming.jpg'
	},
	{
		title     : 'Welcome to Dead House',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 126,
		pubDate   : 1992,
		yearRead  : [ 2017 ],
		thumb     : './images/dead-house.jpg'
	},
	{
		title     : 'Escape From Horrorland',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 132,
		pubDate   : 2009,
		yearRead  : [ 2017 ],
		thumb     : './images/escape-horrorland.jpg'
	},
	{
		title     : "Who's Your Mummy?",
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 133,
		pubDate   : 2009,
		yearRead  : [ 2017 ],
		thumb     : './images/whos-your-mummy.jpg'
	},
	{
		title     : 'Creature Teacher: The Final Exam',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.03,
		pages     : 133,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/creature-teacher.jpg'
	},
	{
		title     : 'Night of the Living Dummy',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 134,
		pubDate   : 1993,
		yearRead  : [ 2017 ],
		thumb     : './images/night-living-dummy.jpg'
	},
	{
		title     : 'My Friends Call Me Monster',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.82,
		pages     : 138,
		pubDate   : 2015,
		yearRead  : [ 2017 ],
		thumb     : './images/friends-call-me-monster.jpg'
	},
	{
		title     : 'One Day at Horrorland',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.9,
		pages     : 123,
		pubDate   : 1994,
		yearRead  : [ 2006 ],
		thumb     : './images/horrorland.jpg'
	},
	{
		title     : 'Stay Out of the Basement',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.67,
		pages     : 144,
		pubDate   : 1992,
		yearRead  : [ 2017 ],
		thumb     : './images/stay-out-basement.jpg'
	},
	{
		title     : "The Curse of the Mummy's Tomb",
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.67,
		pages     : 144,
		pubDate   : 1993,
		yearRead  : [ 2017 ],
		thumb     : './images/curse-of-mummy.jpg'
	},
	{
		title     : 'The Horror At Chiller House',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.09,
		pages     : 160,
		pubDate   : 2011,
		yearRead  : [ 2017 ],
		thumb     : './images/chiller-house.jpg'
	},
	{
		title     : 'The 12 Screams of Christmas',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.12,
		pages     : 174,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/twelve-screams.jpg'
	},
	{
		title     : 'Zombie Halloween',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 174,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/zombie-halloween.jpg'
	},
	{
		title     : 'Weirdo Halloween',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4,
		pages     : 214,
		pubDate   : 2010,
		yearRead  : [ 2017 ],
		thumb     : './images/weirdo-halloween.jpg'
	},
	{
		title     : 'Creepy Creatures',
		author    : 'R.L. Stine',
		myRating  : 5,
		avgRating : 3.9,
		pages     : 144,
		pubDate   : 2006,
		yearRead  : [ 2017 ],
		thumb     : './images/creepy-creatures.jpg'
	},
	{
		title     : 'Terror Trips',
		author    : 'R.L. Stine',
		myRating  : 5,
		avgRating : 3.97,
		pages     : 144,
		pubDate   : 2007,
		yearRead  : [ 2017 ],
		thumb     : './images/terror-trips.jpg'
	},
	{
		title     : '2,000 to 10,000',
		author    : 'Rachel Aaron',
		myRating  : 3,
		avgRating : 4.19,
		pages     : 72,
		pubDate   : 2012,
		yearRead  : [ 2018 ],
		thumb     : './images/two-thousand.jpg'
	},
	{
		title     : 'Less: A Visual Guide to Minimalism',
		author    : 'Rachel Aust',
		myRating  : 4,
		avgRating : 3.55,
		pages     : 144,
		pubDate   : 2018,
		yearRead  : [ 2018 ],
		thumb     : './images/less.jpg'
	},
	{
		title     : "Nick & Norah's Infinite Playlist",
		author    : 'Rachel Cohn',
		myRating  : 5,
		avgRating : 3.71,
		pages     : 183,
		pubDate   : 2006,
		yearRead  : [ 2015, 2018 ],
		thumb     : './images/nick-norah.jpg'
	},
		
	{
		title     : "Dot Journaling",
		author    : 'Rachel Miller',
		myRating  : 3,
		avgRating : 3.8,
		pages     : 241,
		pubDate   : 2020,
		yearRead  : [ 2020 ],
		thumb     : './images/dot-journaling.jpg'
	},
	{
		title     : 'Ghosts',
		author    : 'Raina Telgemeier',
		myRating  : 5,
		avgRating : 4.23,
		pages     : 256,
		pubDate   : 2016,
		yearRead  : [ 2017 ],
		thumb     : './images/ghosts.jpg'
	},
	{
		title     : 'Landline',
		author    : 'Rainbow Rowell',
		myRating  : 4,
		avgRating : 3.55,
		pages     : 310,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/landline.jpg'
	},
	{
		title     : 'Attachments',
		author    : 'Rainbow Rowell',
		myRating  : 5,
		avgRating : 3.91,
		pages     : 323,
		pubDate   : 2011,
		yearRead  : [ 2018 ],
		thumb     : './images/attachments.jpg'
	},
	{
		title     : 'Eleanor & Park',
		author    : 'Rainbow Rowell',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 328,
		pubDate   : 2012,
		yearRead  : [ 2016 ],
		thumb     : './images/eleanor-park.jpg'
	},
	{
		title     : 'Fangirl',
		author    : 'Rainbow Rowell',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 483,
		pubDate   : 2013,
		yearRead  : [ 2016 ],
		thumb     : './images/fangirl.jpg'
	},
	{
		title     : 'Carry On',
		author    : 'Rainbow Rowell',
		myRating  : 5,
		avgRating : 4.24,
		pages     : 522,
		pubDate   : 2015,
		yearRead  : [ 2016, 2018 ],
		thumb     : './images/carry-on1.jpg'
	},
	{
		title     : 'Wayward Son',
		author    : 'Rainbow Rowell',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 356,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/carry-on2.jpg'
	},
	{
		title     : 'Thing Explainer: Complicated Stuff in Simple Words',
		author    : 'Randall Munroe',
		myRating  : 4,
		avgRating : 4.15,
		pages     : 64,
		pubDate   : 2015,
		yearRead  : [ 2017 ],
		thumb     : './images/thing-explainer.jpg'
	},
	{
		title     : 'What If? Serious Scientific Answers to Absurd Hypothetical Questions',
		author    : 'Randall Munroe',
		myRating  : 5,
		avgRating : 4.16,
		pages     : 303,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/what-if.jpg'
	},
	{
		title     : 'Money, Possessions and Eternity',
		author    : 'Randy Alcorn',
		myRating  : 3,
		avgRating : 4.2,
		pages     : 528,
		pubDate   : 1989,
		yearRead  : [ 2015 ],
		thumb     : './images/money-eternity.jpg'
	},
	{
		title     : 'The Treasure Principle: Unlocking the Secret of Joyful Giving',
		author    : 'Randy Alcorn',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 120,
		pubDate   : 2001,
		yearRead  : [ 2013 ],
		thumb     : './images/treasure-principle.jpg'
	},
	{
		title     : 'Safely Home',
		author    : 'Randy Alcorn',
		myRating  : 5,
		avgRating : 4.43,
		pages     : 402,
		pubDate   : 2001,
		yearRead  : [ 2013 ],
		thumb     : './images/safely-home.jpg'
	},
	{
		title     : 'Miss Peregrine’s Home for Peculiar Children',
		author    : 'Ransom Riggs',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 382,
		pubDate   : 2011,
		yearRead  : [ 2015 ],
		thumb     : './images/peregrine.jpg'
	},
	{
		title     : 'Welcome to the Club',
		author    : "Raquel D'Apice",
		myRating  : 5,
		avgRating : 4.28,
		pages     : 144,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/welcome-to-club.jpg'
	},
	{
		title     : 'Fahrenheit 451',
		author    : 'Ray Bradbury',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 180,
		pubDate   : 1953,
		yearRead  : [ 2015 ],
		thumb     : './images/f451.jpg'
	},
	{
		title     : 'Cemetery Dance: Issue 74-75',
		author    : 'Richard Chizmar',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 192,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/cemetary-dance.jpg'
	},
	{
		title     : 'Celebration of Discipline',
		author    : 'Richard J. Foster',
		myRating  : 4,
		avgRating : 4.19,
		pages     : 256,
		pubDate   : 1978,
		yearRead  : [ 2014 ],
		thumb     : './images/celebration-of-disc.jpg'
	},
	{
		title     : 'I Am Legend',
		author    : 'Richard Matheson',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 160,
		pubDate   : 1954,
		yearRead  : [ 2016 ],
		thumb     : './images/i-am-legend.jpg'
	},
	{
		title     : 'Vampire Academy',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 332,
		pubDate   : 2007,
		yearRead  : [ 2016 ],
		thumb     : './images/vamp-academy1.jpg'
	},
	{
		title     : 'Frostbite',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.28,
		pages     : 327,
		pubDate   : 2008,
		yearRead  : [ 2016 ],
		thumb     : './images/vamp-academy2.jpg'
	},
	{
		title     : 'Shadow Kiss',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.36,
		pages     : 443,
		pubDate   : 2008,
		yearRead  : [ 2016 ],
		thumb     : './images/vamp-academy3.jpg'
	},
	{
		title     : 'Blood Promise',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.34,
		pages     : 503,
		pubDate   : 2009,
		yearRead  : [ 2016 ],
		thumb     : './images/vamp-academy4.jpg'
	},
	{
		title     : 'Spirit Bound',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.36,
		pages     : 489,
		pubDate   : 2010,
		yearRead  : [ 2016 ],
		thumb     : './images/vamp-academy5.jpg'
	},
	{
		title     : 'Last Sacrifice',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.4,
		pages     : 594,
		pubDate   : 2010,
		yearRead  : [ 2016 ],
		thumb     : './images/vamp-academy6.jpg'
	},
	{
		title     : 'The Final Quest',
		author    : 'Rick Joyner',
		myRating  : 4,
		avgRating : 4.34,
		pages     : 170,
		pubDate   : 1996,
		yearRead  : [ 2014 ],
		thumb     : './images/final-quest.jpg'
	},
	{
		title     : 'The Lightning Thief',
		author    : 'Rick Riordan',
		myRating  : 5,
		avgRating : 4.25,
		pages     : 375,
		pubDate   : 2005,
		yearRead  : [ 2016 ],
		thumb     : './images/percy-jackson1.jpg'
	},
	{
		title     : 'The 5th Wave',
		author    : 'Rick Yancey',
		myRating  : 5,
		avgRating : 4.05,
		pages     : 460,
		pubDate   : 2013,
		yearRead  : [ 2015 ],
		thumb     : './images/the-5th-wave.jpg'
	},
	{
		title     : 'Slay the Dragon',
		author    : 'Robert Denton Bryant',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 232,
		pubDate   : 2015,
		yearRead  : [ 2017 ],
		thumb     : './images/slay-dragon.jpg'
	},
	{
		title     : 'Outcast by Kirkman & Azaceta Book 1',
		author    : 'Robert Kirkman',
		myRating  : 3,
		avgRating : 4.08,
		pages     : 296,
		pubDate   : 2016,
		yearRead  : [ 2017 ],
		thumb     : './images/outcast.jpg'
	},
	{
		title     : 'The Walking Dead, Vol. 1',
		author    : 'Robert Kirkman',
		myRating  : 4,
		avgRating : 4.27,
		pages     : 144,
		pubDate   : 2004,
		yearRead  : [ 2016 ],
		thumb     : './images/walking-dead1.jpg'
	},
	{
		title     : 'Good Luck Have Fun',
		author    : 'Roland Li',
		myRating  : 3,
		avgRating : 3.64,
		pages     : 268,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/good-luck-have-fun.jpg'
	},
	{
		title     : 'The Deadly Dungeon',
		author    : 'Ron Roy',
		myRating  : 4,
		avgRating : 4.09,
		pages     : 86,
		pubDate   : 1998,
		yearRead  : [ 2000 ],
		thumb     : './images/deadly-dungeon.jpg'
	},
	{
		title     : 'The Invisible Island',
		author    : 'Ron Roy',
		myRating  : 4,
		avgRating : 4.1,
		pages     : 96,
		pubDate   : 1999,
		yearRead  : [ 2000 ],
		thumb     : './images/invisible-island.jpg'
	},
	{
		title     : 'The Missing Mummy',
		author    : 'Ron Roy',
		myRating  : 4,
		avgRating : 4.09,
		pages     : 83,
		pubDate   : 2001,
		yearRead  : [ 2001 ],
		thumb     : './images/missing-mummy.jpg'
	},
	{
		title     : 'The Big Book of 30-Day Challenges',
		author    : 'Rosanna Casper',
		myRating  : 3,
		avgRating : 3.39,
		pages     : 144,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/book-of-30-day.jpg'
	},
	{
		title     : 'Milk and Honey',
		author    : 'Rupi Kaur',
		myRating  : 4,
		avgRating : 4.09,
		pages     : 204,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/milk-and-honey.jpg'
	},
	{
		title     : 'Play Dead',
		author    : 'Ryan Brown',
		myRating  : 4,
		avgRating : 3.35,
		pages     : 352,
		pubDate   : 2010,
		yearRead  : [ 2010 ],
		thumb     : './images/play-dead.jpg'
	},
	/*===========================
		Author First Name - S's
	===========================*/
	{
		title     : 'The Umbrella Conspiracy',
		author    : 'S.D. Perry',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 304,
		pubDate   : 1998,
		yearRead  : [ 2003 ],
		thumb     : './images/resident-evil1.jpg'
	},
	{
		title     : 'Caliban Cove',
		author    : 'S.D. Perry',
		myRating  : 4,
		avgRating : 3.64,
		pages     : 256,
		pubDate   : 1998,
		yearRead  : [ 2003 ],
		thumb     : './images/resident-evil2.jpg'
	},
	{
		title     : 'City of the Dead',
		author    : 'S.D. Perry',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 352,
		pubDate   : 1999,
		yearRead  : [ 2003 ],
		thumb     : './images/resident-evil3.jpg'
	},
	{
		title     : 'Underworld',
		author    : 'S.D. Perry',
		myRating  : 4,
		avgRating : 3.77,
		pages     : 256,
		pubDate   : 1999,
		yearRead  : [ 2004 ],
		thumb     : './images/resident-evil4.jpg'
	},
	{
		title     : 'Nemesis',
		author    : 'S.D. Perry',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 288,
		pubDate   : 2000,
		yearRead  : [ 2004 ],
		thumb     : './images/resident-evil5.jpg'
	},
	{
		title     : 'Rumble Fish',
		author    : 'S.E. Hinton',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 144,
		pubDate   : 1975,
		yearRead  : [ 2002 ],
		thumb     : './images/rumble-fish.jpg'
	},
	{
		title     : 'Scene but Not Heard',
		author    : 'Sam Henderson',
		myRating  : 3,
		avgRating : 3.7,
		pages     : 119,
		pubDate   : 2013,
		yearRead  : [ 2018 ],
		thumb     : './images/scene-not-heard.jpg'
	},
	{
		title     : 'Pretty Little Liars',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 3.88,
		pages     : 286,
		pubDate   : 2006,
		yearRead  : [ 2018 ],
		thumb     : './images/pretty-little-liars1.jpg'
	},
	{
		title     : 'Flawless',
		author    : 'Sara Shepard',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 330,
		pubDate   : 2007,
		yearRead  : [ 2018 ],
		thumb     : './images/pretty-little-liars2.jpg'
	},
	{
		title     : 'Perfect',
		author    : 'Sara Shepard',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 298,
		pubDate   : 2007,
		yearRead  : [ 2020 ],
		thumb     : './images/pretty-little-liars3.jpg'
	},
	{
		title     : 'Unbelievable',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.04,
		pages     : 335,
		pubDate   : 2008,
		yearRead  : [ 2020 ],
		thumb     : './images/pretty-little-liars4.jpg'
	},
	{
		title     : 'Wicked',
		author    : 'Sara Shepard',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 312,
		pubDate   : 2008,
		yearRead  : [ 2020 ],
		thumb     : './images/pretty-little-liars5.jpg'
	},
	{
		title     : 'Killer',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.05,
		pages     : 320,
		pubDate   : 2009,
		yearRead  : [ 2020 ],
		thumb     : './images/pretty-little-liars6.jpg'
	},
	{
		title     : 'Heartless',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 274,
		pubDate   : 2010,
		yearRead  : [ 2020 ],
		thumb     : './images/pretty-little-liars7.jpg'
	},
	{
		title     : 'Wanted',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 261,
		pubDate   : 2010,
		yearRead  : [ 2020 ],
		thumb     : './images/pretty-little-liars8.jpg'
	},
	{
		title     : "Rick and Morty: Lil' Poopy Superstar",
		author    : 'Sarah Graley',
		myRating  : 3,
		avgRating : 3.55,
		pages     : 128,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/rick-morty-poopy.jpg'
	},
	{
		title     : 'Level Up!: The Guide to Great Video Game Design',
		author    : 'Scott Rogers',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 492,
		pubDate   : 2010,
		yearRead  : [ 2017 ],
		thumb     : './images/level-up.jpg'
	},
	{
		title     : 'Uglies',
		author    : 'Scott Westerfeld',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 425,
		pubDate   : 2005,
		yearRead  : [ 2015, 2018 ],
		thumb     : './images/uglies1.jpg'
	},
	{
		title     : 'Pretties',
		author    : 'Scott Westerfeld',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 370,
		pubDate   : 2005,
		yearRead  : [ 2015 ],
		thumb     : './images/uglies2.jpg'
	},
	{
		title     : 'Specials',
		author    : 'Scott Westerfeld',
		myRating  : 3,
		avgRating : 3.77,
		pages     : 372,
		pubDate   : 2006,
		yearRead  : [ 2015 ],
		thumb     : './images/uglies3.jpg'
	},
	{
		title     : 'Extras',
		author    : 'Scott Westerfeld',
		myRating  : 4,
		avgRating : 3.59,
		pages     : 417,
		pubDate   : 2006,
		yearRead  : [ 2015 ],
		thumb     : './images/uglies4.jpg'
	},
	{
		title     : 'Uglies: Cutters',
		author    : 'Scott Westerfeld',
		myRating  : 3,
		avgRating : 3.61,
		pages     : 176,
		pubDate   : 2012,
		yearRead  : [ 2017 ],
		thumb     : './images/uglies-graphic2.jpg'
	},
	{
		title     : 'Abraham Lincoln: Vampire Hunter',
		author    : 'Seth Grahame-Smith',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 336,
		pubDate   : 2010,
		yearRead  : [ 2013 ],
		thumb     : './images/abe-lincoln-vamp.jpg'
	},
	{
		title     : 'Smartcuts',
		author    : 'Shane Snow',
		myRating  : 4,
		avgRating : 3.93,
		pages     : 272,
		pubDate   : 2014,
		yearRead  : [ 2018 ],
		thumb     : './images/smartcuts.jpg'
	},
	{
		title     : 'Kicking It',
		author    : 'Shanna Germain',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 79,
		pubDate   : 2012,
		yearRead  : [ 2019 ],
		thumb     : './images/kicking-it.jpg'
	},
	{
		title     : 'Where the Sidewalk Ends',
		author    : 'Shel Silverstein',
		myRating  : 4,
		avgRating : 4.3,
		pages     : 176,
		pubDate   : 1974,
		yearRead  : [ 2000 ],
		thumb     : './images/where-sidewalk-ends.jpg'
	},
	{
		title     : 'Fallin Up',
		author    : 'Shel Silverstein',
		myRating  : 4,
		avgRating : 4.34,
		pages     : 178,
		pubDate   : 1996,
		yearRead  : [ 2000 ],
		thumb     : './images/falling-up.jpg'
	},
	{
		title     : 'A Light in the Attic',
		author    : 'Shel Silverstein',
		myRating  : 5,
		avgRating : 4.35,
		pages     : 176,
		pubDate   : 1981,
		yearRead  : [ 2001 ],
		thumb     : './images/light-in-attic.jpg'
	},
	{
		title     : 'The Absolutely True Diary of a Part-Time Indian',
		author    : 'Sherman Alexie',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 230,
		pubDate   : 2007,
		yearRead  : [ 2016 ],
		thumb     : './images/part-time-indian.jpg'
	},
	{
		title     : 'Lean In',
		author    : 'Sheryl Sandberg',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 217,
		pubDate   : 2013,
		yearRead  : [ 2017 ],
		thumb     : './images/lean-in.jpg'
	},
	{
		title     : 'My True Love Gave to Me',
		author    : 'Stephanie Perkins',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 321,
		pubDate   : 2014,
		yearRead  : [ 2017 ],
		thumb     : './images/my-true-love.jpg'
	},
	{
		title     : "There's Someone Inside Your House",
		author    : 'Stephanie Perkins',
		myRating  : 5,
		avgRating : 3.38,
		pages     : 287,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/someone-inside-house.jpg'
	},
	{
		title     : 'The Perks of Being a Wallflower',
		author    : 'Stephen Chbosky',
		myRating  : 5,
		avgRating : 4.2,
		pages     : 213,
		pubDate   : 1999,
		yearRead  : [ 2017 ],
		thumb     : './images/perks-wallflower.jpg'
	},
	{
		title     : 'I Am America (And So Can You!)',
		author    : 'Stephen Colbert',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 230,
		pubDate   : 2007,
		yearRead  : [ 2016 ],
		thumb     : './images/i-am-america.jpg'
	},
	{
		title     : 'The Red Badge of Courage',
		author    : 'Stephen Crane',
		myRating  : 2,
		avgRating : 3.24,
		pages     : 170,
		pubDate   : 1895,
		yearRead  : [ 2005 ],
		thumb     : './images/red-badge.jpg'
	},
	{
		title     : 'The Green Mile, Part 1',
		author    : 'Stephen King',
		myRating  : 4,
		avgRating : 4.52,
		pages     : 92,
		pubDate   : 1996,
		yearRead  : [ 2019 ],
		thumb     : './images/green-mile1.jpg'
	},
	{
		title     : 'The Gunslinger',
		author    : 'Stephen King',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 231,
		pubDate   : 1982,
		yearRead  : [ 2019 ],
		thumb     : './images/gunslinger.jpg'
	},
	{
		title     : 'Carrie',
		author    : 'Stephen King',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 253,
		pubDate   : 1974,
		yearRead  : [ 2018 ],
		thumb     : './images/carrie.jpg'
	},
	{
		title     : 'The Shining',
		author    : 'Stephen King',
		myRating  : 5,
		avgRating : 4.22,
		pages     : 659,
		pubDate   : 1977,
		yearRead  : [ 2018 ],
		thumb     : './images/shining.jpg'
	},
	{
		title     : 'Doctor Sleep',
		author    : 'Stephen King',
		myRating  : 4,
		avgRating : 4.12,
		pages     : 531,
		pubDate   : 2013,
		yearRead  : [ 2018 ],
		thumb     : './images/dr-sleep.jpg'
	},
	{
		title     : 'Pet Sematary',
		author    : 'Stephen King',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 580,
		pubDate   : 1983,
		yearRead  : [ 2018 ],
		thumb     : './images/pet-sem.jpg'
	},
	{
		title     : 'Misery',
		author    : 'Stephen King',
		myRating  : 5,
		avgRating : 4.16,
		pages     : 310,
		pubDate   : 1987,
		yearRead  : [ 2016 ],
		thumb     : './images/misery.jpg'
	},
	{
		title     : 'On Writing',
		author    : 'Stephen King',
		myRating  : 5,
		avgRating : 4.33,
		pages     : 320,
		pubDate   : 2000,
		yearRead  : [ 2015 ],
		thumb     : './images/on-writing.jpg'
	},
	{
		title     : 'It',
		author    : 'Stephen King',
		myRating  : 5,
		avgRating : 4.24,
		pages     : 1116,
		pubDate   : 1986,
		yearRead  : [ 2018 ],
		thumb     : './images/it.jpg'
	},
	{
		title     : 'Twilight',
		author    : 'Stephenie Meyer',
		myRating  : 4,
		avgRating : 3.59,
		pages     : 501,
		pubDate   : 2005,
		yearRead  : [ 2009, 2012 ],
		thumb     : './images/twilight1.jpg'
	},
	{
		title     : 'New Moon',
		author    : 'Stephenie Meyer',
		myRating  : 3,
		avgRating : 3.53,
		pages     : 565,
		pubDate   : 2006,
		yearRead  : [ 2009 ],
		thumb     : './images/twilight2.jpg'
	},
	{
		title     : 'Eclipse',
		author    : 'Stephenie Meyer',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 632,
		pubDate   : 2007,
		yearRead  : [ 2009 ],
		thumb     : './images/twilight3.jpg'
	},
	{
		title     : 'Breaking Dawn',
		author    : 'Stephenie Meyer',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 756,
		pubDate   : 2008,
		yearRead  : [ 2009 ],
		thumb     : './images/twilight4.jpg'
	},
	{
		title     : 'Twilight / Life and Death',
		author    : 'Stephenie Meyer',
		myRating  : 4,
		avgRating : 3.42,
		pages     : 738,
		pubDate   : 2015,
		yearRead  : [ 2015 ],
		thumb     : './images/twilight-life-death.jpg'
	},
	{
		title     : '30 Days of Night, Vol. 1',
		author    : 'Steve Niles',
		myRating  : 5,
		avgRating : 3.8,
		pages     : 104,
		pubDate   : 2004,
		yearRead  : [ 2018 ],
		thumb     : './images/thirty-days-night1.jpg'
	},
	{
		title     : '30 Days of Night, Vol. 2',
		author    : 'Steve Niles',
		myRating  : 5,
		avgRating : 3.76,
		pages     : 144,
		pubDate   : 2004,
		yearRead  : [ 2018 ],
		thumb     : './images/thirty-days-night2.jpg'
	},
	{
		title     : '30 Days of Night, Vol. 4',
		author    : 'Steve Niles',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 144,
		pubDate   : 2004,
		yearRead  : [ 2018 ],
		thumb     : './images/thirty-days-night4.jpg'
	},
	{
		title     : 'The Ultimate History of Video Games',
		author    : 'Steven L. Kent',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 608,
		pubDate   : 2001,
		yearRead  : [ 2009, 2011, 2013 ],
		thumb     : './images/ultimate-history-vgs.jpg'
	},
	{
		title     : 'The Hunger Games',
		author    : 'Suzanne Collins',
		myRating  : 5,
		avgRating : 4.33,
		pages     : 374,
		pubDate   : 2008,
		yearRead  : [ 2015 ],
		thumb     : './images/hunger-games1.jpg'
	},
	{
		title     : 'Catching Fire',
		author    : 'Suzanne Collins',
		myRating  : 5,
		avgRating : 4.29,
		pages     : 391,
		pubDate   : 2009,
		yearRead  : [ 2015 ],
		thumb     : './images/hunger-games2.jpg'
	},
	{
		title     : 'Mockingjay',
		author    : 'Suzanne Collins',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 390,
		pubDate   : 2010,
		yearRead  : [ 2015 ],
		thumb     : './images/hunger-games3.jpg'
	},
	{
		title     : 'Sleeping Giants',
		author    : 'Sylvain Neuvel',
		myRating  : 5,
		avgRating : 3.84,
		pages     : 320,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/sleeping-giants1.jpg'
	},
	{
		title     : 'Waking Gods',
		author    : 'Sylvain Neuvel',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 336,
		pubDate   : 2017,
		yearRead  : [ 2018 ],
		thumb     : './images/sleeping-giants2.jpg'
	},
	/*===========================
		Author First Name - T's
	===========================*/
	{
		title     : 'Thr3e',
		author    : 'Ted Dekker',
		myRating  : 4,
		avgRating : 4.09,
		pages     : 423,
		pubDate   : 2003,
		yearRead  : [ 2013 ],
		thumb     : './images/thr3e.jpg'
	},
	{
		title     : 'Danger in the Desert',
		author    : 'Terri Fields',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 126,
		pubDate   : 1997,
		yearRead  : [ 1999 ],
		thumb     : './images/danger-in-desert.jpg'
	},
	{
		title     : 'Missing in the Mountains',
		author    : 'Terri Fields',
		myRating  : 3,
		avgRating : 3.12,
		pages     : 108,
		pubDate   : 1999,
		yearRead  : [ 2000 ],
		thumb     : './images/missing-in-mountains.jpg'
	},
	{
		title     : 'Getting Started with SQL',
		author    : 'Thomas Nield',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 134,
		pubDate   : 2016,
		yearRead  : [ 2018 ],
		thumb     : './images/getting-started-sql.jpg'
	},
	{
		title     : 'How to Eat Fried Worms',
		author    : 'Thomas Rockfield',
		myRating  : 4,
		avgRating : 3.76,
		pages     : 118,
		pubDate   : 1973,
		yearRead  : [ 1999 ],
		thumb     : './images/eat-fried-worms.jpg'
	},
	{
		title     : 'Left Behind',
		author    : 'Tim LaHaye',
		myRating  : 3,
		avgRating : 3.83,
		pages     : 342,
		pubDate   : 1995,
		yearRead  : [ 2014 ],
		thumb     : './images/left-behind1.jpg'
	},
	{
		title     : 'Tribulation Force',
		author    : 'Tim LaHaye',
		myRating  : 3,
		avgRating : 3.96,
		pages     : 450,
		pubDate   : 1996,
		yearRead  : [ 2014 ],
		thumb     : './images/left-behind2.jpg'
	},
	{
		title     : 'The 4-Hour Body',
		author    : 'Timothy Ferriss',
		myRating  : 2,
		avgRating : 3.76,
		pages     : 571,
		pubDate   : 2000,
		yearRead  : [ 2020 ],
		thumb     : './images/four-hour-body.jpg'
	},
	{
		title     : 'The Prodigal God',
		author    : 'Timothy J. Keller',
		myRating  : 4,
		avgRating : 4.39,
		pages     : 155,
		pubDate   : 2008,
		yearRead  : [ 2015 ],
		thumb     : './images/prodigal-god.jpg'
	},
	{
		title     : 'Bossypants',
		author    : 'Tina Fey',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 277,
		pubDate   : 2011,
		yearRead  : [ 2018 ],
		thumb     : './images/bossypants.jpg'
	},
	{
		title     : 'Fun Inc.',
		author    : 'Tom Chatfield',
		myRating  : 4,
		avgRating : 3.41,
		pages     : 272,
		pubDate   : 2010,
		yearRead  : [ 2017 ],
		thumb     : './images/fun.jpg'
	},
	{
		title     : 'Strengths Finder 2.0',
		author    : 'Tom Rath',
		myRating  : 3,
		avgRating : 3.94,
		pages     : 174,
		pubDate   : 2007,
		yearRead  : [ 2015 ],
		thumb     : './images/strengths-finder.jpg'
	},
	/*===========================
		Author First Name - U's
	===========================*/

	/*===========================
		Author First Name - V's
	===========================*/
	{
		title     : "Anya's Ghost",
		author    : 'Vera Brosgol',
		myRating  : 5,
		avgRating : 3.89,
		pages     : 224,
		pubDate   : 2011,
		yearRead  : [ 2017 ],
		thumb     : './images/anyas-ghost.jpg'
	},
	{
		title     : 'Divergent',
		author    : 'Veronica Roth',
		myRating  : 5,
		avgRating : 4.2,
		pages     : 487,
		pubDate   : 2011,
		yearRead  : [ 2015 ],
		thumb     : './images/divergent1.jpg'
	},
	{
		title     : 'Insurgent',
		author    : 'Veronica Roth',
		myRating  : 5,
		avgRating : 4.03,
		pages     : 525,
		pubDate   : 2012,
		yearRead  : [ 2015 ],
		thumb     : './images/divergent2.jpg'
	},
	{
		title     : 'Allegiant',
		author    : 'Veronica Roth',
		myRating  : 4,
		avgRating : 3.63,
		pages     : 526,
		pubDate   : 2013,
		yearRead  : [ 2015 ],
		thumb     : './images/divergent3.jpg'
	},
	{
		title     : 'Slumdog Millionaire',
		author    : 'Vikas Swarup',
		myRating  : 5,
		avgRating : 3.99,
		pages     : 333,
		pubDate   : 2005,
		yearRead  : [ 2016 ],
		thumb     : './images/slumdog.jpg'
	},
	{
		title     : "The Smart Girl's Guide to Privacy",
		author    : 'Violet Blue',
		myRating  : 4,
		avgRating : 3.68,
		pages     : 168,
		pubDate   : 2014,
		yearRead  : [ 2019 ],
		thumb     : './images/smart-girl-privacy.jpg'
	},
	/*===========================
		Author First Name - W's
	===========================*/
	{
		title     : 'Warner Bros. Studio Tour London',
		author    : 'Warner Bros',
		myRating  : 4,
		avgRating : 4.3,
		pages     : 72,
		pubDate   : 2012,
		yearRead  : [ 2017 ],
		thumb     : './images/warner-bros-studio.jpg'
	},
	{
		title     : 'Systematic Theology',
		author    : 'Wayne Grudem',
		myRating  : 5,
		avgRating : 4.24,
		pages     : 1264,
		pubDate   : 1994,
		yearRead  : [ 2013 ],
		thumb     : './images/systematic-theology.jpg'
	},
	{
		title     : 'Things We Think About Games',
		author    : 'Will Hindmarch',
		myRating  : 4,
		avgRating : 3.69,
		pages     : 160,
		pubDate   : 2008,
		yearRead  : [ 2019 ],
		thumb     : './images/things-we-think-about-games.jpg'
	},
	{
		title     : 'Lord of the Flies',
		author    : 'William Golding',
		myRating  : 4,
		avgRating : 3.68,
		pages     : 192,
		pubDate   : 1954,
		yearRead  : [ 2003, 2005 ],
		thumb     : './images/lord-of-flies.jpg'
	},
	{
		title     : 'Make Your Bed',
		author    : 'William McRaven',
		myRating  : 4,
		avgRating : 3.98,
		pages     : 144,
		pubDate   : 2017,
		yearRead  : [ 2020 ],
		thumb     : './images/make-your-bed.jpg'
	},
	{
		title     : 'Romeo and Juliet',
		author    : 'William Shakespeare',
		myRating  : 3,
		avgRating : 3.75,
		pages     : 368,
		pubDate   : 1599,
		yearRead  : [ 2002, 2004 ],
		thumb     : './images/romeo-juliet.jpg'
	},
	{
		title     : 'Hamlet',
		author    : 'William Shakespeare',
		myRating  : 3,
		avgRating : 4.02,
		pages     : 289,
		pubDate   : 1603,
		yearRead  : [ 2007 ],
		thumb     : './images/hamlet.jpg'
	},
	{
		title     : 'Macbeth',
		author    : 'William Shakespeare',
		myRating  : 3,
		avgRating : 3.9,
		pages     : 249,
		pubDate   : 1623,
		yearRead  : [ 2007 ],
		thumb     : './images/macbeth.jpg'
	},
	{
		title     : "A Midsummer Night's Dream",
		author    : 'William Shakespeare',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 240,
		pubDate   : 1595,
		yearRead  : [ 2000, 2002 ],
		thumb     : './images/midsummer-nights-dream.jpg'
	},
	{
		title     : 'Ghosts of Saltmarsh',
		author    : 'Wizards RPG Team',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 256,
		pubDate   : 2019,
		yearRead  : [ 2019 ],
		thumb     : './images/ghosts-saltmarsh.jpg'
	},
	{
		title     : 'Tales from the Yawning Portal',
		author    : 'Wizards RPG Team',
		myRating  : 5,
		avgRating : 4.27,
		pages     : 248,
		pubDate   : 2017,
		yearRead  : [ 2019 ],
		thumb     : './images/tales-yawning.jpg'
	},
	/*===========================
		Author First Name - X's
	===========================*/

	/*===========================
		Author First Name - Y's
	===========================*/
	{
		title     : 'Sapiens',
		author    : 'Yuval Noah Harari',
		myRating  : 4,
		avgRating : 4.43,
		pages     : 498,
		pubDate   : 2011,
		yearRead  : [ 2019 ],
		thumb     : './images/sapiens.jpg'
	},
	{
		title     : 'The Willow Files, Vol. 2',
		author    : 'Yvonne Navarro',
		myRating  : 4,
		avgRating : 4.14,
		pages     : 210,
		pubDate   : 2001,
		yearRead  : [ 2019 ],
		thumb     : './images/willow-files2.jpg'
	},
	/*===========================
		Author First Name - Z's
	===========================*/
	{
		title     : 'Rick and Morty, Vol. 1',
		author    : 'Zac Gorman',
		myRating  : 5,
		avgRating : 4.09,
		pages     : 128,
		pubDate   : 2015,
		yearRead  : [ 2019 ],
		thumb     : './images/rick-morty.jpg'
	}
];

let toRead = [
	{
		title     : 'A Short History of Nearly Everything',
		author    : 'Bill Bryson',
		avgRating : 4.21,
		pages     : 544,
		pubDate   : 2003,
		thumb     : './images/short-history.jpg'
	},
	{
		title     : 'Code',
		author    : 'Charles Petzold',
		avgRating : 4.4,
		pages     : 400,
		pubDate   : 1999,
		thumb     : './images/code.jpg'
	},
	{
		title     : 'Eternity in Their Hearts',
		author    : 'Don Richardson',
		avgRating : 4.3,
		pages     : 224,
		pubDate   : 1980,
		thumb     : './images/eternity-in-hearts.jpg'
	},
	{
		title     : 'The Living',
		author    : 'Isaac Marion',
		avgRating : 4.21,
		pages     : 433,
		pubDate   : 2018,
		thumb     : './images/living.jpg'
	},
	{
		title     : 'The Ickabog',
		author    : 'J.K. Rowling',
		avgRating : 3.98,
		pages     : '???',
		pubDate   : 2020,
		thumb     : './images/ickabog.jpg'
	},
	{
		title     : 'Lies My Teacher Told Me',
		author    : 'James Loewen',
		avgRating : 3.97,
		pages     : 383,
		pubDate   : 1995,
		thumb     : './images/lies-teacher-told.jpg'
	},
	{
		title     : 'One of Us Is Next',
		author    : 'Karen McManus',
		avgRating : 4.04,
		pages     : 377,
		pubDate   : 2020,
		thumb     : './images/one-of-us-is-next.jpg'
	},
	{
		title     : 'Blink',
		author    : 'Malcolm Gladwell',
		avgRating : 3.93,
		pages     : 296,
		pubDate   : 2005,
		thumb     : './images/blink.jpg'
	},
	{
		title     : 'Astrophysics for People in a Hurry',
		author    : 'Neil deGrasse Tyson',
		avgRating : 4.09,
		pages     : 224,
		pubDate   : 2017,
		thumb     : './images/astrophysics-in-hurry.jpg'
	},
	{
		title     : 'Shadow of the Colossus',
		author    : 'Nick Suttner',
		avgRating : 3.7,
		pages     : 194,
		pubDate   : 2015,
		thumb     : './images/shadow-of-colossus.jpg'
	},
	{
		title     : 'Rick and Morty vs. Dungeons & Dragons',
		author    : 'Patrick Rothfuss',
		avgRating : 4.18,
		pages     : 96,
		pubDate   : 2019,
		thumb     : './images/rick-morty-vs-dnd.jpg'
	},
	{
		title     : 'How To',
		author    : 'Randall Munroe',
		avgRating : 4.18,
		pages     : 320,
		pubDate   : 2019,
		thumb     : './images/how-to.jpg'
	},
	{
		title     : 'The Thousand-Dollar Tan Line',
		author    : 'Rob Thomas',
		avgRating : 3.99,
		pages     : 324,
		pubDate   : 2014,
		thumb     : './images/veronica-mars1.jpg'
	},
	{
		title     : 'You Are an Artist',
		author    : 'Sarah Urist Green',
		avgRating : 4.33,
		pages     : '???',
		pubDate   : 2020,
		thumb     : './images/you-are-an-artist.jpg'
	},
	{
		title     : 'Freakonomics',
		author    : 'Steven Levitt',
		avgRating : 3.98,
		pages     : 320,
		pubDate   : 2005,
		thumb     : './images/freakonomics.jpg'
	},
	{
		title     : "It's All a Game",
		author    : 'Tristan Donovan',
		avgRating : 3.97,
		pages     : 304,
		pubDate   : 2017,
		thumb     : './images/its-all-a-game.jpg'
	}
];
