/*
	- Add more keywords
	- Add descriptions for each book in own words
	- Add you might like to each book
*/

let bookData = [
    /*===========================
    	Author First Name - A's
    ===========================*/
	//#region A
    {
        title: 'Hocus Pocus & The All New Sequel',
        author: 'A.W. Jantha',
        myRating: 6,
        pages: 521,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/hocus-pocus.jpg',
        keywords: ['magic', 'fiction', 'lgbt', 'witches', 'young adult', 'fantasy', 'halloween', 'movies', 'female author'],
		similar: ['Mean Girls'],
		description: `First part of the book is a scene-by-scene retelling of the hit movie. The second half is set 25 years
					later and involves the kid of the first movie re-awakening the Sanderson sisters.`
    }, {
        title: 'Irresistible',
        author: 'Adam Alter',
        myRating: 7,
        pages: 368,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/irresistible.jpg',
        keywords: ['nonfiction', 'technology', 'self-help', 'psychology', 'habits'],
		similar: ['Digital Minimalism', 'The Revenge of Analog', 'Bored and Brilliant'],
		description: `Understanding why so many of today's products are irresistible due to behavioral addicition.`
    },
    {
        title: 'Multiple Choice',
        author: 'Alejandro Zambra',
        myRating: 4,
        pages: 128,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/multiple-choice.jpg',
        keywords: ['fiction', 'poetry', 'experimental'],
		similar: ['Milk and Honey'],
		description: `Poetry in the form of a standardized test.`
    },
    {
        title: 'One Day in the Life of Ivan Denisovich',
        author: 'Aleksandr Solzhenitsyn',
        myRating: 6,
        pages: 182,
        pubDate: 1962,
        yearRead: [2006],
        thumb: './images/one-day.jpg',
        keywords: ['fiction', 'russia', 'historical'],
		similar: ['Night'],
		description: `Follows an inmate in a Soviet labor camp, showing what life was like.`
    },
    {
        title: 'Unprotected Lexicon',
        author: 'Alexa Chrisbacher',
        myRating: 6,
        pages: 110,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/lexicon.jpg',
        keywords: ['poetry', 'lgbt', 'roller derby', 'sports', 'fiction', 'female author'],
		similar: ['Milk and Honey'],
		description: `Poetry book exploring a girl's journey with roller derby, feminism, and sexuality.`
    },
    {
        title: 'Learning Chinese Characters',
        author: 'Alison Matthews',
        myRating: 7,
        pages: 384,
        pubDate: 2007,
        yearRead: [2013],
        thumb: './images/chinese-characters.jpg',
        keywords: ['nonfiction', 'educational', 'language', 'chinese', 'china', 'female author'],
		similar: ['Read Japanese Today', 'Fluent in 3 Months'],
		description: `800 Chinese characters with tips for how to remember them for the HSK Level A test.`
    },
    {
        title: 'Matched',
        author: 'Ally Condie',
        myRating: 5,
        pages: 369,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/matched.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'dystopian', 'fantasy', 'female author', 'series'],
		similar: ['Uglies', 'Divergent'],
		description: `Dystopian world where officials choose everything for you, including who you love.`
    },
    {
        title: 'Crossed',
        author: 'Ally Condie',
        myRating: 5,
        pages: 367,
        pubDate: 2011,
        yearRead: [2016],
        thumb: './images/crossed.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'dystopian', 'fantasy', 'female author', 'series'],
		similar: ['Uglies', 'Divergent'],
		description: `Book 2 in the Matched series.`
    },
    {
        title: 'Reached',
        author: 'Ally Condie',
        myRating: 5,
        pages: 512,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/reached.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'dystopian', 'fantasy', 'female author', 'series'],
		similar: ['Uglies', 'Divergent'],
		description: `Book 3 in the Matched series.`
    },
    {
        title: 'Scary Stories to Tell in the Dark',
        author: 'Alvin Schwartz',
        myRating: 6,
        pages: 111,
        pubDate: 1981,
        yearRead: [1999],
        thumb: './images/scary-stories1.jpg',
        keywords: ['fiction', 'children', 'horror', 'short stories', 'halloween', 'movies', 'series'],
		similar: ['Welcome to Dead House', 'Night of the Living Dummy'],
		description: `Lots of creepy short stories for kids.`
    },
    {
        title: 'More Scary Stories to Tell in the Dark',
        author: 'Alvin Schwartz',
        myRating: 6,
        pages: 100,
        pubDate: 1984,
        yearRead: [1999],
        thumb: './images/scary-stories2.jpg',
        keywords: ['fiction', 'children', 'horror', 'short stories', 'halloween', 'series'],
		similar: ['Welcome to Dead House', 'Night of the Living Dummy'],
		description: `Lots of creepy short stories for kids.`
    },
    {
        title: 'More Tales to Chill Your Bones',
        author: 'Alvin Schwartz',
        myRating: 6,
        pages: 128,
        pubDate: 1991,
        yearRead: [2000],
        thumb: './images/scary-stories3.jpg',
        keywords: ['fiction', 'children', 'horror', 'short stories', 'halloween', 'series'],
		similar: ['Welcome to Dead House', 'Night of the Living Dummy'],
		description: `Lots of creepy short stories for kids.`
    },
    {
        title: 'Humility',
        author: 'Andrew Murray',
        myRating: 6,
        pages: 112,
        pubDate: 1895,
        yearRead: [2014],
        thumb: './images/humility.jpg',
        keywords: ['nonfiction', 'religion', 'christian', 'christian living'],
		similar: ['Celebration of Discipline'],
		description: `Christian book discussing how to stop being prideful.`
    },
    {
        title: 'The Office',
        author: 'Andy Greene',
        myRating: 8,
        pages: 464,
        pubDate: 2020,
        yearRead: [2021],
        thumb: './images/office.jpg',
        keywords: ['nonfiction', 'tv', 'pop culture', 'biography'],
		similar: ['Blood, Sweat, and Pixels'],
		description: `A look at the making of the U.S. version of The Office with interviews throughout.`
    },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        myRating: 8,
        pages: 435,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/martian.jpg',
        keywords: ['fiction', 'science fiction', 'adventure', 'space', 'mars', 'movies'],
		similar: ['Artemis'],
		description: `An astronaut ends up stranded on Mars and needs to figure out how to survive.`
    },
    {
        title: 'Artemis',
        author: 'Andy Weir',
        myRating: 7,
        pages: 305,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/artemis.jpg',
        keywords: ['fiction', 'science fiction', 'adventure', 'space', 'moon'],
		similar: ['The Martian'],
		description: `A smuggler living on the only city on the Moon is caught up in a conspiracy for control of the city.`
    },
    {
        title: 'Grit',
        author: 'Angela Duckworth',
        myRating: 6,
        pages: 277,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/grit.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'leadership', 'female author'],
		similar: ['Atomic Habits', 'Drive'],
		description: `Shows how talent isn't the main factor for success but instead perserverance and passion are.`
    },
    {
        title: 'The History and Uncertain Future of Handwriting',
        author: 'Anne Trubek',
        myRating: 6,
        pages: 192,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/handwriting.jpg',
        keywords: ['nonfiction', 'writing', 'historical', 'handwriting', 'female author'],
		similar: ['Hidden Codes & Grand Designs'],
		description: `A look at the history of handwriting and the impact it's had on various cultures.`
    },
    {
        title: 'Unshakeable',
        author: 'Anthony Robbins',
        myRating: 7,
        pages: 257,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/unshakeable.jpg',
        keywords: ['nonfiction', 'personal finance', 'self-help', 'money'],
		similar: ["Dave Ramsey's Complete Guide to Money"],
		description: `Steps to protect your investments and maximize your wealth.`
    },
    {
        title: 'How Much is Enough?',
        author: 'Arthur Simon',
        myRating: 7,
        pages: 192,
        pubDate: 2003,
        yearRead: [2015],
        thumb: './images/how-much.jpg',
        keywords: ['nonfiction', 'christian living', 'christian', 'money'],
		similar: ['The Treasure Principle', 'Money, Possessions and Eternity'],
		description: `A look at affluenza within America and within the church.`
    },
    {
        title: 'Nothing But the Truth',
        author: 'Avi',
        myRating: 4,
        pages: 177,
        pubDate: 1991,
        yearRead: [2003],
        thumb: './images/nothing-but-truth.jpg',
        keywords: ['fiction', 'young adult', 'legal', 'patriotic'],
		similar: ['The Kid Who Ran for President'],
		description: `A kid goes on trial at school for humming during the national anthem.`
    },
	//#endregion
    /*===========================
    	Author First Name - B's
    ===========================*/
	//#region B
    {
        title: 'Go Ask Alice',
        author: 'Beatrice Sparks',
        myRating: 5,
        pages: 213,
        pubDate: 1971,
        yearRead: [2015],
        thumb: './images/alice.jpg',
        keywords: ['fiction', 'mental health', 'young adult', 'drugs', 'coming of age', 'female author'],
		similar: ['Thirteen Reasons Why'],
		description: `A girl gets hooked on drugs after someone slips LSD in her drink at a party.`
    },
    {
        title: 'Beyond Awkward',
        author: 'Beau Crosetto',
        myRating: 7,
        pages: 206,
        pubDate: 2014,
        yearRead: [2015],
        thumb: './images/awkward.jpg',
        keywords: ['nonfiction', 'christian', 'evangelism'],
		similar: ['Changing the World Through Discipleship'],
		description: `Making evangelism less awkward for everyone.`
    },
    {
        title: "What If It's Us",
        author: 'Becky Albertalli',
        myRating: 6,
        pages: 448,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/what-if-its-us.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'female author', 'series'],
		similar: ['The Upside of Unrequited'],
		description: `Two teenage boys meet each other by chance at a post office and fall for each other.`
    },
    {
        title: 'The Upside of Unrequited',
        author: 'Becky Albertalli',
        myRating: 7,
        pages: 336,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/upside.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'female author', 'series'],
		similar: ["What If It's Us"],
		description: `An insecure girl who has had 26 unrequited crushes tries to find love.`
    },
    {
        title: 'Simon vs. the Homo Sapiens Agenda',
        author: 'Becky Albertalli',
        myRating: 7,
        pages: 303,
        pubDate: 2015,
        yearRead: [2017, 2018],
        thumb: './images/simon.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'coming of age', 'movies', 'female author', 'series'],
		similar: ['Struck By Lightning', 'Openly Straight', 'Will Grayson, Will Grayson'],
		description: `An in-the-closet boy is blackmailed when someone finds out his secret.`
    },
    {
        title: 'Leah on the Offbeat',
        author: 'Becky Albertalli',
        myRating: 6,
        pages: 352,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/leah.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'female author', 'series'],
		similar: ['The Upside of Unrequited'],
		description: `Sequel to Simon vs. the Homo Sapiens Agenda focused on his best friend.`
    },
    {
        title: 'Love, Creekwood',
        author: 'Becky Albertalli',
        myRating: 5,
        pages: 128,
        pubDate: 2020,
        yearRead: [2021],
        thumb: './images/love-creekwood.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'experimental', 'female author', 'series'],
		similar: ['Simon vs. the Homo Sapiens Agenda'],
		description: `Sequel to Simon vs. the Homo Sapiens Agenda but written through letters and emails.`
    },
    {
        title: '101 Video Games to Play Before You Grow Up',
        author: 'Ben Bertoli',
        myRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/games-before-grow.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'reference'],
		similar: ["The Gamer's Bucket List"],
		description: `Tidbits and trivia about 101 recommended video games.`
    },
    {
        title: 'Math with Bad Drawings',
        author: 'Ben Orlin',
        myRating: 9,
        pages: 376,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/math-bad-drawings.jpg',
        keywords: ['nonfiction', 'humor', 'mathematics', 'educational'],
		similar: ['What If?', 'Thing Explainer'],
		description: `Drawings and humor combine to help explain various math-based questions.`
    },
    {
        title: 'Aristotle and Dante Discover the Secrets of the Universe',
        author: 'Benjamin Alire Sáenz',
        myRating: 7,
        pages: 359,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/aristotle-dante.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'coming of age', 'series'],
		similar: ['Eleanor & Park', 'Simon vs. the Homo Sapiens Agenda'],
		description: `Two Mexican-American boys find friendship as they struggle with racial and ethnic
					identity, sexuality, and family relationships.`
    },
    {
        title: 'Fluent in 3 Months',
        author: 'Benny Lewis',
        myRating: 7,
        pages: 249,
        pubDate: 2014,
        yearRead: [2015],
        thumb: './images/fluent-in-3.jpg',
        keywords: ['nonfiction', 'educational', 'language'],
		similar: ['Learning Chinese Characters', 'Read Japanese Today'],
		description: `Tips for how to grasp a new language faster from someone who's done it multiple times.`
    },
    {
        title: 'The Mouse and the Motorcycle',
        author: 'Beverly Cleary',
        myRating: 6,
        pages: 186,
        pubDate: 1965,
        yearRead: [2000],
        thumb: './images/mouse-motorcycle.jpg',
        keywords: ['fiction', 'animals', 'children', 'fantasy', 'female author', 'series'],
		similar: ["Charlotte's Web"],
		description: `A talking mouse goes on adventures while riding his motorcycle.`
    },
    {
        title: 'Courageous Leadership',
        author: 'Bill Hybels',
        myRating: 5,
        pages: 275,
        pubDate: 2002,
        yearRead: [2014],
        thumb: './images/courageous-leadership.jpg',
        keywords: ['nonfiction', 'christian', 'leadership'],
		similar: ['Wild at Heart'],
		description: `A book that explores Christian leadership.`
    },
    {
        title: 'When Heaven Invades Earth',
        author: 'Bill Johnson',
        myRating: 5,
        pages: 190,
        pubDate: 2005,
        yearRead: [2012, 2014],
        thumb: './images/heaven-invades.jpg',
        keywords: ['nonfiction', 'christian', 'miracles', 'faith'],
		similar: ['Surprised by the Power of the Spirit'],
		description: `Experiencing a life filled with miracles.`
    },
    {
        title: 'Openly Straight',
        author: 'Bill Konigsberg',
        myRating: 4,
        pages: 320,
        pubDate: 2013,
        yearRead: [2017],
        thumb: './images/openly-straight.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'series'],
		similar: ['Simon vs. the Homo Sapiens Agenda'],
		description: `A homosexual boy transfers schools and pretends to be straight.`
    },
    {
        title: 'Who Is the Greatest: Elvis or the Beatles?',
        author: 'Bill Slater',
        myRating: 5,
        pages: 223,
        pubDate: 2007,
        yearRead: [2009],
        thumb: './images/elvis-beatles.jpg',
        keywords: ['nonfiction', 'biography', 'music'],
		similar: ['The Ultimate History of Video Games'],
		description: `Comparing the works of Elvis and the Beatles.`
    },
    {
        title: 'Console Wars',
        author: 'Blake Harris',
        myRating: 8,
        pages: 576,
        pubDate: 2014,
        yearRead: [2021],
        thumb: './images/console-wars.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games', 'tv'],
		similar: ['Super Mario'],
		description: `A look at the battle between Sega and Nintendo.`
    },
    {
        title: "Fail Until You Don't",
        author: 'Bobby Bones',
        myRating: 5,
        pages: 224,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/fail-until.jpg',
        keywords: ['nonfiction', 'memoir', 'self-help'],
		similar: ['The 4-Hour Workweek'],
		description: `A radio and television personality explains how to reach your goals by allowing yourself to fail.`
    },
    {
        title: "Tetris: The Games People Play",
        author: 'Box Brown',
        myRating: 6,
        pages: 253,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/tetris-games.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'graphic novels', 'biography'],
		similar: ['Rise of the Dungeon Master'],
		description: `The history of Tetris told in the form of a graphic novel.`
    },
    {
        title: 'Elantris',
        author: 'Brandon Sanderson',
        myRating: 9,
        pages: 638,
        pubDate: 2006,
        yearRead: [2020],
        thumb: './images/elantris.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'series'],
		similar: ['Warbreaker', 'The Final Empire'],
		description: `The perfect city Elantris loses its magic and becomes a dark, filthy place
					where people are banished.`
    },
    {
        title: 'The Hope of Elantris',
        author: 'Brandon Sanderson',
        myRating: 8,
        pages: 25,
        pubDate: 2006,
        yearRead: [2020],
        thumb: './images/hope-elantris.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'short stories', 'series'],
		similar: ['Warbreaker', 'The Final Empire'],
		description: `A short story that dives a bit deeper into Elantris.`
    },
    {
        title: "The Emperor's Soul",
        author: 'Brandon Sanderson',
        myRating: 10,
        pages: 175,
        pubDate: 2012,
        yearRead: [2020, 2021],
        thumb: './images/emperors-soul.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'short stories', 'series'],
		similar: ['Elantris', 'Warbreaker', 'The Final Empire'],
		description: `A girl who can flawlessly copy and re-create any item by rewriting its history with magic
					is condemned to death for trying to steal the emperor's scepter.`
    },
    {
        title: 'Warbreaker',
        author: 'Brandon Sanderson',
        myRating: 10,
        pages: 688,
        pubDate: 2009,
        yearRead: [2020],
        thumb: './images/warbreaker.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'series'],
		similar: ['Elantris', 'The Final Empire'],
		description: `Set in a world where people use breath and color to create magic, a girl has to deal with
					her arranged marriage with the powerful God King.`
    },
    {
        title: 'The Final Empire',
        author: 'Brandon Sanderson',
        myRating: 10,
        pages: 541,
        pubDate: 2006,
        yearRead: [2019],
        thumb: './images/final-empire.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'series'],
		similar: ['Elantris', 'Warbreaker'],
		description: `Set in a world where metals can help the gifted forge magic, a crew of the underworld's
					elite try to plot the downfall of the immortal king.`
    },
    {
        title: 'The Well of Ascension',
        author: 'Brandon Sanderson',
        myRating: 9,
        pages: 590,
        pubDate: 2007,
        yearRead: [2020],
        thumb: './images/well-ascension.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'series'],
		similar: ['Elantris', 'Warbreaker'],
		description: `Book 2 of the Mistoborn trilogy`
    },
    {
        title: 'The Hero of Ages',
        author: 'Brandon Sanderson',
        myRating: 9,
        pages: 572,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/hero-ages.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'series'],
		similar: ['Elantris', 'Warbreaker'],
		description: `Book 3 of the Mistoborn trilogy`
    },
    {
        title: 'The Eleventh Metal',
        author: 'Brandon Sanderson',
        myRating: 8,
        pages: 21,
        pubDate: 2012,
        yearRead: [2020],
        thumb: './images/eleventh-metal.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'short stories', 'series'],
		similar: ['Elantris', 'Warbreaker'],
		description: `A short story in the Mistborn universe.`
    },
    {
        title: 'Steelheart',
        author: 'Brandon Sanderson',
        myRating: 9,
        pages: 386,
        pubDate: 2013,
        yearRead: [2020],
        thumb: './images/steelheart.jpg',
        keywords: ['fiction', 'fantasy', 'superheroes', 'young adult', 'dystopian', 'series'],
		similar: ['The Final Empire'],
		description: `A world where the superheroes are actually supervillains keeping humanity captive.`
    },
    {
        title: 'High Performance Habits',
        author: 'Brendon Burchard',
        myRating: 7,
        pages: 393,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/high-performance.jpg',
        keywords: ['nonfiction', 'self-help', 'habits'],
		similar: ['What the Most Successful People Do Before Breakfast', 'Atomic Habits'],
		description: `Six habits that are the most likely to help you succeed.`
    },
    {
        title: 'The Rising',
        author: 'Brian Keene',
        myRating: 6,
        pages: 321,
        pubDate: 2003,
        yearRead: [2018],
        thumb: './images/rising.jpg',
        keywords: ['fiction', 'zombies', 'horror', 'apocalyptic', 'series'],
		similar: ['The Umbrella Conspiracy', 'The Walking Dead, Vol. 1', 'Nights of the Living Dead'],
		description: `A man sets out on an impossible journey to save his son during a zombie apocalypse.`
    },
    {
        title: 'Guardians of the Galaxy, Volume 1',
        author: 'Brian Michael Bendis',
        myRating: 6,
        pages: 136,
        pubDate: 2013,
        yearRead: [2016],
        thumb: './images/guardians1.jpg',
        keywords: ['fiction', 'comics', 'graphic novels', 'superheroes', 'marvel', 'space', 'series'],
		similar: ['Guardians of the Galaxy/All-New X-Men', 'Night of the Living Deadpool'],
		description: `An adventure with the Guardians of the Galaxy`
    },
    {
        title: 'Guardians of the Galaxy, Volume 2',
        author: 'Brian Michael Bendis',
        myRating: 6,
        pages: 168,
        pubDate: 2014,
        yearRead: [2016],
        thumb: './images/guardians2.jpg',
        keywords: ['fiction', 'comics', 'graphic novels', 'superheroes', 'marvel', 'space', 'series'],
		similar: ['Guardians of the Galaxy/All-New X-Men', 'Night of the Living Deadpool'],
		description: `Another adventure with the Guardians of the Galaxy`
    },
    {
        title: 'Guardians of the Galaxy/All-New X-Men',
        author: 'Brian Michael Bendis',
        myRating: 6,
        pages: 144,
        pubDate: 2014,
        yearRead: [2016],
        thumb: './images/guardians-xmen.jpg',
        keywords: ['fiction', 'comics', 'graphic novels', 'superheroes', 'marvel', 'space', 'series'],
		similar: ['Guardians of the Galaxy, Volume 1', 'Night of the Living Deadpool'],
		description: `Crossover between the Guardians of the Galaxy and the X-Men`
    },
    {
        title: 'Eat That Frog!',
        author: 'Brian Tracy',
        myRating: 6,
        pages: 128,
        pubDate: 2001,
        yearRead: [2018],
        thumb: './images/eat-frog.jpg',
        keywords: ['nonfiction', 'self-help', 'habits', 'procrastination', 'productivity'],
		similar: ['What the Most Successful People Do Before Breakfast'],
		description: `How to stop procrastinating and just get things done.`
    },
    {
        title: 'God Is in the Small Stuff',
        author: 'Bruce Bickel',
        myRating: 7,
        pages: 256,
        pubDate: 1998,
        yearRead: [2017],
        thumb: './images/god-in-small-stuff.jpg',
        keywords: ['christian', 'nonfiction', 'faith'],
		similar: ['The God Who Is There'],
		description: `A reminder and inspiration that God is involved in the smallest details of our lives.`
    },
    {
        title: 'My Teacher is an Alien',
        author: 'Bruce Coville',
        myRating: 6,
        pages: 124,
        pubDate: 1989,
        yearRead: [2001],
        thumb: './images/teacher-is-alien.jpg',
        keywords: ['fiction', 'children', 'aliens', 'science fiction', 'series'],
		similar: ["Werewolves Don't Go to Summer Camp", 'Bunnicula Strikes Again!'],
		description: `A student discovers her substitute teacher is an alien after he peels his human face off.`
    },
    {
        title: 'My Teacher Glows in the Dark',
        author: 'Bruce Coville',
        myRating: 6,
        pages: 144,
        pubDate: 1991,
        yearRead: [2001],
        thumb: './images/teacher-is-alien3.jpg',
        keywords: ['fiction', 'children', 'aliens', 'science fiction', 'series'],
		similar: ["Werewolves Don't Go to Summer Camp", 'Bunnicula Strikes Again!'],
		description: `A sequel to My Teacher is an Alien.`
    },
    {
        title: 'Scott Pilgrim, Volume 1',
        author: "Bryan Lee O'Malley",
        myRating: 7,
        pages: 168,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/scott-pilgrim1.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies', 'series'],
		similar: ['Rick and Morty vs. Dungeons & Dragons', 'Rick and Morty, Vol. 1'],
		description: `Scott Pilgrim needs to fight off Romona's seven evil exes if he wants to date her.`
    },
    {
        title: 'Scott Pilgrim, Volume 2',
        author: "Bryan Lee O'Malley",
        myRating: 7,
        pages: 200,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/scott-pilgrim2.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies', 'series'],
		similar: ['Rick and Morty vs. Dungeons & Dragons', 'Rick and Morty, Vol. 1'],
		description: `Book 2 of the Scott Pilgrim series`
    },
    {
        title: 'Scott Pilgrim, Volume 3',
        author: "Bryan Lee O'Malley",
        myRating: 7,
        pages: 192,
        pubDate: 2006,
        yearRead: [2016],
        thumb: './images/scott-pilgrim3.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies', 'series'],
		similar: ['Rick and Morty vs. Dungeons & Dragons', 'Rick and Morty, Vol. 1'],
		description: `Book 3 of the Scott Pilgrim series`
    },
    {
        title: 'Scott Pilgrim, Volume 4',
        author: "Bryan Lee O'Malley",
        myRating: 7,
        pages: 205,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/scott-pilgrim4.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies', 'series'],
		similar: ['Rick and Morty vs. Dungeons & Dragons', 'Rick and Morty, Vol. 1'],
		description: `Book 4 of the Scott Pilgrim series`
    },
    {
        title: 'Scott Pilgrim, Vol. 5',
        author: "Bryan Lee O'Malley",
        myRating: 7,
        pages: 178,
        pubDate: 2009,
        yearRead: [2016],
        thumb: './images/scott-pilgrim5.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies', 'series'],
		similar: ['Rick and Morty vs. Dungeons & Dragons', 'Rick and Morty, Vol. 1'],
		description: `Book 5 of the Scott Pilgrim series`
    },
    {
        title: 'Scott Pilgrim, Vol. 6',
        author: "Bryan Lee O'Malley",
        myRating: 7,
        pages: 245,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/scott-pilgrim6.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies', 'series'],
		similar: ['Rick and Morty vs. Dungeons & Dragons', 'Rick and Morty, Vol. 1'],
		description: `Book 6 of the Scott Pilgrim series`
    },
	//#endregion
    /*===========================
    	Author First Name - C's
    ===========================*/
	//#region C
    {
        title: "The Magician's Nephew",
        author: 'C.S. Lewis',
        myRating: 5,
        pages: 221,
        pubDate: 1955,
        yearRead: [2010, 2014],
        thumb: './images/magician-nephew.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'children', 'christian', 'adventure', 'series']
    },
    {
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        myRating: 6,
        pages: 206,
        pubDate: 1950,
        yearRead: [2012, 2017],
        thumb: './images/lion-witch-wardrobe.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'children', 'christian', 'adventure', 'movies', 'series']
    },
    {
        title: 'The Screwtape Letters',
        author: 'C.S. Lewis',
        myRating: 8,
        pages: 209,
        pubDate: 1942,
        yearRead: [2013],
        thumb: './images/screwtape-letters.jpg',
        keywords: ['christian', 'fiction', 'fantasy', 'experimental']
    },
    {
        title: 'The Year of Less',
        author: 'Cait Flanders',
        myRating: 3,
        pages: 189,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/year-of-less.jpg',
        keywords: ['nonfiction', 'memoir', 'female author']
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
        myRating: 7,
        pages: 296,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/deep-work.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'business']
    },
    {
        title: 'Digital Minimalism',
        author: 'Cal Newport',
        myRating: 7,
        pages: 286,
        pubDate: 2019,
        yearRead: [2019, 2021],
        thumb: './images/digital-minimalism.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'technology', 'minimalism'],
		similar: ['Irresistible', 'The Revenge of Analog']
    },
    {
        title: "So Good They Can't Ignore You",
        author: 'Cal Newport',
        myRating: 6,
        pages: 288,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/cant-ignore-you.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'business']
    },
    {
        title: "A World Without Email",
        author: 'Cal Newport',
        myRating: 4,
        pages: 320,
        pubDate: 2021,
        yearRead: [2021],
        thumb: './images/without-email.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'business', 'technology']
    },
    {
        title: 'Seven Brief Lessons on Physics',
        author: 'Carlo Rovelli',
        myRating: 6,
        pages: 81,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/seven-lessons.jpg',
        keywords: ['nonfiction', 'science', 'physics', 'educational']
    },
    {
        title: 'Dead Until Dark',
        author: 'Charlaine Harris',
        myRating: 7,
        pages: 292,
        pubDate: 2001,
        yearRead: [2015],
        thumb: './images/dead-until-dark.jpg',
        keywords: ['fiction', 'vampires', 'romance', 'fantasy', 'mystery', 'tv', 'female author', 'series']
    },
    {
        title: 'Python for Everybody',
        author: 'Charles Severance',
        myRating: 6,
        pages: 246,
        pubDate: 2016,
        yearRead: [2020],
        thumb: './images/py4e.jpg',
        keywords: ['nonfiction', 'educational', 'programming', 'technology', 'computers']
    },
    {
        title: 'Naked Statistics',
        author: 'Charles Wheelan',
        myRating: 7,
        pages: 282,
        pubDate: 2012,
        yearRead: [2020],
        thumb: './images/naked-statistics.jpg',
        keywords: ['nonfiction', 'educational', 'statistics', 'data', 'series']
    },
    {
        title: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        myRating: 7,
        pages: 32,
        pubDate: 1892,
        yearRead: [2007, 2018],
        thumb: './images/yellow-wallpaper.jpg',
        keywords: ['fiction', 'horror', 'short stories', 'mental health', 'gothic', 'unreliable narrator', 'female author']
    },
    {
        title: 'We Should All Be Feminists',
        author: 'Chimamanda Ngozi Adichie',
        myRating: 7,
        pages: 52,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/should-be-feminist.jpg',
        keywords: ['nonfiction', 'feminism', 'social justice', 'essays', 'female author']
    },
    {
        title: 'Dear Ijeawele',
        author: 'Chimamanda Ngozi Adichie',
        myRating: 6,
        pages: 63,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/ijeawele.jpg',
        keywords: ['nonfiction', 'feminism', 'essays', 'female author']
    },
    {
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        myRating: 7,
        pages: 209,
        pubDate: 1958,
        yearRead: [2007],
        thumb: './images/things-fall-apart.jpg',
        keywords: ['fiction', 'africa', 'historical', 'series']
    },
    {
        title: 'Struck By Lightning',
        author: 'Chris Colfer',
        myRating: 6,
        pages: 272,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/struck-by-lightning.jpg',
        keywords: ['young adult', 'lgbt', 'humor', 'fiction', 'coming of age', 'movies']
    },
    {
        title: 'The Nerdist Way',
        author: 'Chris Hardwick',
        myRating: 7,
        pages: 279,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/nerdist-way.jpg',
        keywords: ['nonfiction', 'self-help', 'humor']
    },
    {
        title: 'Retire Inspired',
        author: 'Chris Hogan',
        myRating: 7,
        pages: 256,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/retire-inspired.jpg',
        keywords: ['nonfiction', 'money', 'personal finance']
    },
    {
        title: "The Gamer's Bucket List",
        author: 'Chris Watters',
        myRating: 6,
        pages: 139,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/gamer-bucket.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'reference']
    },
    {
        title: 'Maze',
        author: 'Christopher Manson',
        myRating: 6,
        pages: 96,
        pubDate: 1985,
        yearRead: [2021],
        thumb: './images/maze.jpg',
        keywords: ['puzzles', 'mazes', 'fiction', 'art', 'experimental']
    },
    {
        title: 'A Dirty Job',
        author: 'Christopher Moore',
        myRating: 6,
        pages: 387,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/dirty-job.jpg',
        keywords: ['fiction', 'humor', 'fantasy', 'death', 'series']
    },
    {
        title: 'Fight Club',
        author: 'Chuck Palahniuk',
        myRating: 9,
        pages: 218,
        pubDate: 1996,
        yearRead: [2015],
        thumb: './images/fight-club.jpg',
        keywords: ['fiction', 'movies', 'thriller', 'satire', 'weird', 'unreliable narrator', 'series']
    },
    {
        title: 'Fight Club 2',
        author: 'Chuck Palahniuk',
        myRating: 4,
        pages: 256,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/fight-club2.jpg',
        keywords: ['graphic novels', 'fiction', 'weird', 'humor', 'thriller', 'series']
    },
    {
        title: 'Choke',
        author: 'Chuck Palahniuk',
        myRating: 5,
        pages: 293,
        pubDate: 2001,
        yearRead: [2015],
        thumb: './images/choke.jpg',
        keywords: ['fiction', 'dark', 'weird', 'humor']
    },
    {
        title: 'Science Hacks',
        author: 'Colin Barras',
        myRating: 5,
        pages: 208,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/science-hacks.jpg',
        keywords: ['nonfiction', 'science', 'educational']
    },
    {
        title: 'Project 333',
        author: 'Courtney Carver',
        myRating: 6,
        pages: 224,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/project333.jpg',
        keywords: ['nonfiction', 'self-help', 'minimalism', 'female author']
    },
    {
        title: 'Night of the Living Deadpool',
        author: 'Cullen Bunn',
        myRating: 6,
        pages: 96,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/night-of-deadpool.jpg',
        keywords: ['comics', 'graphic novels', 'marvel', 'zombies', 'fiction', 'superheroes', 'series']
    },
    {
        title: 'Return of the Living Deadpool',
        author: 'Cullen Bunn',
        myRating: 6,
        pages: 112,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/return-of-deadpool.jpg',
        keywords: ['comics', 'graphic novels', 'marvel', 'zombies', 'fiction', 'superheroes', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - D's
    ===========================*/
	//#region D
    {
        title: 'The God Who Is There',
        author: 'D.A. Carson',
        myRating: 5,
        pages: 232,
        pubDate: 2010,
        yearRead: [2015],
        thumb: './images/god-who-is-there.jpg',
        keywords: ['nonfiction', 'christian', 'faith', 'theology']
    },
    {
        title: 'Angels & Demons',
        author: 'Dan Brown',
        myRating: 8,
        pages: 496,
        pubDate: 2000,
        yearRead: [2015],
        thumb: './images/angels-and-demons.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'movies', 'series']
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        myRating: 8,
        pages: 489,
        pubDate: 2003,
        yearRead: [2015],
        thumb: './images/da-vinci-code.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'movies', 'series']
    },
    {
        title: 'The Lost Symbol',
        author: 'Dan Brown',
        myRating: 7,
        pages: 670,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/lost-symbol.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'series', 'tv']
    },
    {
        title: 'Inferno',
        author: 'Dan Brown',
        myRating: 7,
        pages: 463,
        pubDate: 2013,
        yearRead: [2016],
        thumb: './images/inferno.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'movies', 'series']
    },
    {
        title: 'The Kid Who Ran for President',
        author: 'Dan Gutman',
        myRating: 6,
        pages: 156,
        pubDate: 1996,
        yearRead: [1999],
        thumb: './images/kid-president.jpg',
        keywords: ['fiction', 'children', 'humor', 'politics', 'presidents', 'series']
    },
    {
        title: 'The Little Book of Talent',
        author: 'Daniel Coyle',
        myRating: 7,
        pages: 160,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/little-book-talent.jpg',
        keywords: ['nonfiction', 'self-help', 'psychology', 'productivity']
    },
    {
        title: 'Minecraft',
        author: 'Daniel Goldberg',
        myRating: 7,
        pages: 256,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/minecraft.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games']
    },
    {
        title: 'Drive',
        author: 'Daniel H. Pink',
        myRating: 7,
        pages: 242,
        pubDate: 2009,
        yearRead: [2019],
        thumb: './images/drive.jpg',
        keywords: ['nonfiction', 'business', 'psychology', 'self-help']
    },
    {
        title: 'Flowers for Algernon',
        author: 'Daniel Keyes',
        myRating: 6,
        pages: 311,
        pubDate: 1966,
        yearRead: [2002],
        thumb: './images/algernon.jpg',
        keywords: ['fiction', 'young adult', 'science fiction', 'experimental', 'movies', 'unreliable narrator']
    },
    {
        title: 'World of Warcraft',
        author: 'Daniel Lisi',
        myRating: 7,
        pages: 128,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/wow.jpg',
        keywords: ['biography', 'boss fight books', 'nonfiction', 'games', 'video games', 'series']
    },
    {
        title: 'The Inferno',
        author: 'Dante Alighieri',
        myRating: 7,
        pages: 302,
        pubDate: 1320,
        yearRead: [2008],
        thumb: './images/the-inferno.jpg',
        keywords: ['fiction', 'poetry', 'religion', 'hell', 'fantasy', 'series']
    },
    {
        title: 'The Adventures of Captain Underpants',
        author: 'Dav Pilkey',
        myRating: 6,
        pages: 125,
        pubDate: 2000,
        yearRead: [2000],
        thumb: './images/captain-underpants.jpg',
        keywords: ['fiction', 'children', 'superheroes', 'humor', 'comics', 'graphic novels', 'series']
    },
    {
        title: 'The Circle',
        author: 'Dave Eggers',
        myRating: 6,
        pages: 493,
        pubDate: 2013,
        yearRead: [2019],
        thumb: './images/circle.jpg',
        keywords: ['fiction', 'science fiction', 'dystopian', 'technology', 'movies']
    },
    {
        title: 'The Money Answer Book',
        author: 'Dave Ramsey',
        myRating: 7,
        pages: 160,
        pubDate: 2005,
        yearRead: [2012, 2018, 2020],
        thumb: './images/money-answer.jpg',
        keywords: ['nonfiction', 'personal finance', 'money']
    },
    {
        title: 'The Total Money Makeover',
        author: 'Dave Ramsey',
        myRating: 7,
        pages: 229,
        pubDate: 2003,
        yearRead: [2018],
        thumb: './images/tmm.jpg',
        keywords: ['nonfiction', 'personal finance', 'money']
    },
    {
        title: "Dave Ramsey's Complete Guide to Money",
        author: 'Dave Ramsey',
        myRating: 7,
        pages: 330,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/guide-to-money.jpg',
        keywords: ['nonfiction', 'personal finance', 'money'],
		similar: ['Unshakeable']
    },
    {
        title: 'The Caretaker of Lorne Field',
        author: 'Dave Zeltserman',
        myRating: 8,
        pages: 237,
        pubDate: 2010,
        yearRead: [2018],
        thumb: './images/lorne.jpg',
        keywords: ['fiction', 'horror', 'weird', 'farming', 'unreliable narrator']
    },
    {
        title: 'The Soccer Book',
        author: 'David Goldblatt',
        myRating: 7,
        pages: 400,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/soccer.jpg',
        keywords: ['nonfiction', 'reference', 'sports', 'soccer', 'educational']
    },
    {
        title: 'Jacked',
        author: 'David Kushner',
        myRating: 7,
        pages: 304,
        pubDate: 2012,
        yearRead: [2021],
        thumb: './images/jacked.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games']
    },
    {
        title: 'Rise of the Dungeon Master',
        author: 'David Kushner',
        myRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/rise-of-dm.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'dnd', 'graphic novels', 'tabletop games']
    },
    {
        title: 'Every Day',
        author: 'David Levithan',
        myRating: 8,
        pages: 322,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/every-day.jpg',
        keywords: ['fiction', 'fantasy', 'lgbt', 'young adult', 'romance', 'weird', 'movies', 'series']
    },
    {
        title: 'Another Day',
        author: 'David Levithan',
        myRating: 7,
        pages: 327,
        pubDate: 2015,
        yearRead: [2016],
        thumb: './images/another-day.jpg',
        keywords: ['fiction', 'fantasy', 'lgbt', 'young adult', 'romance', 'weird', 'series']
    },
    {
        title: 'Slade House',
        author: 'David Mitchell',
        myRating: 7,
        pages: 238,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/slade-house.jpg',
        keywords: ['fiction', 'horror', 'halloween', 'ghosts', 'experimental']
    },
    {
        title: 'Radical',
        author: 'David Platt',
        myRating: 9,
        pages: 230,
        pubDate: 2010,
        yearRead: [2013],
        thumb: './images/radical.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'Follow Me',
        author: 'David Platt',
        myRating: 8,
        pages: 245,
        pubDate: 2013,
        yearRead: [2013],
        thumb: './images/follow-me.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'The Revenge of Analog',
        author: 'David Sax',
        myRating: 8,
        pages: 304,
        pubDate: 2016,
        yearRead: [2019, 2021],
        thumb: './images/analog.jpg',
        keywords: ['nonfiction', 'technology'],
		similar: ['Digital Minimalism', 'Irresistible']
    },
    {
        title: 'Whispers',
        author: 'Dean Koontz',
        myRating: 8,
        pages: 464,
        pubDate: 2006,
        yearRead: [2006],
        thumb: './images/whispers.jpg',
        keywords: ['fiction', 'horror', 'thriller', 'mystery', 'weird']
    },
    {
        title: "Santa Claus Doesn't Mop Floors",
        author: 'Debbie Dadey',
        myRating: 6,
        pages: 80,
        pubDate: 1991,
        yearRead: [2018],
        thumb: './images/santa.jpg',
        keywords: ['fiction', 'bailey school kids', 'children', 'fantasy', 'mystery', 'christmas', 'schools', 'female author', 'series']
    },
    {
        title: "Werewolves Don't Go to Summer Camp",
        author: 'Debbie Dadey',
        myRating: 6,
        pages: 96,
        pubDate: 1991,
        yearRead: [2018],
        thumb: './images/werewolves.jpg',
        keywords: ['fiction', 'bailey school kids', 'children', 'fantasy', 'mystery', 'werewolves', 'camps', 'female author', 'series']
    },
    {
        title: 'A Discovery of Witches',
        author: 'Deborah Harkness',
        myRating: 7,
        pages: 579,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/discovery-witches.jpg',
        keywords: ['fiction', 'witches', 'romance', 'schools', 'vampires', 'magic', 'tv', 'female author', 'series']
    },
    {
        title: 'Spelunky',
        author: 'Derek Yu',
        myRating: 8,
        pages: 140,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/spelunky.jpg',
        keywords: ['boss fight books', 'nonfiction', 'games', 'video games', 'biography', 'series']
    },
    {
        title: 'Virtual Vandals',
        author: 'Diane Duane',
        myRating: 6,
        pages: 192,
        pubDate: 1998,
        yearRead: [2002],
        thumb: './images/virtual-vandals.jpg',
        keywords: ['fiction', 'young adult', 'tom clancy', 'science fiction', 'thriller', 'female author', 'series']
    },
    {
        title: 'Eat This And Live',
        author: 'Don Colbert',
        myRating: 7,
        pages: 192,
        pubDate: 2008,
        yearRead: [2013, 2014, 2017, 2020],
        thumb: './images/eat-this.jpg',
        keywords: ['nonfiction', 'christian', 'nutrition', 'food']
    },
    {
        title: 'A Million Miles in a Thousand Years',
        author: 'Donald Miller',
        myRating: 5,
        pages: 256,
        pubDate: 2009,
        yearRead: [2016],
        thumb: './images/million-miles.jpg',
        keywords: ['nonfiction', 'christian', 'memoir']
    },
    {
        title: 'Encyclopedia Brown Takes the Cake!',
        author: 'Donald Sobol',
        myRating: 6,
        pages: 128,
        pubDate: 1982,
        yearRead: [1999],
        thumb: './images/encyclopedia-brown.jpg',
        keywords: ['fiction', 'children', 'mystery', 'encyclopedia brown', 'short stories', 'series']
    },
    {
        title: 'Encyclopedia Brown and the Case of the Disgusting Sneakers',
        author: 'Donald Sobol',
        myRating: 6,
        pages: 112,
        pubDate: 1990,
        yearRead: [1999],
        thumb: './images/encyclopedia-brown-sneakers.jpg',
        keywords: ['fiction', 'children', 'mystery', 'encyclopedia brown', 'short stories', 'series']
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        myRating: 8,
        pages: 215,
        pubDate: 1979,
        yearRead: [2015, 2019],
        thumb: './images/hitchhiker.jpg',
        keywords: ['fiction', 'space', 'humor', 'science fiction', 'movies', 'tv', 'series']
    },
    {
        title: 'The Restaurant at the End of the Universe',
        author: 'Douglas Adams',
        myRating: 7,
        pages: 187,
        pubDate: 1980,
        yearRead: [2016],
        thumb: './images/restaurant-end-universe.jpg',
        keywords: ['fiction', 'space', 'humor', 'science fiction', 'series']
    },
    {
        title: 'The 30-Minute Runner',
        author: 'Duncan Larkin',
        myRating: 6,
        pages: 156,
        pubDate: 2018,
        yearRead: [2021],
        thumb: './images/thirty-minute-runner.jpg',
        keywords: ['nonfiction', 'sports', 'running', 'fitness']
    },
    {
        title: 'Game On!',
        author: 'Dustin Hansen',
        myRating: 8,
        pages: 368,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/game-on.jpg',
        keywords: ['nonfiction', 'reference', 'games', 'video games']
    },
	//#endregion
    /*===========================
    	Author First Name - E's
    ===========================*/
	//#region E
    {
        title: 'We Were Liars',
        author: 'E. Lockhart',
        myRating: 6,
        pages: 242,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/we-were-liars.jpg',
        keywords: ['young adult', 'fiction', 'mystery', 'romance', 'unreliable narrator', 'female author']
    },
    {
        title: "Charlotte's Web",
        author: 'E.B. White',
        myRating: 6,
        pages: 184,
        pubDate: 1952,
        yearRead: [2002],
        thumb: './images/charlottes-web.jpg',
        keywords: ['fiction', 'children', 'animals', 'movies', 'fantasy']
    },
    {
        title: 'Creativity, Inc.',
        author: 'Ed Catmull',
        myRating: 7,
        pages: 368,
        pubDate: 2009,
        yearRead: [2019],
        thumb: './images/creativity.jpg',
        keywords: ['nonfiction', 'business', 'leadership', 'creativity']
    },
    {
        title: 'iPoe Vol. 1',
        author: 'Edgar Allen Poe',
        myRating: 4,
        pages: 101,
        pubDate: 1894,
        yearRead: [2021],
        thumb: './images/ipoe1.jpg',
        keywords: ['fiction', 'short stories', 'horror', 'interactive', 'poetry', 'gothic']
    },
    {
        title: 'Meddling Kids',
        author: 'Edgar Cantaro',
        myRating: 8,
        pages: 322,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/meddling.jpg',
        keywords: ['fiction', 'horror', 'mystery', 'fantasy', 'ghosts', 'lgbt', 'weird']
    },
    {
        title: 'Night',
        author: 'Elie Wiesel',
        myRating: 7,
        pages: 115,
        pubDate: 1956,
        yearRead: [2009],
        thumb: './images/night.jpg',
        keywords: ['nonfiction', 'memoir', 'holocaust', 'historical', 'series']
    },
    {
        title: 'The Happiness Hack',
        author: 'Ellen Petry Leanse',
        myRating: 5,
        pages: 128,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/happiness-hack.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'female author']
    },
    {
        title: '10,000 Things You Need to Know',
        author: 'Elspeth Beidas',
        myRating: 5,
        pages: 1000,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/ten-thousand-things.jpg',
        keywords: ['nonfiction', 'lists', 'reference', 'female author']
    },
    {
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        myRating: 6,
        pages: 464,
        pubDate: 1847,
        yearRead: [2006],
        thumb: './images/wuthering.jpg',
        keywords: ['fiction', 'gothic', 'historical', 'romance', 'ghosts', 'unreliable narrator', 'female author']
    },
    {
        title: 'The Forests of Silence',
        author: 'Emily Rodda',
        myRating: 5,
        pages: 131,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/forests-of-silence.jpg',
        keywords: ['fantasy', 'fiction', 'children', 'high fantasy', 'magic', 'adventure', 'female author', 'series']
    },
    {
        title: 'Artemis Fowl',
        author: 'Eoin Colfer',
        myRating: 7,
        pages: 288,
        pubDate: 2001,
        yearRead: [2004, 2018],
        thumb: './images/artemis-fowl1.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'movies', 'series']
    },
    {
        title: 'The Arctic Incident',
        author: 'Eoin Colfer',
        myRating: 6,
        pages: 398,
        pubDate: 2002,
        yearRead: [2004, 2018],
        thumb: './images/artemis-fowl2.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'series']
    },
    {
        title: 'The Eternity Code',
        author: 'Eoin Colfer',
        myRating: 6,
        pages: 352,
        pubDate: 2003,
        yearRead: [2018],
        thumb: './images/artemis-fowl3.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'series']
    },
    {
        title: 'The Opal Deception',
        author: 'Eoin Colfer',
        myRating: 6,
        pages: 416,
        pubDate: 2005,
        yearRead: [2018],
        thumb: './images/artemis-fowl4.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'series']
    },
    {
        title: 'The Lost Colony',
        author: 'Eoin Colfer',
        myRating: 6,
        pages: 385,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/artemis-fowl5.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'series']
    },
    {
        title: 'The Time Paradox',
        author: 'Eoin Colfer',
        myRating: 6,
        pages: 391,
        pubDate: 2008,
        yearRead: [2018],
        thumb: './images/artemis-fowl6.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'time travel', 'artemis fowl', 'series']
    },
    {
        title: 'The Atlantis Complex',
        author: 'Eoin Colfer',
        myRating: 5,
        pages: 357,
        pubDate: 2010,
        yearRead: [],
        thumb: './images/artemis-fowl7.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'series']
    },
    {
        title: 'The Last Guardian',
        author: 'Eoin Colfer',
        myRating: 5,
        pages: 328,
        pubDate: 2012,
        yearRead: [2020],
        thumb: './images/artemis-fowl8.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'series']
    },
    {
        title: 'Ready Player One',
        author: 'Ernest Cline',
        myRating: 9,
        pages: 374,
        pubDate: 2011,
        yearRead: [2013, 2017, 2018],
        thumb: './images/rp1.jpg',
        keywords: ['fiction', 'pop culture', 'young adult', 'science fiction', 'dystopian', 'adventure', 'movies', 'series']
    },
    {
        title: 'Ready Player Two',
        author: 'Ernest Cline',
        myRating: 8,
        pages: 384,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/rp2.jpg',
        keywords: ['fiction', 'pop culture', 'young adult', 'science fiction', 'dystopian', 'adventure', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - F's
    ===========================*/
	//#region F
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        myRating: 7,
        pages: 168,
        pubDate: 1925,
        yearRead: [2006],
        thumb: './images/great-gatsby.jpg',
        keywords: ['fiction', 'historical', 'romance', 'movies']
    },
    {
        title: 'The Ultimate Guide to Video Game Writing and Design',
        author: 'Flint Dille',
        myRating: 8,
        pages: 272,
        pubDate: 2006,
        yearRead: [2013],
        thumb: './images/ultimate-guide-vgs.jpg',
        keywords: ['nonfiction', 'game design', 'video games', 'games', 'writing', 'educational']
    },
    {
        title: 'The Father Heart of God',
        author: 'Floyd McClung',
        myRating: 6,
        pages: 144,
        pubDate: 1984,
        yearRead: [2014],
        thumb: './images/father-heart.jpg',
        keywords: ['nonfiction', 'christian']
    },
    {
        title: 'Living the Martial Way',
        author: 'Forrest E. Morgan',
        myRating: 4,
        pages: 312,
        pubDate: 1992,
        yearRead: [2013],
        thumb: './images/living-martial-way.jpg',
        keywords: ['nonfiction', 'sports', 'martial arts']
    },
    {
        title: 'Erasing Hell',
        author: 'Francis Chan',
        myRating: 8,
        pages: 197,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/erasing-hell.jpg',
        keywords: ['nonfiction', 'christian', 'hell', 'theology']
    },
    {
        title: 'Goodbye, Things',
        author: 'Fumio Sasaki',
        myRating: 9,
        pages: 272,
        pubDate: 2015,
        yearRead: [2019, 2020],
        thumb: './images/goodbye-things.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - G's
    ===========================*/
	//#region G
    {
        title: 'The Best American Infographics 2013',
        author: 'Gareth Cook',
        myRating: 7,
        pages: 184,
        pubDate: 2013,
        yearRead: [2021],
        thumb: './images/infographics-2013.jpg',
        keywords: ['nonfiction', 'data', 'reference', 'series']
    },
    {
        title: 'Be Prepared',
        author: 'Gary Greenberg',
        myRating: 7,
        pages: 240,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/be-prepared.jpg',
        keywords: ['nonfiction', 'parenting', 'humor']
    },
    {
        title: 'The One Thing',
        author: 'Gary Keller',
        myRating: 8,
        pages: 240,
        pubDate: 2013,
        yearRead: [2017, 2020],
        thumb: './images/one-thing.jpg',
        keywords: ['nonfiction', 'business', 'self-help', 'productivity']
    },
    {
        title: 'Hatchet',
        author: 'Gary Paulsen',
        myRating: 7,
        pages: 186,
        pubDate: 1986,
        yearRead: [2001],
        thumb: './images/hatchet.jpg',
        keywords: ['fiction', 'children', 'survival', 'adventure', 'outdoors', 'series']
    },
    {
        title: 'The River',
        author: 'Gary Paulsen',
        myRating: 6,
        pages: 132,
        pubDate: 1991,
        yearRead: [2001],
        thumb: './images/river.jpg',
        keywords: ['fiction', 'children', 'survival', 'adventure', 'outdoors', 'series']
    },
    {
        title: "Brian's Winter",
        author: 'Gary Paulsen',
        myRating: 6,
        pages: 144,
        pubDate: 1996,
        yearRead: [2001],
        thumb: './images/brians-winter.jpg',
        keywords: ['fiction', 'children', 'survival', 'adventure', 'outdoors', 'series']
    },
    {
        title: 'The Case Against Sugar',
        author: 'Gary Taubes',
        myRating: 6,
        pages: 384,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/case-against-sugar.jpg',
        keywords: ['nonfiction', 'nutrition', 'food', 'health']
    },
    {
        title: 'Forks Over Knives',
        author: 'Gene Stone',
        myRating: 6,
        pages: 214,
        pubDate: 2011,
        yearRead: [2017],
        thumb: './images/forks-over-knives.jpg',
        keywords: ['nonfiction', 'nutrition', 'food', 'health', 'cookbooks']
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        myRating: 7,
        pages: 141,
        pubDate: 1945,
        yearRead: [2001],
        thumb: './images/animal-farm.jpg',
        keywords: ['fiction', 'animals', 'fantasy', 'politics', 'dystopian', 'movies']
    },
    {
        title: 'Horrorstör',
        author: 'Grady Hendrix',
        myRating: 7,
        pages: 248,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/horrorstor.jpg',
        keywords: ['fiction', 'horror', 'ghosts', 'humor', 'weird']
    },
    {
        title: "My Best Friend's Exorcism",
        author: 'Grady Hendrix',
        myRating: 7,
        pages: 337,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/bfs-exorcism.jpg',
        keywords: ['fiction', 'horror', 'demons', 'humor', 'young adult']
    },
    {
        title: "The Southern Book Club's Guide to Slaying Vampires",
        author: 'Grady Hendrix',
        myRating: 7,
        pages: 404,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/southern-book-club.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'southern']
    },
    {
        title: 'Essentialism',
        author: 'Greg McKeown',
        myRating: 8,
        pages: 260,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/essentialism.jpg',
        keywords: ['nonfiction', 'self-help', 'business', 'productivity', 'series']
    },
    {
        title: 'Effortless',
        author: 'Greg McKeown',
        myRating: 8,
        pages: 272,
        pubDate: 2021,
        yearRead: [2021],
        thumb: './images/effortless.jpg',
        keywords: ['nonfiction', 'self-help', 'business', 'productivity', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - H's
    ===========================*/
	//#region H
    {
        title: 'The Miracle Morning',
        author: 'Hal Elrod',
        myRating: 6,
        pages: 172,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/miracle-morning.jpg',
        keywords: ['nonfiction', 'self-help', 'productivity']
    },
    {
        title: 'An Absolutely Remarkable Thing',
        author: 'Hank Green',
        myRating: 9,
        pages: 352,
        pubDate: 2018,
        yearRead: [2018, 2019],
        thumb: './images/remarkable1.jpg',
        keywords: ['fiction', 'lgbt', 'science fiction', 'young adult', 'series']
    },
    {
        title: 'A Beautifully Foolish Endeavor',
        author: 'Hank Green',
        myRating: 8,
        pages: 464,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/remarkable2.jpg',
        keywords: ['fiction', 'lgbt', 'science fiction', 'young adult', 'series']
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        myRating: 6,
        pages: 376,
        pubDate: 1960,
        yearRead: [2003],
        thumb: './images/mockingbird.jpg',
        keywords: ['fiction', 'historical', 'race', 'movies', 'southern', 'female author', 'series']
    },
    {
        title: 'The Index Card',
        author: 'Helaine Olen',
        myRating: 6,
        pages: 256,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/index-card.jpg',
        keywords: ['nonfiction', 'personal finance', 'self-help', 'money', 'female author']
    },
    {
        title: 'Anguish Languish',
        author: 'Howard Chase',
        myRating: 7,
        pages: 60,
        pubDate: 1956,
        yearRead: [2021],
        thumb: './images/anguish-languish.jpg',
        keywords: ['fiction', 'humor', 'experimental', 'children', 'language', 'fairy tales']
    },
    {
        title: 'Navigating Genesis',
        author: 'Hugh Ross',
        myRating: 7,
        pages: 298,
        pubDate: 2014,
        yearRead: [2015],
        thumb: './images/nav-genesis.jpg',
        keywords: ['nonfiction', 'christian', 'science', 'theology']
    },
	//#endregion
    /*===========================
    	Author First Name - I's
    ===========================*/
	//#region I
    {
        title: 'The Road Back to You',
        author: 'Ian Morgan Cron',
        myRating: 6,
        pages: 238,
        pubDate: 2016,
        yearRead: [2020],
        thumb: './images/road-back.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'christian']
    },
    {
        title: 'Insight Guides: China',
        author: 'Insight Guides',
        myRating: 6,
        pages: 480,
        pubDate: 1990,
        yearRead: [2013],
        thumb: './images/insight-china.jpg',
        keywords: ['nonfiction', 'china', 'travel', 'reference', 'series']
    },
    {
        title: 'Warm Bodies',
        author: 'Isaac Marion',
        myRating: 10,
        pages: 256,
        pubDate: 2010,
        yearRead: [2016, 2019],
        thumb: './images/warm-bodies.jpg',
        keywords: ['fiction', 'young adult', 'humor', 'horror', 'zombies', 'apocalyptic', 'romance', 'movies', 'series']
    },
    {
        title: 'The New Hunger',
        author: 'Isaac Marion',
        myRating: 8,
        pages: 170,
        pubDate: 2013,
        yearRead: [2018],
        thumb: './images/new-hunger.jpg',
        keywords: ['fiction', 'young adult', 'horror', 'zombies', 'apocalyptic', 'series']
    },
    {
        title: 'The Burning World',
        author: 'Isaac Marion',
        myRating: 9,
        pages: 512,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/burning-world.jpg',
        keywords: ['fiction', 'young adult', 'horror', 'zombies', 'apocalyptic', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - J's
    ===========================*/
	//#region J
    {
        title: 'Very Good Lives',
        author: 'J.K. Rowling',
        myRating: 8,
        pages: 74,
        pubDate: 2015,
        yearRead: [2018, 2021],
        thumb: './images/very-good-lives.jpg',
        keywords: ['nonfiction', 'self-help', 'essays', 'female author']
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 309,
        pubDate: 1997,
        yearRead: [1999, 2000, 2001, 2002, 2010, 2011, 2012, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp1.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 341,
        pubDate: 1998,
        yearRead: [2000, 2002, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp2.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 435,
        pubDate: 1999,
        yearRead: [2000, 2002, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp3.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'time travel', 'female author', 'series']
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 734,
        pubDate: 2000,
        yearRead: [2000, 2002, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp4.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 870,
        pubDate: 2003,
        yearRead: [2003, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp5.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 652,
        pubDate: 2005,
        yearRead: [2005, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp6.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        myRating: 10,
        pages: 759,
        pubDate: 2007,
        yearRead: [2007, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp7.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Short Stories from Hogwarts of Heroism, Hardship and Dangerous Hobbies',
        author: 'J.K. Rowling',
        myRating: 8,
        pages: 71,
        pubDate: 2016,
        yearRead: [2016, 2019],
        thumb: './images/hogwarts-hero.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists',
        author: 'J.K. Rowling',
        myRating: 8,
        pages: 71,
        pubDate: 2016,
        yearRead: [2016],
        thumb: './images/hogwarts-power.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Hogwarts: An Incomplete and Unreliable Guide',
        author: 'J.K. Rowling',
        myRating: 8,
        pages: 79,
        pubDate: 2016,
        yearRead: [2016, 2019],
        thumb: './images/hogwarts.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'harry potter', 'female author', 'series']
    },
    {
        title: 'The Tales of Beedle the Bard',
        author: 'J.K. Rowling',
        myRating: 7,
        pages: 111,
        pubDate: 2008,
        yearRead: [2015, 2017, 2020, 2021],
        thumb: './images/beedle.jpg',
        keywords: ['fiction', 'children', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'fairy tales', 'harry potter', 'female author', 'series']
    },
    {
        title: 'Fantastic Beasts and Where to Find Them: The Original Screenplay',
        author: 'J.K. Rowling',
        myRating: 7,
        pages: 304,
        pubDate: 2016,
        yearRead: [2016],
        thumb: './images/fantastic-beasts-screenplay.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'movies', 'harry potter', 'screenplay', 'female author', 'series']
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        myRating: 8,
        pages: 389,
        pubDate: 1937,
        yearRead: [2013],
        thumb: './images/hobbit.jpg',
        keywords: ['fantasy', 'fiction', 'magic', 'high fantasy', 'movies', 'lord of the rings', 'young adult', 'adventure', 'series']
    },
    {
        title: 'Surprised by the Power of the Spirit',
        author: 'Jack Deere',
        myRating: 5,
        pages: 302,
        pubDate: 1993,
        yearRead: [2015],
        thumb: './images/surprised-by-power.jpg',
        keywords: ['nonfiction', 'christian', 'miracles', 'holy spirit']
    },
    {
        title: 'Vegan for Life',
        author: 'Jack Norris',
        myRating: 4,
        pages: 283,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/vegan-for-life.jpg',
        keywords: ['nonfiction', 'food', 'nutrition', 'health']
    },
    {
        title: 'Chasing the Dragon',
        author: 'Jackie Pullinger',
        myRating: 5,
        pages: 256,
        pubDate: 1980,
        yearRead: [2014],
        thumb: './images/chasing-the-dragon.jpg',
        keywords: ['nonfiction', 'christian', 'drugs', 'china', 'memoir', 'female author']
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        myRating: 9,
        pages: 319,
        pubDate: 2018,
        yearRead: [2021],
        thumb: './images/atomic-habits.jpg',
        keywords: ['nonfiction', 'habits', 'self-help', 'psychology', 'productivity']
    },
    {
        title: 'The Maze Runner',
        author: 'James Dashner',
        myRating: 6,
        pages: 384,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/maze-runner.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'science fiction', 'adventure', 'movies', 'series']
    },
    {
        title: "America's History, For the AP Course",
        author: 'James Henretta',
        myRating: 7,
        pages: 1168,
        pubDate: 2006,
        yearRead: [2007],
        thumb: './images/ap-history.jpg',
        keywords: ['nonfiction', 'educational', 'historical', 'america']
    },
    {
        title: 'Return to Howliday Inn',
        author: 'James Howe',
        myRating: 6,
        pages: 116,
        pubDate: 1992,
        yearRead: [1999],
        thumb: './images/bunnicula5.jpg',
        keywords: ['fiction', 'children', 'animals', 'mystery', 'horror', 'series']
    },
    {
        title: 'Bunnicula Strikes Again!',
        author: 'James Howe',
        myRating: 6,
        pages: 116,
        pubDate: 1995,
        yearRead: [1999],
        thumb: './images/bunnicula6.jpg',
        keywords: ['fiction', 'children', 'animals', 'mystery', 'horror', 'series']
    },
    {
        title: "Player's Handbook",
        author: 'James Wyatt',
        myRating: 9,
        pages: 320,
        pubDate: 2014,
        yearRead: [2016],
        thumb: './images/phb.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy', 'series']
    },
    {
        title: 'Super Better',
        author: 'Jane McGonigal',
        myRating: 7,
        pages: 480,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/super-better.jpg',
        keywords: ['nonfiction', 'psychology', 'games', 'self-help', 'female author']
    },
    {
        title: 'Ten Arguments For Deleting Your Social Media Accounts Right Now',
        author: 'Jaron Lanier',
        myRating: 8,
        pages: 146,
        pubDate: 2018,
        yearRead: [2019, 2021],
        thumb: './images/delete-social-media.jpg',
        keywords: ['nonfiction', 'psychology', 'technology', 'self-help']
    },
    {
        title: 'The Living and the Dead',
        author: 'Jason',
        myRating: 4,
        pages: 48,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/living-and-dead.jpg',
        keywords: ['fiction', 'graphic novels', 'horror', 'zombies']
    },
    {
        title: 'Blood, Sweat, and Pixels',
        author: 'Jason Schreier',
        myRating: 10,
        pages: 304,
        pubDate: 2017,
        yearRead: [2017, 2021],
        thumb: './images/blood-sweat-pixels.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games']
    },
    {
        title: 'Thirteen Reasons Why',
        author: 'Jay Asher',
        myRating: 6,
        pages: 288,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/thirteen-reasons.jpg',
        keywords: ['young adult', 'suicide', 'fiction', 'mental health', 'mystery', 'tv']
    },
    {
        title: 'Nerve',
        author: 'Jeanne Ryan',
        myRating: 8,
        pages: 304,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/nerve.jpg',
        keywords: ['fiction', 'young adult', 'thriller', 'science fiction', 'movies', 'female author']
    },
    {
        title: 'Diary of a Wimpy Kid',
        author: 'Jeff Kinney',
        myRating: 6,
        pages: 224,
        pubDate: 2004,
        yearRead: [2015],
        thumb: './images/diary-of-wimpy.jpg',
        keywords: ['fiction', 'children', 'humor', 'graphic novels', 'schools', 'movies', 'series']
    },
    {
        title: 'Super Mario',
        author: 'Jeff Ryan',
        myRating: 7,
        pages: 292,
        pubDate: 2011,
        yearRead: [2021],
        thumb: './images/super-mario.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'biography'],
		similar: ['Console Wars']
    },
    {
        title: 'Annihilation',
        author: 'Jeff VanderMeer',
        myRating: 5,
        pages: 195,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/annihilation.jpg',
        keywords: ['fiction', 'horror', 'science fiction', 'movies', 'unreliable narrator', 'series']
    },
    {
        title: "Who's Afraid of the Multiverse",
        author: 'Jeffrey Zweerink',
        myRating: 7,
        pages: 66,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/whos-afraid.jpg',
        keywords: ['nonfiction', 'christian', 'science']
    },
    {
        title: 'The No-Spend Challenge Guide',
        author: 'Jen Smith',
        myRating: 5,
        pages: 99,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/no-spend.jpg',
        keywords: ['nonfiction', 'money', 'personal finance', 'self-help', 'female author']
    },
    {
        title: '200+ Ways to Protect Your Privacy',
        author: 'Jeni Rogers',
        myRating: 5,
        pages: 256,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/protect-privacy.jpg',
        keywords: ['nonfiction', 'technology', 'female author']
    },
    {
        title: 'All the Bright Places',
        author: 'Jennifer Niven',
        myRating: 6,
        pages: 378,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/all-bright-places.jpg',
        keywords: ['fiction', 'young adult', 'suicide', 'romance', 'mental health', 'movies', 'female author']
    },
    {
        title: 'The Summer I Turned Pretty',
        author: 'Jenny Han',
        myRating: 7,
        pages: 276,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/summer-pretty1.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'female author', 'series']
    },
    {
        title: "It's Not Summer Without You",
        author: 'Jenny Han',
        myRating: 7,
        pages: 288,
        pubDate: 2010,
        yearRead: [2018],
        thumb: './images/summer-pretty2.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'female author', 'series']
    },
    {
        title: "We'll Always Have Summer",
        author: 'Jenny Han',
        myRating: 7,
        pages: 291,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/summer-pretty3.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'female author', 'series']
    },
    {
        title: 'Remnant of Victory',
        author: 'Jeri Odell',
        myRating: 7,
        pages: 176,
        pubDate: 2000,
        yearRead: [2000],
        thumb: './images/remnant-victory.jpg',
        keywords: ['fiction', 'romance', 'christian', 'female author', 'series']
    },
    {
        title: 'Three Men in a Boat',
        author: 'Jerome K. Jerome',
        myRating: 7,
        pages: 185,
        pubDate: 1889,
        yearRead: [2021],
        thumb: './images/three-men-boat.jpg',
        keywords: ['fiction', 'humor', 'travel']
    },
    {
        title: 'The Vanishings',
        author: 'Jerry B. Jenkins',
        myRating: 6,
        pages: 148,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids1.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Second Chance',
        author: 'Jerry B. Jenkins',
        myRating: 6,
        pages: 144,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids2.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Through the Flames',
        author: 'Jerry B. Jenkins',
        myRating: 6,
        pages: 146,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids3.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Facing the Future',
        author: 'Jerry B. Jenkins',
        myRating: 6,
        pages: 150,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids4.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Nicolae High',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 118,
        pubDate: 1999,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids5.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'The Underground',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 114,
        pubDate: 1999,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids6.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Busted!',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 128,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids7.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Death Strike',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 123,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids8.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'The Search',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 162,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids9.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'On the Run',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 160,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids10.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Into the Storm',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 160,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids11.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Earthquake!',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 140,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids12.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'The Showdown',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 152,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids13.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Judgment Day',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 130,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids14.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Battling the Commander',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 140,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids15.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Fire from Heaven',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 142,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids16.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Terror in the Stadium',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 152,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids17.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Darkening Skies',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 149,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids18.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Attack of Apollyon',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 150,
        pubDate: 2002,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids19.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'A Dangerous Plan',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 176,
        pubDate: 2002,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids20.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Secrets of New Babylon',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 152,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids21.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Escape from New Babylon',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 148,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids22.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Horsemen of Terror',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 150,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids23.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Uplink from the Underground',
        author: 'Jerry B. Jenkins',
        myRating: 5,
        pages: 160,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids24.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'A Vampire Tale',
        author: 'Jess Smart Smiley',
        myRating: 5,
        pages: 144,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/vamp-tale.jpg',
        keywords: ['fiction', 'vampires', 'graphic novels', 'children', 'humor', 'female author', 'series']
    },
    {
        title: 'Me and Earl and the Dying Girl',
        author: 'Jesse Andrews',
        myRating: 6,
        pages: 295,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/me-earl.jpg',
        keywords: ['fiction', 'young adult', 'sickness', 'humor', 'death', 'coming of age', 'movies']
    },
    {
        title: 'The Danish Way of Parenting',
        author: 'Jessica Joelle Alexander',
        myRating: 5,
        pages: 224,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/danish-way.jpg',
        keywords: ['nonfiction', 'parenting', 'female author']
    },
    {
        title: 'Full Frontal Feminism',
        author: 'Jessica Valenti',
        myRating: 5,
        pages: 288,
        pubDate: 2007,
        yearRead: [2018],
        thumb: './images/full-frontal.jpg',
        keywords: ['nonfiction', 'feminism', 'gender', 'female author']
    },
    {
        title: 'Storm Front',
        author: 'Jim Butcher',
        myRating: 8,
        pages: 384,
        pubDate: 2000,
        yearRead: [2018],
        thumb: './images/dresden1.jpg',
        keywords: ['fiction', 'dreseden files', 'fantasy', 'magic', 'wizards', 'crime', 'mystery', 'vampires', 'series']
    },
    {
        title: 'Fool Moon',
        author: 'Jim Butcher',
        myRating: 7,
        pages: 401,
        pubDate: 2001,
        yearRead: [2020],
        thumb: './images/dresden2.jpg',
        keywords: ['fiction', 'dreseden files', 'fantasy', 'magic', 'wizards', 'crime', 'mystery', 'vampires', 'werewolves', 'series']
    },
    {
        title: 'Grave Peril',
        author: 'Jim Butcher',
        myRating: 7,
        pages: 378,
        pubDate: 2001,
        yearRead: [2020],
        thumb: './images/dresden3.jpg',
        keywords: ['fiction', 'dreseden files', 'fantasy', 'magic', 'wizards', 'crime', 'mystery', 'vampires', 'series']
    },
    {
        title: 'Rick and Morty vs. Dungeons & Dragons II',
        author: 'Jim Zub',
        myRating: 6,
        pages: 128,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/rick-morty-vs-dnd2.jpg',
        keywords: ['tv', 'humor', 'dnd', 'comics', 'graphic novels', 'fantasy', 'science fiction', 'series']
    },
    {
        title: 'Passion & Purpose',
        author: 'Jimmy Seibert',
        myRating: 5,
        pages: 214,
        pubDate: 2014,
        yearRead: [2014],
        thumb: './images/passion-purpose.jpg',
        keywords: ['nonfiction', 'church', 'christian', 'memoir']
    },
    {
        title: 'Discipline Equals Freedom',
        author: 'Jocko Willink',
        myRating: 9,
        pages: 189,
        pubDate: 2017,
        yearRead: [2020],
        thumb: './images/discipline.jpg',
        keywords: ['nonfiction', 'self-help', 'habits']
    },
    {
        title: 'Wild at Heart',
        author: 'John Eldredge',
        myRating: 8,
        pages: 242,
        pubDate: 2001,
        yearRead: [2009, 2011],
        thumb: './images/wild-at-heart.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'Looking for God in Harry Potter',
        author: 'John Granger',
        myRating: 7,
        pages: 234,
        pubDate: 2004,
        yearRead: [2010],
        thumb: './images/god-in-hp.jpg',
        keywords: ['nonfiction', 'christian', 'harry potter']
    },
    {
        title: 'Looking for Alaska',
        author: 'John Green',
        myRating: 9,
        pages: 221,
        pubDate: 2005,
        yearRead: [2015, 2017, 2019],
        thumb: './images/alaska.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'death', 'tv']
    },
    {
        title: 'An Abundance of Katherines',
        author: 'John Green',
        myRating: 8,
        pages: 229,
        pubDate: 2006,
        yearRead: [2015, 2017],
        thumb: './images/katherines.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age']
    },
    {
        title: 'Turtles All the Way Down',
        author: 'John Green',
        myRating: 7,
        pages: 286,
        pubDate: 2017,
        yearRead: [2017, 2019],
        thumb: './images/turtles.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'mental health']
    },
    {
        title: 'Will Grayson, Will Grayson',
        author: 'John Green',
        myRating: 7,
        pages: 310,
        pubDate: 2010,
        yearRead: [2015, 2017],
        thumb: './images/will-grayson.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'lgbt']
    },
    {
        title: 'The Fault in Our Stars',
        author: 'John Green',
        myRating: 7,
        pages: 316,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/fault-stars.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'death', 'movies']
    },
    {
        title: 'Paper Towns',
        author: 'John Green',
        myRating: 8,
        pages: 336,
        pubDate: 2008,
        yearRead: [2015],
        thumb: './images/paper-towns.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'mystery', 'movies']
    },
    {
        title: 'Let it Snow',
        author: 'John Green',
        myRating: 9,
        pages: 352,
        pubDate: 2008,
        yearRead: [2015, 2017],
        thumb: './images/let-it-snow.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'christmas', 'tv']
    },
    {
        title: 'Mind Hacking',
        author: 'John Hargrave',
        myRating: 7,
        pages: 256,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/mind-hacking.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help']
    },
    {
        title: 'Chew, Vol. 1',
        author: 'John Layman',
        myRating: 5,
        pages: 128,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/chew.jpg',
        keywords: ['fiction', 'graphic novels', 'zombies', 'crime']
    },
    {
        title: 'Harry Potter and the Cursed Child',
        author: 'John Tiffany',
        myRating: 6,
        pages: 343,
        pubDate: 2016,
        yearRead: [2016, 2017],
        thumb: './images/hp-cursed.jpg',
        keywords: ['harry potter', 'fiction', 'play', 'time travel', 'script', 'fantasy', 'magic', 'wizards', 'witches', 'series']
    },
    {
        title: 'Into the Wild',
        author: 'Jon Krakauer',
        myRating: 5,
        pages: 207,
        pubDate: 1996,
        yearRead: [2013],
        thumb: './images/into-wild.jpg',
        keywords: ['nonfiction', 'biography', 'travel', 'adventure', 'survival']
    },
    {
        title: 'Nights of the Living Dead',
        author: 'Jonathan Maberry',
        myRating: 5,
        pages: 368,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/nights-living-dead.jpg',
        keywords: ['fiction', 'short stories', 'zombies', 'horror']
    },
    {
        title: 'A Modest Proposal',
        author: 'Jonathan Swift',
        myRating: 7,
        pages: 48,
        pubDate: 1729,
        yearRead: [2008, 2020],
        thumb: './images/modest-proposal.jpg',
        keywords: ['fiction', 'satire', 'essays', 'politics']
    },
    {
        title: 'How Not to Be Wrong',
        author: 'Jordan Ellenberg',
        myRating: 7,
        pages: 480,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/how-not-to-be-wrong.jpg',
        keywords: ['nonfiction', 'mathematics', 'psychology']
    },
    {
        title: 'Bird Box',
        author: 'Josh Malerman',
        myRating: 8,
        pages: 262,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/bird-box.jpg',
        keywords: ['fiction', 'horror', 'apocalyptic', 'thriller', 'movies', 'series']
    },
    {
        title: 'Living With Less',
        author: 'Joshua Becker',
        myRating: 8,
        pages: 114,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/living-with-less.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    {
        title: 'The More of Less',
        author: 'Joshua Becker',
        myRating: 7,
        pages: 240,
        pubDate: 2016,
        yearRead: [2018, 2021],
        thumb: './images/more-of-less.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    {
        title: 'The Minimalist Home',
        author: 'Joshua Becker',
        myRating: 7,
        pages: 256,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/minimalist-home.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    {
        title: 'Simplify Magazine 001',
        author: 'Joshua Becker',
        myRating: 9,
        pages: 72,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/simplify-magazine.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'magazine', 'series']
    },
    {
        title: 'Simplify Magazine 002',
        author: 'Joshua Becker',
        myRating: 9,
        pages: 101,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/simplify-magazine.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'magazine', 'series']
    },
    {
        title: 'Simplify Magazine 003',
        author: 'Joshua Becker',
        myRating: 9,
        pages: 75,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/simplify-magazine.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'magazine', 'series']
    },
    {
        title: 'The Club',
        author: 'Joshua Robinson',
        myRating: 7,
        pages: 368,
        pubDate: 2018,
        yearRead: [2020],
        thumb: './images/club.jpg',
        keywords: ['nonfiction', 'biography', 'sports', 'soccer']
    },
    {
        title: 'Haunted Mansion',
        author: 'Joshua Williamson',
        myRating: 6,
        pages: 128,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/haunted-mansion.jpg',
        keywords: ['fiction', 'graphic novels', 'ghosts', 'horror', 'comics']
    },
    {
        title: 'Buffy the Vampire Slayer: The Long Way Home',
        author: 'Joss Whedon',
        myRating: 6,
        pages: 136,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/buffy-s8.jpg',
        keywords: ['graphic novels', 'fiction', 'horror', 'vampires', 'tv', 'fantasy', 'witches', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - K's
    ===========================*/
	//#region K
    {
        title: 'Beautiful Creatures',
        author: 'Kami Garcia',
        myRating: 5,
        pages: 563,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/beautiful-creatures.jpg',
        keywords: ['fiction', 'fantasy', 'romance', 'magic', 'witches', 'young adult', 'movies', 'female author', 'series']
    },
    {
        title: 'One of Us Is Lying',
        author: 'Karen M. McManus',
        myRating: 8,
        pages: 361,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/one-of-us-is-lying.jpg',
        keywords: ['fiction', 'young adult', 'mystery', 'thriller', 'crime', 'tv', 'unreliable narrator', 'female author', 'series']
    },
    {
        title: 'Bridge to Terabithia',
        author: 'Katherine Paterson',
        myRating: 6,
        pages: 190,
        pubDate: 1977,
        yearRead: [1999],
        thumb: './images/terabithia.jpg',
        keywords: ['fiction', 'young adult', 'death', 'movies', 'female author']
    },
    {
        title: 'Finding Sisu',
        author: 'Katja Pantzar',
        myRating: 5,
        pages: 272,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/sisu.jpg',
        keywords: ['nonfiction', 'self-help', 'travel', 'female author']
    },
    {
        title: 'Independent Me',
        author: 'Kely Braswell',
        myRating: 4,
        pages: 205,
        pubDate: 2014,
        yearRead: [2014],
        thumb: './images/independent-me.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: "The Geek Dad's Guide to Weekend Fun",
        author: 'Ken Denmead',
        myRating: 6,
        pages: 240,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/geek-dad.jpg',
        keywords: ['nonfiction', 'crafts', 'parenting', 'reference']
    },
    {
        title: "The New Answers Book 1",
        author: 'Ken Ham',
        myRating: 3,
        pages: 378,
        pubDate: 2007,
        yearRead: [2009],
        thumb: './images/new-answers.jpg',
        keywords: ['nonfiction', 'christian', 'theology', 'series']
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        author: 'Ken Kesey',
        myRating: 6,
        pages: 325,
        pubDate: 1962,
        yearRead: [2007, 2007],
        thumb: './images/one-flew-over.jpg',
        keywords: ['fiction', 'mental health', 'movies', 'unreliable narrator']
    },
    {
        title: 'Quidditch Through the Ages',
        author: 'Kennilworthy Whisp',
        myRating: 6,
        pages: 56,
        pubDate: 2001,
        yearRead: [2001, 2007, 2021],
        thumb: './images/quidditch.jpg',
        keywords: ['harry potter', 'fiction', 'children', 'reference', 'sports', 'fantasy', 'magic', 'witches', 'wizards', 'female author', 'series']
    },
    {
        title: 'Unlimited Memory',
        author: 'Kevin Horsley',
        myRating: 6,
        pages: 136,
        pubDate: 2014,
        yearRead: [2019, 2021],
        thumb: './images/unlimited-memory.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'productivity']
    },
    {
        title: 'For the Win',
        author: 'Kevin Werbach',
        myRating: 6,
        pages: 148,
        pubDate: 2012,
        yearRead: [2013],
        thumb: './images/ftw.jpg',
        keywords: ['nonfiction', 'business', 'psychology', 'games', 'video games']
    },
    {
        title: 'The A-Z of Atari 8-bit Games',
        author: 'Kieren Hawken',
        myRating: 4,
        pages: 196,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/az-atari-8bit.jpg',
        keywords: ['nonfiction', 'reference', 'games', 'video games']
    },
    {
        title: 'The DUFF',
        author: 'Kody Keplinger',
        myRating: 7,
        pages: 280,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/duff.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'movies', 'female author', 'series']
    },
    {
        title: 'Ring',
        author: 'Kōji Suzuki',
        myRating: 5,
        pages: 282,
        pubDate: 1991,
        yearRead: [2018],
        thumb: './images/ring.jpg',
        keywords: ['horror', 'fiction', 'ghosts', 'japanese', 'mystery', 'thriller', 'movies', 'series']
    },
    {
        title: 'Jesus and John Wayne',
        author: 'Kristin Kobes Du Mez',
        myRating: 7,
        pages: 368,
        pubDate: 2020,
        yearRead: [2021],
        thumb: './images/jesus-john-wayne.jpg',
        keywords: ['gender', 'nonfiction', 'christian', 'historical', 'female author']
    },
    {
        title: "Don't Get Caught",
        author: 'Kurt Dinan',
        myRating: 6,
        pages: 340,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/dont-get-caught.jpg',
        keywords: ['fiction', 'young adult', 'mystery', 'humor']
    },
	//#endregion
    /*===========================
    	Author First Name - L's
    ===========================*/
	//#region L
    {
        title: 'The Awakening',
        author: 'L.J. Smith',
        myRating: 5,
        pages: 253,
        pubDate: 1991,
        yearRead: [2015],
        thumb: './images/awakening.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author', 'series']
    },
    {
        title: 'The Struggle',
        author: 'L.J. Smith',
        myRating: 5,
        pages: 256,
        pubDate: 1991,
        yearRead: [2015],
        thumb: './images/struggle.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author', 'series']
    },
    {
        title: 'The Fury',
        author: 'L.J. Smith',
        myRating: 5,
        pages: 285,
        pubDate: 1991,
        yearRead: [2016],
        thumb: './images/fury.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author', 'series']
    },
    {
        title: 'Dark Reunion',
        author: 'L.J. Smith',
        myRating: 5,
        pages: 311,
        pubDate: 1991,
        yearRead: [2016],
        thumb: './images/dark-reunion.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author', 'series']
    },
    {
        title: 'I Love You, Beth Cooper',
        author: 'Larry Doyle',
        myRating: 7,
        pages: 253,
        pubDate: 2007,
        yearRead: [2015],
        thumb: './images/beth-cooper.jpg',
        keywords: ['young adult', 'fiction', 'romance', 'humor', 'movies']
    },
    {
        title: 'A Secret Life',
        author: 'Laura Peyton Roberts',
        myRating: 6,
        pages: 202,
        pubDate: 2003,
        yearRead: [2019],
        thumb: './images/secret-life.jpg',
        keywords: ['tv', 'fiction', 'spy thriller', 'young adult', 'female author', 'series']
    },
    {
        title: 'What the Most Successful People Do Before Breakfast',
        author: 'Laura Vanderkam',
        myRating: 7,
        pages: 32,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/successful-breakfast.jpg',
        keywords: ['nonfiction', 'self-help', 'business', 'productivity', 'female author']
    },
    {
        title: 'Guilty Pleasures',
        author: 'Laurell K. Hamilton',
        myRating: 7,
        pages: 355,
        pubDate: 1993,
        yearRead: [2017],
        thumb: './images/guilty-pleasures.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'fantasy', 'romance', 'female author', 'series']
    },
    {
        title: 'Six of Crows',
        author: 'Leigh Bardugo',
        myRating: 8,
        pages: 465,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/six-of-crows.jpg',
        keywords: ['fiction', 'fantasy', 'high fantasy', 'lgbt', 'romance', 'heist', 'adventure', 'young adult', 'female author', 'series']
    },
    {
        title: 'Crooked Kingdom',
        author: 'Leigh Bardugo',
        myRating: 8,
        pages: 536,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/six-of-crows2.jpg',
        keywords: ['fiction', 'fantasy', 'high fantasy', 'lgbt', 'romance', 'heist', 'adventure', 'young adult', 'female author', 'series']
    },
    {
        title: 'The Bad Beginning',
        author: 'Lemony Snicket',
        myRating: 6,
        pages: 176,
        pubDate: 1999,
        yearRead: [2016],
        thumb: './images/unfortunate1.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'movies', 'series']
    },
    {
        title: 'The Reptile Room',
        author: 'Lemony Snicket',
        myRating: 6,
        pages: 192,
        pubDate: 1999,
        yearRead: [2016],
        thumb: './images/unfortunate2.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'movies', 'series']
    },
    {
        title: 'The Wide Window',
        author: 'Lemony Snicket',
        myRating: 5,
        pages: 214,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/unfortunate3.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'movies', 'series']
    },
    {
        title: 'The Miserable Mill',
        author: 'Lemony Snicket',
        myRating: 5,
        pages: 194,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/unfortunate4.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Austere Academy',
        author: 'Lemony Snicket',
        myRating: 5,
        pages: 221,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/unfortunate5.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Ersatz Elevator',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 259,
        pubDate: 2001,
        yearRead: [2016],
        thumb: './images/unfortunate6.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Vile Village',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 272,
        pubDate: 2001,
        yearRead: [2016],
        thumb: './images/unfortunate7.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Hostile Hospital',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 272,
        pubDate: 2001,
        yearRead: [2016],
        thumb: './images/unfortunate8.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Carnivorous Carnival',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 286,
        pubDate: 2002,
        yearRead: [2016],
        thumb: './images/unfortunate9.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Slippery Slope',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 337,
        pubDate: 2003,
        yearRead: [2016],
        thumb: './images/unfortunate10.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Grim Grotto',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 323,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/unfortunate11.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The Penultimate Peril',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 353,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/unfortunate12.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'The End',
        author: 'Lemony Snicket',
        myRating: 4,
        pages: 337,
        pubDate: 2006,
        yearRead: [2016],
        thumb: './images/unfortunate13.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'series']
    },
    {
        title: 'Read Japanese Today',
        author: 'Len Welsh',
        myRating: 7,
        pages: 168,
        pubDate: 1969,
        yearRead: [2017],
        thumb: './images/read-japanese.jpg',
        keywords: ['nonfiction', 'language', 'educational', 'japanese', 'japan'],
		similar: ['Learning Chinese Characters']
    },
    {
        title: 'The Magicians',
        author: 'Lev Grossman',
        myRating: 4,
        pages: 402,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/magicians.jpg',
        keywords: ['young adult', 'fiction', 'fantasy', 'magic', 'tv', 'series']
    },
    {
        title: 'Big Little Lies',
        author: 'Liane Moriarty',
        myRating: 9,
        pages: 460,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/big-little-lies.jpg',
        keywords: ['fiction', 'mystery', 'humor', 'thriller', 'tv', 'female author']
    },
    {
        title: 'Going Bovine',
        author: 'Libba Bray',
        myRating: 9,
        pages: 480,
        pubDate: 2009,
        yearRead: [2021],
        thumb: './images/bovine.jpg',
        keywords: ['fiction', 'young adult', 'mental health', 'weird', 'fantasy', 'humor', 'death', 'adventure', 'unreliable narrator', 'female author']
    },
    {
        title: 'The Giver',
        author: 'Lois Lowry',
        myRating: 8,
        pages: 208,
        pubDate: 1993,
        yearRead: [2015],
        thumb: './images/giver.jpg',
        keywords: ['fiction', 'dystopian', 'young adult', 'science fiction', 'movies', 'female author', 'series']
    },
    {
        title: 'Gathering Blue',
        author: 'Lois Lowry',
        myRating: 5,
        pages: 240,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/gathering-blue.jpg',
        keywords: ['fiction', 'dystopian', 'young adult', 'science fiction', 'female author', 'series']
    },
    {
        title: 'Messenger',
        author: 'Lois Lowry',
        myRating: 5,
        pages: 169,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/messenger.jpg',
        keywords: ['fiction', 'dystopian', 'young adult', 'science fiction', 'female author', 'series']
    },
    {
        title: 'Number the Stars',
        author: 'Lois Lowry',
        myRating: 8,
        pages: 137,
        pubDate: 1989,
        yearRead: [2000, 2019],
        thumb: './images/number-stars.jpg',
        keywords: ['fiction', 'historical', 'holocaust', 'children', 'female author']
    },
    {
        title: 'Nazirite DNA',
        author: 'Lou Engle',
        myRating: 5,
        pages: 50,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/nazirite-dna.jpg',
        keywords: ['nonfiction', 'christian', 'prayer']
    },
    {
        title: 'Theodore Roosevelt',
        author: 'Louis Auchincloss',
        myRating: 7,
        pages: 176,
        pubDate: 2002,
        yearRead: [2021],
        thumb: './images/teddy.jpg',
        keywords: ['nonfiction', 'presidents', 'biography', 'historical']
    },
    {
        title: 'Holes',
        author: 'Louis Sachar',
        myRating: 7,
        pages: 233,
        pubDate: 1998,
        yearRead: [2001],
        thumb: './images/holes.jpg',
        keywords: ['young adult', 'fiction', 'mystery', 'adventure', 'movies', 'series']
    },
    {
        title: 'Sideways Stories from Wayside School',
        author: 'Louis Sachar',
        myRating: 7,
        pages: 128,
        pubDate: 1978,
        yearRead: [2003, 2015],
        thumb: './images/wayside1.jpg',
        keywords: ['children', 'humor', 'weird', 'fiction', 'short stories', 'series']
    },
    {
        title: 'Wayside School Is Falling Down',
        author: 'Louis Sachar',
        myRating: 7,
        pages: 152,
        pubDate: 1989,
        yearRead: [2003],
        thumb: './images/wayside2.jpg',
        keywords: ['children', 'humor', 'weird', 'fiction', 'short stories', 'series']
    },
    {
        title: 'Wayside School Gets a Little Stranger',
        author: 'Louis Sachar',
        myRating: 7,
        pages: 168,
        pubDate: 1995,
        yearRead: [2003],
        thumb: './images/wayside3.jpg',
        keywords: ['children', 'humor', 'weird', 'fiction', 'short stories', 'series']
    },
    {
        title: 'Recruited',
        author: 'Lynn Mason',
        myRating: 6,
        pages: 224,
        pubDate: 2002,
        yearRead: [2019],
        thumb: './images/recruited.jpg',
        keywords: ['tv', 'fiction', 'spy thriller', 'young adult', 'female author', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - M's
    ===========================*/
	//#region M
    {
        title: 'A Wrinkle in Time',
        author: "Madeleine L'Engle",
        myRating: 7,
        pages: 211,
        pubDate: 1962,
        yearRead: [2015, 2018],
        thumb: './images/wrinkle-in-time.jpg',
        keywords: ['movies', 'fiction', 'young adult', 'fantasy', 'science fiction', 'time travel', 'female author', 'series']
    },
    {
        title: 'Outliers',
        author: 'Malcolm Gladwell',
        myRating: 8,
		pages: 309,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/outliers.jpg',
        keywords: ['nonfiction', 'psychology', 'sociology']
    },
    {
        title: 'Tipping Point',
        author: 'Malcolm Gladwell',
        myRating: 7,
		pages: 301,
        pubDate: 2002,
        yearRead: [2020],
        thumb: './images/tipping-point.jpg',
        keywords: ['nonfiction', 'psychology', 'sociology']
    },
    {
        title: 'Bored and Brilliant',
        author: 'Manoush Zomorodi',
        myRating: 8,
        pages: 192,
        pubDate: 2017,
        yearRead: [2019, 2021],
        thumb: './images/bored.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'technology']
    },
    {
        title: 'The 125 Best Brain Teasers of All Time',
        author: 'Marcel Danesi',
        myRating: 5,
        pages: 206,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/brain-teasers.jpg',
        keywords: ['puzzles', 'nonfiction']
    },
    {
        title: 'Vampire Baby',
        author: 'Marcia Thornton Jones',
        myRating: 6,
        pages: 69,
        pubDate: 1999,
        yearRead: [2001],
        thumb: './images/vamp-baby.jpg',
        keywords: ['fiction', 'bailey school kids', 'children', 'fantasy', 'mystery', 'vampires', 'female author', 'series']
    },
    {
        title: 'The Official Pokémon Handbook',
        author: 'Maria Barbo',
        myRating: 7,
        pages: 143,
        pubDate: 1999,
        yearRead: [2000],
        thumb: './images/pokemon.jpg',
        keywords: ['tv', 'movies', 'games', 'video games', 'children', 'animals', 'fiction', 'reference', 'female author']
    },
    {
        title: "Where'd You Go, Bernadette",
        author: 'Maria Semple',
        myRating: 9,
        pages: 330,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/bernadette.jpg',
        keywords: ['movies', 'fiction', 'humor', 'mystery', 'female author']
    },
    {
        title: 'Beautiful',
        author: "Marie D'Abreo",
        myRating: 4,
        pages: 134,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/beautiful.jpg',
        keywords: ['graphic novels', 'young adult', 'coming of age', 'fiction', 'female author']
    },
    {
        title: 'Legend',
        author: 'Marie Lu',
        myRating: 7,
        pages: 305,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/legend.jpg',
        keywords: ['young adult', 'fiction', 'dystopian', 'science fiction', 'romance', 'female author', 'series']
    },
    {
        title: 'Doctrine',
        author: 'Mark Driscoll',
        myRating: 8,
        pages: 463,
        pubDate: 2010,
        yearRead: [2012],
        thumb: './images/doctrine.jpg',
        keywords: ['christian', 'nonfiction', 'theology']
    },
    {
        title: 'The Radical Reformission',
        author: 'Mark Driscoll',
        myRating: 8,
        pages: 208,
        pubDate: 2004,
        yearRead: [2012],
        thumb: './images/radical-ref.jpg',
        keywords: ['christian', 'nonfiction', 'christian living']
    },
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        myRating: 7,
        pages: 224,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/subtle-art.jpg',
        keywords: ['nonfiction', 'self-help', 'psychology']
    },
    {
        title: 'Archie, Vol. 1',
        author: 'Mark Waid',
        myRating: 6,
        pages: 160,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/archie.jpg',
        keywords: ['tv', 'graphic novels', 'young adult', 'comics', 'fiction', 'series']
    },
    {
        title: 'House of Leaves',
        author: 'Mark Z. Danielewski',
        myRating: 7,
        pages: 705,
        pubDate: 2000,
        yearRead: [2019],
        thumb: './images/house-of-leaves.jpg',
        keywords: ['experimental', 'weird', 'horror', 'fiction', 'fantasy', 'mystery', 'unreliable narrator']
    },
    {
        title: 'Manna',
        author: 'Marshall Brain',
        myRating: 8,
        pages: 79,
        pubDate: 2003,
        yearRead: [2017],
        thumb: './images/manna.jpg',
        keywords: ['fiction', 'science fiction', 'dystopian', 'short stories', 'technology']
    },
    {
        title: 'Frankenstein',
        author: 'Mary Wollstonecraft Shelley',
        myRating: 6,
        pages: 335,
        pubDate: 1818,
        yearRead: [2008],
        thumb: './images/frankenstein.jpg',
        keywords: ['fiction', 'gothic', 'horror', 'science fiction', 'movies', 'female author']
    },
    {
        title: '30 Days To Understanding the Bible',
        author: 'Max Anders',
        myRating: 7,
        pages: 305,
        pubDate: 2004,
        yearRead: [2013],
        thumb: './images/thirty-days-bible.jpg',
        keywords: ['reference', 'theology', 'christian', 'nonfiction']
    },
    {
        title: 'World War Z',
        author: 'Max Brooks',
        myRating: 6,
        pages: 342,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/wwz.jpg',
        keywords: ['fiction', 'zombies', 'horror', 'movies']
    },
    {
        title: 'How Not to Die',
        author: 'Michael Greger',
        myRating: 7,
        pages: 576,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/how-not-to-die.jpg',
        keywords: ['nonfiction', 'health', 'nutrition', 'food', 'science']
    },
    {
        title: 'Stupid White Men',
        author: 'Michael Moore',
        myRating: 6,
        pages: 304,
        pubDate: 2001,
        yearRead: [2008],
        thumb: './images/stupid-white-men.jpg',
        keywords: ['nonfiction', 'politics', 'humor', 'historical', 'america']
    },
    {
        title: 'Food Rules',
        author: 'Michael Pollan',
        myRating: 8,
        pages: 152,
        pubDate: 2009,
        yearRead: [2020],
        thumb: './images/food-rules.jpg',
        keywords: ['nonfiction', 'nutrition', 'food']
    },
    {
        title: 'Mean Girls',
        author: 'Micol Ostow',
        myRating: 7,
        pages: 283,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/mean-girls.jpg',
        keywords: ['movies', 'young adult', 'humor', 'fiction', 'romance', 'female author']
    },
    {
        title: "Dungeon Master's Guide",
        author: 'Mike Mearls',
        myRating: 8,
        pages: 320,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/dmg.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy', 'series']
    },
    {
        title: 'The Kobold Guide to Board Game Design',
        author: 'Mike Selinker',
        myRating: 9,
        pages: 138,
        pubDate: 2011,
        yearRead: [2015],
        thumb: './images/kobold-bgs.jpg',
        keywords: ['essays', 'nonfiction', 'game design', 'games', 'tabletop games']
    },
    {
        title: "Shirley Jackson's The Lottery: The Authorized Graphic Adaptation",
        author: 'Miles Hyman',
        myRating: 5,
        pages: 160,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/lottery-graphic.jpg',
        keywords: ['graphic novels', 'short stories', 'horror', 'fiction', 'dystopian']
    },
    {
        title: "AsapSCIENCE",
        author: 'Mitchell Moffit',
        myRating: 7,
        pages: 256,
        pubDate: 2015,
        yearRead: [2021],
        thumb: './images/asapscience.jpg',
        keywords: ['nonfiction', 'reference', 'science', 'humor']
    },
	//#endregion
    /*===========================
    	Author First Name - N's
    ===========================*/
	//#region N
    {
        title: 'Scythe',
        author: 'Neal Shusterman',
        myRating: 9,
        pages: 435,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/scythe1.jpg',
        keywords: ['young adult', 'dystopian', 'death', 'fiction', 'fantasy', 'romance', 'series']
    },
    {
        title: 'Thunderhead',
        author: 'Neal Shusterman',
        myRating: 10,
        pages: 504,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/scythe2.jpg',
        keywords: ['young adult', 'dystopian', 'death', 'fiction', 'fantasy', 'romance', 'series']
    },
    {
        title: 'The Toll',
        author: 'Neal Shusterman',
        myRating: 9,
        pages: 625,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/scythe3.jpg',
        keywords: ['young adult', 'dystopian', 'death', 'fiction', 'fantasy', 'romance', 'series']
    },
    {
        title: 'Neverwhere',
        author: 'Neil Gaiman',
        myRating: 6,
        pages: 370,
        pubDate: 1996,
        yearRead: [2018],
        thumb: './images/neverwhere.jpg',
        keywords: ['fantasy', 'fiction', 'horror', 'adventure']
    },
    {
        title: 'Good Omens',
        author: 'Neil Gaiman',
        myRating: 5,
        pages: 491,
        pubDate: 2006,
        yearRead: [2020],
        thumb: './images/good-omens.jpg',
        keywords: ['tv', 'fantasy', 'apocalyptic', 'humor', 'fiction']
    },
    {
        title: 'Coraline',
        author: 'Neil Gaiman',
        myRating: 6,
        pages: 162,
        pubDate: 2002,
        yearRead: [2018],
        thumb: './images/coraline.jpg',
        keywords: ['movies', 'horror', 'fiction', 'fantasy', 'young adult']
    },
    {
        title: 'The Graveyard Book',
        author: 'Neil Gaiman',
        myRating: 7,
        pages: 307,
        pubDate: 2008,
        yearRead: [2018],
        thumb: './images/graveyard-book.jpg',
        keywords: ['horror', 'fiction', 'fantasy', 'children', 'ghosts']
    },
    {
        title: 'Victory Over the Darkness',
        author: 'Neil T. Anderson',
        myRating: 4,
        pages: 256,
        pubDate: 1990,
        yearRead: [2014],
        thumb: './images/victory-over-darkness.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'Fantastic Beasts and Where to Find Them',
        author: 'Newt Scamander',
        myRating: 7,
        pages: 128,
        pubDate: 2001,
        yearRead: [2001, 2016, 2021],
        thumb: './images/fantastic-beasts.jpg',
        keywords: ['harry potter', 'children', 'reference', 'animals', 'fantasy', 'magic', 'fiction', 'movies', 'female author', 'series']
    },
    {
        title: 'Everything, Everything',
        author: 'Nicola Yoon',
        myRating: 7,
        pages: 306,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/everything.jpg',
        keywords: ['fiction', 'young adult', 'sickness', 'romance', 'coming of age', 'weird', 'movies', 'female author']
    },
	//#endregion
    /*===========================
    	Author First Name - O's
    ===========================*/
	//#region O
    {
        title: 'Cold Sassy Tree',
        author: 'Olive Ann Burns',
        myRating: 6,
        pages: 391,
        pubDate: 1984,
        yearRead: [2004],
        thumb: './images/sassy-tree.jpg',
        keywords: ['fiction', 'historical', 'southern', 'coming of age', 'female author']
    },
    {
        title: 'Ender’s Game',
        author: 'Orson Scott Card',
        myRating: 6,
        pages: 324,
        pubDate: 1985,
        yearRead: [2004],
        thumb: './images/enders-game.jpg',
        keywords: ['movies', 'fiction', 'aliens', 'young adult', 'space', 'war', 'science fiction', 'series']
    },
    {
        title: 'The Canterville Ghost',
        author: 'Oscar Wilde',
        myRating: 7,
        pages: 126,
        pubDate: 1887,
        yearRead: [2021],
        thumb: './images/canterville.jpg',
        keywords: ['horror', 'fiction', 'humor', 'gothic', 'ghosts']
    },
	//#endregion
    /*===========================
    	Author First Name - P's
    ===========================*/
	//#region P
    {
        title: 'The Windup Girl',
        author: 'Paolo Bacigalupi',
        myRating: 5,
        pages: 359,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/windup-girl.jpg',
        keywords: ['science fiction', 'fiction', 'dystopian', 'steampunk']
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        myRating: 10,
        pages: 722,
        pubDate: 2007,
        yearRead: [2020],
        thumb: './images/name-of-wind.jpg',
        keywords: ['fantasy', 'fiction', 'magic', 'music', 'adventure', 'high fantasy', 'series']
    },
    {
        title: "The Wise Man's Fear",
        author: 'Patrick Rothfuss',
        myRating: 10,
        pages: 1107,
        pubDate: 2011,
        yearRead: [2020],
        thumb: './images/name-of-wind2.jpg',
        keywords: ['fantasy', 'fiction', 'magic', 'music', 'adventure', 'high fantasy', 'fairies', 'series']
    },
    {
        title: 'Rick and Morty vs. Dungeons & Dragons',
        author: 'Patrick Rothfuss',
        myRating: 9,
        pages: 96,
        pubDate: 2019,
        yearRead: [2020],
        thumb: './images/rick-morty-vs-dnd.jpg',
        keywords: ['tv', 'humor', 'dnd', 'comics', 'graphic novels', 'fantasy', 'science fiction', 'series']
    },
    {
        title: 'The Heavenly Man',
        author: 'Paul Hattaway',
        myRating: 6,
        pages: 351,
        pubDate: 2000,
        yearRead: [2015],
        thumb: './images/heavenly-man.jpg',
        keywords: ['china', 'nonfiction', 'biography', 'christian']
    },
    {
        title: 'The Girl on the Train',
        author: 'Paula Hawkins',
        myRating: 7,
        pages: 325,
        pubDate: 2015,
        yearRead: [2016],
        thumb: './images/girl-on-train.jpg',
        keywords: ['mystery', 'fiction', 'crime', 'thriller', 'suspense', 'movies', 'unreliable narrator', 'female author']
    },
    {
        title: 'Liverpool FC',
        author: 'Paula Wilson',
        myRating: 6,
        pages: 32,
        pubDate: 2018,
        yearRead: [2020],
        thumb: './images/liverpool.jpg',
        keywords: ['nonfiction', 'sports', 'soccer', 'reference', 'female author']
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        myRating: 5,
        pages: 197,
        pubDate: 1988,
        yearRead: [2018],
        thumb: './images/alchemist.jpg',
        keywords: ['fiction', 'fantasy', 'philosophy']
    },
    {
        title: 'The Good Earth',
        author: 'Pearl S. Buck',
        myRating: 5,
        pages: 418,
        pubDate: 1931,
        yearRead: [2006],
        thumb: './images/good-earth.jpg',
        keywords: ['fiction', 'historical', 'china', 'movies', 'female author', 'series']
    },
    {
        title: 'Shortest Way Home',
        author: 'Pete Buttigieg',
        myRating: 6,
        pages: 352,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/shortest-way-home.jpg',
        keywords: ['nonfiction', 'memoir', 'politics', 'lgbt']
    },
    {
        title: '30 Years of Adventure: A Celebration of Dungeons & Dragons',
        author: 'Peter Archer',
        myRating: 5,
        pages: 286,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/thirty-years.jpg',
        keywords: ['dnd', 'nonfiction', 'biography', 'games', 'tabletop games']
    },
    {
        title: '1001 Books You Must Read Before You Die',
        author: 'Peter Boxall',
        myRating: 5,
        pages: 960,
        pubDate: 2006,
        yearRead: [2017],
        thumb: './images/thousand-one-books.jpg',
        keywords: ['nonfiction', 'reference', 'series']
    },
    {
        title: 'Adjustment Team',
        author: 'Philip K Dick',
        myRating: 6,
        pages: 44,
        pubDate: 1954,
        yearRead: [2021],
        thumb: './images/adjustment-team.jpg',
        keywords: ['fiction', 'movies', 'science fiction', 'short stories']
    },
    {
        title: 'Resident Evil',
        author: 'Philip Reed',
        myRating: 7,
        pages: 192,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/resident-evil.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'biography', 'boss fight books', 'series']
    },
    {
        title: 'Hidden Codes & Grand Designs',
        author: 'Pierre Berloquin',
        myRating: 6,
        pages: 375,
        pubDate: 2007,
        yearRead: [2014],
        thumb: './images/hidden-codes.jpg',
        keywords: ['nonfiction', 'historical', 'science']
    },
	//#endregion
    /*===========================
    	Author First Name - Q's
    ===========================*/
	//#region Q
	//#endregion
    /*===========================
    	Author First Name - R's
    ===========================*/
	//#region R
    {
        title: 'Dr. Maniac Will See You Now',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 160,
        pubDate: 2013,
        yearRead: [2017],
        thumb: './images/dr-maniac.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'Dr. Maniac vs. Robby Schwartz']
    },
    {
        title: 'Dr. Maniac vs. Robby Schwartz',
        author: 'R.L. Stine',
        myRating: 3,
        pages: 132,
        pubDate: 2008,
        yearRead: [2017],
        thumb: './images/dr-maniac-vs.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Dr. Maniac Will See You Now', 'Scary Stories to Tell in the Dark']
    },
    {
        title: 'Welcome To Camp Slither',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 133,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/camp-slither.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'camps', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Little Shop of Hamsters',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 135,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/little-shop-hamsters.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'When The Ghost Dog Howls',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 137,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/ghost-dog-howls.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'ghosts', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Slappy Birthday to You',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 139,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/slappy-birthday.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Night of the Living Dummy', 'Scary Stories to Tell in the Dark']
    },
    {
        title: 'Slappy New Year!',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 160,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/slappy-new-year.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Night of the Living Dummy', 'Scary Stories to Tell in the Dark']
    },
    {
        title: 'It Came from Beneath the Sink!',
        author: 'R.L. Stine',
        myRating: 6,
        pages: 112,
        pubDate: 1995,
        yearRead: [2016],
        thumb: './images/it-came-from-beneath.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Werewolf Skin',
        author: 'R.L. Stine',
        myRating: 7,
        pages: 125,
        pubDate: 1997,
        yearRead: [2015],
        thumb: './images/werewolf-skin.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'werewolves', 'tv', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Say Cheese and Die!',
        author: 'R.L. Stine',
        myRating: 7,
        pages: 144,
        pubDate: 1992,
        yearRead: [1999],
        thumb: './images/say-cheese-die.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv', 'series'],
		similar: ['Say Cheese - And Die Screaming', 'Scary Stories to Tell in the Dark']
    },
    {
        title: 'Say Cheese - And Die Screaming',
        author: 'R.L. Stine',
        myRating: 5,
        pages: 125,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/say-cheese-die-screaming.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Say Cheese and Die!', 'Scary Stories to Tell in the Dark']
    },
    {
        title: 'Welcome to Dead House',
        author: 'R.L. Stine',
        myRating: 7,
        pages: 126,
        pubDate: 1992,
        yearRead: [2017],
        thumb: './images/dead-house.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'ghosts', 'tv', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Escape From Horrorland',
        author: 'R.L. Stine',
        myRating: 5,
        pages: 132,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/escape-horrorland.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'One Day at Horrorland']
    },
    {
        title: "Who's Your Mummy?",
        author: 'R.L. Stine',
        myRating: 5,
        pages: 133,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/whos-your-mummy.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark', "The Curse of the Mummy's Tomb"]
    },
    {
        title: 'Creature Teacher: The Final Exam',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 133,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/creature-teacher.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Night of the Living Dummy',
        author: 'R.L. Stine',
        myRating: 7,
        pages: 134,
        pubDate: 1993,
        yearRead: [2017],
        thumb: './images/night-living-dummy.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'My Friends Call Me Monster',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 138,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/friends-call-me-monster.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'One Day at Horrorland',
        author: 'R.L. Stine',
        myRating: 7,
        pages: 123,
        pubDate: 1994,
        yearRead: [2006],
        thumb: './images/horrorland.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'Stay Out of the Basement',
        author: 'R.L. Stine',
        myRating: 6,
        pages: 144,
        pubDate: 1992,
        yearRead: [2017],
        thumb: './images/stay-out-basement.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: "The Curse of the Mummy's Tomb",
        author: 'R.L. Stine',
        myRating: 6,
        pages: 144,
        pubDate: 1993,
        yearRead: [2017],
        thumb: './images/curse-of-mummy.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark']
    },
    {
        title: 'The Horror At Chiller House',
        author: 'R.L. Stine',
        myRating: 5,
        pages: 160,
        pubDate: 2011,
        yearRead: [2017],
        thumb: './images/chiller-house.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'One Day at Horrorland']
    },
    {
        title: 'The 12 Screams of Christmas',
        author: 'R.L. Stine',
        myRating: 6,
        pages: 174,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/twelve-screams.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'christmas', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'Zombie Halloween']
    },
    {
        title: 'Zombie Halloween',
        author: 'R.L. Stine',
        myRating: 6,
        pages: 174,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/zombie-halloween.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'zombies', 'halloween', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'Weirdo Halloween']
    },
    {
        title: 'Weirdo Halloween',
        author: 'R.L. Stine',
        myRating: 4,
        pages: 214,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/weirdo-halloween.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'halloween', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'Zombie Halloween']
    },
    {
        title: 'Creepy Creatures',
        author: 'R.L. Stine',
        myRating: 5,
        pages: 144,
        pubDate: 2006,
        yearRead: [2017],
        thumb: './images/creepy-creatures.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'graphic novels', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'Terror Trips']
    },
    {
        title: 'Terror Trips',
        author: 'R.L. Stine',
        myRating: 5,
        pages: 144,
        pubDate: 2007,
        yearRead: [2017],
        thumb: './images/terror-trips.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'graphic novels', 'series'],
		similar: ['Scary Stories to Tell in the Dark', 'Creepy Creatures']
    },
    {
        title: '2,000 to 10,000',
        author: 'Rachel Aaron',
        myRating: 6,
        pages: 72,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/two-thousand.jpg',
        keywords: ['nonfiction', 'writing', 'reference', 'female author']
    },
    {
        title: 'Less: A Visual Guide to Minimalism',
        author: 'Rachel Aust',
        myRating: 6,
        pages: 144,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/less.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'female author']
    },
    {
        title: "Nick & Norah's Infinite Playlist",
        author: 'Rachel Cohn',
        myRating: 8,
        pages: 183,
        pubDate: 2006,
        yearRead: [2015, 2018],
        thumb: './images/nick-norah.jpg',
        keywords: ['movies', 'fiction', 'young adult', 'romance', 'music', 'female author']
    },
    {
        title: "Dot Journaling",
        author: 'Rachel Miller',
        myRating: 6,
        pages: 241,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/dot-journaling.jpg',
        keywords: ['nonfiction', 'writing', 'self-help', 'reference', 'productivity', 'female author']
    },
    {
        title: 'Ghosts',
        author: 'Raina Telgemeier',
        myRating: 7,
        pages: 256,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/ghosts.jpg',
        keywords: ['ghosts', 'graphic novels', 'children', 'fantasy', 'fiction', 'sickness', 'female author']
    },
    {
        title: 'Landline',
        author: 'Rainbow Rowell',
        myRating: 7,
        pages: 310,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/landline.jpg',
        keywords: ['romance', 'weird', 'fantasy', 'fiction', 'time travel', 'female author']
    },
    {
        title: 'Attachments',
        author: 'Rainbow Rowell',
        myRating: 7,
        pages: 323,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/attachments.jpg',
        keywords: ['fiction', 'romance', 'humor', 'female author']
    },
    {
        title: 'Eleanor & Park',
        author: 'Rainbow Rowell',
        myRating: 7,
        pages: 328,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/eleanor-park.jpg',
        keywords: ['fiction', 'romance', 'young adult', 'coming of age', 'female author']
    },
    {
        title: 'Fangirl',
        author: 'Rainbow Rowell',
        myRating: 9,
        pages: 483,
        pubDate: 2013,
        yearRead: [2016],
        thumb: './images/fangirl.jpg',
        keywords: ['fiction', 'young adult', 'schools', 'romance', 'coming of age', 'female author', 'series']
    },
    {
        title: 'Carry On',
        author: 'Rainbow Rowell',
        myRating: 8,
        pages: 522,
        pubDate: 2015,
        yearRead: [2016, 2018],
        thumb: './images/carry-on1.jpg',
        keywords: ['young adult', 'fiction', 'fantasy', 'lgbt', 'magic', 'vampires', 'romance', 'wizards', 'witches', 'female author', 'series']
    },
    {
        title: 'Wayward Son',
        author: 'Rainbow Rowell',
        myRating: 8,
        pages: 356,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/carry-on2.jpg',
        keywords: ['young adult', 'fiction', 'fantasy', 'lgbt', 'magic', 'vampires', 'romance', 'wizards', 'witches', 'adventure', 'female author', 'series']
    },
    {
        title: 'Kindred Spirits',
        author: 'Rainbow Rowell',
        myRating: 7,
        pages: 96,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/kindred-spirits.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'short stories', 'female author']
    },
    {
        title: 'Thing Explainer',
        author: 'Randall Munroe',
        myRating: 8,
        pages: 64,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/thing-explainer.jpg',
        keywords: ['nonfiction', 'reference', 'science', 'humor', 'graphic novels']
    },
    {
        title: 'What If?',
        author: 'Randall Munroe',
        myRating: 8,
        pages: 303,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/what-if.jpg',
        keywords: ['nonfiction', 'reference', 'science', 'humor']
    },
    {
        title: 'Money, Possessions and Eternity',
        author: 'Randy Alcorn',
        myRating: 6,
        pages: 528,
        pubDate: 1989,
        yearRead: [2015],
        thumb: './images/money-eternity.jpg',
        keywords: ['nonfiction', 'money', 'christian', 'christian living']
    },
    {
        title: 'The Treasure Principle',
        author: 'Randy Alcorn',
        myRating: 8,
        pages: 120,
        pubDate: 2001,
        yearRead: [2013],
        thumb: './images/treasure-principle.jpg',
        keywords: ['nonfiction', 'money', 'christian', 'christian living']
    },
    {
        title: 'Safely Home',
        author: 'Randy Alcorn',
        myRating: 8,
        pages: 402,
        pubDate: 2001,
        yearRead: [2013],
        thumb: './images/safely-home.jpg',
        keywords: ['fiction', 'china', 'christian', 'historical']
    },
    {
        title: 'How to be Miserable',
        author: 'Randy Paterson',
        myRating: 5,
        pages: 248,
        pubDate: 2016,
        yearRead: [2020],
        thumb: './images/miserable.jpg',
        keywords: ['nonfiction', 'humor', 'self-help', 'psychology']
    },
    {
        title: 'Miss Peregrine’s Home for Peculiar Children',
        author: 'Ransom Riggs',
        myRating: 6,
        pages: 382,
        pubDate: 2011,
        yearRead: [2015],
        thumb: './images/peregrine.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'time travel', 'adventure', 'mystery', 'horror', 'movies', 'series']
    },
    {
        title: 'Welcome to the Club',
        author: "Raquel D'Apice",
        myRating: 7,
        pages: 144,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/welcome-to-club.jpg',
        keywords: ['nonfiction', 'parenting', 'humor', 'female author']
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        myRating: 7,
        pages: 180,
        pubDate: 1953,
        yearRead: [2015],
        thumb: './images/f451.jpg',
        keywords: ['fiction', 'movies', 'dystopian']
    },
    {
        title: 'Cemetery Dance: Issue 74-75',
        author: 'Richard Chizmar',
        myRating: 4,
        pages: 192,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/cemetary-dance.jpg',
        keywords: ['fiction', 'horror', 'short stories']
    },
    {
        title: 'The Most Dangerous Game',
        author: 'Richard Connell',
        myRating: 7,
        pages: 59,
        pubDate: 1924,
        yearRead: [2021],
        thumb: './images/most-dangerous.jpg',
        keywords: ['short stories', 'fiction', 'horror', 'thriller']
    },
    {
        title: 'Celebration of Discipline',
        author: 'Richard J. Foster',
        myRating: 8,
        pages: 256,
        pubDate: 1978,
        yearRead: [2014],
        thumb: './images/celebration-of-disc.jpg',
        keywords: ['christian', 'nonfiction', 'christian living', 'habits']
    },
    {
        title: 'I Am Legend',
        author: 'Richard Matheson',
        myRating: 7,
        pages: 160,
        pubDate: 1954,
        yearRead: [2016],
        thumb: './images/i-am-legend.jpg',
        keywords: ['movies', 'fiction', 'vampires', 'horror', 'apocalyptic']
    },
    {
        title: 'Vampire Academy',
        author: 'Richelle Mead',
        myRating: 9,
        pages: 332,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/vamp-academy1.jpg',
        keywords: ['movies', 'fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'schools', 'female author', 'series']
    },
    {
        title: 'Frostbite',
        author: 'Richelle Mead',
        myRating: 8,
        pages: 327,
        pubDate: 2008,
        yearRead: [2016],
        thumb: './images/vamp-academy2.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author', 'series']
    },
    {
        title: 'Shadow Kiss',
        author: 'Richelle Mead',
        myRating: 8,
        pages: 443,
        pubDate: 2008,
        yearRead: [2016],
        thumb: './images/vamp-academy3.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author', 'series']
    },
    {
        title: 'Blood Promise',
        author: 'Richelle Mead',
        myRating: 8,
        pages: 503,
        pubDate: 2009,
        yearRead: [2016],
        thumb: './images/vamp-academy4.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author', 'series']
    },
    {
        title: 'Spirit Bound',
        author: 'Richelle Mead',
        myRating: 8,
        pages: 489,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/vamp-academy5.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author', 'series']
    },
    {
        title: 'Last Sacrifice',
        author: 'Richelle Mead',
        myRating: 8,
        pages: 594,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/vamp-academy6.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author', 'series']
    },
    {
        title: 'The Final Quest',
        author: 'Rick Joyner',
        myRating: 5,
        pages: 170,
        pubDate: 1996,
        yearRead: [2014],
        thumb: './images/final-quest.jpg',
        keywords: ['fiction', 'christian', 'dreams']
    },
    {
        title: 'The Lightning Thief',
        author: 'Rick Riordan',
        myRating: 7,
        pages: 375,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/percy-jackson1.jpg',
        keywords: ['fiction', 'mythology', 'young adult', 'fantasy', 'adventure', 'movies', 'series']
    },
    {
        title: 'The 5th Wave',
        author: 'Rick Yancey',
        myRating: 6,
        pages: 460,
        pubDate: 2013,
        yearRead: [2015],
        thumb: './images/the-5th-wave.jpg',
        keywords: ['fiction', 'aliens', 'apocalyptic', 'young adult', 'movies', 'romance', 'fantasy', 'series']
    },
    {
        title: 'Slay the Dragon',
        author: 'Robert Denton Bryant',
        myRating: 7,
        pages: 232,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/slay-dragon.jpg',
        keywords: ['nonfiction', 'game design', 'video games', 'writing', 'games']
    },
    {
        title: 'Changing the World Through Discipleship',
        author: 'Robert Herber',
        myRating: 7,
        pages: 111,
        pubDate: 2011,
        yearRead: [2013],
        thumb: './images/discipleship.jpg',
        keywords: ['nonfiction', 'christian', 'christian living', 'evangelism'],
		similar: ['Beyond Awkward']
    },
    {
        title: 'Outcast by Kirkman & Azaceta Book 1',
        author: 'Robert Kirkman',
        myRating: 4,
        pages: 296,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/outcast.jpg',
        keywords: ['fiction', 'graphic novels', 'horror', 'tv', 'series']
    },
    {
        title: 'The Walking Dead, Vol. 1',
        author: 'Robert Kirkman',
        myRating: 6,
        pages: 144,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/walking-dead1.jpg',
        keywords: ['tv', 'graphic novels', 'horror', 'fiction', 'zombies', 'apocalyptic', 'series']
    },
    {
        title: 'Rich Dad, Poor Dad',
        author: 'Robert Kiyosaki',
        myRating: 9,
        pages: 195,
        pubDate: 1997,
        yearRead: [2020],
        thumb: './images/rich-dad-poor-dad.jpg',
        keywords: ['nonfiction', 'personal finance', 'money', 'memoir']
    },
    {
        title: 'Good Luck Have Fun',
        author: 'Roland Li',
        myRating: 6,
        pages: 268,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/good-luck-have-fun.jpg',
        keywords: ['nonfiction', 'sports', 'games', 'video games']
    },
    {
        title: 'The Deadly Dungeon',
        author: 'Ron Roy',
        myRating: 5,
        pages: 86,
        pubDate: 1998,
        yearRead: [2000],
        thumb: './images/deadly-dungeon.jpg',
        keywords: ['fiction', 'children', 'mystery', 'series']
    },
    {
        title: 'The Invisible Island',
        author: 'Ron Roy',
        myRating: 5,
        pages: 96,
        pubDate: 1999,
        yearRead: [2000],
        thumb: './images/invisible-island.jpg',
        keywords: ['fiction', 'children', 'mystery', 'series']
    },
    {
        title: 'The Missing Mummy',
        author: 'Ron Roy',
        myRating: 5,
        pages: 83,
        pubDate: 2001,
        yearRead: [2001],
        thumb: './images/missing-mummy.jpg',
        keywords: ['fiction', 'children', 'mystery', 'series']
    },
    {
        title: 'The Big Book of 30-Day Challenges',
        author: 'Rosanna Casper',
        myRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/book-of-30-day.jpg',
        keywords: ['nonfiction', 'habits', 'self-help', 'female author']
    },
    {
        title: 'Milk and Honey',
        author: 'Rupi Kaur',
        myRating: 5,
        pages: 204,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/milk-and-honey.jpg',
        keywords: ['nonfiction', 'poetry', 'feminism', 'mental health', 'female author'],
		similar: ['Multiple Choice', 'Unprotected Lexicon']
    },
    {
        title: 'Play Dead',
        author: 'Ryan Brown',
        myRating: 6,
        pages: 352,
        pubDate: 2010,
        yearRead: [2010],
        thumb: './images/play-dead.jpg',
        keywords: ['fiction', 'sports', 'zombies', 'football', 'horror', 'humor']
    },
	//#endregion
    /*===========================
    	Author First Name - S's
    ===========================*/
	//#region S
    {
        title: 'The Umbrella Conspiracy',
        author: 'S.D. Perry',
        myRating: 7,
        pages: 304,
        pubDate: 1998,
        yearRead: [2003],
        thumb: './images/resident-evil1.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author', 'series']
    },
    {
        title: 'Caliban Cove',
        author: 'S.D. Perry',
        myRating: 6,
        pages: 256,
        pubDate: 1998,
        yearRead: [2003],
        thumb: './images/resident-evil2.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author', 'series']
    },
    {
        title: 'City of the Dead',
        author: 'S.D. Perry',
        myRating: 7,
        pages: 352,
        pubDate: 1999,
        yearRead: [2003],
        thumb: './images/resident-evil3.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author', 'series']
    },
    {
        title: 'Underworld',
        author: 'S.D. Perry',
        myRating: 6,
        pages: 256,
        pubDate: 1999,
        yearRead: [2004],
        thumb: './images/resident-evil4.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author', 'series']
    },
    {
        title: 'Nemesis',
        author: 'S.D. Perry',
        myRating: 7,
        pages: 288,
        pubDate: 2000,
        yearRead: [2004],
        thumb: './images/resident-evil5.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author', 'series']
    },
    {
        title: 'Rumble Fish',
        author: 'S.E. Hinton',
        myRating: 6,
        pages: 144,
        pubDate: 1975,
        yearRead: [2002],
        thumb: './images/rumble-fish.jpg',
        keywords: ['fiction', 'young adult', 'coming of age', 'female author']
    },
    {
        title: 'Scene but Not Heard',
        author: 'Sam Henderson',
        myRating: 4,
        pages: 119,
        pubDate: 2013,
        yearRead: [2018],
        thumb: './images/scene-not-heard.jpg',
        keywords: ['fiction', 'comics', 'humor']
    },
    {
        title: 'Pretty Little Liars',
        author: 'Sara Shepard',
        myRating: 8,
        pages: 286,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/pretty-little-liars1.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Flawless',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 330,
        pubDate: 2007,
        yearRead: [2018],
        thumb: './images/pretty-little-liars2.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Perfect',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 298,
        pubDate: 2007,
        yearRead: [2020],
        thumb: './images/pretty-little-liars3.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Unbelievable',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 335,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/pretty-little-liars4.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Wicked',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 312,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/pretty-little-liars5.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Killer',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 320,
        pubDate: 2009,
        yearRead: [2020],
        thumb: './images/pretty-little-liars6.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Heartless',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 274,
        pubDate: 2010,
        yearRead: [2020],
        thumb: './images/pretty-little-liars7.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: 'Wanted',
        author: 'Sara Shepard',
        myRating: 7,
        pages: 261,
        pubDate: 2010,
        yearRead: [2020],
        thumb: './images/pretty-little-liars8.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author', 'series']
    },
    {
        title: "Rick and Morty: Lil' Poopy Superstar",
        author: 'Sarah Graley',
        myRating: 7,
        pages: 128,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/rick-morty-poopy.jpg',
        keywords: ['fiction', 'tv', 'comics', 'science fiction', 'graphic novels', 'humor', 'female author', 'series']
    },
    {
        title: 'Level Up!: The Guide to Great Video Game Design',
        author: 'Scott Rogers',
        myRating: 9,
        pages: 492,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/level-up.jpg',
        keywords: ['nonfiction', 'game design', 'video games', 'games', 'reference']
    },
    {
        title: 'Uglies',
        author: 'Scott Westerfeld',
        myRating: 7,
        pages: 425,
        pubDate: 2005,
        yearRead: [2015, 2018],
        thumb: './images/uglies1.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Pretties',
        author: 'Scott Westerfeld',
        myRating: 6,
        pages: 370,
        pubDate: 2005,
        yearRead: [2015],
        thumb: './images/uglies2.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Specials',
        author: 'Scott Westerfeld',
        myRating: 6,
        pages: 372,
        pubDate: 2006,
        yearRead: [2015],
        thumb: './images/uglies3.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Extras',
        author: 'Scott Westerfeld',
        myRating: 6,
        pages: 417,
        pubDate: 2006,
        yearRead: [2015],
        thumb: './images/uglies4.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Uglies: Cutters',
        author: 'Scott Westerfeld',
        myRating: 4,
        pages: 176,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/uglies-graphic2.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'graphic novels', 'weird', 'series']
    },
    {
        title: 'Abraham Lincoln: Vampire Hunter',
        author: 'Seth Grahame-Smith',
        myRating: 6,
        pages: 336,
        pubDate: 2010,
        yearRead: [2013],
        thumb: './images/abe-lincoln-vamp.jpg',
        keywords: ['movies', 'fiction', 'vampires', 'presidents', 'historical', 'alternate history', 'fantasy', 'series']
    },
    {
        title: 'Smartcuts',
        author: 'Shane Snow',
        myRating: 6,
        pages: 272,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/smartcuts.jpg',
        keywords: ['nonfiction', 'business', 'self-help', 'productivity']
    },
    {
        title: 'Kicking It',
        author: 'Shanna Germain',
        myRating: 6,
        pages: 79,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/kicking-it.jpg',
        keywords: ['nonfiction', 'business', 'female author']
    },
    {
        title: 'Where the Sidewalk Ends',
        author: 'Shel Silverstein',
        myRating: 7,
        pages: 176,
        pubDate: 1974,
        yearRead: [2000],
        thumb: './images/where-sidewalk-ends.jpg',
        keywords: ['children', 'fiction', 'poetry', 'humor', 'series']
    },
    {
        title: 'Fallin Up',
        author: 'Shel Silverstein',
        myRating: 7,
        pages: 178,
        pubDate: 1996,
        yearRead: [2000],
        thumb: './images/falling-up.jpg',
        keywords: ['children', 'fiction', 'poetry', 'humor', 'series']
    },
    {
        title: 'A Light in the Attic',
        author: 'Shel Silverstein',
        myRating: 7,
        pages: 176,
        pubDate: 1981,
        yearRead: [2001],
        thumb: './images/light-in-attic.jpg',
        keywords: ['children', 'fiction', 'poetry', 'humor', 'series']
    },
    {
        title: 'The Absolutely True Diary of a Part-Time Indian',
        author: 'Sherman Alexie',
        myRating: 7,
        pages: 230,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/part-time-indian.jpg',
        keywords: ['fiction', 'young adult', 'race', 'humor', 'coming of age']
    },
    {
        title: 'Lean In',
        author: 'Sheryl Sandberg',
        myRating: 7,
        pages: 217,
        pubDate: 2013,
        yearRead: [2017],
        thumb: './images/lean-in.jpg',
        keywords: ['nonfiction', 'business', 'feminism', 'self-help', 'leadership', 'female author']
    },
    {
        title: 'The Montessori Toddler',
        author: 'Simone Davies',
        myRating: 8,
        pages: 245,
        pubDate: 2018,
        yearRead: [2021],
        thumb: './images/montessori.jpg',
        keywords: ['nonfiction', 'parenting', 'female author', 'series']
    },
    {
        title: 'Who Moved My Cheese?',
        author: 'Spencer Johnson',
        myRating: 7,
        pages: 96,
        pubDate: 1998,
        yearRead: [2020],
        thumb: './images/who-moved-cheese.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'business']
    },
    {
        title: 'My True Love Gave to Me',
        author: 'Stephanie Perkins',
        myRating: 6,
        pages: 321,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/my-true-love.jpg',
        keywords: ['christmas', 'short stories', 'fiction', 'young adult', 'romance', 'female author']
    },
    {
        title: "There's Someone Inside Your House",
        author: 'Stephanie Perkins',
        myRating: 7,
        pages: 287,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/someone-inside-house.jpg',
        keywords: ['fiction', 'horror', 'young adult', 'mystery', 'thriller', 'female author']
    },
    {
        title: 'The Perks of Being a Wallflower',
        author: 'Stephen Chbosky',
        myRating: 7,
        pages: 213,
        pubDate: 1999,
        yearRead: [2017],
        thumb: './images/perks-wallflower.jpg',
        keywords: ['movies', 'lgbt', 'fiction', 'young adult', 'coming of age', 'mental health', 'romance']
    },
    {
        title: 'I Am America (And So Can You!)',
        author: 'Stephen Colbert',
        myRating: 7,
        pages: 230,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/i-am-america.jpg',
        keywords: ['nonfiction', 'humor', 'politics', 'series']
    },
    {
        title: 'The Red Badge of Courage',
        author: 'Stephen Crane',
        myRating: 3,
        pages: 170,
        pubDate: 1895,
        yearRead: [2005],
        thumb: './images/red-badge.jpg',
        keywords: ['fiction', 'war', 'historical', 'america']
    },
    {
        title: 'The Green Mile, Part 1',
        author: 'Stephen King',
        myRating: 6,
        pages: 92,
        pubDate: 1996,
        yearRead: [2019],
        thumb: './images/green-mile1.jpg',
        keywords: ['fiction', 'horror', 'thriller', 'crime', 'mystery', 'short stories', 'series']
    },
    {
        title: 'The Gunslinger',
        author: 'Stephen King',
        myRating: 5,
        pages: 231,
        pubDate: 1982,
        yearRead: [2019],
        thumb: './images/gunslinger.jpg',
        keywords: ['fiction', 'fantasy', 'horror', 'western', 'adventure', 'series']
    },
    {
        title: 'Carrie',
        author: 'Stephen King',
        myRating: 6,
        pages: 253,
        pubDate: 1974,
        yearRead: [2018],
        thumb: './images/carrie.jpg',
        keywords: ['fiction', 'horror', 'schools', 'thriller']
    },
    {
        title: 'The Shining',
        author: 'Stephen King',
        myRating: 8,
        pages: 659,
        pubDate: 1977,
        yearRead: [2018],
        thumb: './images/shining.jpg',
        keywords: ['horror', 'fiction', 'ghosts', 'mental health', 'thriller', 'series']
    },
    {
        title: 'Doctor Sleep',
        author: 'Stephen King',
        myRating: 6,
        pages: 531,
        pubDate: 2013,
        yearRead: [2018],
        thumb: './images/dr-sleep.jpg',
        keywords: ['horror', 'fiction', 'ghosts', 'mental health', 'series']
    },
    {
        title: 'Pet Sematary',
        author: 'Stephen King',
        myRating: 7,
        pages: 580,
        pubDate: 1983,
        yearRead: [2018],
        thumb: './images/pet-sem.jpg',
        keywords: ['horror', 'fiction', 'zombies']
    },
    {
        title: 'Misery',
        author: 'Stephen King',
        myRating: 8,
        pages: 310,
        pubDate: 1987,
        yearRead: [2016],
        thumb: './images/misery.jpg',
        keywords: ['horror', 'fiction', 'thriller']
    },
    {
        title: 'On Writing',
        author: 'Stephen King',
        myRating: 9,
        pages: 320,
        pubDate: 2000,
        yearRead: [2015],
        thumb: './images/on-writing.jpg',
        keywords: ['nonfiction', 'memoir', 'writing']
    },
    {
        title: 'It',
        author: 'Stephen King',
        myRating: 7,
        pages: 1116,
        pubDate: 1986,
        yearRead: [2018],
        thumb: './images/it.jpg',
        keywords: ['fiction', 'horror', 'clowns', 'thriller']
    },
    {
        title: 'Twilight',
        author: 'Stephenie Meyer',
        myRating: 8,
        pages: 501,
        pubDate: 2005,
        yearRead: [2009, 2012],
        thumb: './images/twilight1.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author', 'series']
    },
    {
        title: 'New Moon',
        author: 'Stephenie Meyer',
        myRating: 7,
        pages: 565,
        pubDate: 2006,
        yearRead: [2009],
        thumb: './images/twilight2.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author', 'series']
    },
    {
        title: 'Eclipse',
        author: 'Stephenie Meyer',
        myRating: 7,
        pages: 632,
        pubDate: 2007,
        yearRead: [2009],
        thumb: './images/twilight3.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author', 'series']
    },
    {
        title: 'Breaking Dawn',
        author: 'Stephenie Meyer',
        myRating: 7,
        pages: 756,
        pubDate: 2008,
        yearRead: [2009],
        thumb: './images/twilight4.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author', 'series']
    },
    {
        title: 'Midnight Sun',
        author: 'Stephenie Meyer',
        myRating: 7,
        pages: 662,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/twilight5.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author', 'series']
    },
    {
        title: 'Twilight / Life and Death',
        author: 'Stephenie Meyer',
        myRating: 8,
        pages: 738,
        pubDate: 2015,
        yearRead: [2015],
        thumb: './images/twilight-life-death.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author', 'series']
    },
    {
        title: '30 Days of Night, Vol. 1',
        author: 'Steve Niles',
        myRating: 6,
        pages: 104,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/thirty-days-night1.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'graphic novels', 'series']
    },
    {
        title: '30 Days of Night, Vol. 2',
        author: 'Steve Niles',
        myRating: 6,
        pages: 144,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/thirty-days-night2.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'graphic novels', 'series']
    },
    {
        title: '30 Days of Night, Vol. 4',
        author: 'Steve Niles',
        myRating: 6,
        pages: 144,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/thirty-days-night4.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'graphic novels', 'series']
    },
    {
        title: 'The Ultimate History of Video Games',
        author: 'Steven L. Kent',
        myRating: 9,
        pages: 608,
        pubDate: 2001,
        yearRead: [2009, 2011, 2013],
        thumb: './images/ultimate-history-vgs.jpg',
        keywords: ['nonfiction', 'games', 'biography', 'video games', 'series']
    },
    {
        title: 'Think Like a Freak',
        author: 'Steven Levitt',
        myRating: 7,
        pages: 304,
        pubDate: 2014,
        yearRead: [2018, 2020],
        thumb: './images/think-like-freak.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help']
    },
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        myRating: 4,
        pages: 82,
        pubDate: -500,
        yearRead: [2020],
        thumb: './images/art-of-war.jpg',
        keywords: ['nonfiction', 'historical', 'philosophy']
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        myRating: 8,
        pages: 374,
        pubDate: 2008,
        yearRead: [2015],
        thumb: './images/hunger-games1.jpg',
        keywords: ['fiction', 'dystopian', 'romance', 'young adult', 'science fiction', 'female author', 'series']
    },
    {
        title: 'Catching Fire',
        author: 'Suzanne Collins',
        myRating: 7,
        pages: 391,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/hunger-games2.jpg',
        keywords: ['fiction', 'dystopian', 'romance', 'young adult', 'science fiction', 'female author', 'series']
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        myRating: 7,
        pages: 390,
        pubDate: 2010,
        yearRead: [2015],
        thumb: './images/hunger-games3.jpg',
        keywords: ['fiction', 'dystopian', 'romance', 'young adult', 'science fiction', 'female author', 'series']
    },
    {
        title: 'Sleeping Giants',
        author: 'Sylvain Neuvel',
        myRating: 7,
        pages: 320,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/sleeping-giants1.jpg',
        keywords: ['experimental', 'fiction', 'science fiction', 'aliens', 'series']
    },
    {
        title: 'Waking Gods',
        author: 'Sylvain Neuvel',
        myRating: 6,
        pages: 336,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/sleeping-giants2.jpg',
        keywords: ['experimental', 'fiction', 'science fiction', 'aliens', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - T's
    ===========================*/
	//#region T
    {
        title: 'Thr3e',
        author: 'Ted Dekker',
        myRating: 7,
        pages: 423,
        pubDate: 2003,
        yearRead: [2013],
        thumb: './images/thr3e.jpg',
        keywords: ['fiction', 'christian', 'mystery', 'suspense', 'thriller', 'weird', 'movies']
    },
    {
        title: 'Danger in the Desert',
        author: 'Terri Fields',
        myRating: 6,
        pages: 126,
        pubDate: 1997,
        yearRead: [1999],
        thumb: './images/danger-in-desert.jpg',
        keywords: ['fiction', 'survival', 'children', 'female author']
    },
    {
        title: 'Missing in the Mountains',
        author: 'Terri Fields',
        myRating: 6,
        pages: 108,
        pubDate: 1999,
        yearRead: [2000],
        thumb: './images/missing-in-mountains.jpg',
        keywords: ['fiction', 'survival', 'children', 'female author']
    },
    {
        title: 'Getting Started with SQL',
        author: 'Thomas Nield',
        myRating: 6,
        pages: 134,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/getting-started-sql.jpg',
        keywords: ['nonfiction', 'programming', 'technology', 'computers', 'educational']
    },
    {
        title: 'How to Eat Fried Worms',
        author: 'Thomas Rockfield',
        myRating: 6,
        pages: 118,
        pubDate: 1973,
        yearRead: [1999],
        thumb: './images/eat-fried-worms.jpg',
        keywords: ['fiction', 'children', 'humor', 'movies']
    },
    {
        title: 'Left Behind',
        author: 'Tim LaHaye',
        myRating: 6,
        pages: 342,
        pubDate: 1995,
        yearRead: [2014],
        thumb: './images/left-behind1.jpg',
        keywords: ['movies', 'christian', 'fiction', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'Tribulation Force',
        author: 'Tim LaHaye',
        myRating: 5,
        pages: 450,
        pubDate: 1996,
        yearRead: [2014],
        thumb: './images/left-behind2.jpg',
        keywords: ['christian', 'fiction', 'apocalyptic', 'left behind', 'series']
    },
    {
        title: 'The 4-Hour Body',
        author: 'Timothy Ferriss',
        myRating: 5,
        pages: 571,
        pubDate: 2000,
        yearRead: [2020],
        thumb: './images/four-hour-body.jpg',
        keywords: ['nonfiction', 'health', 'fitness', 'self-help', 'series']
    },
    {
        title: 'The 4-Hour Workweek',
        author: 'Timothy Ferriss',
        myRating: 6,
        pages: 396,
        pubDate: 2011,
        yearRead: [2012],
        thumb: './images/four-hour-work.jpg',
        keywords: ['nonfiction', 'productivity', 'business', 'self-help', 'series']
    },
    {
        title: 'The Prodigal God',
        author: 'Timothy J. Keller',
        myRating: 6,
        pages: 155,
        pubDate: 2008,
        yearRead: [2015],
        thumb: './images/prodigal-god.jpg',
        keywords: ['nonfiction', 'christian', 'theology']
    },
    {
        title: 'Bossypants',
        author: 'Tina Fey',
        myRating: 6,
        pages: 277,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/bossypants.jpg',
        keywords: ['nonfiction', 'memoir', 'humor', 'female author']
    },
    {
        title: 'Heaven is for Real',
        author: 'Todd Burpo',
        myRating: 5,
        pages: 162,
        pubDate: 2010,
        yearRead: [2013],
        thumb: './images/heaven-real.jpg',
        keywords: ['nonfiction', 'memoir', 'christian']
    },
    {
        title: 'Fun Inc.',
        author: 'Tom Chatfield',
        myRating: 6,
        pages: 272,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/fun.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'business', 'psychology']
    },
    {
        title: 'Strengths Finder 2.0',
        author: 'Tom Rath',
        myRating: 6,
        pages: 174,
        pubDate: 2007,
        yearRead: [2015],
        thumb: './images/strengths-finder.jpg',
        keywords: ['nonfiction', 'business', 'leadership', 'self-help', 'psychology']
    },
	//#endregion
    /*===========================
    	Author First Name - U's
    ===========================*/
	//#region U
	//#endregion
    /*===========================
    	Author First Name - V's
    ===========================*/
	//#region V
    {
        title: "Anya's Ghost",
        author: 'Vera Brosgol',
        myRating: 5,
        pages: 224,
        pubDate: 2011,
        yearRead: [2017],
        thumb: './images/anyas-ghost.jpg',
        keywords: ['fiction', 'graphic novels', 'young adult', 'ghosts', 'horror', 'female author']
    },
    {
        title: 'Divergent',
        author: 'Veronica Roth',
        myRating: 8,
        pages: 487,
        pubDate: 2011,
        yearRead: [2015],
        thumb: './images/divergent1.jpg',
        keywords: ['movies', 'fiction', 'dystopian', 'young adult', 'romance', 'science fiction', 'adventure', 'female author', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Insurgent',
        author: 'Veronica Roth',
        myRating: 7,
        pages: 525,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/divergent2.jpg',
        keywords: ['movies', 'fiction', 'dystopian', 'young adult', 'romance', 'science fiction', 'adventure', 'female author', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Allegiant',
        author: 'Veronica Roth',
        myRating: 7,
        pages: 526,
        pubDate: 2013,
        yearRead: [2015],
        thumb: './images/divergent3.jpg',
        keywords: ['movies', 'fiction', 'dystopian', 'young adult', 'romance', 'science fiction', 'adventure', 'female author', 'series'],
		similar: ['Matched']
    },
    {
        title: 'Slumdog Millionaire',
        author: 'Vikas Swarup',
        myRating: 8,
        pages: 333,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/slumdog.jpg',
        keywords: ['movies', 'india', 'fiction']
    },
    {
        title: "The Smart Girl's Guide to Privacy",
        author: 'Violet Blue',
        myRating: 6,
        pages: 168,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/smart-girl-privacy.jpg',
        keywords: ['nonfiction', 'self-help', 'technology', 'computers', 'female author']
    },
	//#endregion
    /*===========================
    	Author First Name - W's
    ===========================*/
	//#region W
    {
        title: 'Warner Bros. Studio Tour London',
        author: 'Warner Bros',
        myRating: 6,
        pages: 72,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/warner-bros-studio.jpg',
        keywords: ['harry potter', 'movies', 'reference', 'magic', 'wizards', 'witches', 'nonfiction']
    },
    {
        title: 'Systematic Theology',
        author: 'Wayne Grudem',
        myRating: 7,
        pages: 1264,
        pubDate: 1994,
        yearRead: [2013],
        thumb: './images/systematic-theology.jpg',
        keywords: ['nonfiction', 'christian', 'theology']
    },
    {
        title: 'Things We Think About Games',
        author: 'Will Hindmarch',
        myRating: 6,
        pages: 160,
        pubDate: 2008,
        yearRead: [2019],
        thumb: './images/things-we-think-about-games.jpg',
        keywords: ['nonfiction', 'games', 'game design', 'reference']
    },
    {
        title: 'Lord of the Flies',
        author: 'William Golding',
        myRating: 7,
        pages: 192,
        pubDate: 1954,
        yearRead: [2003, 2005],
        thumb: './images/lord-of-flies.jpg',
        keywords: ['fiction', 'survival', 'young adult', 'movies']
    },
    {
        title: 'Make Your Bed',
        author: 'William McRaven',
        myRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2020],
        thumb: './images/make-your-bed.jpg',
        keywords: ['nonfiction', 'self-help', 'leadership', 'psychology']
    },
    {
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        myRating: 6,
        pages: 368,
        pubDate: 1599,
        yearRead: [2002, 2004],
        thumb: './images/romeo-juliet.jpg',
        keywords: ['fiction', 'play', 'romance']
    },
    {
        title: 'Hamlet',
        author: 'William Shakespeare',
        myRating: 6,
        pages: 289,
        pubDate: 1603,
        yearRead: [2007],
        thumb: './images/hamlet.jpg',
        keywords: ['fiction', 'play']
    },
    {
        title: 'Macbeth',
        author: 'William Shakespeare',
        myRating: 6,
        pages: 249,
        pubDate: 1623,
        yearRead: [2007],
        thumb: './images/macbeth.jpg',
        keywords: ['fiction', 'play']
    },
    {
        title: "A Midsummer Night's Dream",
        author: 'William Shakespeare',
        myRating: 6,
        pages: 240,
        pubDate: 1595,
        yearRead: [2000, 2002],
        thumb: './images/midsummer-nights-dream.jpg',
        keywords: ['fiction', 'play', 'romance', 'humor']
    },
    {
        title: 'Ghosts of Saltmarsh',
        author: 'Wizards RPG Team',
        myRating: 8,
        pages: 256,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/ghosts-saltmarsh.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy', 'series']
    },
    {
        title: 'Tales from the Yawning Portal',
        author: 'Wizards RPG Team',
        myRating: 8,
        pages: 248,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/tales-yawning.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy', 'series']
    },
	//#endregion W
    /*===========================
    	Author First Name - X's
    ===========================*/
	//#region X
	//#endregion X
    /*===========================
    	Author First Name - Y's
    ===========================*/
	//#region Y
    {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        myRating: 7,
        pages: 498,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/sapiens.jpg',
        keywords: ['nonfiction', 'science', 'historical', 'anthropology', 'philosophy', 'series']
    },
    {
        title: 'The Willow Files, Vol. 2',
        author: 'Yvonne Navarro',
        myRating: 5,
        pages: 210,
        pubDate: 2001,
        yearRead: [2019],
        thumb: './images/willow-files2.jpg',
        keywords: ['tv', 'fiction', 'horror', 'vampires', 'magic', 'fantasy', 'witches', 'female author', 'series']
    },
	//#endregion
    /*===========================
    	Author First Name - Z's
    ===========================*/
	//#region Z
    {
        title: 'Rick and Morty, Vol. 1',
        author: 'Zac Gorman',
        myRating: 7,
        pages: 128,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/rick-morty.jpg',
        keywords: ['graphic novels', 'humor', 'comics', 'science fiction', 'tv', 'series']
    }
	//#endregion Z
];