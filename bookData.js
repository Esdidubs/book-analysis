let bookData = [
	{
		title     : 'Hocus Pocus & The All New Sequel',
		author    : 'A.W. Jantha',
		myRating  : 4,
		avgRating : 3.49,
		pages     : 521,
		pubDate   : 2018
	},
	{
		title     : 'One Day in the Life of Ivan Denisovich',
		author    : 'Aleksandr Solzhenitsyn',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 182,
		pubDate   : 1962
	},
	{
		title     : 'Unprotected Lexicon',
		author    : 'Alexa Chrisbacher',
		myRating  : 5,
		avgRating : 4.25,
		pages     : 110,
		pubDate   : 2019
	},
	{
		title     : 'Learning Chinese Characters',
		author    : 'Alison Matthews',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 384,
		pubDate   : 2007
	},
	{ title: 'Crossed (Matched, #2)', author: 'Ally Condie', myRating: 3, avgRating: 3.52, pages: 367, pubDate: 2011 },
	{ title: 'Reached (Matched, #3)', author: 'Ally Condie', myRating: 3, avgRating: 3.56, pages: 512, pubDate: 2012 },
	{ title: 'Matched (Matched, #1)', author: 'Ally Condie', myRating: 4, avgRating: 3.66, pages: 369, pubDate: 2010 },
	{
		title     : 'Humility: The Journey Toward Holiness',
		author    : 'Andrew Murray',
		myRating  : 4,
		avgRating : 4.4,
		pages     : 112,
		pubDate   : 1895
	},
	{ title: 'Artemis', author: 'Andy Weir', myRating: 4, avgRating: 3.66, pages: 305, pubDate: 2017 },
	{ title: 'The Martian', author: 'Andy Weir', myRating: 5, avgRating: 4.4, pages: 435, pubDate: 2012 },
	{ title: 'Grit', author: 'Angela Duckworth', myRating: 3, avgRating: 4.08, pages: 277, pubDate: 2016 },
	{
		title     : 'The History and Uncertain Future of Handwriting',
		author    : 'Anne Trubek',
		myRating  : 4,
		avgRating : 3.58,
		pages     : 192,
		pubDate   : 2014
	},
	{
		title     : 'Unshakeable: Your Financial Freedom Playbook',
		author    : 'Anthony Robbins',
		myRating  : 5,
		avgRating : 4.11,
		pages     : 257,
		pubDate   : 2017
	},
	{
		title     : 'How Much is Enough? Hungering For God in an Affluent',
		author    : 'Arthur Simon',
		myRating  : 4,
		avgRating : 3.62,
		pages     : 192,
		pubDate   : 2003
	},
	{ title: 'Go Ask Alice', author: 'Beatrice Sparks', myRating: 3, avgRating: 3.76, pages: 213, pubDate: 1971 },
	{
		title     : 'Beyond Awkward: When Talking about Jesus Is Outside Your Comfort Zone',
		author    : 'Beau Crosetto',
		myRating  : 4,
		avgRating : 4,
		pages     : 206,
		pubDate   : 2014
	},
	{ title: "What If It's Us", author: 'Becky Albertalli', myRating: 4, avgRating: 3.94, pages: 448, pubDate: 2018 },
	{
		title     : 'Simon vs. the Homo Sapiens Agenda (Simonverse, #1)',
		author    : 'Becky Albertalli',
		myRating  : 5,
		avgRating : 4.31,
		pages     : 303,
		pubDate   : 2015
	},
	{
		title     : 'The Upside of Unrequited (Simonverse #2)',
		author    : 'Becky Albertalli',
		myRating  : 5,
		avgRating : 3.97,
		pages     : 336,
		pubDate   : 2017
	},
	{
		title     : 'Leah on the Offbeat (Creekwood #2)',
		author    : 'Becky Albertalli',
		myRating  : 5,
		avgRating : 3.89,
		pages     : 352,
		pubDate   : 2018
	},
	{
		title     : '101 Video Games to Play Before You Grow Up: The unofficial must-play video game list for kids',
		author    : 'Ben Bertoli',
		myRating  : 3,
		avgRating : 3.95,
		pages     : 144,
		pubDate   : 2017
	},
	{ title: 'Math with Bad Drawings', author: 'Ben Orlin', myRating: 5, avgRating: 4.25, pages: 376, pubDate: 2018 },
	{
		title     :
			'Aristotle and Dante Discover the Secrets of the Universe (Aristotle and Dante Discover the Secrets of the Universe, #1)',
		author    : 'Benjamin Alire Sáenz',
		myRating  : 5,
		avgRating : 4.34,
		pages     : 359,
		pubDate   : 2012
	},
	{
		title     :
			'Fluent in 3 Months: How Anyone at Any Age Can Learn to Speak Any Language from Anywhere in the World',
		author    : 'Benny Lewis',
		myRating  : 4,
		avgRating : 3.66,
		pages     : 249,
		pubDate   : 2014
	},
	{
		title     : 'Courageous Leadership: Field-Tested Strategy for the 360° Leader',
		author    : 'Bill Hybels',
		myRating  : 3,
		avgRating : 4.12,
		pages     : 275,
		pubDate   : 2002
	},
	{
		title     : 'When Heaven Invades Earth: A Practical Guide to a Life of Miracles',
		author    : 'Bill Johnson',
		myRating  : 4,
		avgRating : 4.42,
		pages     : 190,
		pubDate   : 2005
	},
	{
		title     : 'Openly Straight (Openly Straight, #1)',
		author    : 'Bill Konigsberg',
		myRating  : 4,
		avgRating : 3.9,
		pages     : 320,
		pubDate   : 2013
	},
	{ title: "Fail Until You Don't", author: 'Bobby Bones', myRating: 3, avgRating: 4.04, pages: 224, pubDate: 2018 },
	{
		title     : 'The Eleventh Metal (Mistborn, #0.5)',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 3.89,
		pages     : 21,
		pubDate   : 2012
	},
	{
		title     : 'The Final Empire (Mistborn, #1)',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.45,
		pages     : 541,
		pubDate   : 2006
	},
	{
		title     : 'The Hero of Ages (Mistborn, #3)',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.49,
		pages     : 572,
		pubDate   : 2008
	},
	{
		title     : 'The Well of Ascension (Mistborn, #2)',
		author    : 'Brandon Sanderson',
		myRating  : 5,
		avgRating : 4.37,
		pages     : 590,
		pubDate   : 2007
	},
	{
		title     : 'High Performance Habits: How Extraordinary People Become That Way',
		author    : 'Brendon Burchard',
		myRating  : 3,
		avgRating : 4.22,
		pages     : 393,
		pubDate   : 2017
	},
	{
		title     : 'The Rising (The Rising #1)',
		author    : 'Brian Keene',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 321,
		pubDate   : 2003
	},
	{
		title     : 'Guardians of the Galaxy, Volume 1: Cosmic Avengers',
		author    : 'Brian Michael Bendis',
		myRating  : 4,
		avgRating : 3.87,
		pages     : 136,
		pubDate   : 2013
	},
	{
		title     : 'Guardians of the Galaxy/All-New X-Men: The Trial of Jean Grey',
		author    : 'Brian Michael Bendis',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 144,
		pubDate   : 2014
	},
	{
		title     : 'Guardians of the Galaxy, Volume 2: Angela',
		author    : 'Brian Michael Bendis',
		myRating  : 4,
		avgRating : 3.6,
		pages     : 168,
		pubDate   : 2014
	},
	{
		title     : 'Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time',
		author    : 'Brian Tracy',
		myRating  : 4,
		avgRating : 3.87,
		pages     : 128,
		pubDate   : 2001
	},
	{
		title     : 'God Is in the Small Stuff... And It All Matters',
		author    : 'Bruce Bickel',
		myRating  : 4,
		avgRating : 3.97,
		pages     : 256,
		pubDate   : 1998
	},
	{
		title     : 'Scott Pilgrim, Vol. 5: Scott Pilgrim vs. the Universe',
		author    : "Bryan Lee O'Malley",
		myRating  : 4,
		avgRating : 4.33,
		pages     : 178,
		pubDate   : 2009
	},
	{
		title     : 'Scott Pilgrim, Volume 4: Scott Pilgrim Gets It Together',
		author    : "Bryan Lee O'Malley",
		myRating  : 4,
		avgRating : 4.32,
		pages     : 205,
		pubDate   : 2007
	},
	{
		title     : "Scott Pilgrim, Vol. 6: Scott Pilgrim's Finest Hour",
		author    : "Bryan Lee O'Malley",
		myRating  : 4,
		avgRating : 4.42,
		pages     : 245,
		pubDate   : 2010
	},
	{
		title     : "Scott Pilgrim, Volume 1: Scott Pilgrim's Precious Little Life",
		author    : "Bryan Lee O'Malley",
		myRating  : 5,
		avgRating : 4.17,
		pages     : 168,
		pubDate   : 2004
	},
	{
		title     : 'Scott Pilgrim, Volume 3: Scott Pilgrim & The Infinite Sadness',
		author    : "Bryan Lee O'Malley",
		myRating  : 5,
		avgRating : 4.29,
		pages     : 192,
		pubDate   : 2006
	},
	{
		title     : 'Scott Pilgrim, Volume 2: Scott Pilgrim vs. The World',
		author    : "Bryan Lee O'Malley",
		myRating  : 5,
		avgRating : 4.24,
		pages     : 200,
		pubDate   : 2005
	},
	{
		title     : 'The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #2)',
		author    : 'C.S. Lewis',
		myRating  : 3,
		avgRating : 4.22,
		pages     : 206,
		pubDate   : 1950
	},
	{
		title     : "The Magician's Nephew (Chronicles of Narnia, #1)",
		author    : 'C.S. Lewis',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 221,
		pubDate   : 1955
	},
	{ title: 'The Screwtape Letters', author: 'C.S. Lewis', myRating: 4, avgRating: 4.22, pages: 209, pubDate: 1942 },
	{
		title     :
			'The Year of Less: How I Stopped Shopping, Gave Away My Belongings, and Discovered Life Is Worth More Than Anything You Can Buy in a Store',
		author    : 'Cait Flanders',
		myRating  : 2,
		avgRating : 3.5,
		pages     : 189,
		pubDate   : 2018
	},
	{
		title     : 'Digital Minimalism: On Living Better with Less Technology',
		author    : 'Cal Newport',
		myRating  : 4,
		avgRating : 4.07,
		pages     : 286,
		pubDate   : 2019
	},
	{
		title     : "So Good They Can't Ignore You: Why Skills Trump Passion in the Quest for Work You Love",
		author    : 'Cal Newport',
		myRating  : 4,
		avgRating : 4.11,
		pages     : 288,
		pubDate   : 2012
	},
	{
		title     : 'Seven Brief Lessons on Physics',
		author    : 'Carlo Rovelli',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 81,
		pubDate   : 2014
	},
	{
		title     : 'Dead Until Dark (Sookie Stackhouse, #1)',
		author    : 'Charlaine Harris',
		myRating  : 5,
		avgRating : 3.96,
		pages     : 292,
		pubDate   : 2001
	},
	{
		title     : 'The Yellow Wallpaper',
		author    : 'Charlotte Perkins Gilman',
		myRating  : 5,
		avgRating : 4.12,
		pages     : 32,
		pubDate   : 1892
	},
	{
		title     : 'We Should All Be Feminists',
		author    : 'Chimamanda Ngozi Adichie',
		myRating  : 5,
		avgRating : 4.45,
		pages     : 52,
		pubDate   : 2014
	},
	{
		title     : 'Dear Ijeawele, or a Feminist Manifesto in Fifteen Suggestions',
		author    : 'Chimamanda Ngozi Adichie',
		myRating  : 5,
		avgRating : 4.53,
		pages     : 63,
		pubDate   : 2017
	},
	{ title: 'Things Fall Apart', author: 'Chinua Achebe', myRating: 4, avgRating: 3.67, pages: 209, pubDate: 1958 },
	{
		title     : 'Struck By Lightning: The Carson Phillips Journal',
		author    : 'Chris Colfer',
		myRating  : 3,
		avgRating : 3.84,
		pages     : 272,
		pubDate   : 2012
	},
	{
		title     : 'The Nerdist Way: How to Reach the Next Level (In Real Life)',
		author    : 'Chris Hardwick',
		myRating  : 5,
		avgRating : 3.71,
		pages     : 279,
		pubDate   : 2011
	},
	{
		title     : "Retire Inspired: It's Not an Age, It's a Financial Number",
		author    : 'Chris Hogan',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 256,
		pubDate   : 2016
	},
	{
		title     : "The Gamer's Bucket List: The 50 Video Games to Play Before You Die",
		author    : 'Chris Watters',
		myRating  : 3,
		avgRating : 3.36,
		pages     : 139,
		pubDate   : 2015
	},
	{
		title     : 'A Dirty Job (Grim Reaper, #1)',
		author    : 'Christopher Moore',
		myRating  : 4,
		avgRating : 4.07,
		pages     : 387,
		pubDate   : 2006
	},
	{ title: 'Fight Club 2', author: 'Chuck Palahniuk', myRating: 2, avgRating: 3.06, pages: 256, pubDate: 2015 },
	{ title: 'Choke', author: 'Chuck Palahniuk', myRating: 3, avgRating: 3.7, pages: 293, pubDate: 2001 },
	{ title: 'Fight Club', author: 'Chuck Palahniuk', myRating: 4, avgRating: 4.19, pages: 218, pubDate: 1996 },
	{ title: 'Science Hacks', author: 'Colin Barras', myRating: 4, avgRating: 4.07, pages: 208, pubDate: 2018 },
	{
		title     : 'Night of the Living Deadpool (The Living Deadpool, #1)',
		author    : 'Cullen Bunn',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 96,
		pubDate   : 2014
	},
	{
		title     : 'Return of the Living Deadpool (The Living Deadpool, #2)',
		author    : 'Cullen Bunn',
		myRating  : 4,
		avgRating : 3.98,
		pages     : 112,
		pubDate   : 2015
	},
	{
		title     : "The God Who Is There: Finding Your Place in God's Story",
		author    : 'D.A. Carson',
		myRating  : 3,
		avgRating : 4.3,
		pages     : 232,
		pubDate   : 2010
	},
	{
		title     : 'Inferno (Robert Langdon, #4)',
		author    : 'Dan Brown',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 463,
		pubDate   : 2013
	},
	{
		title     : 'The Lost Symbol (Robert Langdon, #3)',
		author    : 'Dan Brown',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 670,
		pubDate   : 2009
	},
	{ title: 'The Da Vinci Code', author: 'Dan Brown', myRating: 5, avgRating: 3.85, pages: 489, pubDate: 2003 },
	{ title: 'Angels & Demons', author: 'Dan Brown', myRating: 5, avgRating: 3.9, pages: 496, pubDate: 2000 },
	{
		title     : 'The Little Book of Talent: 52 Tips for Improving Your Skills',
		author    : 'Daniel Coyle',
		myRating  : 5,
		avgRating : 4.09,
		pages     : 160,
		pubDate   : 2012
	},
	{
		title     : 'Minecraft: The Unlikely Tale of Markus "Notch" Persson and the Game that Changed Everything',
		author    : 'Daniel Goldberg',
		myRating  : 5,
		avgRating : 3.86,
		pages     : 256,
		pubDate   : 2012
	},
	{
		title     : 'Drive: The Surprising Truth About What Motivates Us',
		author    : 'Daniel H. Pink',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 242,
		pubDate   : 2009
	},
	{ title: 'Flowers for Algernon', author: 'Daniel Keyes', myRating: 4, avgRating: 4.13, pages: 311, pubDate: 1966 },
	{
		title     : 'World of Warcraft (Boss Fight Books, #12)',
		author    : 'Daniel Lisi',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 128,
		pubDate   : 2016
	},
	{ title: 'The Inferno', author: 'Dante Alighieri', myRating: 4, avgRating: 4, pages: 302, pubDate: 1320 },
	{ title: 'The Circle', author: 'Dave Eggers', myRating: 4, avgRating: 3.43, pages: 493, pubDate: 2013 },
	{
		title     : 'The Money Answer Book: Quick Answers to Your Everyday Financial Questions',
		author    : 'Dave Ramsey',
		myRating  : 4,
		avgRating : 3.81,
		pages     : 160,
		pubDate   : 2005
	},
	{
		title     : 'The Total Money Makeover: A Proven Plan for Financial Fitness',
		author    : 'Dave Ramsey',
		myRating  : 4,
		avgRating : 4.28,
		pages     : 229,
		pubDate   : 2003
	},
	{
		title     : "Dave Ramsey's Complete Guide to Money: The Handbook of Financial Peace University",
		author    : 'Dave Ramsey',
		myRating  : 5,
		avgRating : 4.43,
		pages     : 330,
		pubDate   : 2011
	},
	{
		title     : 'The Caretaker of Lorne Field',
		author    : 'Dave Zeltserman',
		myRating  : 5,
		avgRating : 3.79,
		pages     : 237,
		pubDate   : 2010
	},
	{
		title     : 'The Soccer Book: The Sport, the Teams, the Tactics, the Cups',
		author    : 'David Goldblatt',
		myRating  : 4,
		avgRating : 4.24,
		pages     : 400,
		pubDate   : 2009
	},
	{
		title     : 'Rise of the Dungeon Master: Gary Gygax and the Creation of D&D',
		author    : 'David Kushner',
		myRating  : 4,
		avgRating : 3.56,
		pages     : 144,
		pubDate   : 2017
	},
	{
		title     : 'Every Day (Every Day, #1)',
		author    : 'David Levithan',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 322,
		pubDate   : 2012
	},
	{
		title     : 'Another Day (Every Day, #2)',
		author    : 'David Levithan',
		myRating  : 5,
		avgRating : 3.62,
		pages     : 327,
		pubDate   : 2015
	},
	{ title: 'Slade House', author: 'David Mitchell', myRating: 4, avgRating: 3.81, pages: 238, pubDate: 2015 },
	{
		title     : 'Follow Me: A Call to Die. A Call to Live.',
		author    : 'David Platt',
		myRating  : 4,
		avgRating : 4.24,
		pages     : 245,
		pubDate   : 2013
	},
	{
		title     : 'Radical: Taking Back Your Faith from the American Dream',
		author    : 'David Platt',
		myRating  : 5,
		avgRating : 4.18,
		pages     : 230,
		pubDate   : 2010
	},
	{
		title     : 'The Revenge of Analog: Real Things and Why They Matter',
		author    : 'David Sax',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 304,
		pubDate   : 2016
	},
	{
		title     : "Werewolves Don't Go to Summer Camp (The Adventures of the Bailey School Kids, #2)",
		author    : 'Debbie Dadey',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 96,
		pubDate   : 1991
	},
	{
		title     : "Santa Claus Doesn't Mop Floors (The Adventures of the Bailey School Kids, #3)",
		author    : 'Debbie Dadey',
		myRating  : 4,
		avgRating : 3.75,
		pages     : 80,
		pubDate   : 1991
	},
	{
		title     : 'A Discovery of Witches (All Souls Trilogy, #1)',
		author    : 'Deborah Harkness',
		myRating  : 5,
		avgRating : 4,
		pages     : 579,
		pubDate   : 2011
	},
	{
		title     : 'Spelunky (Boss Fight Books, #11)',
		author    : 'Derek Yu',
		myRating  : 4,
		avgRating : 4.43,
		pages     : 140,
		pubDate   : 2015
	},
	{
		title     :
			'Eat This And Live: Simple Food Choices that Can Help You Feel Better, Look Younger, and Live Longer!',
		author    : 'Don Colbert',
		myRating  : 4,
		avgRating : 3.93,
		pages     : 192,
		pubDate   : 2008
	},
	{
		title     : 'A Million Miles in a Thousand Years: How I Learned to Live a Better Story',
		author    : 'Donald Miller',
		myRating  : 3,
		avgRating : 4.18,
		pages     : 256,
		pubDate   : 2009
	},
	{
		title     : "The Restaurant at the End of the Universe (Hitchhiker's Guide, #2)",
		author    : 'Douglas Adams',
		myRating  : 4,
		avgRating : 4.22,
		pages     : 187,
		pubDate   : 1980
	},
	{
		title     : "The Hitchhiker's Guide to the Galaxy  (Hitchhiker's Guide, #1)",
		author    : 'Douglas Adams',
		myRating  : 5,
		avgRating : 4.22,
		pages     : 215,
		pubDate   : 1979
	},
	{
		title     : 'Game On!: Video Game History from Pong and Pac-Man to Mario, Minecraft, and More',
		author    : 'Dustin Hansen',
		myRating  : 5,
		avgRating : 4.05,
		pages     : 368,
		pubDate   : 2016
	},
	{ title: 'We Were Liars', author: 'E. Lockhart', myRating: 3, avgRating: 3.84, pages: 242, pubDate: 2014 },
	{ title: "Charlotte's Web", author: 'E.B. White', myRating: 4, avgRating: 4.17, pages: 184, pubDate: 1952 },
	{
		title     : 'Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration',
		author    : 'Ed Catmull',
		myRating  : 4,
		avgRating : 4.21,
		pages     : 368,
		pubDate   : 2009
	},
	{
		title     : 'Night  (The Night Trilogy, #1)',
		author    : 'Elie Wiesel',
		myRating  : 4,
		avgRating : 4.33,
		pages     : 115,
		pubDate   : 1956
	},
	{
		title     : 'The Happiness Hack: How to Take Charge of Your Brain and Program More Happiness Into Your Life',
		author    : 'Ellen Petry Leanse',
		myRating  : 2,
		avgRating : 3.26,
		pages     : 128,
		pubDate   : 2017
	},
	{
		title     : '10,000 Things You Need to Know: The Big Book of Lists',
		author    : 'Elspeth Beidas',
		myRating  : 4,
		avgRating : 4.32,
		pages     : 1000,
		pubDate   : 2016
	},
	{ title: 'Wuthering Heights', author: 'Emily Brontë', myRating: 3, avgRating: 3.85, pages: 464, pubDate: 1847 },
	{
		title     : 'The Forests of Silence (Deltora Quest #1)',
		author    : 'Emily Rodda',
		myRating  : 3,
		avgRating : 3.91,
		pages     : 131,
		pubDate   : 2000
	},
	{
		title     : 'The Atlantis Complex (Artemis Fowl #7)',
		author    : 'Eoin Colfer',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 357,
		pubDate   : 2010
	},
	{
		title     : 'The Last Guardian (Artemis Fowl #8)',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.15,
		pages     : 328,
		pubDate   : 2012
	},
	{
		title     : 'The Eternity Code (Artemis Fowl #3)',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 352,
		pubDate   : 2003
	},
	{
		title     : 'The Lost Colony (Artemis Fowl #5)',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4,
		pages     : 385,
		pubDate   : 2006
	},
	{
		title     : 'The Time Paradox (Artemis Fowl #6)',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.08,
		pages     : 391,
		pubDate   : 2008
	},
	{
		title     : 'The Arctic Incident  (Artemis Fowl #2)',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 398,
		pubDate   : 2002
	},
	{
		title     : 'The Opal Deception (Artemis Fowl #4)',
		author    : 'Eoin Colfer',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 416,
		pubDate   : 2005
	},
	{
		title     : 'Artemis Fowl (Artemis Fowl, #1)',
		author    : 'Eoin Colfer',
		myRating  : 5,
		avgRating : 3.85,
		pages     : 288,
		pubDate   : 2001
	},
	{
		title     : 'Ready Player One (Ready Player One, #1)',
		author    : 'Ernest Cline',
		myRating  : 5,
		avgRating : 4.27,
		pages     : 374,
		pubDate   : 2011
	},
	{
		title     : 'The Great Gatsby',
		author    : 'F. Scott Fitzgerald',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 168,
		pubDate   : 1925
	},
	{
		title     : 'The Ultimate Guide to Video Game Writing and Design',
		author    : 'Flint Dille',
		myRating  : 4,
		avgRating : 3.6,
		pages     : 272,
		pubDate   : 2006
	},
	{
		title     : 'The Father Heart of God: Experiencing the Depths of His Love for You',
		author    : 'Floyd McClung',
		myRating  : 4,
		avgRating : 4.21,
		pages     : 144,
		pubDate   : 1984
	},
	{
		title     : 'Living the Martial Way: A Manual for the Way of Modern Warrior Should Think',
		author    : 'Forrest E. Morgan',
		myRating  : 3,
		avgRating : 4.18,
		pages     : 312,
		pubDate   : 1992
	},
	{
		title     : "Erasing Hell: What God Said about Eternity, and the Things We've Made Up",
		author    : 'Francis Chan',
		myRating  : 5,
		avgRating : 3.94,
		pages     : 197,
		pubDate   : 2011
	},
	{
		title     : 'Goodbye, Things: The New Japanese Minimalism',
		author    : 'Fumio Sasaki',
		myRating  : 5,
		avgRating : 3.81,
		pages     : 272,
		pubDate   : 2015
	},
	{
		title     : 'Be Prepared: A Practical Handbook for New Dads',
		author    : 'Gary   Greenberg',
		myRating  : 5,
		avgRating : 4.08,
		pages     : 240,
		pubDate   : 2004
	},
	{
		title     : 'The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results',
		author    : 'Gary Keller',
		myRating  : 4,
		avgRating : 4.15,
		pages     : 240,
		pubDate   : 2013
	},
	{
		title     : "Hatchet (Brian's Saga, #1)",
		author    : 'Gary Paulsen',
		myRating  : 4,
		avgRating : 3.72,
		pages     : 186,
		pubDate   : 1986
	},
	{
		title     : 'Forks Over Knives: The Plant-Based Way to Health',
		author    : 'Gene  Stone',
		myRating  : 5,
		avgRating : 4.08,
		pages     : 214,
		pubDate   : 2011
	},
	{ title: 'Animal Farm', author: 'George Orwell', myRating: 4, avgRating: 3.94, pages: 141, pubDate: 1945 },
	{ title: 'Horrorstör', author: 'Grady Hendrix', myRating: 4, avgRating: 3.63, pages: 248, pubDate: 2014 },
	{
		title     : "My Best Friend's Exorcism",
		author    : 'Grady Hendrix',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 337,
		pubDate   : 2016
	},
	{
		title     : 'Essentialism: The Disciplined Pursuit of Less',
		author    : 'Greg McKeown',
		myRating  : 5,
		avgRating : 4.04,
		pages     : 260,
		pubDate   : 2011
	},
	{
		title     : 'The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life: Before 8AM',
		author    : 'Hal Elrod',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 172,
		pubDate   : 2012
	},
	{
		title     : 'An Absolutely Remarkable Thing (An Absolutely Remarkable Thing, #1)',
		author    : 'Hank Green',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 352,
		pubDate   : 2018
	},
	{ title: 'To Kill a Mockingbird', author: 'Harper Lee', myRating: 3, avgRating: 4.27, pages: 376, pubDate: 1960 },
	{
		title     : 'The Index Card: Why Personal Finance Doesn’t Have to Be Complicated',
		author    : 'Helaine Olen',
		myRating  : 4,
		avgRating : 3.9,
		pages     : 256,
		pubDate   : 2016
	},
	{
		title     : "Navigating Genesis: A Scientist's Journey through Genesis 1-11",
		author    : 'Hugh Ross',
		myRating  : 3,
		avgRating : 4.43,
		pages     : 298,
		pubDate   : 2014
	},
	{
		title     : 'Insight Guides: China',
		author    : 'Insight Guides',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 480,
		pubDate   : 1990
	},
	{
		title     : 'The New Hunger (Warm Bodies, #1.5)',
		author    : 'Isaac Marion',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 170,
		pubDate   : 2013
	},
	{
		title     : 'Warm Bodies (Warm Bodies, #1)',
		author    : 'Isaac Marion',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 256,
		pubDate   : 2010
	},
	{
		title     : 'The Burning World  (Warm Bodies, #2)',
		author    : 'Isaac Marion',
		myRating  : 5,
		avgRating : 3.91,
		pages     : 512,
		pubDate   : 2017
	},
	{
		title     : 'Very Good Lives: The Fringe Benefits of Failure and the Importance of Imagination',
		author    : 'J.K. Rowling',
		myRating  : 4,
		avgRating : 4.21,
		pages     : 74,
		pubDate   : 2015
	},
	{
		title     : 'Short Stories from Hogwarts of Heroism, Hardship and Dangerous Hobbies (Pottermore Presents, #1)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.23,
		pages     : 71,
		pubDate   : 2016
	},
	{
		title     : 'Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists (Pottermore Presents, #2)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.19,
		pages     : 71,
		pubDate   : 2016
	},
	{
		title     : 'Hogwarts: An Incomplete and Unreliable Guide (Pottermore Presents, #3)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.21,
		pages     : 79,
		pubDate   : 2016
	},
	{
		title     : 'The Tales of Beedle the Bard',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 111,
		pubDate   : 2008
	},
	{
		title     : 'Fantastic Beasts and Where to Find Them: The Original Screenplay',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.26,
		pages     : 304,
		pubDate   : 2016
	},
	{
		title     : "Harry Potter and the Sorcerer's Stone (Harry Potter #1)",
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.47,
		pages     : 309,
		pubDate   : 1997
	},
	{
		title     : "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.47,
		pages     : 309,
		pubDate   : 1997
	},
	{
		title     : 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.42,
		pages     : 341,
		pubDate   : 1998
	},
	{
		title     : 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.57,
		pages     : 435,
		pubDate   : 1999
	},
	{
		title     : 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.57,
		pages     : 652,
		pubDate   : 2005
	},
	{
		title     : 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.56,
		pages     : 734,
		pubDate   : 2000
	},
	{
		title     : 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.62,
		pages     : 759,
		pubDate   : 2007
	},
	{
		title     : 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
		author    : 'J.K. Rowling',
		myRating  : 5,
		avgRating : 4.5,
		pages     : 870,
		pubDate   : 2003
	},
	{ title: 'The Hobbit', author: 'J.R.R. Tolkien', myRating: 4, avgRating: 4.27, pages: 389, pubDate: 1937 },
	{
		title     : 'Surprised by the Power of the Spirit: Discovering How God Speaks and Heals Today',
		author    : 'Jack Deere',
		myRating  : 3,
		avgRating : 4.29,
		pages     : 302,
		pubDate   : 1993
	},
	{
		title     : 'Vegan for Life: Everything You Need to Know to Be Healthy and Fit on a Plant-Based Diet',
		author    : 'Jack Norris',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 283,
		pubDate   : 2011
	},
	{
		title     : "Chasing the Dragon: One Woman's Struggle Against the Darkness of Hong Kong's Drug Dens",
		author    : 'Jackie Pullinger',
		myRating  : 3,
		avgRating : 4.39,
		pages     : 256,
		pubDate   : 1980
	},
	{
		title     : 'The Maze Runner (The Maze Runner, #1)',
		author    : 'James Dashner',
		myRating  : 4,
		avgRating : 4.02,
		pages     : 384,
		pubDate   : 2009
	},
	{
		title     : "Player's Handbook (Dungeons & Dragons)",
		author    : 'James Wyatt',
		myRating  : 5,
		avgRating : 4.57,
		pages     : 320,
		pubDate   : 2014
	},
	{
		title     :
			'Super Better: A Revolutionary Approach to Getting Stronger, Happier, Braver and More Resilient; Powered by the Science of Games',
		author    : 'Jane McGonigal',
		myRating  : 4,
		avgRating : 3.98,
		pages     : 480,
		pubDate   : 2015
	},
	{
		title     : 'Ten Arguments For Deleting Your Social Media Accounts Right Now',
		author    : 'Jaron Lanier',
		myRating  : 4,
		avgRating : 3.53,
		pages     : 146,
		pubDate   : 2018
	},
	{ title: 'The Living and the Dead', author: 'Jason', myRating: 4, avgRating: 3.81, pages: 48, pubDate: 2006 },
	{
		title     : 'Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind How Video Games Are Made',
		author    : 'Jason Schreier',
		myRating  : 5,
		avgRating : 4.24,
		pages     : 304,
		pubDate   : 2017
	},
	{ title: 'Thirteen Reasons Why', author: 'Jay Asher', myRating: 5, avgRating: 3.94, pages: 288, pubDate: 2007 },
	{ title: 'Nerve', author: 'Jeanne Ryan', myRating: 4, avgRating: 3.38, pages: 304, pubDate: 2012 },
	{
		title     : 'Diary of a Wimpy Kid (Diary of a Wimpy Kid, #1)',
		author    : 'Jeff Kinney',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 224,
		pubDate   : 2004
	},
	{
		title     : 'Annihilation (Southern Reach #1)',
		author    : 'Jeff VanderMeer',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 195,
		pubDate   : 2014
	},
	{
		title     :
			'The No-Spend Challenge Guide: How to Stop Spending Money Impulsively, Pay off Debt Fast, & Make Your Finances Fit Your Dreams',
		author    : 'Jen Smith',
		myRating  : 4,
		avgRating : 3.73,
		pages     : 99,
		pubDate   : 2017
	},
	{
		title     :
			'200+ Ways to Protect Your Privacy: Simple Ways to Prevent Hacks and Protect Your Privacy--On and Offline',
		author    : 'Jeni Rogers',
		myRating  : 4,
		avgRating : 3.52,
		pages     : 256,
		pubDate   : 2019
	},
	{
		title     : 'All the Bright Places',
		author    : 'Jennifer Niven',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 378,
		pubDate   : 2015
	},
	{
		title     : 'The Summer I Turned Pretty (Summer, #1)',
		author    : 'Jenny Han',
		myRating  : 5,
		avgRating : 3.93,
		pages     : 276,
		pubDate   : 2009
	},
	{
		title     : "It's Not Summer Without You (Summer, #2)",
		author    : 'Jenny Han',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 288,
		pubDate   : 2010
	},
	{
		title     : "We'll Always Have Summer (Summer, #3)",
		author    : 'Jenny Han',
		myRating  : 5,
		avgRating : 4.12,
		pages     : 291,
		pubDate   : 2011
	},
	{
		title     : 'Remnant of Victory (McCoy Sisters #2)',
		author    : 'Jeri Odell',
		myRating  : 4,
		avgRating : 3.5,
		pages     : 176,
		pubDate   : 2000
	},
	{
		title     : 'A Vampire Tale (Upside Down, #1)',
		author    : 'Jess Smart Smiley',
		myRating  : 3,
		avgRating : 3.2,
		pages     : 144,
		pubDate   : 2012
	},
	{
		title     : 'Me and Earl and the Dying Girl',
		author    : 'Jesse Andrews',
		myRating  : 3,
		avgRating : 3.56,
		pages     : 295,
		pubDate   : 2012
	},
	{
		title     :
			'The Danish Way of Parenting: What the Happiest People in the World Know About Raising Confident, Capable Kids',
		author    : 'Jessica Joelle Alexander',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 224,
		pubDate   : 2014
	},
	{
		title     : "Full Frontal Feminism: A Young Woman's Guide to Why Feminism Matters",
		author    : 'Jessica Valenti',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 288,
		pubDate   : 2007
	},
	{
		title     : 'Grave Peril (The Dresden Files, #3)',
		author    : 'Jim Butcher',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 378,
		pubDate   : 2001
	},
	{
		title     : 'Storm Front (The Dresden Files, #1)',
		author    : 'Jim Butcher',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 384,
		pubDate   : 2000
	},
	{
		title     : 'Fool Moon (The Dresden Files, #2)',
		author    : 'Jim Butcher',
		myRating  : 4,
		avgRating : 4.02,
		pages     : 401,
		pubDate   : 2001
	},
	{
		title     : 'Passion & Purpose: Believing the Church Can Still Change the World',
		author    : 'Jimmy Seibert',
		myRating  : 4,
		avgRating : 4.41,
		pages     : 214,
		pubDate   : 2014
	},
	{
		title     : "Wild at Heart: Discovering the Secret of a Man's Soul",
		author    : 'John Eldredge',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 242,
		pubDate   : 2001
	},
	{ title: 'Looking for Alaska', author: 'John Green', myRating: 5, avgRating: 4.03, pages: 221, pubDate: 2005 },
	{
		title     : 'An Abundance of Katherines',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.58,
		pages     : 229,
		pubDate   : 2006
	},
	{
		title     : 'Turtles All the Way Down',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.96,
		pages     : 286,
		pubDate   : 2017
	},
	{
		title     : 'Will Grayson, Will Grayson',
		author    : 'John Green',
		myRating  : 5,
		avgRating : 3.78,
		pages     : 310,
		pubDate   : 2010
	},
	{ title: 'The Fault in Our Stars', author: 'John Green', myRating: 5, avgRating: 4.22, pages: 316, pubDate: 2012 },
	{ title: 'Paper Towns', author: 'John Green', myRating: 5, avgRating: 3.82, pages: 336, pubDate: 2008 },
	{ title: 'Let it Snow', author: 'John Green', myRating: 5, avgRating: 3.77, pages: 352, pubDate: 2008 },
	{
		title     : 'Mind Hacking: How to Change Your Mind for Good in 21 Days',
		author    : 'John Hargrave',
		myRating  : 5,
		avgRating : 3.77,
		pages     : 256,
		pubDate   : 2015
	},
	{
		title     : "Chew, Vol. 1: Taster's Choice",
		author    : 'John Layman',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 128,
		pubDate   : 2009
	},
	{
		title     : 'Harry Potter and the Cursed Child: Parts One and Two (Harry Potter, #8)',
		author    : 'John Tiffany',
		myRating  : 5,
		avgRating : 3.64,
		pages     : 343,
		pubDate   : 2016
	},
	{ title: 'Into the Wild', author: 'Jon Krakauer', myRating: 3, avgRating: 3.98, pages: 207, pubDate: 1996 },
	{
		title     : 'Nights of the Living Dead: An Anthology',
		author    : 'Jonathan Maberry',
		myRating  : 3,
		avgRating : 3.84,
		pages     : 368,
		pubDate   : 2017
	},
	{
		title     : 'How Not to Be Wrong: The Power of Mathematical Thinking',
		author    : 'Jordan Ellenberg',
		myRating  : 4,
		avgRating : 3.96,
		pages     : 480,
		pubDate   : 2014
	},
	{
		title     : 'Bird Box (Bird Box, #1)',
		author    : 'Josh Malerman',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 262,
		pubDate   : 2014
	},
	{
		title     : 'Living With Less: An Unexpected Key to Happiness',
		author    : 'Joshua Becker',
		myRating  : 4,
		avgRating : 3.68,
		pages     : 114,
		pubDate   : 2012
	},
	{
		title     : 'The More of Less: Finding the Life You Want Under Everything You Own',
		author    : 'Joshua Becker',
		myRating  : 4,
		avgRating : 3.79,
		pages     : 240,
		pubDate   : 2016
	},
	{
		title     : 'The Minimalist Home: A Room-By-Room Guide to a Decluttered, Refocused Life',
		author    : 'Joshua Becker',
		myRating  : 4,
		avgRating : 3.62,
		pages     : 256,
		pubDate   : 2018
	},
	{ title: 'Haunted Mansion', author: 'Joshua Williamson', myRating: 4, avgRating: 3.79, pages: 128, pubDate: 2016 },
	{
		title     : 'Buffy the Vampire Slayer: The Long Way Home (Season 8, Volume 1)',
		author    : 'Joss Whedon',
		myRating  : 3,
		avgRating : 3.96,
		pages     : 136,
		pubDate   : 2007
	},
	{
		title     : 'Beautiful Creatures (Caster Chronicles, #1)',
		author    : 'Kami Garcia',
		myRating  : 4,
		avgRating : 3.76,
		pages     : 563,
		pubDate   : 2009
	},
	{
		title     : 'One of Us Is Lying',
		author    : 'Karen M. McManus',
		myRating  : 5,
		avgRating : 4.06,
		pages     : 361,
		pubDate   : 2017
	},
	{
		title     : 'Bridge to Terabithia',
		author    : 'Katherine Paterson',
		myRating  : 3,
		avgRating : 4,
		pages     : 190,
		pubDate   : 1977
	},
	{
		title     : 'Finding Sisu: In Search of Courage, Strength, and Happiness the Finnish Way',
		author    : 'Katja Pantzar',
		myRating  : 3,
		avgRating : 3.67,
		pages     : 272,
		pubDate   : 2018
	},
	{ title: 'Independent Me', author: 'Kely Braswell', myRating: 3, avgRating: 3.27, pages: 205, pubDate: 2014 },
	{
		title     :
			"The Geek Dad's Guide to Weekend Fun: Cool Hacks, Cutting-Edge Games, and More Awesome Projects for the Whole Family",
		author    : 'Ken Denmead',
		myRating  : 4,
		avgRating : 3.77,
		pages     : 240,
		pubDate   : 2011
	},
	{
		title     : "One Flew Over the Cuckoo's Nest",
		author    : 'Ken Kesey',
		myRating  : 4,
		avgRating : 4.2,
		pages     : 325,
		pubDate   : 1962
	},
	{
		title     : 'Quidditch Through the Ages',
		author    : 'Kennilworthy Whisp',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 56,
		pubDate   : 2001
	},
	{
		title     :
			'Unlimited Memory: How to Use Advanced Learning Strategies to Learn Faster, Remember More and be More Productive (Mental Mastery Book 1)',
		author    : 'Kevin Horsley',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 136,
		pubDate   : 2014
	},
	{
		title     : 'The A-Z of Atari 8-bit Games: Volume 1 (The Atari 8-bit)',
		author    : 'Kieren Hawken',
		myRating  : 3,
		avgRating : 2.58,
		pages     : 196,
		pubDate   : 2017
	},
	{
		title     : 'The DUFF: Designated Ugly Fat Friend',
		author    : 'Kody Keplinger',
		myRating  : 5,
		avgRating : 3.83,
		pages     : 280,
		pubDate   : 2010
	},
	{ title: 'Ring (Ring, #1)', author: 'Kōji Suzuki', myRating: 4, avgRating: 3.82, pages: 282, pubDate: 1991 },
	{ title: "Don't Get Caught", author: 'Kurt Dinan', myRating: 4, avgRating: 3.95, pages: 340, pubDate: 2016 },
	{
		title     : 'The Awakening (The Vampire Diaries, #1)',
		author    : 'L.J. Smith',
		myRating  : 3,
		avgRating : 3.4,
		pages     : 253,
		pubDate   : 1991
	},
	{
		title     : 'The Struggle (The Vampire Diaries, #2)',
		author    : 'L.J. Smith',
		myRating  : 3,
		avgRating : 3.48,
		pages     : 256,
		pubDate   : 1991
	},
	{
		title     : 'The Fury (The Vampire Diaries, #3)',
		author    : 'L.J. Smith',
		myRating  : 4,
		avgRating : 3.54,
		pages     : 285,
		pubDate   : 1991
	},
	{
		title     : 'Dark Reunion (The Vampire Diaries, #4)',
		author    : 'L.J. Smith',
		myRating  : 4,
		avgRating : 3.53,
		pages     : 311,
		pubDate   : 1991
	},
	{
		title     : 'I Love You, Beth Cooper',
		author    : 'Larry Doyle',
		myRating  : 4,
		avgRating : 3.29,
		pages     : 253,
		pubDate   : 2007
	},
	{
		title     : 'A Secret Life (Alias, #2)',
		author    : 'Laura Peyton Roberts',
		myRating  : 4,
		avgRating : 3.69,
		pages     : 202,
		pubDate   : 2003
	},
	{
		title     :
			'What the Most Successful People Do Before Breakfast: A Short Guide to Making Over Your Mornings--and Life',
		author    : 'Laura Vanderkam',
		myRating  : 3,
		avgRating : 3.39,
		pages     : 32,
		pubDate   : 2012
	},
	{
		title     : 'Guilty Pleasures (Anita Blake, Vampire Hunter, #1)',
		author    : 'Laurell K. Hamilton',
		myRating  : 5,
		avgRating : 4.02,
		pages     : 355,
		pubDate   : 1993
	},
	{
		title     : 'Six of Crows (Six of Crows, #1)',
		author    : 'Leigh Bardugo',
		myRating  : 5,
		avgRating : 4.46,
		pages     : 465,
		pubDate   : 2015
	},
	{
		title     : 'Crooked Kingdom (Six of Crows, #2)',
		author    : 'Leigh Bardugo',
		myRating  : 5,
		avgRating : 4.6,
		pages     : 536,
		pubDate   : 2016
	},
	{
		title     : 'The Ersatz Elevator (A Series of Unfortunate Events, #6)',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 4.04,
		pages     : 259,
		pubDate   : 2001
	},
	{
		title     : 'The Hostile Hospital (A Series of Unfortunate Events, #8)',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 3.97,
		pages     : 272,
		pubDate   : 2001
	},
	{
		title     : 'The Vile Village (A Series of Unfortunate Events, #7)',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 3.96,
		pages     : 272,
		pubDate   : 2001
	},
	{
		title     : 'The Carnivorous Carnival (A Series of Unfortunate Events, #9)',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 3.99,
		pages     : 286,
		pubDate   : 2002
	},
	{
		title     : 'The Grim Grotto (A Series of Unfortunate Events, #11)',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 4.01,
		pages     : 323,
		pubDate   : 2004
	},
	{
		title     : 'The Slippery Slope (A Series of Unfortunate Events, #10)',
		author    : 'Lemony Snicket',
		myRating  : 3,
		avgRating : 4.03,
		pages     : 337,
		pubDate   : 2003
	},
	{
		title     : 'The Bad Beginning (A Series of Unfortunate Events, #1)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 176,
		pubDate   : 1999
	},
	{
		title     : 'The Reptile Room (A Series of Unfortunate Events, #2)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 192,
		pubDate   : 1999
	},
	{
		title     : 'The Miserable Mill (A Series of Unfortunate Events, #4)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 194,
		pubDate   : 2000
	},
	{
		title     : 'The Wide Window (A Series of Unfortunate Events, #3)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 214,
		pubDate   : 2000
	},
	{
		title     : 'The Austere Academy (A Series of Unfortunate Events, #5)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 221,
		pubDate   : 2000
	},
	{
		title     : 'The End (A Series of Unfortunate Events, #13)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 337,
		pubDate   : 2006
	},
	{
		title     : 'The Penultimate Peril (A Series of Unfortunate Events, #12)',
		author    : 'Lemony Snicket',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 353,
		pubDate   : 2005
	},
	{ title: 'Read Japanese Today', author: 'Len Welsh', myRating: 4, avgRating: 3.95, pages: 168, pubDate: 1969 },
	{
		title     : 'The Magicians (The Magicians, #1)',
		author    : 'Lev Grossman',
		myRating  : 3,
		avgRating : 3.51,
		pages     : 402,
		pubDate   : 2009
	},
	{ title: 'Big Little Lies', author: 'Liane Moriarty', myRating: 5, avgRating: 4.27, pages: 460, pubDate: 2014 },
	{
		title     : 'Messenger (The Giver, #3)',
		author    : 'Lois Lowry',
		myRating  : 3,
		avgRating : 3.91,
		pages     : 169,
		pubDate   : 2004
	},
	{
		title     : 'Gathering Blue (The Giver, #2)',
		author    : 'Lois Lowry',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 240,
		pubDate   : 2000
	},
	{
		title     : 'The Giver (The Giver, #1)',
		author    : 'Lois Lowry',
		myRating  : 4,
		avgRating : 4.13,
		pages     : 208,
		pubDate   : 1993
	},
	{ title: 'Number the Stars', author: 'Lois Lowry', myRating: 5, avgRating: 4.15, pages: 137, pubDate: 1989 },
	{ title: 'Nazirite DNA', author: 'Lou Engle', myRating: 4, avgRating: 4.58, pages: 50, pubDate: 2009 },
	{ title: 'Holes (Holes, #1)', author: 'Louis Sachar', myRating: 4, avgRating: 3.96, pages: 233, pubDate: 1998 },
	{
		title     : 'Sideways Stories from Wayside School (rack)',
		author    : 'Louis Sachar',
		myRating  : 5,
		avgRating : 4.15,
		pages     : 128,
		pubDate   : 1978
	},
	{
		title     : 'Wayside School Is Falling Down (Wayside School #2)',
		author    : 'Louis Sachar',
		myRating  : 5,
		avgRating : 4.17,
		pages     : 152,
		pubDate   : 1989
	},
	{
		title     : 'Wayside School Gets a Little Stranger (Wayside School #3)',
		author    : 'Louis Sachar',
		myRating  : 5,
		avgRating : 4.19,
		pages     : 168,
		pubDate   : 1995
	},
	{ title: 'Recruited', author: 'Lynn Mason', myRating: 4, avgRating: 3.66, pages: 224, pubDate: 2002 },
	{
		title     : 'A Wrinkle in Time (Time, #1)',
		author    : "Madeleine L'Engle",
		myRating  : 5,
		avgRating : 4,
		pages     : 211,
		pubDate   : 1962
	},
	{
		title     : 'Bored and Brilliant: How Spacing Out Can Unlock Your Most Productive & Creative Self',
		author    : 'Manoush Zomorodi',
		myRating  : 3,
		avgRating : 3.73,
		pages     : 192,
		pubDate   : 2017
	},
	{
		title     : 'The 125 Best Brain Teasers of All Time: A Mind-Blowing Challenge of Math, Logic, and Wordplay',
		author    : 'Marcel Danesi',
		myRating  : 3,
		avgRating : 3.62,
		pages     : 206,
		pubDate   : 2018
	},
	{
		title     : "Where'd You Go, Bernadette",
		author    : 'Maria Semple',
		myRating  : 5,
		avgRating : 3.9,
		pages     : 330,
		pubDate   : 2012
	},
	{
		title     : "Beautiful: A girl's trip through the looking glass",
		author    : "Marie D'Abreo",
		myRating  : 3,
		avgRating : 3.84,
		pages     : 134,
		pubDate   : 2014
	},
	{ title: 'Legend (Legend, #1)', author: 'Marie Lu', myRating: 5, avgRating: 4.18, pages: 305, pubDate: 2011 },
	{
		title     : 'Doctrine: What Christians Should Believe',
		author    : 'Mark Driscoll',
		myRating  : 4,
		avgRating : 3.93,
		pages     : 463,
		pubDate   : 2010
	},
	{
		title     : 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
		author    : 'Mark Manson',
		myRating  : 4,
		avgRating : 3.95,
		pages     : 224,
		pubDate   : 2016
	},
	{ title: 'Archie, Vol. 1', author: 'Mark Waid', myRating: 4, avgRating: 3.99, pages: 160, pubDate: 2016 },
	{ title: 'House of Leaves', author: 'Mark Z. Danielewski', myRating: 4, avgRating: 4.1, pages: 705, pubDate: 2000 },
	{ title: 'Manna', author: 'Marshall Brain', myRating: 5, avgRating: 3.94, pages: 79, pubDate: 2003 },
	{
		title     : 'Frankenstein',
		author    : 'Mary Wollstonecraft Shelley',
		myRating  : 3,
		avgRating : 3.8,
		pages     : 335,
		pubDate   : 1818
	},
	{
		title     : 'World War Z: An Oral History of the Zombie War',
		author    : 'Max Brooks',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 342,
		pubDate   : 2006
	},
	{
		title     : 'How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease',
		author    : 'Michael Greger',
		myRating  : 5,
		avgRating : 4.52,
		pages     : 576,
		pubDate   : 2015
	},
	{ title: 'Stupid White Men', author: 'Michael Moore', myRating: 3, avgRating: 3.32, pages: 304, pubDate: 2001 },
	{ title: 'Mean Girls', author: 'Micol Ostow', myRating: 5, avgRating: 3.84, pages: 283, pubDate: 2017 },
	{
		title     : "Dungeon Master's Guide (Dungeons & Dragons)",
		author    : 'Mike Mearls',
		myRating  : 5,
		avgRating : 4.53,
		pages     : 320,
		pubDate   : 2014
	},
	{
		title     : "Shirley Jackson's The Lottery: The Authorized Graphic Adaptation",
		author    : 'Miles Hyman',
		myRating  : 3,
		avgRating : 3.68,
		pages     : 160,
		pubDate   : 2017
	},
	{
		title     : 'Scythe (Arc of a Scythe, #1)',
		author    : 'Neal Shusterman',
		myRating  : 5,
		avgRating : 4.36,
		pages     : 435,
		pubDate   : 2016
	},
	{
		title     : 'Thunderhead (Arc of a Scythe, #2)',
		author    : 'Neal Shusterman',
		myRating  : 5,
		avgRating : 4.5,
		pages     : 504,
		pubDate   : 2018
	},
	{
		title     : 'The Toll (Arc of a Scythe, #3)',
		author    : 'Neal Shusterman',
		myRating  : 5,
		avgRating : 4.29,
		pages     : 625,
		pubDate   : 2019
	},
	{
		title     : 'Neverwhere (London Below, #1)',
		author    : 'Neil Gaiman',
		myRating  : 3,
		avgRating : 4.17,
		pages     : 370,
		pubDate   : 1996
	},
	{ title: 'Coraline', author: 'Neil Gaiman', myRating: 4, avgRating: 4.06, pages: 162, pubDate: 2002 },
	{ title: 'The Graveyard Book', author: 'Neil Gaiman', myRating: 4, avgRating: 4.14, pages: 307, pubDate: 2008 },
	{
		title     : 'Victory Over the Darkness',
		author    : 'Neil T. Anderson',
		myRating  : 4,
		avgRating : 4.26,
		pages     : 256,
		pubDate   : 1990
	},
	{
		title     : 'Fantastic Beasts and Where to Find Them (Hogwarts Library)',
		author    : 'Newt Scamander',
		myRating  : 5,
		avgRating : 3.99,
		pages     : 128,
		pubDate   : 2001
	},
	{ title: 'Everything, Everything', author: 'Nicola Yoon', myRating: 5, avgRating: 4.07, pages: 306, pubDate: 2015 },
	{ title: 'Cold Sassy Tree', author: 'Olive Ann Burns', myRating: 4, avgRating: 4.01, pages: 391, pubDate: 1984 },
	{
		title     : 'Ender’s Game (Ender’s Saga, #1)',
		author    : 'Orson Scott Card',
		myRating  : 4,
		avgRating : 4.3,
		pages     : 324,
		pubDate   : 1985
	},
	{ title: 'The Windup Girl', author: 'Paolo Bacigalupi', myRating: 3, avgRating: 3.75, pages: 359, pubDate: 2009 },
	{
		title     : 'The Name of the Wind (The Kingkiller Chronicle, #1)',
		author    : 'Patrick Rothfuss',
		myRating  : 5,
		avgRating : 4.54,
		pages     : 662,
		pubDate   : 2007
	},
	{
		title     : 'The Heavenly Man: The Remarkable True Story of Chinese Christian Brother Yun',
		author    : 'Paul Hattaway',
		myRating  : 4,
		avgRating : 4.35,
		pages     : 351,
		pubDate   : 2000
	},
	{
		title     : 'The Girl on the Train',
		author    : 'Paula Hawkins',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 325,
		pubDate   : 2015
	},
	{ title: 'The Alchemist', author: 'Paulo Coelho', myRating: 3, avgRating: 3.87, pages: 197, pubDate: 1988 },
	{
		title     : 'The Good Earth (House of Earth #1)',
		author    : 'Pearl S. Buck',
		myRating  : 3,
		avgRating : 3.98,
		pages     : 418,
		pubDate   : 1931
	},
	{
		title     : "Shortest Way Home: One Mayor's Challenge and a Model for America's Future",
		author    : 'Pete Buttigieg',
		myRating  : 5,
		avgRating : 4.21,
		pages     : 352,
		pubDate   : 2019
	},
	{
		title     : '30 Years of Adventure: A Celebration of Dungeons & Dragons (D&D Retrospective)',
		author    : 'Peter Archer',
		myRating  : 3,
		avgRating : 3.71,
		pages     : 286,
		pubDate   : 2004
	},
	{
		title     : '1001 Books You Must Read Before You Die',
		author    : 'Peter Boxall',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 960,
		pubDate   : 2006
	},
	{
		title     : 'Hidden Codes & Grand Designs: Secret Languages from Ancient Times to Modern Day',
		author    : 'Pierre Berloquin',
		myRating  : 3,
		avgRating : 3.82,
		pages     : 375,
		pubDate   : 2007
	},
	{
		title     : 'Dr. Maniac Will See You Now (Goosebumps Most Wanted, #5)',
		author    : 'R.L. Stine',
		myRating  : 2,
		avgRating : 3.83,
		pages     : 160,
		pubDate   : 2013
	},
	{
		title     : 'Dr. Maniac vs. Robby Schwartz (Goosebumps HorrorLand #5)',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 3.7,
		pages     : 132,
		pubDate   : 2008
	},
	{
		title     : 'Welcome To Camp Slither (Goosebumps HorrorLand, #9)',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 3.91,
		pages     : 133,
		pubDate   : 2009
	},
	{
		title     : 'Little Shop of Hamsters (Goosebumps HorrorLand, #14)',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 3.93,
		pages     : 135,
		pubDate   : 2010
	},
	{
		title     : 'When The Ghost Dog Howls (Goosebumps HorrorLand, #13)',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 4.02,
		pages     : 137,
		pubDate   : 2010
	},
	{
		title     : 'Slappy Birthday to You (Goosebumps SlappyWorld, #1)',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 4.11,
		pages     : 139,
		pubDate   : 2017
	},
	{
		title     : 'Slappy New Year! (Goosebumps HorrorLand, #18)',
		author    : 'R.L. Stine',
		myRating  : 3,
		avgRating : 4.09,
		pages     : 160,
		pubDate   : 2010
	},
	{
		title     : 'It Came from Beneath the Sink! (Goosebumps, #30)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.55,
		pages     : 112,
		pubDate   : 1995
	},
	{
		title     : 'Werewolf Skin (Goosebumps, #60)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 125,
		pubDate   : 1997
	},
	{
		title     : 'Say Cheese - And Die Screaming (Goosebumps HorrorLand, #8)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 125,
		pubDate   : 2009
	},
	{
		title     : 'Welcome to Dead House (Goosebumps, #1)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 126,
		pubDate   : 1992
	},
	{
		title     : 'Escape From Horrorland (Goosebumps HorrorLand, #11)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 132,
		pubDate   : 2009
	},
	{
		title     : "Who's Your Mummy? (Goosebumps HorrorLand #6)",
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.92,
		pages     : 133,
		pubDate   : 2009
	},
	{
		title     : 'Creature Teacher: The Final Exam (Goosebumps Most Wanted, #6)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.03,
		pages     : 133,
		pubDate   : 2014
	},
	{
		title     : 'Night of the Living Dummy (Goosebumps, #7)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 134,
		pubDate   : 1993
	},
	{
		title     : 'My Friends Call Me Monster (Goosebumps HorrorLand, #7)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.82,
		pages     : 138,
		pubDate   : 2015
	},
	{
		title     : 'Stay Out of the Basement  (Goosebumps, #2)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.67,
		pages     : 144,
		pubDate   : 1992
	},
	{
		title     : "The Curse of the Mummy's Tomb (Goosebumps, #5)",
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 3.67,
		pages     : 144,
		pubDate   : 1993
	},
	{
		title     : 'The Horror At Chiller House (Goosebumps HorrorLand, #19)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.09,
		pages     : 160,
		pubDate   : 2011
	},
	{
		title     : 'The 12 Screams of Christmas (Goosebumps Most Wanted Special Edition, #2)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.12,
		pages     : 174,
		pubDate   : 2014
	},
	{
		title     : 'Zombie Halloween (Goosebumps Most Wanted Special Edition, #1)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4.05,
		pages     : 174,
		pubDate   : 2014
	},
	{
		title     : 'Weirdo Halloween (Goosebumps HorrorLand, #16)',
		author    : 'R.L. Stine',
		myRating  : 4,
		avgRating : 4,
		pages     : 214,
		pubDate   : 2010
	},
	{
		title     : 'Creepy Creatures (Goosebumps Graphix, #1)',
		author    : 'R.L. Stine',
		myRating  : 5,
		avgRating : 3.9,
		pages     : 144,
		pubDate   : 2006
	},
	{
		title     : 'Terror Trips (Goosebumps Graphix, #2)',
		author    : 'R.L. Stine',
		myRating  : 5,
		avgRating : 3.97,
		pages     : 144,
		pubDate   : 2007
	},
	{
		title     : '2,000 to 10,000: How to Write Faster, Write Better, and Write More of What You Love',
		author    : 'Rachel Aaron',
		myRating  : 3,
		avgRating : 4.19,
		pages     : 72,
		pubDate   : 2012
	},
	{
		title     : 'Less: A Visual Guide to Minimalism',
		author    : 'Rachel Aust',
		myRating  : 4,
		avgRating : 3.55,
		pages     : 144,
		pubDate   : 2018
	},
	{
		title     : "Nick & Norah's Infinite Playlist",
		author    : 'Rachel Cohn',
		myRating  : 5,
		avgRating : 3.71,
		pages     : 183,
		pubDate   : 2006
	},
	{
		title     : "Nick and Norah's Infinite Playlist",
		author    : 'Rachel Cohn',
		myRating  : 5,
		avgRating : 3.71,
		pages     : 208,
		pubDate   : 2006
	},
	{ title: 'Ghosts', author: 'Raina Telgemeier', myRating: 5, avgRating: 4.23, pages: 256, pubDate: 2016 },
	{ title: 'Landline', author: 'Rainbow Rowell', myRating: 4, avgRating: 3.55, pages: 310, pubDate: 2014 },
	{ title: 'Attachments', author: 'Rainbow Rowell', myRating: 5, avgRating: 3.91, pages: 323, pubDate: 2011 },
	{ title: 'Eleanor & Park', author: 'Rainbow Rowell', myRating: 5, avgRating: 4.07, pages: 328, pubDate: 2012 },
	{
		title     : 'Wayward Son (Simon Snow, #2)',
		author    : 'Rainbow Rowell',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 356,
		pubDate   : 2019
	},
	{ title: 'Fangirl', author: 'Rainbow Rowell', myRating: 5, avgRating: 4.07, pages: 483, pubDate: 2013 },
	{ title: 'Carry On', author: 'Rainbow Rowell', myRating: 5, avgRating: 4.24, pages: 522, pubDate: 2015 },
	{
		title     : 'Thing Explainer: Complicated Stuff in Simple Words',
		author    : 'Randall Munroe',
		myRating  : 4,
		avgRating : 4.15,
		pages     : 64,
		pubDate   : 2015
	},
	{
		title     : 'What If? Serious Scientific Answers to Absurd Hypothetical Questions',
		author    : 'Randall Munroe',
		myRating  : 5,
		avgRating : 4.16,
		pages     : 303,
		pubDate   : 2014
	},
	{
		title     : 'Money, Possessions and Eternity',
		author    : 'Randy Alcorn',
		myRating  : 3,
		avgRating : 4.2,
		pages     : 528,
		pubDate   : 1989
	},
	{
		title     : 'The Treasure Principle: Unlocking the Secret of Joyful Giving',
		author    : 'Randy Alcorn',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 120,
		pubDate   : 2001
	},
	{ title: 'Safely Home', author: 'Randy Alcorn', myRating: 5, avgRating: 4.43, pages: 402, pubDate: 2001 },
	{
		title     : "Miss Peregrine’s Home for Peculiar Children (Miss Peregrine's Peculiar Children, #1)",
		author    : 'Ransom Riggs',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 382,
		pubDate   : 2011
	},
	{
		title     :
			'Welcome to the Club: 100 Parenting Milestones You Never Saw Coming (Parenting Books, Parenting Books Best Sellers, New Parents Gift)',
		author    : "Raquel D'Apice",
		myRating  : 5,
		avgRating : 4.28,
		pages     : 144,
		pubDate   : 2016
	},
	{ title: 'Fahrenheit 451', author: 'Ray Bradbury', myRating: 4, avgRating: 3.99, pages: 180, pubDate: 1953 },
	{
		title     : 'Cemetery Dance: Issue 74-75',
		author    : 'Richard Chizmar',
		myRating  : 4,
		avgRating : 4.17,
		pages     : 192,
		pubDate   : 2016
	},
	{
		title     : 'Celebration of Discipline: The Path to Spiritual Growth',
		author    : 'Richard J. Foster',
		myRating  : 4,
		avgRating : 4.19,
		pages     : 256,
		pubDate   : 1978
	},
	{ title: 'I Am Legend', author: 'Richard Matheson', myRating: 5, avgRating: 4.07, pages: 160, pubDate: 1954 },
	{
		title     : 'Frostbite (Vampire Academy, #2)',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.28,
		pages     : 327,
		pubDate   : 2008
	},
	{
		title     : 'Vampire Academy (Vampire Academy, #1)',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 332,
		pubDate   : 2007
	},
	{
		title     : 'Shadow Kiss (Vampire Academy, #3)',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.36,
		pages     : 443,
		pubDate   : 2008
	},
	{
		title     : 'Spirit Bound (Vampire Academy, #5)',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.36,
		pages     : 489,
		pubDate   : 2010
	},
	{
		title     : 'Blood Promise (Vampire Academy, #4)',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.34,
		pages     : 503,
		pubDate   : 2009
	},
	{
		title     : 'Last Sacrifice (Vampire Academy, #6)',
		author    : 'Richelle Mead',
		myRating  : 5,
		avgRating : 4.4,
		pages     : 594,
		pubDate   : 2010
	},
	{ title: 'The Final Quest', author: 'Rick Joyner', myRating: 4, avgRating: 4.34, pages: 170, pubDate: 1996 },
	{
		title     : 'The Lightning Thief (Percy Jackson and the Olympians, #1)',
		author    : 'Rick Riordan',
		myRating  : 5,
		avgRating : 4.25,
		pages     : 375,
		pubDate   : 2005
	},
	{
		title     : 'The 5th Wave (The 5th Wave, #1)',
		author    : 'Rick Yancey',
		myRating  : 5,
		avgRating : 4.05,
		pages     : 460,
		pubDate   : 2013
	},
	{
		title     : 'Slay the Dragon: Writing Great Video Games',
		author    : 'Robert Denton Bryant',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 232,
		pubDate   : 2015
	},
	{
		title     : 'Outcast by Kirkman & Azaceta Book 1',
		author    : 'Robert Kirkman',
		myRating  : 3,
		avgRating : 4.08,
		pages     : 296,
		pubDate   : 2016
	},
	{
		title     : 'The Walking Dead, Vol. 1: Days Gone Bye',
		author    : 'Robert Kirkman',
		myRating  : 4,
		avgRating : 4.27,
		pages     : 144,
		pubDate   : 2004
	},
	{
		title     : 'Good Luck Have Fun: The Rise of eSports',
		author    : 'Roland Li',
		myRating  : 3,
		avgRating : 3.64,
		pages     : 268,
		pubDate   : 2016
	},
	{
		title     : 'The Big Book of 30-Day Challenges: 60 Habit-Forming Programs to Live an Infinitely Better Life',
		author    : 'Rosanna Casper',
		myRating  : 3,
		avgRating : 3.39,
		pages     : 144,
		pubDate   : 2017
	},
	{ title: 'Milk and Honey', author: 'Rupi Kaur', myRating: 4, avgRating: 4.09, pages: 204, pubDate: 2014 },
	{ title: 'Play Dead', author: 'Ryan Brown', myRating: 4, avgRating: 3.35, pages: 352, pubDate: 2010 },
	{ title: 'Scene but Not Heard', author: 'Sam  Henderson', myRating: 3, avgRating: 3.7, pages: 119, pubDate: 2013 },
	{
		title     : 'Perfect (Pretty Little Liars, #3)',
		author    : 'Sara Shepard',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 298,
		pubDate   : 2007
	},
	{
		title     : 'Wicked (Pretty Little Liars, #5)',
		author    : 'Sara Shepard',
		myRating  : 4,
		avgRating : 4.01,
		pages     : 312,
		pubDate   : 2008
	},
	{
		title     : 'Flawless (Pretty Little Liars, #2)',
		author    : 'Sara Shepard',
		myRating  : 4,
		avgRating : 3.94,
		pages     : 330,
		pubDate   : 2007
	},
	{
		title     : 'Wanted (Pretty Little Liars, #8)',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 261,
		pubDate   : 2010
	},
	{
		title     : 'Heartless (Pretty Little Liars, #7)',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.07,
		pages     : 274,
		pubDate   : 2010
	},
	{
		title     : 'Pretty Little Liars (Pretty Little Liars, #1)',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 3.88,
		pages     : 286,
		pubDate   : 2006
	},
	{
		title     : 'Killer (Pretty Little Liars, #6)',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.05,
		pages     : 320,
		pubDate   : 2009
	},
	{
		title     : 'Unbelievable (Pretty Little Liars, #4)',
		author    : 'Sara Shepard',
		myRating  : 5,
		avgRating : 4.04,
		pages     : 335,
		pubDate   : 2008
	},
	{
		title     : "Rick and Morty: Lil' Poopy Superstar",
		author    : 'Sarah Graley',
		myRating  : 3,
		avgRating : 3.55,
		pages     : 128,
		pubDate   : 2017
	},
	{
		title     : 'Level Up!: The Guide to Great Video Game Design',
		author    : 'Scott Rogers',
		myRating  : 5,
		avgRating : 4.13,
		pages     : 492,
		pubDate   : 2010
	},
	{
		title     : 'Uglies: Cutters (Uglies: Graphic Novel, #2)',
		author    : 'Scott Westerfeld',
		myRating  : 3,
		avgRating : 3.61,
		pages     : 176,
		pubDate   : 2012
	},
	{
		title     : 'Specials (Uglies, #3)',
		author    : 'Scott Westerfeld',
		myRating  : 3,
		avgRating : 3.77,
		pages     : 372,
		pubDate   : 2006
	},
	{
		title     : 'Pretties (Uglies, #2)',
		author    : 'Scott Westerfeld',
		myRating  : 4,
		avgRating : 3.85,
		pages     : 370,
		pubDate   : 2005
	},
	{
		title     : 'Extras (Uglies, #4)',
		author    : 'Scott Westerfeld',
		myRating  : 4,
		avgRating : 3.59,
		pages     : 417,
		pubDate   : 2006
	},
	{
		title     : 'Uglies (Uglies, #1)',
		author    : 'Scott Westerfeld',
		myRating  : 4,
		avgRating : 3.86,
		pages     : 425,
		pubDate   : 2005
	},
	{
		title     : 'Abraham Lincoln: Vampire Hunter (Abraham Lincoln: Vampire Hunter, #1)',
		author    : 'Seth Grahame-Smith',
		myRating  : 4,
		avgRating : 3.7,
		pages     : 336,
		pubDate   : 2010
	},
	{
		title     : 'Smartcuts: How Hackers, Innovators, and Icons Accelerate Success',
		author    : 'Shane Snow',
		myRating  : 4,
		avgRating : 3.93,
		pages     : 272,
		pubDate   : 2014
	},
	{
		title     : 'Kicking It: Successful Crowdfunding',
		author    : 'Shanna Germain',
		myRating  : 5,
		avgRating : 3.92,
		pages     : 79,
		pubDate   : 2012
	},
	{
		title     : 'Where the Sidewalk Ends',
		author    : 'Shel Silverstein',
		myRating  : 4,
		avgRating : 4.3,
		pages     : 176,
		pubDate   : 1974
	},
	{ title: 'Fallin Up', author: 'Shel Silverstein', myRating: 4, avgRating: 4.34, pages: 178, pubDate: 1996 },
	{
		title     : 'A Light in the Attic',
		author    : 'Shel Silverstein',
		myRating  : 5,
		avgRating : 4.35,
		pages     : 176,
		pubDate   : 1981
	},
	{
		title     : 'The Absolutely True Diary of a Part-Time Indian',
		author    : 'Sherman Alexie',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 230,
		pubDate   : 2007
	},
	{
		title     : 'Lean In: Women, Work, and the Will to Lead',
		author    : 'Sheryl Sandberg',
		myRating  : 5,
		avgRating : 3.95,
		pages     : 217,
		pubDate   : 2013
	},
	{
		title     : 'My True Love Gave to Me: Twelve Holiday Stories',
		author    : 'Stephanie Perkins',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 321,
		pubDate   : 2014
	},
	{
		title     : "There's Someone Inside Your House",
		author    : 'Stephanie Perkins',
		myRating  : 5,
		avgRating : 3.38,
		pages     : 287,
		pubDate   : 2017
	},
	{
		title     : 'The Perks of Being a Wallflower',
		author    : 'Stephen Chbosky',
		myRating  : 5,
		avgRating : 4.2,
		pages     : 213,
		pubDate   : 1999
	},
	{
		title     : 'I Am America (And So Can You!)',
		author    : 'Stephen Colbert',
		myRating  : 4,
		avgRating : 3.91,
		pages     : 230,
		pubDate   : 2007
	},
	{
		title     : 'The Red Badge of Courage',
		author    : 'Stephen Crane',
		myRating  : 2,
		avgRating : 3.24,
		pages     : 170,
		pubDate   : 1895
	},
	{
		title     : 'The Green Mile, Part 1: The Two Dead Girls',
		author    : 'Stephen King',
		myRating  : 4,
		avgRating : 4.52,
		pages     : 92,
		pubDate   : 1996
	},
	{ title: 'The Gunslinger', author: 'Stephen King', myRating: 4, avgRating: 3.95, pages: 231, pubDate: 1982 },
	{ title: 'Carrie', author: 'Stephen King', myRating: 4, avgRating: 3.96, pages: 253, pubDate: 1974 },
	{ title: 'Doctor Sleep', author: 'Stephen King', myRating: 4, avgRating: 4.12, pages: 531, pubDate: 2013 },
	{ title: 'Pet Sematary', author: 'Stephen King', myRating: 4, avgRating: 3.99, pages: 580, pubDate: 1983 },
	{ title: 'Misery', author: 'Stephen King', myRating: 5, avgRating: 4.16, pages: 310, pubDate: 1987 },
	{
		title     : 'On Writing: A Memoir of the Craft',
		author    : 'Stephen King',
		myRating  : 5,
		avgRating : 4.33,
		pages     : 320,
		pubDate   : 2000
	},
	{ title: 'The Shining', author: 'Stephen King', myRating: 5, avgRating: 4.22, pages: 659, pubDate: 1977 },
	{ title: 'It', author: 'Stephen King', myRating: 5, avgRating: 4.24, pages: 1116, pubDate: 1986 },
	{
		title     : 'New Moon (Twilight, #2)',
		author    : 'Stephenie Meyer',
		myRating  : 3,
		avgRating : 3.53,
		pages     : 565,
		pubDate   : 2006
	},
	{
		title     : 'Eclipse (Twilight, #3)',
		author    : 'Stephenie Meyer',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 632,
		pubDate   : 2007
	},
	{
		title     : 'Breaking Dawn (Twilight, #4)',
		author    : 'Stephenie Meyer',
		myRating  : 3,
		avgRating : 3.69,
		pages     : 756,
		pubDate   : 2008
	},
	{
		title     : 'Twilight (Twilight, #1)',
		author    : 'Stephenie Meyer',
		myRating  : 4,
		avgRating : 3.59,
		pages     : 501,
		pubDate   : 2005
	},
	{
		title     : 'Twilight / Life and Death (Twilight, #1, #1.75)',
		author    : 'Stephenie Meyer',
		myRating  : 4,
		avgRating : 3.42,
		pages     : 738,
		pubDate   : 2015
	},
	{
		title     : '30 Days of Night, Vol. 4: Return to Barrow',
		author    : 'Steve Niles',
		myRating  : 4,
		avgRating : 3.84,
		pages     : 144,
		pubDate   : 2004
	},
	{
		title     : '30 Days of Night, Vol. 1',
		author    : 'Steve Niles',
		myRating  : 5,
		avgRating : 3.8,
		pages     : 104,
		pubDate   : 2004
	},
	{
		title     : '30 Days of Night, Vol. 2: Dark Days',
		author    : 'Steve Niles',
		myRating  : 5,
		avgRating : 3.76,
		pages     : 144,
		pubDate   : 2004
	},
	{
		title     :
			'The Ultimate History of Video Games: From Pong to Pokemon - The Story Behind the Craze That Touched Our Lives and Changed the World',
		author    : 'Steven L. Kent',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 608,
		pubDate   : 2001
	},
	{
		title     : 'Mockingjay (The Hunger Games, #3)',
		author    : 'Suzanne Collins',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 390,
		pubDate   : 2010
	},
	{
		title     : 'The Hunger Games (The Hunger Games, #1)',
		author    : 'Suzanne Collins',
		myRating  : 5,
		avgRating : 4.33,
		pages     : 374,
		pubDate   : 2008
	},
	{
		title     : 'Catching Fire (The Hunger Games, #2)',
		author    : 'Suzanne Collins',
		myRating  : 5,
		avgRating : 4.29,
		pages     : 391,
		pubDate   : 2009
	},
	{
		title     : 'Waking Gods (Themis Files, #2)',
		author    : 'Sylvain Neuvel',
		myRating  : 4,
		avgRating : 4.04,
		pages     : 336,
		pubDate   : 2017
	},
	{
		title     : 'Sleeping Giants (Themis Files, #1)',
		author    : 'Sylvain Neuvel',
		myRating  : 5,
		avgRating : 3.84,
		pages     : 320,
		pubDate   : 2016
	},
	{ title: 'Thr3e', author: 'Ted Dekker', myRating: 4, avgRating: 4.09, pages: 423, pubDate: 2003 },
	{
		title     : 'Getting Started with SQL: A Hands-On Approach for Beginners',
		author    : 'Thomas Nield',
		myRating  : 4,
		avgRating : 3.99,
		pages     : 134,
		pubDate   : 2016
	},
	{
		title     : 'The Prodigal God: Recovering the Heart of the Christian Faith',
		author    : 'Timothy J. Keller',
		myRating  : 4,
		avgRating : 4.39,
		pages     : 155,
		pubDate   : 2008
	},
	{ title: 'Bossypants', author: 'Tina Fey', myRating: 4, avgRating: 3.96, pages: 277, pubDate: 2011 },
	{
		title     : "Fun Inc.: Why games are the 21st Century's most serious business",
		author    : 'Tom Chatfield',
		myRating  : 4,
		avgRating : 3.41,
		pages     : 272,
		pubDate   : 2010
	},
	{ title: 'Strengths Finder 2.0', author: 'Tom Rath', myRating: 3, avgRating: 3.94, pages: 174, pubDate: 2007 },
	{ title: "Anya's Ghost", author: 'Vera Brosgol', myRating: 5, avgRating: 3.89, pages: 224, pubDate: 2011 },
	{
		title     : 'Allegiant (Divergent, #3)',
		author    : 'Veronica Roth',
		myRating  : 4,
		avgRating : 3.63,
		pages     : 526,
		pubDate   : 2013
	},
	{
		title     : 'Divergent (Divergent, #1)',
		author    : 'Veronica Roth',
		myRating  : 5,
		avgRating : 4.2,
		pages     : 487,
		pubDate   : 2011
	},
	{
		title     : 'Insurgent (Divergent, #2)',
		author    : 'Veronica Roth',
		myRating  : 5,
		avgRating : 4.03,
		pages     : 525,
		pubDate   : 2012
	},
	{ title: 'Slumdog Millionaire', author: 'Vikas Swarup', myRating: 5, avgRating: 3.99, pages: 333, pubDate: 2005 },
	{
		title     : "The Smart Girl's Guide to Privacy: Practical Tips for Staying Safe Online",
		author    : 'Violet Blue',
		myRating  : 4,
		avgRating : 3.68,
		pages     : 168,
		pubDate   : 2014
	},
	{
		title     : 'Warner Bros. Studio Tour London - The Making of Harry Potter: The Official Guide',
		author    : 'Warner Bros',
		myRating  : 4,
		avgRating : 4.3,
		pages     : 72,
		pubDate   : 2012
	},
	{
		title     : 'Systematic Theology: An Introduction to Biblical Doctrine',
		author    : 'Wayne Grudem',
		myRating  : 5,
		avgRating : 4.24,
		pages     : 1264,
		pubDate   : 1994
	},
	{
		title     : 'Things We Think About Games',
		author    : 'Will Hindmarch',
		myRating  : 4,
		avgRating : 3.69,
		pages     : 160,
		pubDate   : 2008
	},
	{ title: 'Lord of the Flies', author: 'William Golding', myRating: 4, avgRating: 3.68, pages: 192, pubDate: 1954 },
	{
		title     : 'Ghosts of Saltmarsh (Dungeons & Dragons, 5th Edition)',
		author    : 'Wizards RPG Team',
		myRating  : 5,
		avgRating : 4.1,
		pages     : 256,
		pubDate   : 2019
	},
	{
		title     : 'Tales from the Yawning Portal',
		author    : 'Wizards RPG Team',
		myRating  : 5,
		avgRating : 4.27,
		pages     : 248,
		pubDate   : 2017
	},
	{
		title     : 'Sapiens: A Brief History of Humankind',
		author    : 'Yuval Noah Harari',
		myRating  : 4,
		avgRating : 4.43,
		pages     : 498,
		pubDate   : 2011
	},
	{
		title     : 'The Willow Files, Vol. 2 (The Willow Files, #2)',
		author    : 'Yvonne Navarro',
		myRating  : 4,
		avgRating : 4.14,
		pages     : 210,
		pubDate   : 2001
	},
	{ title: 'Rick and Morty, Vol. 1', author: 'Zac Gorman', myRating: 5, avgRating: 4.09, pages: 128, pubDate: 2015 },
	{
		title: 'Elantris (Elantris #1)',
		author: 'Brandon Sanderson',
		myRating: 5,
		avgRating: 4.18,
		pages: 638,
		pubDate: 2006
	},
	{
		title: 'The Hope of Elantris (Elantris #1.5)',
		author: 'Brandon Sanderson',
		myRating: 4,
		avgRating: 3.72,
		pages: 25,
		pubDate: 2006
	},
	{
		title: "The Emporer's Soul",
		author: 'Brandon Sanderson',
		myRating: 5,
		avgRating: 4.35,
		pages: 175,
		pubDate: 2012
	}
];
