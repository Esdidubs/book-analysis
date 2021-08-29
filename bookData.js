let bookData = [
    /*===========================
    	Author First Name - A's
    ===========================*/
    {
        title: 'Hocus Pocus & The All New Sequel',
        author: 'A.W. Jantha',
        myWeightedRating: 6,
        pages: 521,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/hocus-pocus.jpg',
        keywords: ['magic', 'fiction', 'lgbt', 'witches', 'young adult', 'fantasy', 'halloween', 'movies', 'female author']
    }, {
        title: 'Irresistible',
        author: 'Adam Alter',
        myWeightedRating: 7,
        pages: 368,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/irresistible.jpg',
        keywords: ['nonfiction', 'technology', 'self-help', 'psychology']
    },
    {
        title: 'Multiple Choice',
        author: 'Alejandro Zambra',
        myWeightedRating: 4,
        pages: 128,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/multiple-choice.jpg',
        keywords: ['fiction', 'poetry', 'experimental']
    },
    {
        title: 'One Day in the Life of Ivan Denisovich',
        author: 'Aleksandr Solzhenitsyn',
        myWeightedRating: 6,
        pages: 182,
        pubDate: 1962,
        yearRead: [2006],
        thumb: './images/one-day.jpg',
        keywords: ['fiction', 'russia', 'historical']
    },
    {
        title: 'Unprotected Lexicon',
        author: 'Alexa Chrisbacher',
        myWeightedRating: 6,
        pages: 110,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/lexicon.jpg',
        keywords: ['poetry', 'lgbt', 'roller derby', 'sports', 'fiction', 'female author']
    },
    {
        title: 'Learning Chinese Characters',
        author: 'Alison Matthews',
        myWeightedRating: 7,
        pages: 384,
        pubDate: 2007,
        yearRead: [2013],
        thumb: './images/chinese-characters.jpg',
        keywords: ['nonfiction', 'educational', 'language', 'chinese', 'china', 'female author']
    },
    {
        title: 'Matched',
        author: 'Ally Condie',
        myWeightedRating: 5,
        pages: 369,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/matched.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'dystopian', 'fantasy', 'female author']
    },
    {
        title: 'Crossed',
        author: 'Ally Condie',
        myWeightedRating: 5,
        pages: 367,
        pubDate: 2011,
        yearRead: [2016],
        thumb: './images/crossed.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'dystopian', 'fantasy', 'female author']
    },
    {
        title: 'Reached',
        author: 'Ally Condie',
        myWeightedRating: 5,
        pages: 512,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/reached.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'dystopian', 'fantasy', 'female author']
    },
    {
        title: 'Scary Stories to Tell in the Dark',
        author: 'Alvin Schwartz',
        myWeightedRating: 6,
        pages: 111,
        pubDate: 1981,
        yearRead: [1999],
        thumb: './images/scary-stories1.jpg',
        keywords: ['fiction', 'children', 'horror', 'short stories', 'halloween', 'movies']
    },
    {
        title: 'More Scary Stories to Tell in the Dark',
        author: 'Alvin Schwartz',
        myWeightedRating: 6,
        pages: 100,
        pubDate: 1984,
        yearRead: [1999],
        thumb: './images/scary-stories2.jpg',
        keywords: ['fiction', 'children', 'horror', 'short stories', 'halloween']
    },
    {
        title: 'More Tales to Chill Your Bones',
        author: 'Alvin Schwartz',
        myWeightedRating: 6,
        pages: 128,
        pubDate: 1991,
        yearRead: [2000],
        thumb: './images/scary-stories3.jpg',
        keywords: ['fiction', 'children', 'horror', 'short stories', 'halloween']
    },
    {
        title: 'Humility',
        author: 'Andrew Murray',
        myWeightedRating: 6,
        pages: 112,
        pubDate: 1895,
        yearRead: [2014],
        thumb: './images/humility.jpg',
        keywords: ['nonfiction', 'religion', 'christian', 'christian living']
    },
    {
        title: 'The Office',
        author: 'Andy Greene',
        myWeightedRating: 8,
        pages: 464,
        pubDate: 2020,
        yearRead: [2021],
        thumb: './images/office.jpg',
        keywords: ['nonfiction', 'tv', 'pop culture', 'biography']
    },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        myWeightedRating: 8,
        pages: 435,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/martian.jpg',
        keywords: ['fiction', 'science fiction', 'adventure', 'space', 'mars', 'movies']
    },
    {
        title: 'Artemis',
        author: 'Andy Weir',
        myWeightedRating: 7,
        pages: 305,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/artemis.jpg',
        keywords: ['fiction', 'science fiction', 'adventure', 'space', 'moon']
    },
    {
        title: 'Grit',
        author: 'Angela Duckworth',
        myWeightedRating: 6,
        pages: 277,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/grit.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'leadership', 'female author']
    },
    {
        title: 'The History and Uncertain Future of Handwriting',
        author: 'Anne Trubek',
        myWeightedRating: 6,
        pages: 192,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/handwriting.jpg',
        keywords: ['nonfiction', 'writing', 'historical', 'handwriting', 'female author']
    },
    {
        title: 'Unshakeable',
        author: 'Anthony Robbins',
        myWeightedRating: 7,
        pages: 257,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/unshakeable.jpg',
        keywords: ['nonfiction', 'personal finance', 'self-help', 'money']
    },
    {
        title: 'How Much is Enough?',
        author: 'Arthur Simon',
        myWeightedRating: 7,
        pages: 192,
        pubDate: 2003,
        yearRead: [2015],
        thumb: './images/how-much.jpg',
        keywords: ['nonfiction', 'christian living', 'christian', 'money']
    },
    {
        title: 'Nothing But the Truth',
        author: 'Avi',
        myWeightedRating: 4,
        pages: 177,
        pubDate: 1991,
        yearRead: [2003],
        thumb: './images/nothing-but-truth.jpg',
        keywords: ['fiction', 'young adult', 'legal', 'patriotic']
    },
    /*===========================
    	Author First Name - B's
    ===========================*/
    {
        title: 'Go Ask Alice',
        author: 'Beatrice Sparks',
        myWeightedRating: 5,
        pages: 213,
        pubDate: 1971,
        yearRead: [],
        thumb: './images/alice.jpg',
        keywords: ['fiction', 'mental health', 'young adult', 'drugs', 'coming of age', 'female author']
    },
    {
        title: 'Beyond Awkward',
        author: 'Beau Crosetto',
        myWeightedRating: 7,
        pages: 206,
        pubDate: 2014,
        yearRead: [2015],
        thumb: './images/awkward.jpg',
        keywords: ['nonfiction', 'christian', 'evangelism']
    },
    {
        title: "What If It's Us",
        author: 'Becky Albertalli',
        myWeightedRating: 6,
        pages: 448,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/what-if-its-us.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'female author']
    },
    {
        title: 'The Upside of Unrequited',
        author: 'Becky Albertalli',
        myWeightedRating: 7,
        pages: 336,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/upside.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'female author']
    },
    {
        title: 'Simon vs. the Homo Sapiens Agenda',
        author: 'Becky Albertalli',
        myWeightedRating: 7,
        pages: 303,
        pubDate: 2015,
        yearRead: [2017, 2018],
        thumb: './images/simon.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'coming of age', 'movies', 'female author']
    },
    {
        title: 'Leah on the Offbeat',
        author: 'Becky Albertalli',
        myWeightedRating: 6,
        pages: 352,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/leah.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'female author']
    },
    {
        title: 'Love, Creekwood',
        author: 'Becky Albertalli',
        myWeightedRating: 5,
        pages: 128,
        pubDate: 2020,
        yearRead: [2021],
        thumb: './images/love-creekwood.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'experimental', 'female author']
    },
    {
        title: '101 Video Games to Play Before You Grow Up',
        author: 'Ben Bertoli',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/games-before-grow.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'reference']
    },
    {
        title: 'Math with Bad Drawings',
        author: 'Ben Orlin',
        myWeightedRating: 9,
        pages: 376,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/math-bad-drawings.jpg',
        keywords: ['nonfiction', 'humor', 'mathematics', 'educational']
    },
    {
        title: 'Aristotle and Dante Discover the Secrets of the Universe',
        author: 'Benjamin Alire Sáenz',
        myWeightedRating: 7,
        pages: 359,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/aristotle-dante.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult', 'coming of age']
    },
    {
        title: 'Fluent in 3 Months',
        author: 'Benny Lewis',
        myWeightedRating: 7,
        pages: 249,
        pubDate: 2014,
        yearRead: [2015],
        thumb: './images/fluent-in-3.jpg',
        keywords: ['nonfiction', 'educational', 'language']
    },
    {
        title: 'The Mouse and the Motorcycle',
        author: 'Beverly Cleary',
        myWeightedRating: 6,
        pages: 186,
        pubDate: 1965,
        yearRead: [2000],
        thumb: './images/mouse-motorcycle.jpg',
        keywords: ['fiction', 'animals', 'children', 'fantasy', 'female author']
    },
    {
        title: 'Courageous Leadership',
        author: 'Bill Hybels',
        myWeightedRating: 5,
        pages: 275,
        pubDate: 2002,
        yearRead: [2014],
        thumb: './images/courageous-leadership.jpg',
        keywords: ['nonfiction', 'christian', 'leadership']
    },
    {
        title: 'When Heaven Invades Earth',
        author: 'Bill Johnson',
        myWeightedRating: 5,
        pages: 190,
        pubDate: 2005,
        yearRead: [2012, 2014],
        thumb: './images/heaven-invades.jpg',
        keywords: ['nonfiction', 'christian', 'miracles', 'faith']
    },
    {
        title: 'Openly Straight',
        author: 'Bill Konigsberg',
        myWeightedRating: 4,
        pages: 320,
        pubDate: 2013,
        yearRead: [2017],
        thumb: './images/openly-straight.jpg',
        keywords: ['fiction', 'lgbt', 'romance', 'young adult']
    },
    {
        title: 'Who Is the Greatest: Elvis or the Beatles?',
        author: 'Bill Slater',
        myWeightedRating: 5,
        pages: 223,
        pubDate: 2007,
        yearRead: [2009],
        thumb: './images/elvis-beatles.jpg',
        keywords: ['nonfiction', 'biography', 'music']
    },
    {
        title: 'Console Wars',
        author: 'Blake Harris',
        myWeightedRating: 8,
        pages: 576,
        pubDate: 2014,
        yearRead: [2021],
        thumb: './images/console-wars.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games', 'tv']
    },
    {
        title: "Fail Until You Don't",
        author: 'Bobby Bones',
        myWeightedRating: 5,
        pages: 224,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/fail-until.jpg',
        keywords: ['nonfiction', 'memoir', 'self-help']
    },
    {
        title: "Tetris: The Games People Play",
        author: 'Box Brown',
        myWeightedRating: 6,
        pages: 253,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/tetris-games.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'graphic novels', 'biography']
    },
    {
        title: 'Elantris',
        author: 'Brandon Sanderson',
        myWeightedRating: 9,
        pages: 638,
        pubDate: 2006,
        yearRead: [2020],
        thumb: './images/elantris.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere']
    },
    {
        title: 'The Hope of Elantris',
        author: 'Brandon Sanderson',
        myWeightedRating: 8,
        pages: 25,
        pubDate: 2006,
        yearRead: [2020],
        thumb: './images/hope-elantris.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'short stories']
    },
    {
        title: "The Emperor's Soul",
        author: 'Brandon Sanderson',
        myWeightedRating: 10,
        pages: 175,
        pubDate: 2012,
        yearRead: [2020, 2021],
        thumb: './images/emperors-soul.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'short stories']
    },
    {
        title: 'Warbreaker',
        author: 'Brandon Sanderson',
        myWeightedRating: 10,
        pages: 688,
        pubDate: 2009,
        yearRead: [2020],
        thumb: './images/warbreaker.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere']
    },
    {
        title: 'The Final Empire',
        author: 'Brandon Sanderson',
        myWeightedRating: 10,
        pages: 541,
        pubDate: 2006,
        yearRead: [2019],
        thumb: './images/final-empire.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere']
    },
    {
        title: 'The Well of Ascension',
        author: 'Brandon Sanderson',
        myWeightedRating: 9,
        pages: 590,
        pubDate: 2007,
        yearRead: [2020],
        thumb: './images/well-ascension.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere']
    },
    {
        title: 'The Hero of Ages',
        author: 'Brandon Sanderson',
        myWeightedRating: 9,
        pages: 572,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/hero-ages.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere']
    },
    {
        title: 'The Eleventh Metal',
        author: 'Brandon Sanderson',
        myWeightedRating: 8,
        pages: 21,
        pubDate: 2012,
        yearRead: [2020],
        thumb: './images/eleventh-metal.jpg',
        keywords: ['fiction', 'high fantasy', 'magic', 'fantasy', 'cosmere', 'short stories']
    },
    {
        title: 'Steelheart',
        author: 'Brandon Sanderson',
        myWeightedRating: 9,
        pages: 386,
        pubDate: 2013,
        yearRead: [2020],
        thumb: './images/steelheart.jpg',
        keywords: ['fiction', 'fantasy', 'superheroes', 'young adult', 'dystopian']
    },
    {
        title: 'High Performance Habits',
        author: 'Brendon Burchard',
        myWeightedRating: 7,
        pages: 393,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/high-performance.jpg',
        keywords: ['nonfiction', 'self-help', 'habits']
    },
    {
        title: 'The Rising',
        author: 'Brian Keene',
        myWeightedRating: 6,
        pages: 321,
        pubDate: 2003,
        yearRead: [2018],
        thumb: './images/rising.jpg',
        keywords: ['fiction', 'zombies', 'horror', 'apocalyptic']
    },
    {
        title: 'Guardians of the Galaxy, Volume 1',
        author: 'Brian Michael Bendis',
        myWeightedRating: 6,
        pages: 136,
        pubDate: 2013,
        yearRead: [2016],
        thumb: './images/guardians1.jpg',
        keywords: ['fiction', 'comics', 'graphic novels', 'superheroes', 'marvel', 'space']
    },
    {
        title: 'Guardians of the Galaxy, Volume 2',
        author: 'Brian Michael Bendis',
        myWeightedRating: 6,
        pages: 168,
        pubDate: 2014,
        yearRead: [2016],
        thumb: './images/guardians2.jpg',
        keywords: ['fiction', 'comics', 'graphic novels', 'superheroes', 'marvel', 'space']
    },
    {
        title: 'Guardians of the Galaxy/All-New X-Men',
        author: 'Brian Michael Bendis',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2014,
        yearRead: [2016],
        thumb: './images/guardians-xmen.jpg',
        keywords: ['fiction', 'comics', 'graphic novels', 'superheroes', 'marvel', 'space']
    },
    {
        title: 'Eat That Frog!',
        author: 'Brian Tracy',
        myWeightedRating: 6,
        pages: 128,
        pubDate: 2001,
        yearRead: [2018],
        thumb: './images/eat-frog.jpg',
        keywords: ['nonfiction', 'self-help', 'habits', 'procrastination', 'productivity']
    },
    {
        title: 'God Is in the Small Stuff',
        author: 'Bruce Bickel',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 1998,
        yearRead: [2017],
        thumb: './images/god-in-small-stuff.jpg',
        keywords: ['christian', 'nonfiction', 'faith']
    },
    {
        title: 'My Teacher is an Alien',
        author: 'Bruce Coville',
        myWeightedRating: 6,
        pages: 124,
        pubDate: 1989,
        yearRead: [2001],
        thumb: './images/teacher-is-alien.jpg',
        keywords: ['fiction', 'children', 'aliens', 'science fiction']
    },
    {
        title: 'My Teacher Glows in the Dark',
        author: 'Bruce Coville',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1991,
        yearRead: [2001],
        thumb: './images/teacher-is-alien3.jpg',
        keywords: ['fiction', 'children', 'aliens', 'science fiction']
    },
    {
        title: 'Scott Pilgrim, Volume 1',
        author: "Bryan Lee O'Malley",
        myWeightedRating: 7,
        pages: 168,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/scott-pilgrim1.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies']
    },
    {
        title: 'Scott Pilgrim, Volume 2',
        author: "Bryan Lee O'Malley",
        myWeightedRating: 7,
        pages: 200,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/scott-pilgrim2.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies']
    },
    {
        title: 'Scott Pilgrim, Volume 3',
        author: "Bryan Lee O'Malley",
        myWeightedRating: 7,
        pages: 192,
        pubDate: 2006,
        yearRead: [2016],
        thumb: './images/scott-pilgrim3.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies']
    },
    {
        title: 'Scott Pilgrim, Volume 4',
        author: "Bryan Lee O'Malley",
        myWeightedRating: 7,
        pages: 205,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/scott-pilgrim4.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies']
    },
    {
        title: 'Scott Pilgrim, Vol. 5',
        author: "Bryan Lee O'Malley",
        myWeightedRating: 7,
        pages: 178,
        pubDate: 2009,
        yearRead: [2016],
        thumb: './images/scott-pilgrim5.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies']
    },
    {
        title: 'Scott Pilgrim, Vol. 6',
        author: "Bryan Lee O'Malley",
        myWeightedRating: 7,
        pages: 245,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/scott-pilgrim6.jpg',
        keywords: ['fiction', 'young adult', 'graphic novels', 'humor', 'movies']
    },
    /*===========================
    	Author First Name - C's
    ===========================*/
    {
        title: "The Magician's Nephew",
        author: 'C.S. Lewis',
        myWeightedRating: 5,
        pages: 221,
        pubDate: 1955,
        yearRead: [2010, 2014],
        thumb: './images/magician-nephew.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'children', 'christian', 'adventure']
    },
    {
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        myWeightedRating: 6,
        pages: 206,
        pubDate: 1950,
        yearRead: [2012, 2017],
        thumb: './images/lion-witch-wardrobe.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'children', 'christian', 'adventure', 'movies']
    },
    {
        title: 'The Screwtape Letters',
        author: 'C.S. Lewis',
        myWeightedRating: 8,
        pages: 209,
        pubDate: 1942,
        yearRead: [2013],
        thumb: './images/screwtape-letters.jpg',
        keywords: ['christian', 'fiction', 'fantasy', 'experimental']
    },
    {
        title: 'The Year of Less',
        author: 'Cait Flanders',
        myWeightedRating: 3,
        pages: 189,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/year-of-less.jpg',
        keywords: ['nonfiction', 'memoir', 'female author']
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
        myWeightedRating: 7,
        pages: 296,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/deep-work.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'business']
    },
    {
        title: 'Digital Minimalism',
        author: 'Cal Newport',
        myWeightedRating: 7,
        pages: 286,
        pubDate: 2019,
        yearRead: [2019, 2021],
        thumb: './images/digital-minimalism.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'technology', 'minimalism']
    },
    {
        title: "So Good They Can't Ignore You",
        author: 'Cal Newport',
        myWeightedRating: 6,
        pages: 288,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/cant-ignore-you.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'business']
    },
    {
        title: "A World Without Email",
        author: 'Cal Newport',
        myWeightedRating: 4,
        pages: 320,
        pubDate: 2021,
        yearRead: [2021],
        thumb: './images/without-email.jpg',
        keywords: ['nonfiction', 'productivity', 'self-help', 'psychology', 'business', 'technology']
    },
    {
        title: 'Seven Brief Lessons on Physics',
        author: 'Carlo Rovelli',
        myWeightedRating: 6,
        pages: 81,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/seven-lessons.jpg',
        keywords: ['nonfiction', 'science', 'physics', 'educational']
    },
    {
        title: 'Dead Until Dark',
        author: 'Charlaine Harris',
        myWeightedRating: 7,
        pages: 292,
        pubDate: 2001,
        yearRead: [2015],
        thumb: './images/dead-until-dark.jpg',
        keywords: ['fiction', 'vampires', 'romance', 'fantasy', 'mystery', 'tv', 'female author']
    },
    {
        title: 'Python for Everybody',
        author: 'Charles Severance',
        myWeightedRating: 6,
        pages: 246,
        pubDate: 2016,
        yearRead: [2020],
        thumb: './images/py4e.jpg',
        keywords: ['nonfiction', 'educational', 'programming', 'technology', 'computers']
    },
    {
        title: 'Naked Statistics',
        author: 'Charles Wheelan',
        myWeightedRating: 7,
        pages: 282,
        pubDate: 2012,
        yearRead: [2020],
        thumb: './images/naked-statistics.jpg',
        keywords: ['nonfiction', 'educational', 'statistics', 'data']
    },
    {
        title: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        myWeightedRating: 7,
        pages: 32,
        pubDate: 1892,
        yearRead: [2007, 2018],
        thumb: './images/yellow-wallpaper.jpg',
        keywords: ['fiction', 'horror', 'short stories', 'mental health', 'gothic', 'unreliable narrator', 'female author']
    },
    {
        title: 'We Should All Be Feminists',
        author: 'Chimamanda Ngozi Adichie',
        myWeightedRating: 7,
        pages: 52,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/should-be-feminist.jpg',
        keywords: ['nonfiction', 'feminism', 'social justice', 'essays', 'female author']
    },
    {
        title: 'Dear Ijeawele',
        author: 'Chimamanda Ngozi Adichie',
        myWeightedRating: 6,
        pages: 63,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/ijeawele.jpg',
        keywords: ['nonfiction', 'feminism', 'essays', 'female author']
    },
    {
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        myWeightedRating: 7,
        pages: 209,
        pubDate: 1958,
        yearRead: [2007],
        thumb: './images/things-fall-apart.jpg',
        keywords: ['fiction', 'africa', 'historical']
    },
    {
        title: 'Struck By Lightning',
        author: 'Chris Colfer',
        myWeightedRating: 6,
        pages: 272,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/struck-by-lightning.jpg',
        keywords: ['young adult', 'lgbt', 'humor', 'fiction', 'coming of age', 'movies']
    },
    {
        title: 'The Nerdist Way',
        author: 'Chris Hardwick',
        myWeightedRating: 7,
        pages: 279,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/nerdist-way.jpg',
        keywords: ['nonfiction', 'self-help', 'humor']
    },
    {
        title: 'Retire Inspired',
        author: 'Chris Hogan',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/retire-inspired.jpg',
        keywords: ['nonfiction', 'money', 'personal finance']
    },
    {
        title: "The Gamer's Bucket List",
        author: 'Chris Watters',
        myWeightedRating: 6,
        pages: 139,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/gamer-bucket.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'reference']
    },
    {
        title: 'Maze',
        author: 'Christopher Manson',
        myWeightedRating: 6,
        pages: 96,
        pubDate: 1985,
        yearRead: [2021],
        thumb: './images/maze.jpg',
        keywords: ['puzzles', 'mazes', 'fiction', 'art', 'experimental']
    },
    {
        title: 'A Dirty Job',
        author: 'Christopher Moore',
        myWeightedRating: 6,
        pages: 387,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/dirty-job.jpg',
        keywords: ['fiction', 'humor', 'fantasy', 'death']
    },
    {
        title: 'Fight Club',
        author: 'Chuck Palahniuk',
        myWeightedRating: 9,
        pages: 218,
        pubDate: 1996,
        yearRead: [2015],
        thumb: './images/fight-club.jpg',
        keywords: ['fiction', 'movies', 'thriller', 'satire', 'weird', 'unreliable narrator']
    },
    {
        title: 'Fight Club 2',
        author: 'Chuck Palahniuk',
        myWeightedRating: 4,
        pages: 256,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/fight-club2.jpg',
        keywords: ['graphic novels', 'fiction', 'weird', 'humor', 'thriller']
    },
    {
        title: 'Choke',
        author: 'Chuck Palahniuk',
        myWeightedRating: 5,
        pages: 293,
        pubDate: 2001,
        yearRead: [2015],
        thumb: './images/choke.jpg',
        keywords: ['fiction', 'dark', 'weird', 'humor']
    },
    {
        title: 'Science Hacks',
        author: 'Colin Barras',
        myWeightedRating: 5,
        pages: 208,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/science-hacks.jpg',
        keywords: ['nonfiction', 'science', 'educational']
    },
    {
        title: 'Project 333',
        author: 'Courtney Carver',
        myWeightedRating: 6,
        pages: 224,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/project333.jpg',
        keywords: ['nonfiction', 'self-help', 'minimalism', 'female author']
    },
    {
        title: 'Night of the Living Deadpool',
        author: 'Cullen Bunn',
        myWeightedRating: 6,
        pages: 96,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/night-of-deadpool.jpg',
        keywords: ['comics', 'graphic novels', 'marvel', 'zombies', 'fiction', 'superheroes']
    },
    {
        title: 'Return of the Living Deadpool',
        author: 'Cullen Bunn',
        myWeightedRating: 6,
        pages: 112,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/return-of-deadpool.jpg',
        keywords: ['comics', 'graphic novels', 'marvel', 'zombies', 'fiction', 'superheroes']
    },
    /*===========================
    	Author First Name - D's
    ===========================*/
    {
        title: 'The God Who Is There',
        author: 'D.A. Carson',
        myWeightedRating: 5,
        pages: 232,
        pubDate: 2010,
        yearRead: [2015],
        thumb: './images/god-who-is-there.jpg',
        keywords: ['nonfiction', 'christian', 'faith', 'theology']
    },
    {
        title: 'Angels & Demons',
        author: 'Dan Brown',
        myWeightedRating: 8,
        pages: 496,
        pubDate: 2000,
        yearRead: [2015],
        thumb: './images/angels-and-demons.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'movies']
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        myWeightedRating: 8,
        pages: 489,
        pubDate: 2003,
        yearRead: [2015],
        thumb: './images/da-vinci-code.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'movies']
    },
    {
        title: 'The Lost Symbol',
        author: 'Dan Brown',
        myWeightedRating: 7,
        pages: 670,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/lost-symbol.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical']
    },
    {
        title: 'Inferno',
        author: 'Dan Brown',
        myWeightedRating: 7,
        pages: 463,
        pubDate: 2013,
        yearRead: [2016],
        thumb: './images/inferno.jpg',
        keywords: ['fiction', 'mystery', 'thriller', 'crime', 'historical', 'movies']
    },
    {
        title: 'The Kid Who Ran for President',
        author: 'Dan Gutman',
        myWeightedRating: 6,
        pages: 156,
        pubDate: 1996,
        yearRead: [1999],
        thumb: './images/kid-president.jpg',
        keywords: ['fiction', 'children', 'humor', 'politics', 'presidents']
    },
    {
        title: 'The Little Book of Talent',
        author: 'Daniel Coyle',
        myWeightedRating: 7,
        pages: 160,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/little-book-talent.jpg',
        keywords: ['nonfiction', 'self-help', 'psychology', 'productivity']
    },
    {
        title: 'Minecraft',
        author: 'Daniel Goldberg',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/minecraft.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games']
    },
    {
        title: 'Drive',
        author: 'Daniel H. Pink',
        myWeightedRating: 7,
        pages: 242,
        pubDate: 2009,
        yearRead: [2019],
        thumb: './images/drive.jpg',
        keywords: ['nonfiction', 'business', 'psychology', 'self-help']
    },
    {
        title: 'Flowers for Algernon',
        author: 'Daniel Keyes',
        myWeightedRating: 6,
        pages: 311,
        pubDate: 1966,
        yearRead: [2002],
        thumb: './images/algernon.jpg',
        keywords: ['fiction', 'young adult', 'science fiction', 'experimental', 'movies', 'unreliable narrator']
    },
    {
        title: 'World of Warcraft',
        author: 'Daniel Lisi',
        myWeightedRating: 7,
        pages: 128,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/wow.jpg',
        keywords: ['biography', 'boss fight books', 'nonfiction', 'games', 'video games']
    },
    {
        title: 'The Inferno',
        author: 'Dante Alighieri',
        myWeightedRating: 7,
        pages: 302,
        pubDate: 1320,
        yearRead: [2008],
        thumb: './images/the-inferno.jpg',
        keywords: ['fiction', 'poetry', 'religion', 'hell', 'fantasy']
    },
    {
        title: 'The Adventures of Captain Underpants',
        author: 'Dav Pilkey',
        myWeightedRating: 6,
        pages: 125,
        pubDate: 2000,
        yearRead: [2000],
        thumb: './images/captain-underpants.jpg',
        keywords: ['fiction', 'children', 'superheroes', 'humor', 'comics', 'graphic novels']
    },
    {
        title: 'The Circle',
        author: 'Dave Eggers',
        myWeightedRating: 6,
        pages: 493,
        pubDate: 2013,
        yearRead: [2019],
        thumb: './images/circle.jpg',
        keywords: ['fiction', 'science fiction', 'dystopian', 'technology', 'movies']
    },
    {
        title: 'The Money Answer Book',
        author: 'Dave Ramsey',
        myWeightedRating: 7,
        pages: 160,
        pubDate: 2005,
        yearRead: [2012, 2018, 2020],
        thumb: './images/money-answer.jpg',
        keywords: ['nonfiction', 'personal finance', 'money']
    },
    {
        title: 'The Total Money Makeover',
        author: 'Dave Ramsey',
        myWeightedRating: 7,
        pages: 229,
        pubDate: 2003,
        yearRead: [2018],
        thumb: './images/tmm.jpg',
        keywords: ['nonfiction', 'personal finance', 'money']
    },
    {
        title: "Dave Ramsey's Complete Guide to Money",
        author: 'Dave Ramsey',
        myWeightedRating: 7,
        pages: 330,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/guide-to-money.jpg',
        keywords: ['nonfiction', 'personal finance', 'money']
    },
    {
        title: 'The Caretaker of Lorne Field',
        author: 'Dave Zeltserman',
        myWeightedRating: 8,
        pages: 237,
        pubDate: 2010,
        yearRead: [2018],
        thumb: './images/lorne.jpg',
        keywords: ['fiction', 'horror', 'weird', 'farming', 'unreliable narrator']
    },
    {
        title: 'The Soccer Book',
        author: 'David Goldblatt',
        myWeightedRating: 7,
        pages: 400,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/soccer.jpg',
        keywords: ['nonfiction', 'reference', 'sports', 'soccer', 'educational']
    },
    {
        title: 'Jacked',
        author: 'David Kushner',
        myWeightedRating: 7,
        pages: 304,
        pubDate: 2012,
        yearRead: [2021],
        thumb: './images/jacked.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games']
    },
    {
        title: 'Rise of the Dungeon Master',
        author: 'David Kushner',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/rise-of-dm.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'dnd', 'graphic novels', 'tabletop games']
    },
    {
        title: 'Every Day',
        author: 'David Levithan',
        myWeightedRating: 8,
        pages: 322,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/every-day.jpg',
        keywords: ['fiction', 'fantasy', 'lgbt', 'young adult', 'romance', 'weird', 'movies']
    },
    {
        title: 'Another Day',
        author: 'David Levithan',
        myWeightedRating: 7,
        pages: 327,
        pubDate: 2015,
        yearRead: [2016],
        thumb: './images/another-day.jpg',
        keywords: ['fiction', 'fantasy', 'lgbt', 'young adult', 'romance', 'weird']
    },
    {
        title: 'Slade House',
        author: 'David Mitchell',
        myWeightedRating: 7,
        pages: 238,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/slade-house.jpg',
        keywords: ['fiction', 'horror', 'halloween', 'ghosts', 'experimental']
    },
    {
        title: 'Radical',
        author: 'David Platt',
        myWeightedRating: 9,
        pages: 230,
        pubDate: 2010,
        yearRead: [2013],
        thumb: './images/radical.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'Follow Me',
        author: 'David Platt',
        myWeightedRating: 8,
        pages: 245,
        pubDate: 2013,
        yearRead: [2013],
        thumb: './images/follow-me.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'The Revenge of Analog',
        author: 'David Sax',
        myWeightedRating: 8,
        pages: 304,
        pubDate: 2016,
        yearRead: [2019, 2021],
        thumb: './images/analog.jpg',
        keywords: ['nonfiction', 'technology']
    },
    {
        title: 'Whispers',
        author: 'Dean Koontz',
        myWeightedRating: 8,
        pages: 464,
        pubDate: 2006,
        yearRead: [2006],
        thumb: './images/whispers.jpg',
        keywords: ['fiction', 'horror', 'thriller', 'mystery', 'weird']
    },
    {
        title: "Santa Claus Doesn't Mop Floors",
        author: 'Debbie Dadey',
        myWeightedRating: 6,
        pages: 80,
        pubDate: 1991,
        yearRead: [2018],
        thumb: './images/santa.jpg',
        keywords: ['fiction', 'bailey school kids', 'children', 'fantasy', 'mystery', 'christmas', 'schools', 'female author']
    },
    {
        title: "Werewolves Don't Go to Summer Camp",
        author: 'Debbie Dadey',
        myWeightedRating: 6,
        pages: 96,
        pubDate: 1991,
        yearRead: [2018],
        thumb: './images/werewolves.jpg',
        keywords: ['fiction', 'bailey school kids', 'children', 'fantasy', 'mystery', 'werewolves', 'camps', 'female author']
    },
    {
        title: 'A Discovery of Witches',
        author: 'Deborah Harkness',
        myWeightedRating: 7,
        pages: 579,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/discovery-witches.jpg',
        keywords: ['fiction', 'witches', 'romance', 'schools', 'vampires', 'magic', 'tv', 'female author']
    },
    {
        title: 'Spelunky',
        author: 'Derek Yu',
        myWeightedRating: 8,
        pages: 140,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/spelunky.jpg',
        keywords: ['boss fight books', 'nonfiction', 'games', 'video games', 'biography']
    },
    {
        title: 'Virtual Vandals',
        author: 'Diane Duane',
        myWeightedRating: 6,
        pages: 192,
        pubDate: 1998,
        yearRead: [2002],
        thumb: './images/virtual-vandals.jpg',
        keywords: ['fiction', 'young adult', 'tom clancy', 'science fiction', 'thriller', 'female author']
    },
    {
        title: 'Eat This And Live',
        author: 'Don Colbert',
        myWeightedRating: 7,
        pages: 192,
        pubDate: 2008,
        yearRead: [2013, 2014, 2017, 2020],
        thumb: './images/eat-this.jpg',
        keywords: ['nonfiction', 'christian', 'nutrition', 'food']
    },
    {
        title: 'A Million Miles in a Thousand Years',
        author: 'Donald Miller',
        myWeightedRating: 5,
        pages: 256,
        pubDate: 2009,
        yearRead: [2016],
        thumb: './images/million-miles.jpg',
        keywords: ['nonfiction', 'christian', 'memoir']
    },
    {
        title: 'Encyclopedia Brown Takes the Cake!',
        author: 'Donald Sobol',
        myWeightedRating: 6,
        pages: 128,
        pubDate: 1982,
        yearRead: [1999],
        thumb: './images/encyclopedia-brown.jpg',
        keywords: ['fiction', 'children', 'mystery', 'encyclopedia brown', 'short stories']
    },
    {
        title: 'Encyclopedia Brown and the Case of the Disgusting Sneakers',
        author: 'Donald Sobol',
        myWeightedRating: 6,
        pages: 112,
        pubDate: 1990,
        yearRead: [1999],
        thumb: './images/encyclopedia-brown-sneakers.jpg',
        keywords: ['fiction', 'children', 'mystery', 'encyclopedia brown', 'short stories']
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        myWeightedRating: 8,
        pages: 215,
        pubDate: 1979,
        yearRead: [2015, 2019],
        thumb: './images/hitchhiker.jpg',
        keywords: ['fiction', 'space', 'humor', 'science fiction', 'movies', 'tv']
    },
    {
        title: 'The Restaurant at the End of the Universe',
        author: 'Douglas Adams',
        myWeightedRating: 7,
        pages: 187,
        pubDate: 1980,
        yearRead: [2016],
        thumb: './images/restaurant-end-universe.jpg',
        keywords: ['fiction', 'space', 'humor', 'science fiction']
    },
    {
        title: 'The 30-Minute Runner',
        author: 'Duncan Larkin',
        myWeightedRating: 6,
        pages: 156,
        pubDate: 2018,
        yearRead: [2021],
        thumb: './images/thirty-minute-runner.jpg',
        keywords: ['nonfiction', 'sports', 'running', 'fitness']
    },
    {
        title: 'Game On!',
        author: 'Dustin Hansen',
        myWeightedRating: 8,
        pages: 368,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/game-on.jpg',
        keywords: ['nonfiction', 'reference', 'games', 'video games']
    },
    /*===========================
    	Author First Name - E's
    ===========================*/
    {
        title: 'We Were Liars',
        author: 'E. Lockhart',
        myWeightedRating: 6,
        pages: 242,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/we-were-liars.jpg',
        keywords: ['young adult', 'fiction', 'mystery', 'romance', 'unreliable narrator', 'female author']
    },
    {
        title: "Charlotte's Web",
        author: 'E.B. White',
        myWeightedRating: 6,
        pages: 184,
        pubDate: 1952,
        yearRead: [2002],
        thumb: './images/charlottes-web.jpg',
        keywords: ['fiction', 'children', 'animals', 'movies', 'fantasy']
    },
    {
        title: 'Creativity, Inc.',
        author: 'Ed Catmull',
        myWeightedRating: 7,
        pages: 368,
        pubDate: 2009,
        yearRead: [2019],
        thumb: './images/creativity.jpg',
        keywords: ['nonfiction', 'business', 'leadership', 'creativity']
    },
    {
        title: 'iPoe Vol. 1',
        author: 'Edgar Allen Poe',
        myWeightedRating: 4,
        pages: 101,
        pubDate: 1894,
        yearRead: [2021],
        thumb: './images/ipoe1.jpg',
        keywords: ['fiction', 'short stories', 'horror', 'interactive', 'poetry', 'gothic']
    },
    {
        title: 'Night',
        author: 'Elie Wiesel',
        myWeightedRating: 7,
        pages: 115,
        pubDate: 1956,
        yearRead: [2009],
        thumb: './images/night.jpg',
        keywords: ['nonfiction', 'memoir', 'holocaust', 'historical']
    },
    {
        title: 'The Happiness Hack',
        author: 'Ellen Petry Leanse',
        myWeightedRating: 5,
        pages: 128,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/happiness-hack.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'female author']
    },
    {
        title: '10,000 Things You Need to Know',
        author: 'Elspeth Beidas',
        myWeightedRating: 5,
        pages: 1000,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/ten-thousand-things.jpg',
        keywords: ['nonfiction', 'lists', 'reference', 'female author']
    },
    {
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        myWeightedRating: 6,
        pages: 464,
        pubDate: 1847,
        yearRead: [2006],
        thumb: './images/wuthering.jpg',
        keywords: ['fiction', 'gothic', 'historical', 'romance', 'ghosts', 'unreliable narrator', 'female author']
    },
    {
        title: 'The Forests of Silence',
        author: 'Emily Rodda',
        myWeightedRating: 5,
        pages: 131,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/forests-of-silence.jpg',
        keywords: ['fantasy', 'fiction', 'children', 'high fantasy', 'magic', 'adventure', 'female author']
    },
    {
        title: 'Artemis Fowl',
        author: 'Eoin Colfer',
        myWeightedRating: 7,
        pages: 288,
        pubDate: 2001,
        yearRead: [2004, 2018],
        thumb: './images/artemis-fowl1.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl', 'movies']
    },
    {
        title: 'The Arctic Incident',
        author: 'Eoin Colfer',
        myWeightedRating: 6,
        pages: 398,
        pubDate: 2002,
        yearRead: [2004, 2018],
        thumb: './images/artemis-fowl2.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl']
    },
    {
        title: 'The Eternity Code',
        author: 'Eoin Colfer',
        myWeightedRating: 6,
        pages: 352,
        pubDate: 2003,
        yearRead: [2018],
        thumb: './images/artemis-fowl3.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl']
    },
    {
        title: 'The Opal Deception',
        author: 'Eoin Colfer',
        myWeightedRating: 6,
        pages: 416,
        pubDate: 2005,
        yearRead: [2018],
        thumb: './images/artemis-fowl4.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl']
    },
    {
        title: 'The Lost Colony',
        author: 'Eoin Colfer',
        myWeightedRating: 6,
        pages: 385,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/artemis-fowl5.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl']
    },
    {
        title: 'The Time Paradox',
        author: 'Eoin Colfer',
        myWeightedRating: 6,
        pages: 391,
        pubDate: 2008,
        yearRead: [2018],
        thumb: './images/artemis-fowl6.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'time travel', 'artemis fowl']
    },
    {
        title: 'The Atlantis Complex',
        author: 'Eoin Colfer',
        myWeightedRating: 5,
        pages: 357,
        pubDate: 2010,
        yearRead: [],
        thumb: './images/artemis-fowl7.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl']
    },
    {
        title: 'The Last Guardian',
        author: 'Eoin Colfer',
        myWeightedRating: 5,
        pages: 328,
        pubDate: 2012,
        yearRead: [2020],
        thumb: './images/artemis-fowl8.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'magic', 'adventure', 'fairies', 'artemis fowl']
    },
    {
        title: 'Ready Player One',
        author: 'Ernest Cline',
        myWeightedRating: 9,
        pages: 374,
        pubDate: 2011,
        yearRead: [2013, 2017, 2018],
        thumb: './images/rp1.jpg',
        keywords: ['fiction', 'pop culture', 'young adult', 'science fiction', 'dystopian', 'adventure', 'movies']
    },
    {
        title: 'Ready Player Two',
        author: 'Ernest Cline',
        myWeightedRating: 8,
        pages: 384,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/rp2.jpg',
        keywords: ['fiction', 'pop culture', 'young adult', 'science fiction', 'dystopian', 'adventure']
    },
    /*===========================
    	Author First Name - F's
    ===========================*/
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        myWeightedRating: 7,
        pages: 168,
        pubDate: 1925,
        yearRead: [2006],
        thumb: './images/great-gatsby.jpg',
        keywords: ['fiction', 'historical', 'romance', 'movies']
    },
    {
        title: 'The Ultimate Guide to Video Game Writing and Design',
        author: 'Flint Dille',
        myWeightedRating: 8,
        pages: 272,
        pubDate: 2006,
        yearRead: [2013],
        thumb: './images/ultimate-guide-vgs.jpg',
        keywords: ['nonfiction', 'game design', 'video games', 'games', 'writing', 'educational']
    },
    {
        title: 'The Father Heart of God',
        author: 'Floyd McClung',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1984,
        yearRead: [2014],
        thumb: './images/father-heart.jpg',
        keywords: ['nonfiction', 'christian']
    },
    {
        title: 'Living the Martial Way',
        author: 'Forrest E. Morgan',
        myWeightedRating: 4,
        pages: 312,
        pubDate: 1992,
        yearRead: [2013],
        thumb: './images/living-martial-way.jpg',
        keywords: ['nonfiction', 'sports', 'martial arts']
    },
    {
        title: 'Erasing Hell',
        author: 'Francis Chan',
        myWeightedRating: 8,
        pages: 197,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/erasing-hell.jpg',
        keywords: ['nonfiction', 'christian', 'hell', 'theology']
    },
    {
        title: 'Goodbye, Things',
        author: 'Fumio Sasaki',
        myWeightedRating: 9,
        pages: 272,
        pubDate: 2015,
        yearRead: [2019, 2020],
        thumb: './images/goodbye-things.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    /*===========================
    	Author First Name - G's
    ===========================*/
    {
        title: 'The Best American Infographics 2013',
        author: 'Gareth Cook',
        myWeightedRating: 7,
        pages: 184,
        pubDate: 2013,
        yearRead: [2021],
        thumb: './images/infographics-2013.jpg',
        keywords: ['nonfiction', 'data', 'reference']
    },
    {
        title: 'Be Prepared',
        author: 'Gary Greenberg',
        myWeightedRating: 7,
        pages: 240,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/be-prepared.jpg',
        keywords: ['nonfiction', 'parenting', 'humor']
    },
    {
        title: 'The One Thing',
        author: 'Gary Keller',
        myWeightedRating: 8,
        pages: 240,
        pubDate: 2013,
        yearRead: [2017, 2020],
        thumb: './images/one-thing.jpg',
        keywords: ['nonfiction', 'business', 'self-help', 'productivity']
    },
    {
        title: 'Hatchet',
        author: 'Gary Paulsen',
        myWeightedRating: 7,
        pages: 186,
        pubDate: 1986,
        yearRead: [2001],
        thumb: './images/hatchet.jpg',
        keywords: ['fiction', 'children', 'survival', 'adventure', 'outdoors']
    },
    {
        title: 'The River',
        author: 'Gary Paulsen',
        myWeightedRating: 6,
        pages: 132,
        pubDate: 1991,
        yearRead: [2001],
        thumb: './images/river.jpg',
        keywords: ['fiction', 'children', 'survival', 'adventure', 'outdoors']
    },
    {
        title: "Brian's Winter",
        author: 'Gary Paulsen',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1996,
        yearRead: [2001],
        thumb: './images/brians-winter.jpg',
        keywords: ['fiction', 'children', 'survival', 'adventure', 'outdoors']
    },
    {
        title: 'The Case Against Sugar',
        author: 'Gary Taubes',
        myWeightedRating: 6,
        pages: 384,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/case-against-sugar.jpg',
        keywords: ['nonfiction', 'nutrition', 'food', 'health']
    },
    {
        title: 'Forks Over Knives',
        author: 'Gene Stone',
        myWeightedRating: 6,
        pages: 214,
        pubDate: 2011,
        yearRead: [2017],
        thumb: './images/forks-over-knives.jpg',
        keywords: ['nonfiction', 'nutrition', 'food', 'health', 'cookbooks']
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        myWeightedRating: 7,
        pages: 141,
        pubDate: 1945,
        yearRead: [2001],
        thumb: './images/animal-farm.jpg',
        keywords: ['fiction', 'animals', 'fantasy', 'politics', 'dystopian', 'movies']
    },
    {
        title: 'Horrorstör',
        author: 'Grady Hendrix',
        myWeightedRating: 7,
        pages: 248,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/horrorstor.jpg',
        keywords: ['fiction', 'horror', 'ghosts', 'humor', 'weird']
    },
    {
        title: "My Best Friend's Exorcism",
        author: 'Grady Hendrix',
        myWeightedRating: 7,
        pages: 337,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/bfs-exorcism.jpg',
        keywords: ['fiction', 'horror', 'demons', 'humor', 'young adult']
    },
    {
        title: "The Southern Book Club's Guide to Slaying Vampires",
        author: 'Grady Hendrix',
        myWeightedRating: 7,
        pages: 404,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/southern-book-club.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'southern']
    },
    {
        title: 'Essentialism',
        author: 'Greg McKeown',
        myWeightedRating: 8,
        pages: 260,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/essentialism.jpg',
        keywords: ['nonfiction', 'self-help', 'business', 'productivity']
    },
    {
        title: 'Effortless',
        author: 'Greg McKeown',
        myWeightedRating: 8,
        pages: 272,
        pubDate: 2021,
        yearRead: [2021],
        thumb: './images/effortless.jpg',
        keywords: ['nonfiction', 'self-help', 'business', 'productivity']
    },
    /*===========================
    	Author First Name - H's
    ===========================*/
    {
        title: 'The Miracle Morning',
        author: 'Hal Elrod',
        myWeightedRating: 6,
        pages: 172,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/miracle-morning.jpg',
        keywords: ['nonfiction', 'self-help', 'productivity']
    },
    {
        title: 'An Absolutely Remarkable Thing',
        author: 'Hank Green',
        myWeightedRating: 9,
        pages: 352,
        pubDate: 2018,
        yearRead: [2018, 2019],
        thumb: './images/remarkable1.jpg',
        keywords: ['fiction', 'lgbt', 'science fiction', 'young adult']
    },
    {
        title: 'A Beautifully Foolish Endeavor',
        author: 'Hank Green',
        myWeightedRating: 8,
        pages: 464,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/remarkable2.jpg',
        keywords: ['fiction', 'lgbt', 'science fiction', 'young adult']
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        myWeightedRating: 6,
        pages: 376,
        pubDate: 1960,
        yearRead: [2003],
        thumb: './images/mockingbird.jpg',
        keywords: ['fiction', 'historical', 'race', 'movies', 'southern', 'female author']
    },
    {
        title: 'The Index Card',
        author: 'Helaine Olen',
        myWeightedRating: 6,
        pages: 256,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/index-card.jpg',
        keywords: ['nonfiction', 'personal finance', 'self-help', 'money', 'female author']
    },
    {
        title: 'Navigating Genesis',
        author: 'Hugh Ross',
        myWeightedRating: 7,
        pages: 298,
        pubDate: 2014,
        yearRead: [2015],
        thumb: './images/nav-genesis.jpg',
        keywords: ['nonfiction', 'christian', 'science', 'theology']
    },
    /*===========================
    	Author First Name - I's
    ===========================*/
    {
        title: 'The Road Back to You',
        author: 'Ian Morgan Cron',
        myWeightedRating: 6,
        pages: 238,
        pubDate: 2016,
        yearRead: [2020],
        thumb: './images/road-back.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'christian']
    },
    {
        title: 'Insight Guides: China',
        author: 'Insight Guides',
        myWeightedRating: 6,
        pages: 480,
        pubDate: 1990,
        yearRead: [2013],
        thumb: './images/insight-china.jpg',
        keywords: ['nonfiction', 'china', 'travel', 'reference']
    },
    {
        title: 'Warm Bodies',
        author: 'Isaac Marion',
        myWeightedRating: 10,
        pages: 256,
        pubDate: 2010,
        yearRead: [2016, 2019],
        thumb: './images/warm-bodies.jpg',
        keywords: ['fiction', 'young adult', 'humor', 'horror', 'zombies', 'apocalyptic', 'romance', 'movies']
    },
    {
        title: 'The New Hunger',
        author: 'Isaac Marion',
        myWeightedRating: 8,
        pages: 170,
        pubDate: 2013,
        yearRead: [2018],
        thumb: './images/new-hunger.jpg',
        keywords: ['fiction', 'young adult', 'horror', 'zombies', 'apocalyptic']
    },
    {
        title: 'The Burning World',
        author: 'Isaac Marion',
        myWeightedRating: 9,
        pages: 512,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/burning-world.jpg',
        keywords: ['fiction', 'young adult', 'horror', 'zombies', 'apocalyptic']
    },
    /*===========================
    	Author First Name - J's
    ===========================*/
    {
        title: 'Very Good Lives',
        author: 'J.K. Rowling',
        myWeightedRating: 8,
        pages: 74,
        pubDate: 2015,
        yearRead: [2018, 2021],
        thumb: './images/very-good-lives.jpg',
        keywords: ['nonfiction', 'self-help', 'essays', 'female author']
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 309,
        pubDate: 1997,
        yearRead: [1999, 2000, 2001, 2002, 2010, 2011, 2012, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp1.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author']
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 341,
        pubDate: 1998,
        yearRead: [2000, 2002, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp2.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author']
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 435,
        pubDate: 1999,
        yearRead: [2000, 2002, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp3.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'time travel', 'female author']
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 734,
        pubDate: 2000,
        yearRead: [2000, 2002, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp4.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author']
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 870,
        pubDate: 2003,
        yearRead: [2003, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp5.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author']
    },
    {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 652,
        pubDate: 2005,
        yearRead: [2005, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp6.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author']
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        myWeightedRating: 10,
        pages: 759,
        pubDate: 2007,
        yearRead: [2007, 2010, 2017, 2018, 2019, 2020, 2021],
        thumb: './images/hp7.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'mystery', 'movies', 'harry potter', 'female author']
    },
    {
        title: 'Short Stories from Hogwarts of Heroism, Hardship and Dangerous Hobbies',
        author: 'J.K. Rowling',
        myWeightedRating: 8,
        pages: 71,
        pubDate: 2016,
        yearRead: [2016, 2019],
        thumb: './images/hogwarts-hero.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'harry potter', 'female author']
    },
    {
        title: 'Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists',
        author: 'J.K. Rowling',
        myWeightedRating: 8,
        pages: 71,
        pubDate: 2016,
        yearRead: [2016],
        thumb: './images/hogwarts-power.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'harry potter', 'female author']
    },
    {
        title: 'Hogwarts: An Incomplete and Unreliable Guide',
        author: 'J.K. Rowling',
        myWeightedRating: 8,
        pages: 79,
        pubDate: 2016,
        yearRead: [2016, 2019],
        thumb: './images/hogwarts.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'harry potter', 'female author']
    },
    {
        title: 'The Tales of Beedle the Bard',
        author: 'J.K. Rowling',
        myWeightedRating: 7,
        pages: 111,
        pubDate: 2008,
        yearRead: [2015, 2017, 2020, 2021],
        thumb: './images/beedle.jpg',
        keywords: ['fiction', 'children', 'magic', 'fantasy', 'witches', 'wizards', 'short stories', 'fairy tales', 'harry potter', 'female author']
    },
    {
        title: 'Fantastic Beasts and Where to Find Them: The Original Screenplay',
        author: 'J.K. Rowling',
        myWeightedRating: 7,
        pages: 304,
        pubDate: 2016,
        yearRead: [2016],
        thumb: './images/fantastic-beasts-screenplay.jpg',
        keywords: ['fiction', 'young adult', 'magic', 'fantasy', 'witches', 'wizards', 'adventure', 'movies', 'harry potter', 'screenplay', 'female author']
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        myWeightedRating: 8,
        pages: 389,
        pubDate: 1937,
        yearRead: [2013],
        thumb: './images/hobbit.jpg',
        keywords: ['fantasy', 'fiction', 'magic', 'high fantasy', 'movies', 'lord of the rings', 'young adult', 'adventure']
    },
    {
        title: 'Surprised by the Power of the Spirit',
        author: 'Jack Deere',
        myWeightedRating: 5,
        pages: 302,
        pubDate: 1993,
        yearRead: [2015],
        thumb: './images/surprised-by-power.jpg',
        keywords: ['nonfiction', 'christian', 'miracles', 'holy spirit']
    },
    {
        title: 'Vegan for Life',
        author: 'Jack Norris',
        myWeightedRating: 4,
        pages: 283,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/vegan-for-life.jpg',
        keywords: ['nonfiction', 'food', 'nutrition', 'health']
    },
    {
        title: 'Chasing the Dragon',
        author: 'Jackie Pullinger',
        myWeightedRating: 5,
        pages: 256,
        pubDate: 1980,
        yearRead: [2014],
        thumb: './images/chasing-the-dragon.jpg',
        keywords: ['nonfiction', 'christian', 'drugs', 'china', 'memoir', 'female author']
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        myWeightedRating: 9,
        pages: 319,
        pubDate: 2018,
        yearRead: [2021],
        thumb: './images/atomic-habits.jpg',
        keywords: ['nonfiction', 'habits', 'self-help', 'psychology', 'productivity']
    },
    {
        title: 'The Maze Runner',
        author: 'James Dashner',
        myWeightedRating: 6,
        pages: 384,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/maze-runner.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'science fiction', 'adventure', 'movies']
    },
    {
        title: "America's History, For the AP Course",
        author: 'James Henretta',
        myWeightedRating: 7,
        pages: 1168,
        pubDate: 2006,
        yearRead: [2007],
        thumb: './images/ap-history.jpg',
        keywords: ['nonfiction', 'educational', 'historical', 'america']
    },
    {
        title: 'Return to Howliday Inn',
        author: 'James Howe',
        myWeightedRating: 6,
        pages: 116,
        pubDate: 1992,
        yearRead: [1999],
        thumb: './images/bunnicula5.jpg',
        keywords: ['fiction', 'children', 'animals', 'mystery', 'horror']
    },
    {
        title: 'Bunnicula Strikes Again!',
        author: 'James Howe',
        myWeightedRating: 6,
        pages: 116,
        pubDate: 1995,
        yearRead: [1999],
        thumb: './images/bunnicula6.jpg',
        keywords: ['fiction', 'children', 'animals', 'mystery', 'horror']
    },
    {
        title: "Player's Handbook",
        author: 'James Wyatt',
        myWeightedRating: 9,
        pages: 320,
        pubDate: 2014,
        yearRead: [2016],
        thumb: './images/phb.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy']
    },
    {
        title: 'Super Better',
        author: 'Jane McGonigal',
        myWeightedRating: 7,
        pages: 480,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/super-better.jpg',
        keywords: ['nonfiction', 'psychology', 'games', 'self-help', 'female author']
    },
    {
        title: 'Ten Arguments For Deleting Your Social Media Accounts Right Now',
        author: 'Jaron Lanier',
        myWeightedRating: 8,
        pages: 146,
        pubDate: 2018,
        yearRead: [2019, 2021],
        thumb: './images/delete-social-media.jpg',
        keywords: ['nonfiction', 'psychology', 'technology', 'self-help']
    },
    {
        title: 'The Living and the Dead',
        author: 'Jason',
        myWeightedRating: 4,
        pages: 48,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/living-and-dead.jpg',
        keywords: ['fiction', 'graphic novels', 'horror', 'zombies']
    },
    {
        title: 'Blood, Sweat, and Pixels',
        author: 'Jason Schreier',
        myWeightedRating: 10,
        pages: 304,
        pubDate: 2017,
        yearRead: [2017, 2021],
        thumb: './images/blood-sweat-pixels.jpg',
        keywords: ['nonfiction', 'biography', 'games', 'video games']
    },
    {
        title: 'Thirteen Reasons Why',
        author: 'Jay Asher',
        myWeightedRating: 6,
        pages: 288,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/thirteen-reasons.jpg',
        keywords: ['young adult', 'suicide', 'fiction', 'mental health', 'mystery', 'tv']
    },
    {
        title: 'Nerve',
        author: 'Jeanne Ryan',
        myWeightedRating: 8,
        pages: 304,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/nerve.jpg',
        keywords: ['fiction', 'young adult', 'thriller', 'science fiction', 'movies', 'female author']
    },
    {
        title: 'Diary of a Wimpy Kid',
        author: 'Jeff Kinney',
        myWeightedRating: 6,
        pages: 224,
        pubDate: 2004,
        yearRead: [2015],
        thumb: './images/diary-of-wimpy.jpg',
        keywords: ['fiction', 'children', 'humor', 'graphic novels', 'schools', 'movies']
    },
    {
        title: 'Super Mario',
        author: 'Jeff Ryan',
        myWeightedRating: 7,
        pages: 292,
        pubDate: 2011,
        yearRead: [2021],
        thumb: './images/super-mario.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'biography']
    },
    {
        title: 'Annihilation',
        author: 'Jeff VanderMeer',
        myWeightedRating: 5,
        pages: 195,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/annihilation.jpg',
        keywords: ['fiction', 'horror', 'science fiction', 'movies', 'unreliable narrator']
    },
    {
        title: "Who's Afraid of the Multiverse",
        author: 'Jeffrey Zweerink',
        myWeightedRating: 7,
        pages: 66,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/whos-afraid.jpg',
        keywords: ['nonfiction', 'christian', 'science']
    },
    {
        title: 'The No-Spend Challenge Guide',
        author: 'Jen Smith',
        myWeightedRating: 5,
        pages: 99,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/no-spend.jpg',
        keywords: ['nonfiction', 'money', 'personal finance', 'self-help', 'female author']
    },
    {
        title: '200+ Ways to Protect Your Privacy',
        author: 'Jeni Rogers',
        myWeightedRating: 5,
        pages: 256,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/protect-privacy.jpg',
        keywords: ['nonfiction', 'technology', 'female author']
    },
    {
        title: 'All the Bright Places',
        author: 'Jennifer Niven',
        myWeightedRating: 6,
        pages: 378,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/all-bright-places.jpg',
        keywords: ['fiction', 'young adult', 'suicide', 'romance', 'mental health', 'movies', 'female author']
    },
    {
        title: 'The Summer I Turned Pretty',
        author: 'Jenny Han',
        myWeightedRating: 7,
        pages: 276,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/summer-pretty1.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'female author']
    },
    {
        title: "It's Not Summer Without You",
        author: 'Jenny Han',
        myWeightedRating: 7,
        pages: 288,
        pubDate: 2010,
        yearRead: [2018],
        thumb: './images/summer-pretty2.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'female author']
    },
    {
        title: "We'll Always Have Summer",
        author: 'Jenny Han',
        myWeightedRating: 7,
        pages: 291,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/summer-pretty3.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'female author']
    },
    {
        title: 'Remnant of Victory',
        author: 'Jeri Odell',
        myWeightedRating: 7,
        pages: 176,
        pubDate: 2000,
        yearRead: [2000],
        thumb: './images/remnant-victory.jpg',
        keywords: ['fiction', 'romance', 'christian', 'female author']
    },
    {
        title: 'Three Men in a Boat',
        author: 'Jerome K. Jerome',
        myWeightedRating: 7,
        pages: 185,
        pubDate: 1889,
        yearRead: [2021],
        thumb: './images/three-men-boat.jpg',
        keywords: ['fiction', 'humor', 'travel']
    },
    {
        title: 'The Vanishings',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 6,
        pages: 148,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids1.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Second Chance',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids2.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Through the Flames',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 6,
        pages: 146,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids3.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Facing the Future',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 6,
        pages: 150,
        pubDate: 1998,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids4.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Nicolae High',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 118,
        pubDate: 1999,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids5.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'The Underground',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 114,
        pubDate: 1999,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids6.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Busted!',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 128,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids7.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Death Strike',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 123,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids8.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'The Search',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 162,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids9.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'On the Run',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 160,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids10.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Into the Storm',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 160,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids11.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Earthquake!',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 140,
        pubDate: 2000,
        yearRead: [2002, 2009],
        thumb: './images/left-behind-kids12.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'The Showdown',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 152,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids13.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Judgment Day',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 130,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids14.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Battling the Commander',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 140,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids15.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Fire from Heaven',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 142,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids16.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Terror in the Stadium',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 152,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids17.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Darkening Skies',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 149,
        pubDate: 2001,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids18.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Attack of Apollyon',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 150,
        pubDate: 2002,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids19.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'A Dangerous Plan',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 176,
        pubDate: 2002,
        yearRead: [2003, 2009],
        thumb: './images/left-behind-kids20.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Secrets of New Babylon',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 152,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids21.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Escape from New Babylon',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 148,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids22.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Horsemen of Terror',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 150,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids23.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'Uplink from the Underground',
        author: 'Jerry B. Jenkins',
        myWeightedRating: 5,
        pages: 160,
        pubDate: 2002,
        yearRead: [2009],
        thumb: './images/left-behind-kids24.jpg',
        keywords: ['fiction', 'christian', 'young adult', 'apocalyptic', 'left behind']
    },
    {
        title: 'A Vampire Tale',
        author: 'Jess Smart Smiley',
        myWeightedRating: 5,
        pages: 144,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/vamp-tale.jpg',
        keywords: ['fiction', 'vampires', 'graphic novels', 'children', 'humor', 'female author']
    },
    {
        title: 'Me and Earl and the Dying Girl',
        author: 'Jesse Andrews',
        myWeightedRating: 6,
        pages: 295,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/me-earl.jpg',
        keywords: ['fiction', 'young adult', 'sickness', 'humor', 'death', 'coming of age', 'movies']
    },
    {
        title: 'The Danish Way of Parenting',
        author: 'Jessica Joelle Alexander',
        myWeightedRating: 5,
        pages: 224,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/danish-way.jpg',
        keywords: ['nonfiction', 'parenting', 'female author']
    },
    {
        title: 'Full Frontal Feminism',
        author: 'Jessica Valenti',
        myWeightedRating: 5,
        pages: 288,
        pubDate: 2007,
        yearRead: [2018],
        thumb: './images/full-frontal.jpg',
        keywords: ['nonfiction', 'feminism', 'gender', 'female author']
    },
    {
        title: 'Storm Front',
        author: 'Jim Butcher',
        myWeightedRating: 8,
        pages: 384,
        pubDate: 2000,
        yearRead: [2018],
        thumb: './images/dresden1.jpg',
        keywords: ['fiction', 'dreseden files', 'fantasy', 'magic', 'wizards', 'crime', 'mystery', 'vampires']
    },
    {
        title: 'Fool Moon',
        author: 'Jim Butcher',
        myWeightedRating: 7,
        pages: 401,
        pubDate: 2001,
        yearRead: [2020],
        thumb: './images/dresden2.jpg',
        keywords: ['fiction', 'dreseden files', 'fantasy', 'magic', 'wizards', 'crime', 'mystery', 'vampires', 'werewolves']
    },
    {
        title: 'Grave Peril',
        author: 'Jim Butcher',
        myWeightedRating: 7,
        pages: 378,
        pubDate: 2001,
        yearRead: [2020],
        thumb: './images/dresden3.jpg',
        keywords: ['fiction', 'dreseden files', 'fantasy', 'magic', 'wizards', 'crime', 'mystery', 'vampires']
    },
    {
        title: 'Rick and Morty vs. Dungeons & Dragons II',
        author: 'Jim Zub',
        myWeightedRating: 6,
        pages: 128,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/rick-morty-vs-dnd2.jpg',
        keywords: ['tv', 'humor', 'dnd', 'comics', 'graphic novels', 'fantasy', 'science fiction']
    },
    {
        title: 'Passion & Purpose',
        author: 'Jimmy Seibert',
        myWeightedRating: 5,
        pages: 214,
        pubDate: 2014,
        yearRead: [2014],
        thumb: './images/passion-purpose.jpg',
        keywords: ['nonfiction', 'church', 'christian', 'memoir']
    },
    {
        title: 'Discipline Equals Freedom',
        author: 'Jocko Willink',
        myWeightedRating: 9,
        pages: 189,
        pubDate: 2017,
        yearRead: [2020],
        thumb: './images/discipline.jpg',
        keywords: ['nonfiction', 'self-help', 'habits']
    },
    {
        title: 'Wild at Heart',
        author: 'John Eldredge',
        myWeightedRating: 8,
        pages: 242,
        pubDate: 2001,
        yearRead: [2009, 2011],
        thumb: './images/wild-at-heart.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'Looking for God in Harry Potter',
        author: 'John Granger',
        myWeightedRating: 7,
        pages: 234,
        pubDate: 2004,
        yearRead: [2010],
        thumb: './images/god-in-hp.jpg',
        keywords: ['nonfiction', 'christian', 'harry potter']
    },
    {
        title: 'Looking for Alaska',
        author: 'John Green',
        myWeightedRating: 9,
        pages: 221,
        pubDate: 2005,
        yearRead: [2015, 2017, 2019],
        thumb: './images/alaska.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'death', 'tv']
    },
    {
        title: 'An Abundance of Katherines',
        author: 'John Green',
        myWeightedRating: 8,
        pages: 229,
        pubDate: 2006,
        yearRead: [2015, 2017],
        thumb: './images/katherines.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age']
    },
    {
        title: 'Turtles All the Way Down',
        author: 'John Green',
        myWeightedRating: 7,
        pages: 286,
        pubDate: 2017,
        yearRead: [2017, 2019],
        thumb: './images/turtles.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'mental health']
    },
    {
        title: 'Will Grayson, Will Grayson',
        author: 'John Green',
        myWeightedRating: 7,
        pages: 310,
        pubDate: 2010,
        yearRead: [2015, 2017],
        thumb: './images/will-grayson.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'lgbt']
    },
    {
        title: 'The Fault in Our Stars',
        author: 'John Green',
        myWeightedRating: 7,
        pages: 316,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/fault-stars.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'death', 'movies']
    },
    {
        title: 'Paper Towns',
        author: 'John Green',
        myWeightedRating: 8,
        pages: 336,
        pubDate: 2008,
        yearRead: [2015],
        thumb: './images/paper-towns.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'coming of age', 'mystery', 'movies']
    },
    {
        title: 'Let it Snow',
        author: 'John Green',
        myWeightedRating: 9,
        pages: 352,
        pubDate: 2008,
        yearRead: [2015, 2017],
        thumb: './images/let-it-snow.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'christmas', 'tv']
    },
    {
        title: 'Mind Hacking',
        author: 'John Hargrave',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/mind-hacking.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help']
    },
    {
        title: 'Chew, Vol. 1',
        author: 'John Layman',
        myWeightedRating: 5,
        pages: 128,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/chew.jpg',
        keywords: ['fiction', 'graphic novels', 'zombies', 'crime']
    },
    {
        title: 'Harry Potter and the Cursed Child',
        author: 'John Tiffany',
        myWeightedRating: 6,
        pages: 343,
        pubDate: 2016,
        yearRead: [2016, 2017],
        thumb: './images/hp-cursed.jpg',
        keywords: ['harry potter', 'fiction', 'play', 'time travel', 'script', 'fantasy', 'magic', 'wizards', 'witches']
    },
    {
        title: 'Into the Wild',
        author: 'Jon Krakauer',
        myWeightedRating: 5,
        pages: 207,
        pubDate: 1996,
        yearRead: [2013],
        thumb: './images/into-wild.jpg',
        keywords: ['nonfiction', 'biography', 'travel', 'adventure', 'survival']
    },
    {
        title: 'Nights of the Living Dead',
        author: 'Jonathan Maberry',
        myWeightedRating: 5,
        pages: 368,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/nights-living-dead.jpg',
        keywords: ['fiction', 'short stories', 'zombies', 'horror']
    },
    {
        title: 'A Modest Proposal',
        author: 'Jonathan Swift',
        myWeightedRating: 7,
        pages: 48,
        pubDate: 1729,
        yearRead: [2008, 2020],
        thumb: './images/modest-proposal.jpg',
        keywords: ['fiction', 'satire', 'essays', 'politics']
    },
    {
        title: 'How Not to Be Wrong',
        author: 'Jordan Ellenberg',
        myWeightedRating: 7,
        pages: 480,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/how-not-to-be-wrong.jpg',
        keywords: ['nonfiction', 'mathematics', 'psychology']
    },
    {
        title: 'Bird Box',
        author: 'Josh Malerman',
        myWeightedRating: 8,
        pages: 262,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/bird-box.jpg',
        keywords: ['fiction', 'horror', 'apocalyptic', 'thriller', 'movies']
    },
    {
        title: 'Living With Less',
        author: 'Joshua Becker',
        myWeightedRating: 8,
        pages: 114,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/living-with-less.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    {
        title: 'The More of Less',
        author: 'Joshua Becker',
        myWeightedRating: 7,
        pages: 240,
        pubDate: 2016,
        yearRead: [2018, 2021],
        thumb: './images/more-of-less.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    {
        title: 'The Minimalist Home',
        author: 'Joshua Becker',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/minimalist-home.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help']
    },
    {
        title: 'Simplify Magazine 001',
        author: 'Joshua Becker',
        myWeightedRating: 9,
        pages: 72,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/simplify-magazine.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'magazine']
    },
    {
        title: 'Simplify Magazine 002',
        author: 'Joshua Becker',
        myWeightedRating: 9,
        pages: 101,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/simplify-magazine.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'magazine']
    },
    {
        title: 'Simplify Magazine 003',
        author: 'Joshua Becker',
        myWeightedRating: 9,
        pages: 75,
        pubDate: 2017,
        yearRead: [2021],
        thumb: './images/simplify-magazine.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'magazine']
    },
    {
        title: 'The Club',
        author: 'Joshua Robinson',
        myWeightedRating: 7,
        pages: 368,
        pubDate: 2018,
        yearRead: [2020],
        thumb: './images/club.jpg',
        keywords: ['nonfiction', 'biography', 'sports', 'soccer']
    },
    {
        title: 'Haunted Mansion',
        author: 'Joshua Williamson',
        myWeightedRating: 6,
        pages: 128,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/haunted-mansion.jpg',
        keywords: ['fiction', 'graphic novels', 'ghosts', 'horror', 'comics']
    },
    {
        title: 'Buffy the Vampire Slayer: The Long Way Home',
        author: 'Joss Whedon',
        myWeightedRating: 6,
        pages: 136,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/buffy-s8.jpg',
        keywords: ['graphic novels', 'fiction', 'horror', 'vampires', 'tv', 'fantasy', 'witches']
    },
    /*===========================
    	Author First Name - K's
    ===========================*/
    {
        title: 'Beautiful Creatures',
        author: 'Kami Garcia',
        myWeightedRating: 5,
        pages: 563,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/beautiful-creatures.jpg',
        keywords: ['fiction', 'fantasy', 'romance', 'magic', 'witches', 'young adult', 'movies', 'female author']
    },
    {
        title: 'One of Us Is Lying',
        author: 'Karen M. McManus',
        myWeightedRating: 8,
        pages: 361,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/one-of-us-is-lying.jpg',
        keywords: ['fiction', 'young adult', 'mystery', 'thriller', 'crime', 'tv', 'unreliable narrator', 'female author']
    },
    {
        title: 'Bridge to Terabithia',
        author: 'Katherine Paterson',
        myWeightedRating: 6,
        pages: 190,
        pubDate: 1977,
        yearRead: [1999],
        thumb: './images/terabithia.jpg',
        keywords: ['fiction', 'young adult', 'death', 'movies', 'female author']
    },
    {
        title: 'Finding Sisu',
        author: 'Katja Pantzar',
        myWeightedRating: 5,
        pages: 272,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/sisu.jpg',
        keywords: ['nonfiction', 'self-help', 'travel', 'female author']
    },
    {
        title: 'Independent Me',
        author: 'Kely Braswell',
        myWeightedRating: 4,
        pages: 205,
        pubDate: 2014,
        yearRead: [2014],
        thumb: './images/independent-me.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: "The Geek Dad's Guide to Weekend Fun",
        author: 'Ken Denmead',
        myWeightedRating: 6,
        pages: 240,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/geek-dad.jpg',
        keywords: ['nonfiction', 'crafts', 'parenting', 'reference']
    },
    {
        title: "The New Answers Book 1",
        author: 'Ken Ham',
        myWeightedRating: 3,
        pages: 378,
        pubDate: 2007,
        yearRead: [2009],
        thumb: './images/new-answers.jpg',
        keywords: ['nonfiction', 'christian', 'theology']
    },
    {
        title: "One Flew Over the Cuckoo's Nest",
        author: 'Ken Kesey',
        myWeightedRating: 6,
        pages: 325,
        pubDate: 1962,
        yearRead: [2007, 2007],
        thumb: './images/one-flew-over.jpg',
        keywords: ['fiction', 'mental health', 'movies', 'unreliable narrator']
    },
    {
        title: 'Quidditch Through the Ages',
        author: 'Kennilworthy Whisp',
        myWeightedRating: 6,
        pages: 56,
        pubDate: 2001,
        yearRead: [2001, 2007, 2021],
        thumb: './images/quidditch.jpg',
        keywords: ['harry potter', 'fiction', 'children', 'reference', 'sports', 'fantasy', 'magic', 'witches', 'wizards', 'female author']
    },
    {
        title: 'Unlimited Memory',
        author: 'Kevin Horsley',
        myWeightedRating: 6,
        pages: 136,
        pubDate: 2014,
        yearRead: [2019, 2021],
        thumb: './images/unlimited-memory.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'productivity']
    },
    {
        title: 'For the Win',
        author: 'Kevin Werbach',
        myWeightedRating: 6,
        pages: 148,
        pubDate: 2012,
        yearRead: [2013],
        thumb: './images/ftw.jpg',
        keywords: ['nonfiction', 'business', 'psychology', 'games', 'video games']
    },
    {
        title: 'The A-Z of Atari 8-bit Games',
        author: 'Kieren Hawken',
        myWeightedRating: 4,
        pages: 196,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/az-atari-8bit.jpg',
        keywords: ['nonfiction', 'reference', 'games', 'video games']
    },
    {
        title: 'The DUFF',
        author: 'Kody Keplinger',
        myWeightedRating: 7,
        pages: 280,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/duff.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'movies', 'female author']
    },
    {
        title: 'Ring',
        author: 'Kōji Suzuki',
        myWeightedRating: 5,
        pages: 282,
        pubDate: 1991,
        yearRead: [2018],
        thumb: './images/ring.jpg',
        keywords: ['horror', 'fiction', 'ghosts', 'japanese', 'mystery', 'thriller', 'movies']
    },
    {
        title: 'Jesus and John Wayne',
        author: 'Kristin Kobes Du Mez',
        myWeightedRating: 7,
        pages: 368,
        pubDate: 2020,
        yearRead: [2021],
        thumb: './images/jesus-john-wayne.jpg',
        keywords: ['gender', 'nonfiction', 'christian', 'historical', 'female author']
    },
    {
        title: "Don't Get Caught",
        author: 'Kurt Dinan',
        myWeightedRating: 6,
        pages: 340,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/dont-get-caught.jpg',
        keywords: ['fiction', 'young adult', 'mystery', 'humor']
    },
    /*===========================
    	Author First Name - L's
    ===========================*/
    {
        title: 'The Awakening',
        author: 'L.J. Smith',
        myWeightedRating: 5,
        pages: 253,
        pubDate: 1991,
        yearRead: [2015],
        thumb: './images/awakening.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author']
    },
    {
        title: 'The Struggle',
        author: 'L.J. Smith',
        myWeightedRating: 5,
        pages: 256,
        pubDate: 1991,
        yearRead: [2015],
        thumb: './images/struggle.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author']
    },
    {
        title: 'The Fury',
        author: 'L.J. Smith',
        myWeightedRating: 5,
        pages: 285,
        pubDate: 1991,
        yearRead: [2016],
        thumb: './images/fury.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author']
    },
    {
        title: 'Dark Reunion',
        author: 'L.J. Smith',
        myWeightedRating: 5,
        pages: 311,
        pubDate: 1991,
        yearRead: [2016],
        thumb: './images/dark-reunion.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'romance', 'young adult', 'tv', 'female author']
    },
    {
        title: 'I Love You, Beth Cooper',
        author: 'Larry Doyle',
        myWeightedRating: 7,
        pages: 253,
        pubDate: 2007,
        yearRead: [2015],
        thumb: './images/beth-cooper.jpg',
        keywords: ['young adult', 'fiction', 'romance', 'humor', 'movies']
    },
    {
        title: 'A Secret Life',
        author: 'Laura Peyton Roberts',
        myWeightedRating: 6,
        pages: 202,
        pubDate: 2003,
        yearRead: [2019],
        thumb: './images/secret-life.jpg',
        keywords: ['tv', 'fiction', 'spy thriller', 'young adult', 'female author']
    },
    {
        title: 'What the Most Successful People Do Before Breakfast',
        author: 'Laura Vanderkam',
        myWeightedRating: 7,
        pages: 32,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/successful-breakfast.jpg',
        keywords: ['nonfiction', 'self-help', 'business', 'productivity', 'female author']
    },
    {
        title: 'Guilty Pleasures',
        author: 'Laurell K. Hamilton',
        myWeightedRating: 7,
        pages: 355,
        pubDate: 1993,
        yearRead: [2017],
        thumb: './images/guilty-pleasures.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'fantasy', 'romance', 'female author']
    },
    {
        title: 'Six of Crows',
        author: 'Leigh Bardugo',
        myWeightedRating: 8,
        pages: 465,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/six-of-crows.jpg',
        keywords: ['fiction', 'fantasy', 'high fantasy', 'lgbt', 'romance', 'heist', 'adventure', 'young adult', 'female author']
    },
    {
        title: 'Crooked Kingdom',
        author: 'Leigh Bardugo',
        myWeightedRating: 8,
        pages: 536,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/six-of-crows2.jpg',
        keywords: ['fiction', 'fantasy', 'high fantasy', 'lgbt', 'romance', 'heist', 'adventure', 'young adult', 'female author']
    },
    {
        title: 'The Bad Beginning',
        author: 'Lemony Snicket',
        myWeightedRating: 6,
        pages: 176,
        pubDate: 1999,
        yearRead: [2016],
        thumb: './images/unfortunate1.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'movies']
    },
    {
        title: 'The Reptile Room',
        author: 'Lemony Snicket',
        myWeightedRating: 6,
        pages: 192,
        pubDate: 1999,
        yearRead: [2016],
        thumb: './images/unfortunate2.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'movies']
    },
    {
        title: 'The Wide Window',
        author: 'Lemony Snicket',
        myWeightedRating: 5,
        pages: 214,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/unfortunate3.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv', 'movies']
    },
    {
        title: 'The Miserable Mill',
        author: 'Lemony Snicket',
        myWeightedRating: 5,
        pages: 194,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/unfortunate4.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Austere Academy',
        author: 'Lemony Snicket',
        myWeightedRating: 5,
        pages: 221,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/unfortunate5.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Ersatz Elevator',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 259,
        pubDate: 2001,
        yearRead: [2016],
        thumb: './images/unfortunate6.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Vile Village',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 272,
        pubDate: 2001,
        yearRead: [2016],
        thumb: './images/unfortunate7.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Hostile Hospital',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 272,
        pubDate: 2001,
        yearRead: [2016],
        thumb: './images/unfortunate8.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Carnivorous Carnival',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 286,
        pubDate: 2002,
        yearRead: [2016],
        thumb: './images/unfortunate9.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Slippery Slope',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 337,
        pubDate: 2003,
        yearRead: [2016],
        thumb: './images/unfortunate10.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Grim Grotto',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 323,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/unfortunate11.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The Penultimate Peril',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 353,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/unfortunate12.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'The End',
        author: 'Lemony Snicket',
        myWeightedRating: 4,
        pages: 337,
        pubDate: 2006,
        yearRead: [2016],
        thumb: './images/unfortunate13.jpg',
        keywords: ['fiction', 'children', 'fantasy', 'humor', 'adventure', 'tv']
    },
    {
        title: 'Read Japanese Today',
        author: 'Len Welsh',
        myWeightedRating: 7,
        pages: 168,
        pubDate: 1969,
        yearRead: [2017],
        thumb: './images/read-japanese.jpg',
        keywords: ['nonfiction', 'language', 'educational', 'japanese', 'japan']
    },
    {
        title: 'The Magicians',
        author: 'Lev Grossman',
        myWeightedRating: 4,
        pages: 402,
        pubDate: 2009,
        yearRead: [2018],
        thumb: './images/magicians.jpg',
        keywords: ['young adult', 'fiction', 'fantasy', 'magic', 'tv']
    },
    {
        title: 'Big Little Lies',
        author: 'Liane Moriarty',
        myWeightedRating: 9,
        pages: 460,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/big-little-lies.jpg',
        keywords: ['fiction', 'mystery', 'humor', 'thriller', 'tv', 'female author']
    },
    {
        title: 'Going Bovine',
        author: 'Libba Bray',
        myWeightedRating: 9,
        pages: 480,
        pubDate: 2009,
        yearRead: [2021],
        thumb: './images/bovine.jpg',
        keywords: ['fiction', 'young adult', 'mental health', 'weird', 'fantasy', 'humor', 'death', 'adventure', 'unreliable narrator', 'female author']
    },
    {
        title: 'The Giver',
        author: 'Lois Lowry',
        myWeightedRating: 8,
        pages: 208,
        pubDate: 1993,
        yearRead: [2015],
        thumb: './images/giver.jpg',
        keywords: ['fiction', 'dystopian', 'young adult', 'science fiction', 'movies', 'female author']
    },
    {
        title: 'Gathering Blue',
        author: 'Lois Lowry',
        myWeightedRating: 5,
        pages: 240,
        pubDate: 2000,
        yearRead: [2016],
        thumb: './images/gathering-blue.jpg',
        keywords: ['fiction', 'dystopian', 'young adult', 'science fiction', 'female author']
    },
    {
        title: 'Messenger',
        author: 'Lois Lowry',
        myWeightedRating: 5,
        pages: 169,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/messenger.jpg',
        keywords: ['fiction', 'dystopian', 'young adult', 'science fiction', 'female author']
    },
    {
        title: 'Number the Stars',
        author: 'Lois Lowry',
        myWeightedRating: 8,
        pages: 137,
        pubDate: 1989,
        yearRead: [2000, 2019],
        thumb: './images/number-stars.jpg',
        keywords: ['fiction', 'historical', 'holocaust', 'children', 'female author']
    },
    {
        title: 'Nazirite DNA',
        author: 'Lou Engle',
        myWeightedRating: 5,
        pages: 50,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/nazirite-dna.jpg',
        keywords: ['nonfiction', 'christian', 'prayer']
    },
    {
        title: 'Theodore Roosevelt',
        author: 'Louis Auchincloss',
        myWeightedRating: 7,
        pages: 176,
        pubDate: 2002,
        yearRead: [2021],
        thumb: './images/teddy.jpg',
        keywords: ['nonfiction', 'presidents', 'biography', 'historical']
    },
    {
        title: 'Holes',
        author: 'Louis Sachar',
        myWeightedRating: 7,
        pages: 233,
        pubDate: 1998,
        yearRead: [2001],
        thumb: './images/holes.jpg',
        keywords: ['young adult', 'fiction', 'mystery', 'adventure', 'movies']
    },
    {
        title: 'Sideways Stories from Wayside School',
        author: 'Louis Sachar',
        myWeightedRating: 7,
        pages: 128,
        pubDate: 1978,
        yearRead: [2003, 2015],
        thumb: './images/wayside1.jpg',
        keywords: ['children', 'humor', 'weird', 'fiction', 'short stories']
    },
    {
        title: 'Wayside School Is Falling Down',
        author: 'Louis Sachar',
        myWeightedRating: 7,
        pages: 152,
        pubDate: 1989,
        yearRead: [2003],
        thumb: './images/wayside2.jpg',
        keywords: ['children', 'humor', 'weird', 'fiction', 'short stories']
    },
    {
        title: 'Wayside School Gets a Little Stranger',
        author: 'Louis Sachar',
        myWeightedRating: 7,
        pages: 168,
        pubDate: 1995,
        yearRead: [2003],
        thumb: './images/wayside3.jpg',
        keywords: ['children', 'humor', 'weird', 'fiction', 'short stories']
    },
    {
        title: 'Recruited',
        author: 'Lynn Mason',
        myWeightedRating: 6,
        pages: 224,
        pubDate: 2002,
        yearRead: [2019],
        thumb: './images/recruited.jpg',
        keywords: ['tv', 'fiction', 'spy thriller', 'young adult', 'female author']
    },
    /*===========================
    	Author First Name - M's
    ===========================*/
    {
        title: 'A Wrinkle in Time',
        author: "Madeleine L'Engle",
        myWeightedRating: 7,
        pages: 211,
        pubDate: 1962,
        yearRead: [2015, 2018],
        thumb: './images/wrinkle-in-time.jpg',
        keywords: ['movies', 'fiction', 'young adult', 'fantasy', 'science fiction', 'time travel', 'female author']
    },
    {
        title: 'Outliers',
        author: 'Malcolm Gladwell',
        myWeightedRating: 8,
		pages: 309,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/outliers.jpg',
        keywords: ['nonfiction', 'psychology', 'sociology']
    },
    {
        title: 'Tipping Point',
        author: 'Malcolm Gladwell',
        myWeightedRating: 7,
		pages: 301,
        pubDate: 2002,
        yearRead: [2020],
        thumb: './images/tipping-point.jpg',
        keywords: ['nonfiction', 'psychology', 'sociology']
    },
    {
        title: 'Bored and Brilliant',
        author: 'Manoush Zomorodi',
        myWeightedRating: 8,
        pages: 192,
        pubDate: 2017,
        yearRead: [2019, 2021],
        thumb: './images/bored.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'technology']
    },
    {
        title: 'The 125 Best Brain Teasers of All Time',
        author: 'Marcel Danesi',
        myWeightedRating: 5,
        pages: 206,
        pubDate: 2018,
        yearRead: [2019],
        thumb: './images/brain-teasers.jpg',
        keywords: ['puzzles', 'nonfiction']
    },
    {
        title: 'Vampire Baby',
        author: 'Marcia Thornton Jones',
        myWeightedRating: 6,
        pages: 69,
        pubDate: 1999,
        yearRead: [2001],
        thumb: './images/vamp-baby.jpg',
        keywords: ['fiction', 'bailey school kids', 'children', 'fantasy', 'mystery', 'vampires', 'female author']
    },
    {
        title: 'The Official Pokémon Handbook',
        author: 'Maria Barbo',
        myWeightedRating: 7,
        pages: 143,
        pubDate: 1999,
        yearRead: [2000],
        thumb: './images/pokemon.jpg',
        keywords: ['tv', 'movies', 'games', 'video games', 'children', 'animals', 'fiction', 'reference', 'female author']
    },
    {
        title: "Where'd You Go, Bernadette",
        author: 'Maria Semple',
        myWeightedRating: 9,
        pages: 330,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/bernadette.jpg',
        keywords: ['movies', 'fiction', 'humor', 'mystery', 'female author']
    },
    {
        title: 'Beautiful',
        author: "Marie D'Abreo",
        myWeightedRating: 4,
        pages: 134,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/beautiful.jpg',
        keywords: ['graphic novels', 'young adult', 'coming of age', 'fiction', 'female author']
    },
    {
        title: 'Legend',
        author: 'Marie Lu',
        myWeightedRating: 7,
        pages: 305,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/legend.jpg',
        keywords: ['young adult', 'fiction', 'dystopian', 'science fiction', 'romance', 'female author']
    },
    {
        title: 'Doctrine',
        author: 'Mark Driscoll',
        myWeightedRating: 8,
        pages: 463,
        pubDate: 2010,
        yearRead: [2012],
        thumb: './images/doctrine.jpg',
        keywords: ['christian', 'nonfiction', 'theology']
    },
    {
        title: 'The Radical Reformission',
        author: 'Mark Driscoll',
        myWeightedRating: 8,
        pages: 208,
        pubDate: 2004,
        yearRead: [2012],
        thumb: './images/radical-ref.jpg',
        keywords: ['christian', 'nonfiction', 'christian living']
    },
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        myWeightedRating: 7,
        pages: 224,
        pubDate: 2016,
        yearRead: [2019],
        thumb: './images/subtle-art.jpg',
        keywords: ['nonfiction', 'self-help', 'psychology']
    },
    {
        title: 'Archie, Vol. 1',
        author: 'Mark Waid',
        myWeightedRating: 6,
        pages: 160,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/archie.jpg',
        keywords: ['tv', 'graphic novels', 'young adult', 'comics', 'fiction']
    },
    {
        title: 'House of Leaves',
        author: 'Mark Z. Danielewski',
        myWeightedRating: 7,
        pages: 705,
        pubDate: 2000,
        yearRead: [2019],
        thumb: './images/house-of-leaves.jpg',
        keywords: ['experimental', 'weird', 'horror', 'fiction', 'fantasy', 'mystery', 'unreliable narrator']
    },
    {
        title: 'Manna',
        author: 'Marshall Brain',
        myWeightedRating: 8,
        pages: 79,
        pubDate: 2003,
        yearRead: [2017],
        thumb: './images/manna.jpg',
        keywords: ['fiction', 'science fiction', 'dystopian', 'short stories', 'technology']
    },
    {
        title: 'Frankenstein',
        author: 'Mary Wollstonecraft Shelley',
        myWeightedRating: 6,
        pages: 335,
        pubDate: 1818,
        yearRead: [2008],
        thumb: './images/frankenstein.jpg',
        keywords: ['fiction', 'gothic', 'horror', 'science fiction', 'movies', 'female author']
    },
    {
        title: '30 Days To Understanding the Bible',
        author: 'Max Anders',
        myWeightedRating: 7,
        pages: 305,
        pubDate: 2004,
        yearRead: [2013],
        thumb: './images/thirty-days-bible.jpg',
        keywords: ['reference', 'theology', 'christian', 'nonfiction']
    },
    {
        title: 'World War Z',
        author: 'Max Brooks',
        myWeightedRating: 6,
        pages: 342,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/wwz.jpg',
        keywords: ['fiction', 'zombies', 'horror', 'movies']
    },
    {
        title: 'How Not to Die',
        author: 'Michael Greger',
        myWeightedRating: 7,
        pages: 576,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/how-not-to-die.jpg',
        keywords: ['nonfiction', 'health', 'nutrition', 'food', 'science']
    },
    {
        title: 'Stupid White Men',
        author: 'Michael Moore',
        myWeightedRating: 6,
        pages: 304,
        pubDate: 2001,
        yearRead: [2008],
        thumb: './images/stupid-white-men.jpg',
        keywords: ['nonfiction', 'politics', 'humor', 'historical', 'america']
    },
    {
        title: 'Food Rules',
        author: 'Michael Pollan',
        myWeightedRating: 8,
        pages: 152,
        pubDate: 2009,
        yearRead: [2020],
        thumb: './images/food-rules.jpg',
        keywords: ['nonfiction', 'nutrition', 'food']
    },
    {
        title: 'Mean Girls',
        author: 'Micol Ostow',
        myWeightedRating: 7,
        pages: 283,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/mean-girls.jpg',
        keywords: ['movies', 'young adult', 'humor', 'fiction', 'romance', 'female author']
    },
    {
        title: "Dungeon Master's Guide",
        author: 'Mike Mearls',
        myWeightedRating: 8,
        pages: 320,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/dmg.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy']
    },
    {
        title: 'The Kobold Guide to Board Game Design',
        author: 'Mike Selinker',
        myWeightedRating: 9,
        pages: 138,
        pubDate: 2011,
        yearRead: [2015],
        thumb: './images/kobold-bgs.jpg',
        keywords: ['essays', 'nonfiction', 'game design', 'games', 'tabletop games']
    },
    {
        title: "Shirley Jackson's The Lottery: The Authorized Graphic Adaptation",
        author: 'Miles Hyman',
        myWeightedRating: 5,
        pages: 160,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/lottery-graphic.jpg',
        keywords: ['graphic novels', 'short stories', 'horror', 'fiction', 'dystopian']
    },
    {
        title: "AsapSCIENCE",
        author: 'Mitchell Moffit',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 2015,
        yearRead: [2021],
        thumb: './images/asapscience.jpg',
        keywords: ['nonfiction', 'reference', 'science', 'humor']
    },
    /*===========================
    	Author First Name - N's
    ===========================*/
    {
        title: 'Scythe',
        author: 'Neal Shusterman',
        myWeightedRating: 9,
        pages: 435,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/scythe1.jpg',
        keywords: ['young adult', 'dystopian', 'death', 'fiction', 'fantasy', 'romance']
    },
    {
        title: 'Thunderhead',
        author: 'Neal Shusterman',
        myWeightedRating: 10,
        pages: 504,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/scythe2.jpg',
        keywords: ['young adult', 'dystopian', 'death', 'fiction', 'fantasy', 'romance']
    },
    {
        title: 'The Toll',
        author: 'Neal Shusterman',
        myWeightedRating: 9,
        pages: 625,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/scythe3.jpg',
        keywords: ['young adult', 'dystopian', 'death', 'fiction', 'fantasy', 'romance']
    },
    {
        title: 'Neverwhere (London Below, #1)',
        author: 'Neil Gaiman',
        myWeightedRating: 6,
        pages: 370,
        pubDate: 1996,
        yearRead: [2018],
        thumb: './images/neverwhere.jpg',
        keywords: ['fantasy', 'fiction', 'horror', 'adventure']
    },
    {
        title: 'Good Omens',
        author: 'Neil Gaiman',
        myWeightedRating: 5,
        pages: 491,
        pubDate: 2006,
        yearRead: [2020],
        thumb: './images/good-omens.jpg',
        keywords: ['tv', 'fantasy', 'apocalyptic', 'humor', 'fiction']
    },
    {
        title: 'Coraline',
        author: 'Neil Gaiman',
        myWeightedRating: 6,
        pages: 162,
        pubDate: 2002,
        yearRead: [2018],
        thumb: './images/coraline.jpg',
        keywords: ['movies', 'horror', 'fiction', 'fantasy', 'young adult']
    },
    {
        title: 'The Graveyard Book',
        author: 'Neil Gaiman',
        myWeightedRating: 7,
        pages: 307,
        pubDate: 2008,
        yearRead: [2018],
        thumb: './images/graveyard-book.jpg',
        keywords: ['horror', 'fiction', 'fantasy', 'children', 'ghosts']
    },
    {
        title: 'Victory Over the Darkness',
        author: 'Neil T. Anderson',
        myWeightedRating: 4,
        pages: 256,
        pubDate: 1990,
        yearRead: [2014],
        thumb: './images/victory-over-darkness.jpg',
        keywords: ['nonfiction', 'christian', 'christian living']
    },
    {
        title: 'Fantastic Beasts and Where to Find Them',
        author: 'Newt Scamander',
        myWeightedRating: 7,
        pages: 128,
        pubDate: 2001,
        yearRead: [2001, 2016, 2021],
        thumb: './images/fantastic-beasts.jpg',
        keywords: ['harry potter', 'children', 'reference', 'animals', 'fantasy', 'magic', 'fiction', 'movies', 'female author']
    },
    {
        title: 'Everything, Everything',
        author: 'Nicola Yoon',
        myWeightedRating: 7,
        pages: 306,
        pubDate: 2015,
        yearRead: [2018],
        thumb: './images/everything.jpg',
        keywords: ['fiction', 'young adult', 'sickness', 'romance', 'coming of age', 'weird', 'movies', 'female author']
    },
    /*===========================
    	Author First Name - O's
    ===========================*/
    {
        title: 'Cold Sassy Tree',
        author: 'Olive Ann Burns',
        myWeightedRating: 6,
        pages: 391,
        pubDate: 1984,
        yearRead: [2004],
        thumb: './images/sassy-tree.jpg',
        keywords: ['fiction', 'historical', 'southern', 'coming of age', 'female author']
    },
    {
        title: 'Ender’s Game',
        author: 'Orson Scott Card',
        myWeightedRating: 6,
        pages: 324,
        pubDate: 1985,
        yearRead: [2004],
        thumb: './images/enders-game.jpg',
        keywords: ['movies', 'fiction', 'aliens', 'young adult', 'space', 'war', 'science fiction']
    },
    {
        title: 'The Canterville Ghost',
        author: 'Oscar Wilde',
        myWeightedRating: 7,
        pages: 126,
        pubDate: 1887,
        yearRead: [2021],
        thumb: './images/canterville.jpg',
        keywords: ['horror', 'fiction', 'humor', 'gothic', 'ghosts']
    },
    /*===========================
    	Author First Name - P's
    ===========================*/
    {
        title: 'The Windup Girl',
        author: 'Paolo Bacigalupi',
        myWeightedRating: 5,
        pages: 359,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/windup-girl.jpg',
        keywords: ['science fiction', 'fiction', 'dystopian', 'steampunk']
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        myWeightedRating: 10,
        pages: 722,
        pubDate: 2007,
        yearRead: [2020],
        thumb: './images/name-of-wind.jpg',
        keywords: ['fantasy', 'fiction', 'magic', 'music', 'adventure', 'high fantasy']
    },
    {
        title: "The Wise Man's Fear",
        author: 'Patrick Rothfuss',
        myWeightedRating: 10,
        pages: 1107,
        pubDate: 2011,
        yearRead: [2020],
        thumb: './images/name-of-wind2.jpg',
        keywords: ['fantasy', 'fiction', 'magic', 'music', 'adventure', 'high fantasy', 'fairies']
    },
    {
        title: 'Rick and Morty vs. Dungeons & Dragons',
        author: 'Patrick Rothfuss',
        myWeightedRating: 9,
        pages: 96,
        pubDate: 2019,
        yearRead: [2020],
        thumb: './images/rick-morty-vs-dnd.jpg',
        keywords: ['tv', 'humor', 'dnd', 'comics', 'graphic novels', 'fantasy', 'science fiction']
    },
    {
        title: 'The Heavenly Man',
        author: 'Paul Hattaway',
        myWeightedRating: 6,
        pages: 351,
        pubDate: 2000,
        yearRead: [2015],
        thumb: './images/heavenly-man.jpg',
        keywords: ['china', 'nonfiction', 'biography', 'christian']
    },
    {
        title: 'The Girl on the Train',
        author: 'Paula Hawkins',
        myWeightedRating: 7,
        pages: 325,
        pubDate: 2015,
        yearRead: [2016],
        thumb: './images/girl-on-train.jpg',
        keywords: ['mystery', 'fiction', 'crime', 'thriller', 'suspense', 'movies', 'unreliable narrator', 'female author']
    },
    {
        title: 'Liverpool FC',
        author: 'Paula Wilson',
        myWeightedRating: 6,
        pages: 32,
        pubDate: 2018,
        yearRead: [2020],
        thumb: './images/liverpool.jpg',
        keywords: ['nonfiction', 'sports', 'soccer', 'reference', 'female author']
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        myWeightedRating: 5,
        pages: 197,
        pubDate: 1988,
        yearRead: [2018],
        thumb: './images/alchemist.jpg',
        keywords: ['fiction', 'fantasy', 'philosophy']
    },
    {
        title: 'The Good Earth',
        author: 'Pearl S. Buck',
        myWeightedRating: 5,
        pages: 418,
        pubDate: 1931,
        yearRead: [2006],
        thumb: './images/good-earth.jpg',
        keywords: ['fiction', 'historical', 'china', 'movies', 'female author']
    },
    {
        title: 'Shortest Way Home',
        author: 'Pete Buttigieg',
        myWeightedRating: 6,
        pages: 352,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/shortest-way-home.jpg',
        keywords: ['nonfiction', 'memoir', 'politics', 'lgbt']
    },
    {
        title: '30 Years of Adventure: A Celebration of Dungeons & Dragons',
        author: 'Peter Archer',
        myWeightedRating: 5,
        pages: 286,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/thirty-years.jpg',
        keywords: ['dnd', 'nonfiction', 'biography', 'games', 'tabletop games']
    },
    {
        title: '1001 Books You Must Read Before You Die',
        author: 'Peter Boxall',
        myWeightedRating: 5,
        pages: 960,
        pubDate: 2006,
        yearRead: [2017],
        thumb: './images/thousand-one-books.jpg',
        keywords: ['nonfiction', 'reference']
    },
    {
        title: 'Adjustment Team',
        author: 'Philip K Dick',
        myWeightedRating: 6,
        pages: 44,
        pubDate: 1954,
        yearRead: [2021],
        thumb: './images/adjustment-team.jpg',
        keywords: ['fiction', 'movies', 'science fiction', 'short stories']
    },
    {
        title: 'Resident Evil',
        author: 'Philip Reed',
        myWeightedRating: 7,
        pages: 192,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/resident-evil.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'biography', 'boss fight books']
    },
    {
        title: 'Hidden Codes & Grand Designs',
        author: 'Pierre Berloquin',
        myWeightedRating: 6,
        pages: 375,
        pubDate: 2007,
        yearRead: [2014],
        thumb: './images/hidden-codes.jpg',
        keywords: ['nonfiction', 'historical', 'science']
    },
    /*===========================
    	Author First Name - Q's
    ===========================*/
    /*===========================
    	Author First Name - R's
    ===========================*/
    {
        title: 'Dr. Maniac Will See You Now',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 160,
        pubDate: 2013,
        yearRead: [2017],
        thumb: './images/dr-maniac.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'Dr. Maniac vs. Robby Schwartz',
        author: 'R.L. Stine',
        myWeightedRating: 3,
        pages: 132,
        pubDate: 2008,
        yearRead: [2017],
        thumb: './images/dr-maniac-vs.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'Welcome To Camp Slither',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 133,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/camp-slither.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'camps']
    },
    {
        title: 'Little Shop of Hamsters',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 135,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/little-shop-hamsters.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'When The Ghost Dog Howls',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 137,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/ghost-dog-howls.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'ghosts']
    },
    {
        title: 'Slappy Birthday to You',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 139,
        pubDate: 2017,
        yearRead: [2017],
        thumb: './images/slappy-birthday.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'Slappy New Year!',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 160,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/slappy-new-year.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'It Came from Beneath the Sink!',
        author: 'R.L. Stine',
        myWeightedRating: 6,
        pages: 112,
        pubDate: 1995,
        yearRead: [2016],
        thumb: './images/it-came-from-beneath.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv']
    },
    {
        title: 'Werewolf Skin',
        author: 'R.L. Stine',
        myWeightedRating: 7,
        pages: 125,
        pubDate: 1997,
        yearRead: [2015],
        thumb: './images/werewolf-skin.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'werewolves', 'tv']
    },
    {
        title: 'Say Cheese and Die!',
        author: 'R.L. Stine',
        myWeightedRating: 7,
        pages: 144,
        pubDate: 1992,
        yearRead: [1999],
        thumb: './images/say-cheese-die.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv']
    },
    {
        title: 'Say Cheese - And Die Screaming',
        author: 'R.L. Stine',
        myWeightedRating: 5,
        pages: 125,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/say-cheese-die-screaming.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'Welcome to Dead House',
        author: 'R.L. Stine',
        myWeightedRating: 7,
        pages: 126,
        pubDate: 1992,
        yearRead: [2017],
        thumb: './images/dead-house.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'ghosts', 'tv']
    },
    {
        title: 'Escape From Horrorland',
        author: 'R.L. Stine',
        myWeightedRating: 5,
        pages: 132,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/escape-horrorland.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: "Who's Your Mummy?",
        author: 'R.L. Stine',
        myWeightedRating: 5,
        pages: 133,
        pubDate: 2009,
        yearRead: [2017],
        thumb: './images/whos-your-mummy.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'Creature Teacher: The Final Exam',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 133,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/creature-teacher.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'Night of the Living Dummy',
        author: 'R.L. Stine',
        myWeightedRating: 7,
        pages: 134,
        pubDate: 1993,
        yearRead: [2017],
        thumb: './images/night-living-dummy.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'My Friends Call Me Monster',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 138,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/friends-call-me-monster.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'One Day at Horrorland',
        author: 'R.L. Stine',
        myWeightedRating: 7,
        pages: 123,
        pubDate: 1994,
        yearRead: [2006],
        thumb: './images/horrorland.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv']
    },
    {
        title: 'Stay Out of the Basement',
        author: 'R.L. Stine',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1992,
        yearRead: [2017],
        thumb: './images/stay-out-basement.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'tv']
    },
    {
        title: "The Curse of the Mummy's Tomb",
        author: 'R.L. Stine',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1993,
        yearRead: [2017],
        thumb: './images/curse-of-mummy.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'The Horror At Chiller House',
        author: 'R.L. Stine',
        myWeightedRating: 5,
        pages: 160,
        pubDate: 2011,
        yearRead: [2017],
        thumb: './images/chiller-house.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror']
    },
    {
        title: 'The 12 Screams of Christmas',
        author: 'R.L. Stine',
        myWeightedRating: 6,
        pages: 174,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/twelve-screams.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'christmas']
    },
    {
        title: 'Zombie Halloween',
        author: 'R.L. Stine',
        myWeightedRating: 6,
        pages: 174,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/zombie-halloween.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'zombies', 'halloween']
    },
    {
        title: 'Weirdo Halloween',
        author: 'R.L. Stine',
        myWeightedRating: 4,
        pages: 214,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/weirdo-halloween.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'halloween']
    },
    {
        title: 'Creepy Creatures',
        author: 'R.L. Stine',
        myWeightedRating: 5,
        pages: 144,
        pubDate: 2006,
        yearRead: [2017],
        thumb: './images/creepy-creatures.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'graphic novels']
    },
    {
        title: 'Terror Trips',
        author: 'R.L. Stine',
        myWeightedRating: 5,
        pages: 144,
        pubDate: 2007,
        yearRead: [2017],
        thumb: './images/terror-trips.jpg',
        keywords: ['goosebumps', 'fiction', 'children', 'horror', 'graphic novels']
    },
    {
        title: '2,000 to 10,000',
        author: 'Rachel Aaron',
        myWeightedRating: 6,
        pages: 72,
        pubDate: 2012,
        yearRead: [2018],
        thumb: './images/two-thousand.jpg',
        keywords: ['nonfiction', 'writing', 'reference', 'female author']
    },
    {
        title: 'Less: A Visual Guide to Minimalism',
        author: 'Rachel Aust',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2018,
        yearRead: [2018],
        thumb: './images/less.jpg',
        keywords: ['nonfiction', 'minimalism', 'self-help', 'female author']
    },
    {
        title: "Nick & Norah's Infinite Playlist",
        author: 'Rachel Cohn',
        myWeightedRating: 8,
        pages: 183,
        pubDate: 2006,
        yearRead: [2015, 2018],
        thumb: './images/nick-norah.jpg',
        keywords: ['movies', 'fiction', 'young adult', 'romance', 'music', 'female author']
    },
    {
        title: "Dot Journaling",
        author: 'Rachel Miller',
        myWeightedRating: 6,
        pages: 241,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/dot-journaling.jpg',
        keywords: ['nonfiction', 'writing', 'self-help', 'reference', 'productivity', 'female author']
    },
    {
        title: 'Ghosts',
        author: 'Raina Telgemeier',
        myWeightedRating: 7,
        pages: 256,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/ghosts.jpg',
        keywords: ['ghosts', 'graphic novels', 'children', 'fantasy', 'fiction', 'sickness', 'female author']
    },
    {
        title: 'Landline',
        author: 'Rainbow Rowell',
        myWeightedRating: 7,
        pages: 310,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/landline.jpg',
        keywords: ['romance', 'weird', 'fantasy', 'fiction', 'time travel', 'female author']
    },
    {
        title: 'Attachments',
        author: 'Rainbow Rowell',
        myWeightedRating: 7,
        pages: 323,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/attachments.jpg',
        keywords: ['fiction', 'romance', 'humor', 'female author']
    },
    {
        title: 'Eleanor & Park',
        author: 'Rainbow Rowell',
        myWeightedRating: 7,
        pages: 328,
        pubDate: 2012,
        yearRead: [2016],
        thumb: './images/eleanor-park.jpg',
        keywords: ['fiction', 'romance', 'young adult', 'coming of age', 'female author']
    },
    {
        title: 'Fangirl',
        author: 'Rainbow Rowell',
        myWeightedRating: 9,
        pages: 483,
        pubDate: 2013,
        yearRead: [2016],
        thumb: './images/fangirl.jpg',
        keywords: ['fiction', 'young adult', 'schools', 'romance', 'coming of age', 'female author']
    },
    {
        title: 'Carry On',
        author: 'Rainbow Rowell',
        myWeightedRating: 8,
        pages: 522,
        pubDate: 2015,
        yearRead: [2016, 2018],
        thumb: './images/carry-on1.jpg',
        keywords: ['young adult', 'fiction', 'fantasy', 'lgbt', 'magic', 'vampires', 'romance', 'wizards', 'witches', 'female author']
    },
    {
        title: 'Wayward Son',
        author: 'Rainbow Rowell',
        myWeightedRating: 8,
        pages: 356,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/carry-on2.jpg',
        keywords: ['young adult', 'fiction', 'fantasy', 'lgbt', 'magic', 'vampires', 'romance', 'wizards', 'witches', 'adventure', 'female author']
    },
    {
        title: 'Kindred Spirits',
        author: 'Rainbow Rowell',
        myWeightedRating: 7,
        pages: 96,
        pubDate: 2016,
        yearRead: [2021],
        thumb: './images/kindred-spirits.jpg',
        keywords: ['fiction', 'young adult', 'romance', 'short stories', 'female author']
    },
    {
        title: 'Thing Explainer: Complicated Stuff in Simple Words',
        author: 'Randall Munroe',
        myWeightedRating: 8,
        pages: 64,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/thing-explainer.jpg',
        keywords: ['nonfiction', 'reference', 'science', 'humor', 'graphic novels']
    },
    {
        title: 'What If? Serious Scientific Answers to Absurd Hypothetical Questions',
        author: 'Randall Munroe',
        myWeightedRating: 8,
        pages: 303,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/what-if.jpg',
        keywords: ['nonfiction', 'reference', 'science', 'humor']
    },
    {
        title: 'Money, Possessions and Eternity',
        author: 'Randy Alcorn',
        myWeightedRating: 6,
        pages: 528,
        pubDate: 1989,
        yearRead: [2015],
        thumb: './images/money-eternity.jpg',
        keywords: ['nonfiction', 'money', 'christian', 'christian living']
    },
    {
        title: 'The Treasure Principle: Unlocking the Secret of Joyful Giving',
        author: 'Randy Alcorn',
        myWeightedRating: 8,
        pages: 120,
        pubDate: 2001,
        yearRead: [2013],
        thumb: './images/treasure-principle.jpg',
        keywords: ['nonfiction', 'money', 'christian', 'christian living']
    },
    {
        title: 'Safely Home',
        author: 'Randy Alcorn',
        myWeightedRating: 8,
        pages: 402,
        pubDate: 2001,
        yearRead: [2013],
        thumb: './images/safely-home.jpg',
        keywords: ['fiction', 'china', 'christian', 'historical']
    },
    {
        title: 'How to be Miserable',
        author: 'Randy Paterson',
        myWeightedRating: 5,
        pages: 248,
        pubDate: 2016,
        yearRead: [2020],
        thumb: './images/miserable.jpg',
        keywords: ['nonfiction', 'humor', 'self-help', 'psychology']
    },
    {
        title: 'Miss Peregrine’s Home for Peculiar Children',
        author: 'Ransom Riggs',
        myWeightedRating: 6,
        pages: 382,
        pubDate: 2011,
        yearRead: [2015],
        thumb: './images/peregrine.jpg',
        keywords: ['fiction', 'fantasy', 'young adult', 'time travel', 'adventure', 'mystery', 'horror', 'movies']
    },
    {
        title: 'Welcome to the Club',
        author: "Raquel D'Apice",
        myWeightedRating: 7,
        pages: 144,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/welcome-to-club.jpg',
        keywords: ['nonfiction', 'parenting', 'humor', 'female author']
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        myWeightedRating: 7,
        pages: 180,
        pubDate: 1953,
        yearRead: [2015],
        thumb: './images/f451.jpg',
        keywords: ['fiction', 'movies', 'dystopian']
    },
    {
        title: 'Cemetery Dance: Issue 74-75',
        author: 'Richard Chizmar',
        myWeightedRating: 4,
        pages: 192,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/cemetary-dance.jpg',
        keywords: ['fiction', 'horror', 'short stories']
    },
    {
        title: 'The Most Dangerous Game',
        author: 'Richard Connell',
        myWeightedRating: 7,
        pages: 59,
        pubDate: 1924,
        yearRead: [2021],
        thumb: './images/most-dangerous.jpg',
        keywords: ['short stories', 'fiction', 'horror', 'thriller']
    },
    {
        title: 'Celebration of Discipline',
        author: 'Richard J. Foster',
        myWeightedRating: 8,
        pages: 256,
        pubDate: 1978,
        yearRead: [2014],
        thumb: './images/celebration-of-disc.jpg',
        keywords: ['christian', 'nonfiction', 'christian living', 'habits']
    },
    {
        title: 'I Am Legend',
        author: 'Richard Matheson',
        myWeightedRating: 7,
        pages: 160,
        pubDate: 1954,
        yearRead: [2016],
        thumb: './images/i-am-legend.jpg',
        keywords: ['movies', 'fiction', 'vampires', 'horror', 'apocalyptic']
    },
    {
        title: 'Vampire Academy',
        author: 'Richelle Mead',
        myWeightedRating: 9,
        pages: 332,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/vamp-academy1.jpg',
        keywords: ['movies', 'fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'schools', 'female author']
    },
    {
        title: 'Frostbite',
        author: 'Richelle Mead',
        myWeightedRating: 8,
        pages: 327,
        pubDate: 2008,
        yearRead: [2016],
        thumb: './images/vamp-academy2.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author']
    },
    {
        title: 'Shadow Kiss',
        author: 'Richelle Mead',
        myWeightedRating: 8,
        pages: 443,
        pubDate: 2008,
        yearRead: [2016],
        thumb: './images/vamp-academy3.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author']
    },
    {
        title: 'Blood Promise',
        author: 'Richelle Mead',
        myWeightedRating: 8,
        pages: 503,
        pubDate: 2009,
        yearRead: [2016],
        thumb: './images/vamp-academy4.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author']
    },
    {
        title: 'Spirit Bound',
        author: 'Richelle Mead',
        myWeightedRating: 8,
        pages: 489,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/vamp-academy5.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author']
    },
    {
        title: 'Last Sacrifice',
        author: 'Richelle Mead',
        myWeightedRating: 8,
        pages: 594,
        pubDate: 2010,
        yearRead: [2016],
        thumb: './images/vamp-academy6.jpg',
        keywords: ['fiction', 'vampires', 'horror', 'romance', 'young adult', 'fantasy', 'female author']
    },
    {
        title: 'The Final Quest',
        author: 'Rick Joyner',
        myWeightedRating: 5,
        pages: 170,
        pubDate: 1996,
        yearRead: [2014],
        thumb: './images/final-quest.jpg',
        keywords: ['fiction', 'christian']
    },
    {
        title: 'The Lightning Thief',
        author: 'Rick Riordan',
        myWeightedRating: 7,
        pages: 375,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/percy-jackson1.jpg',
        keywords: ['fiction', 'mythology', 'young adult', 'fantasy', 'adventure', 'movies']
    },
    {
        title: 'The 5th Wave',
        author: 'Rick Yancey',
        myWeightedRating: 6,
        pages: 460,
        pubDate: 2013,
        yearRead: [2015],
        thumb: './images/the-5th-wave.jpg',
        keywords: ['fiction', 'aliens', 'apocalyptic', 'young adult', 'movies', 'romance', 'fantasy']
    },
    {
        title: 'Slay the Dragon',
        author: 'Robert Denton Bryant',
        myWeightedRating: 7,
        pages: 232,
        pubDate: 2015,
        yearRead: [2017],
        thumb: './images/slay-dragon.jpg',
        keywords: ['nonfiction', 'game design', 'video games', 'writing', 'games']
    },
    {
        title: 'Outcast by Kirkman & Azaceta Book 1',
        author: 'Robert Kirkman',
        myWeightedRating: 4,
        pages: 296,
        pubDate: 2016,
        yearRead: [2017],
        thumb: './images/outcast.jpg',
        keywords: ['fiction', 'graphic novels', 'horror', 'tv']
    },
    {
        title: 'The Walking Dead, Vol. 1',
        author: 'Robert Kirkman',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2004,
        yearRead: [2016],
        thumb: './images/walking-dead1.jpg',
        keywords: ['tv', 'graphic novels', 'horror', 'fiction', 'zombies', 'apocalyptic']
    },
    {
        title: 'Rich Dad, Poor Dad',
        author: 'Robert Kiyosaki',
        myWeightedRating: 9,
        pages: 195,
        pubDate: 1997,
        yearRead: [2020],
        thumb: './images/rich-dad-poor-dad.jpg',
        keywords: ['nonfiction', 'personal finance', 'money', 'memoir']
    },
    {
        title: 'Good Luck Have Fun',
        author: 'Roland Li',
        myWeightedRating: 6,
        pages: 268,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/good-luck-have-fun.jpg',
        keywords: ['nonfiction', 'sports', 'games', 'video games']
    },
    {
        title: 'The Deadly Dungeon',
        author: 'Ron Roy',
        myWeightedRating: 5,
        pages: 86,
        pubDate: 1998,
        yearRead: [2000],
        thumb: './images/deadly-dungeon.jpg',
        keywords: ['fiction', 'children', 'mystery']
    },
    {
        title: 'The Invisible Island',
        author: 'Ron Roy',
        myWeightedRating: 5,
        pages: 96,
        pubDate: 1999,
        yearRead: [2000],
        thumb: './images/invisible-island.jpg',
        keywords: ['fiction', 'children', 'mystery']
    },
    {
        title: 'The Missing Mummy',
        author: 'Ron Roy',
        myWeightedRating: 5,
        pages: 83,
        pubDate: 2001,
        yearRead: [2001],
        thumb: './images/missing-mummy.jpg',
        keywords: ['fiction', 'children', 'mystery']
    },
    {
        title: 'The Big Book of 30-Day Challenges',
        author: 'Rosanna Casper',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/book-of-30-day.jpg',
        keywords: ['nonfiction', 'habits', 'self-help', 'female author']
    },
    {
        title: 'Milk and Honey',
        author: 'Rupi Kaur',
        myWeightedRating: 5,
        pages: 204,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/milk-and-honey.jpg',
        keywords: ['nonfiction', 'poetry', 'feminism', 'mental health', 'female author']
    },
    {
        title: 'Play Dead',
        author: 'Ryan Brown',
        myWeightedRating: 6,
        pages: 352,
        pubDate: 2010,
        yearRead: [2010],
        thumb: './images/play-dead.jpg',
        keywords: ['fiction', 'sports', 'zombies', 'football', 'horror', 'humor']
    },
    /*===========================
    	Author First Name - S's
    ===========================*/
    {
        title: 'The Umbrella Conspiracy',
        author: 'S.D. Perry',
        myWeightedRating: 7,
        pages: 304,
        pubDate: 1998,
        yearRead: [2003],
        thumb: './images/resident-evil1.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author']
    },
    {
        title: 'Caliban Cove',
        author: 'S.D. Perry',
        myWeightedRating: 6,
        pages: 256,
        pubDate: 1998,
        yearRead: [2003],
        thumb: './images/resident-evil2.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author']
    },
    {
        title: 'City of the Dead',
        author: 'S.D. Perry',
        myWeightedRating: 7,
        pages: 352,
        pubDate: 1999,
        yearRead: [2003],
        thumb: './images/resident-evil3.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author']
    },
    {
        title: 'Underworld',
        author: 'S.D. Perry',
        myWeightedRating: 6,
        pages: 256,
        pubDate: 1999,
        yearRead: [2004],
        thumb: './images/resident-evil4.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author']
    },
    {
        title: 'Nemesis',
        author: 'S.D. Perry',
        myWeightedRating: 7,
        pages: 288,
        pubDate: 2000,
        yearRead: [2004],
        thumb: './images/resident-evil5.jpg',
        keywords: ['fiction', 'video games', 'horror', 'zombies', 'female author']
    },
    {
        title: 'Rumble Fish',
        author: 'S.E. Hinton',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 1975,
        yearRead: [2002],
        thumb: './images/rumble-fish.jpg',
        keywords: ['fiction', 'young adult', 'coming of age', 'female author']
    },
    {
        title: 'Scene but Not Heard',
        author: 'Sam Henderson',
        myWeightedRating: 4,
        pages: 119,
        pubDate: 2013,
        yearRead: [2018],
        thumb: './images/scene-not-heard.jpg',
        keywords: ['fiction', 'comics', 'humor']
    },
    {
        title: 'Pretty Little Liars',
        author: 'Sara Shepard',
        myWeightedRating: 8,
        pages: 286,
        pubDate: 2006,
        yearRead: [2018],
        thumb: './images/pretty-little-liars1.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Flawless',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 330,
        pubDate: 2007,
        yearRead: [2018],
        thumb: './images/pretty-little-liars2.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Perfect',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 298,
        pubDate: 2007,
        yearRead: [2020],
        thumb: './images/pretty-little-liars3.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Unbelievable',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 335,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/pretty-little-liars4.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Wicked',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 312,
        pubDate: 2008,
        yearRead: [2020],
        thumb: './images/pretty-little-liars5.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Killer',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 320,
        pubDate: 2009,
        yearRead: [2020],
        thumb: './images/pretty-little-liars6.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Heartless',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 274,
        pubDate: 2010,
        yearRead: [2020],
        thumb: './images/pretty-little-liars7.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: 'Wanted',
        author: 'Sara Shepard',
        myWeightedRating: 7,
        pages: 261,
        pubDate: 2010,
        yearRead: [2020],
        thumb: './images/pretty-little-liars8.jpg',
        keywords: ['tv', 'young adult', 'fiction', 'mystery', 'romance', 'female author']
    },
    {
        title: "Rick and Morty: Lil' Poopy Superstar",
        author: 'Sarah Graley',
        myWeightedRating: 7,
        pages: 128,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/rick-morty-poopy.jpg',
        keywords: ['fiction', 'tv', 'comics', 'science fiction', 'graphic novels', 'humor', 'female author']
    },
    {
        title: 'Level Up!: The Guide to Great Video Game Design',
        author: 'Scott Rogers',
        myWeightedRating: 9,
        pages: 492,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/level-up.jpg',
        keywords: ['nonfiction', 'game design', 'video games', 'games', 'reference']
    },
    {
        title: 'Uglies',
        author: 'Scott Westerfeld',
        myWeightedRating: 7,
        pages: 425,
        pubDate: 2005,
        yearRead: [2015, 2018],
        thumb: './images/uglies1.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird']
    },
    {
        title: 'Pretties',
        author: 'Scott Westerfeld',
        myWeightedRating: 6,
        pages: 370,
        pubDate: 2005,
        yearRead: [2015],
        thumb: './images/uglies2.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird']
    },
    {
        title: 'Specials',
        author: 'Scott Westerfeld',
        myWeightedRating: 6,
        pages: 372,
        pubDate: 2006,
        yearRead: [2015],
        thumb: './images/uglies3.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird']
    },
    {
        title: 'Extras',
        author: 'Scott Westerfeld',
        myWeightedRating: 6,
        pages: 417,
        pubDate: 2006,
        yearRead: [2015],
        thumb: './images/uglies4.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'weird']
    },
    {
        title: 'Uglies: Cutters',
        author: 'Scott Westerfeld',
        myWeightedRating: 4,
        pages: 176,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/uglies-graphic2.jpg',
        keywords: ['fiction', 'young adult', 'dystopian', 'romance', 'science fiction', 'graphic novels', 'weird']
    },
    {
        title: 'Abraham Lincoln: Vampire Hunter',
        author: 'Seth Grahame-Smith',
        myWeightedRating: 6,
        pages: 336,
        pubDate: 2010,
        yearRead: [2013],
        thumb: './images/abe-lincoln-vamp.jpg',
        keywords: ['movies', 'fiction', 'vampires', 'presidents', 'historical', 'alternate history', 'fantasy']
    },
    {
        title: 'Smartcuts',
        author: 'Shane Snow',
        myWeightedRating: 6,
        pages: 272,
        pubDate: 2014,
        yearRead: [2018],
        thumb: './images/smartcuts.jpg',
        keywords: ['nonfiction', 'business', 'self-help', 'productivity']
    },
    {
        title: 'Kicking It',
        author: 'Shanna Germain',
        myWeightedRating: 6,
        pages: 79,
        pubDate: 2012,
        yearRead: [2019],
        thumb: './images/kicking-it.jpg',
        keywords: ['nonfiction', 'business', 'female author']
    },
    {
        title: 'Where the Sidewalk Ends',
        author: 'Shel Silverstein',
        myWeightedRating: 7,
        pages: 176,
        pubDate: 1974,
        yearRead: [2000],
        thumb: './images/where-sidewalk-ends.jpg',
        keywords: ['children', 'fiction', 'poetry', 'humor']
    },
    {
        title: 'Fallin Up',
        author: 'Shel Silverstein',
        myWeightedRating: 7,
        pages: 178,
        pubDate: 1996,
        yearRead: [2000],
        thumb: './images/falling-up.jpg',
        keywords: ['children', 'fiction', 'poetry', 'humor']
    },
    {
        title: 'A Light in the Attic',
        author: 'Shel Silverstein',
        myWeightedRating: 7,
        pages: 176,
        pubDate: 1981,
        yearRead: [2001],
        thumb: './images/light-in-attic.jpg',
        keywords: ['children', 'fiction', 'poetry', 'humor']
    },
    {
        title: 'The Absolutely True Diary of a Part-Time Indian',
        author: 'Sherman Alexie',
        myWeightedRating: 7,
        pages: 230,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/part-time-indian.jpg',
        keywords: ['fiction', 'young adult', 'race', 'humor', 'coming of age']
    },
    {
        title: 'Lean In',
        author: 'Sheryl Sandberg',
        myWeightedRating: 7,
        pages: 217,
        pubDate: 2013,
        yearRead: [2017],
        thumb: './images/lean-in.jpg',
        keywords: ['nonfiction', 'business', 'feminism', 'self-help', 'leadership', 'female author']
    },
    {
        title: 'The Montessori Toddler',
        author: 'Simone Davies',
        myWeightedRating: 8,
        pages: 245,
        pubDate: 2018,
        yearRead: [2021],
        thumb: './images/montessori.jpg',
        keywords: ['nonfiction', 'parenting', 'female author']
    },
    {
        title: 'Who Moved My Cheese?',
        author: 'Spencer Johnson',
        myWeightedRating: 7,
        pages: 96,
        pubDate: 1998,
        yearRead: [2020],
        thumb: './images/who-moved-cheese.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help', 'business']
    },
    {
        title: 'My True Love Gave to Me',
        author: 'Stephanie Perkins',
        myWeightedRating: 6,
        pages: 321,
        pubDate: 2014,
        yearRead: [2017],
        thumb: './images/my-true-love.jpg',
        keywords: ['christmas', 'short stories', 'fiction', 'young adult', 'romance', 'female author']
    },
    {
        title: "There's Someone Inside Your House",
        author: 'Stephanie Perkins',
        myWeightedRating: 7,
        pages: 287,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/someone-inside-house.jpg',
        keywords: ['fiction', 'horror', 'young adult', 'mystery', 'thriller', 'female author']
    },
    {
        title: 'The Perks of Being a Wallflower',
        author: 'Stephen Chbosky',
        myWeightedRating: 7,
        pages: 213,
        pubDate: 1999,
        yearRead: [2017],
        thumb: './images/perks-wallflower.jpg',
        keywords: ['movies', 'lgbt', 'fiction', 'young adult', 'coming of age', 'mental health', 'romance']
    },
    {
        title: 'I Am America (And So Can You!)',
        author: 'Stephen Colbert',
        myWeightedRating: 7,
        pages: 230,
        pubDate: 2007,
        yearRead: [2016],
        thumb: './images/i-am-america.jpg',
        keywords: ['nonfiction', 'humor', 'politics']
    },
    {
        title: 'The Red Badge of Courage',
        author: 'Stephen Crane',
        myWeightedRating: 3,
        pages: 170,
        pubDate: 1895,
        yearRead: [2005],
        thumb: './images/red-badge.jpg',
        keywords: ['fiction', 'war', 'historical', 'america']
    },
    {
        title: 'The Green Mile, Part 1',
        author: 'Stephen King',
        myWeightedRating: 6,
        pages: 92,
        pubDate: 1996,
        yearRead: [2019],
        thumb: './images/green-mile1.jpg',
        keywords: ['fiction', 'horror', 'thriller', 'crime', 'mystery', 'short stories']
    },
    {
        title: 'The Gunslinger',
        author: 'Stephen King',
        myWeightedRating: 5,
        pages: 231,
        pubDate: 1982,
        yearRead: [2019],
        thumb: './images/gunslinger.jpg',
        keywords: ['fiction', 'fantasy', 'horror', 'western', 'adventure']
    },
    {
        title: 'Carrie',
        author: 'Stephen King',
        myWeightedRating: 6,
        pages: 253,
        pubDate: 1974,
        yearRead: [2018],
        thumb: './images/carrie.jpg',
        keywords: ['fiction', 'horror', 'schools', 'thriller']
    },
    {
        title: 'The Shining',
        author: 'Stephen King',
        myWeightedRating: 8,
        pages: 659,
        pubDate: 1977,
        yearRead: [2018],
        thumb: './images/shining.jpg',
        keywords: ['horror', 'fiction', 'ghosts', 'mental health', 'thriller']
    },
    {
        title: 'Doctor Sleep',
        author: 'Stephen King',
        myWeightedRating: 6,
        pages: 531,
        pubDate: 2013,
        yearRead: [2018],
        thumb: './images/dr-sleep.jpg',
        keywords: ['horror', 'fiction', 'ghosts', 'mental health']
    },
    {
        title: 'Pet Sematary',
        author: 'Stephen King',
        myWeightedRating: 7,
        pages: 580,
        pubDate: 1983,
        yearRead: [2018],
        thumb: './images/pet-sem.jpg',
        keywords: ['horror', 'fiction', 'zombies']
    },
    {
        title: 'Misery',
        author: 'Stephen King',
        myWeightedRating: 8,
        pages: 310,
        pubDate: 1987,
        yearRead: [2016],
        thumb: './images/misery.jpg',
        keywords: ['horror', 'fiction', 'thriller']
    },
    {
        title: 'On Writing',
        author: 'Stephen King',
        myWeightedRating: 9,
        pages: 320,
        pubDate: 2000,
        yearRead: [2015],
        thumb: './images/on-writing.jpg',
        keywords: ['nonfiction', 'memoir', 'writing']
    },
    {
        title: 'It',
        author: 'Stephen King',
        myWeightedRating: 7,
        pages: 1116,
        pubDate: 1986,
        yearRead: [2018],
        thumb: './images/it.jpg',
        keywords: ['fiction', 'horror', 'clowns', 'thriller']
    },
    {
        title: 'Twilight',
        author: 'Stephenie Meyer',
        myWeightedRating: 8,
        pages: 501,
        pubDate: 2005,
        yearRead: [2009, 2012],
        thumb: './images/twilight1.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author']
    },
    {
        title: 'New Moon',
        author: 'Stephenie Meyer',
        myWeightedRating: 7,
        pages: 565,
        pubDate: 2006,
        yearRead: [2009],
        thumb: './images/twilight2.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author']
    },
    {
        title: 'Eclipse',
        author: 'Stephenie Meyer',
        myWeightedRating: 7,
        pages: 632,
        pubDate: 2007,
        yearRead: [2009],
        thumb: './images/twilight3.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author']
    },
    {
        title: 'Breaking Dawn',
        author: 'Stephenie Meyer',
        myWeightedRating: 7,
        pages: 756,
        pubDate: 2008,
        yearRead: [2009],
        thumb: './images/twilight4.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author']
    },
    {
        title: 'Midnight Sun',
        author: 'Stephenie Meyer',
        myWeightedRating: 7,
        pages: 662,
        pubDate: 2020,
        yearRead: [2020],
        thumb: './images/twilight5.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author']
    },
    {
        title: 'Twilight / Life and Death',
        author: 'Stephenie Meyer',
        myWeightedRating: 8,
        pages: 738,
        pubDate: 2015,
        yearRead: [2015],
        thumb: './images/twilight-life-death.jpg',
        keywords: ['fiction', 'vampires', 'werewolves', 'young adult', 'romance', 'twilight', 'female author']
    },
    {
        title: '30 Days of Night, Vol. 1',
        author: 'Steve Niles',
        myWeightedRating: 6,
        pages: 104,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/thirty-days-night1.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'graphic novels']
    },
    {
        title: '30 Days of Night, Vol. 2',
        author: 'Steve Niles',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/thirty-days-night2.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'graphic novels']
    },
    {
        title: '30 Days of Night, Vol. 4',
        author: 'Steve Niles',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2004,
        yearRead: [2018],
        thumb: './images/thirty-days-night4.jpg',
        keywords: ['fiction', 'horror', 'vampires', 'graphic novels']
    },
    {
        title: 'The Ultimate History of Video Games',
        author: 'Steven L. Kent',
        myWeightedRating: 9,
        pages: 608,
        pubDate: 2001,
        yearRead: [2009, 2011, 2013],
        thumb: './images/ultimate-history-vgs.jpg',
        keywords: ['nonfiction', 'games', 'biography', 'video games']
    },
    {
        title: 'Think Like a Freak',
        author: 'Steven Levitt',
        myWeightedRating: 7,
        pages: 304,
        pubDate: 2014,
        yearRead: [2018, 2020],
        thumb: './images/think-like-freak.jpg',
        keywords: ['nonfiction', 'psychology', 'self-help']
    },
    {
        title: 'The Art of War',
        author: 'Sun Tzu',
        myWeightedRating: 4,
        pages: 82,
        pubDate: -500,
        yearRead: [2020],
        thumb: './images/art-of-war.jpg',
        keywords: ['nonfiction', 'historical', 'philosophy']
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        myWeightedRating: 8,
        pages: 374,
        pubDate: 2008,
        yearRead: [2015],
        thumb: './images/hunger-games1.jpg',
        keywords: ['fiction', 'dystopian', 'romance', 'young adult', 'science fiction', 'female author']
    },
    {
        title: 'Catching Fire',
        author: 'Suzanne Collins',
        myWeightedRating: 7,
        pages: 391,
        pubDate: 2009,
        yearRead: [2015],
        thumb: './images/hunger-games2.jpg',
        keywords: ['fiction', 'dystopian', 'romance', 'young adult', 'science fiction', 'female author']
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        myWeightedRating: 7,
        pages: 390,
        pubDate: 2010,
        yearRead: [2015],
        thumb: './images/hunger-games3.jpg',
        keywords: ['fiction', 'dystopian', 'romance', 'young adult', 'science fiction', 'female author']
    },
    {
        title: 'Sleeping Giants',
        author: 'Sylvain Neuvel',
        myWeightedRating: 7,
        pages: 320,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/sleeping-giants1.jpg',
        keywords: ['experimental', 'fiction', 'science fiction', 'aliens']
    },
    {
        title: 'Waking Gods',
        author: 'Sylvain Neuvel',
        myWeightedRating: 6,
        pages: 336,
        pubDate: 2017,
        yearRead: [2018],
        thumb: './images/sleeping-giants2.jpg',
        keywords: ['experimental', 'fiction', 'science fiction', 'aliens']
    },
    /*===========================
    	Author First Name - T's
    ===========================*/
    {
        title: 'Thr3e',
        author: 'Ted Dekker',
        myWeightedRating: 7,
        pages: 423,
        pubDate: 2003,
        yearRead: [2013],
        thumb: './images/thr3e.jpg',
        keywords: ['fiction', 'christian', 'mystery', 'suspense', 'thriller', 'weird', 'movies']
    },
    {
        title: 'Danger in the Desert',
        author: 'Terri Fields',
        myWeightedRating: 6,
        pages: 126,
        pubDate: 1997,
        yearRead: [1999],
        thumb: './images/danger-in-desert.jpg',
        keywords: ['fiction', 'survival', 'children', 'female author']
    },
    {
        title: 'Missing in the Mountains',
        author: 'Terri Fields',
        myWeightedRating: 6,
        pages: 108,
        pubDate: 1999,
        yearRead: [2000],
        thumb: './images/missing-in-mountains.jpg',
        keywords: ['fiction', 'survival', 'children', 'female author']
    },
    {
        title: 'Getting Started with SQL',
        author: 'Thomas Nield',
        myWeightedRating: 6,
        pages: 134,
        pubDate: 2016,
        yearRead: [2018],
        thumb: './images/getting-started-sql.jpg',
        keywords: ['nonfiction', 'programming', 'technology', 'computers', 'educational']
    },
    {
        title: 'How to Eat Fried Worms',
        author: 'Thomas Rockfield',
        myWeightedRating: 6,
        pages: 118,
        pubDate: 1973,
        yearRead: [1999],
        thumb: './images/eat-fried-worms.jpg',
        keywords: ['fiction', 'children', 'humor', 'movies']
    },
    {
        title: 'Left Behind',
        author: 'Tim LaHaye',
        myWeightedRating: 6,
        pages: 342,
        pubDate: 1995,
        yearRead: [2014],
        thumb: './images/left-behind1.jpg',
        keywords: ['movies', 'christian', 'fiction', 'apocalyptic', 'left behind']
    },
    {
        title: 'Tribulation Force',
        author: 'Tim LaHaye',
        myWeightedRating: 5,
        pages: 450,
        pubDate: 1996,
        yearRead: [2014],
        thumb: './images/left-behind2.jpg',
        keywords: ['christian', 'fiction', 'apocalyptic', 'left behind']
    },
    {
        title: 'The 4-Hour Body',
        author: 'Timothy Ferriss',
        myWeightedRating: 5,
        pages: 571,
        pubDate: 2000,
        yearRead: [2020],
        thumb: './images/four-hour-body.jpg',
        keywords: ['nonfiction', 'health', 'fitness', 'self-help']
    },
    {
        title: 'The 4-Hour Workweek',
        author: 'Timothy Ferriss',
        myWeightedRating: 6,
        pages: 396,
        pubDate: 2011,
        yearRead: [2012],
        thumb: './images/four-hour-work.jpg',
        keywords: ['nonfiction', 'productivity', 'business', 'self-help']
    },
    {
        title: 'The Prodigal God',
        author: 'Timothy J. Keller',
        myWeightedRating: 6,
        pages: 155,
        pubDate: 2008,
        yearRead: [2015],
        thumb: './images/prodigal-god.jpg',
        keywords: ['nonfiction', 'christian', 'theology']
    },
    {
        title: 'Bossypants',
        author: 'Tina Fey',
        myWeightedRating: 6,
        pages: 277,
        pubDate: 2011,
        yearRead: [2018],
        thumb: './images/bossypants.jpg',
        keywords: ['nonfiction', 'memoir', 'humor', 'female author']
    },
    {
        title: 'Fun Inc.',
        author: 'Tom Chatfield',
        myWeightedRating: 6,
        pages: 272,
        pubDate: 2010,
        yearRead: [2017],
        thumb: './images/fun.jpg',
        keywords: ['nonfiction', 'games', 'video games', 'business', 'psychology']
    },
    {
        title: 'Strengths Finder 2.0',
        author: 'Tom Rath',
        myWeightedRating: 6,
        pages: 174,
        pubDate: 2007,
        yearRead: [2015],
        thumb: './images/strengths-finder.jpg',
        keywords: ['nonfiction', 'business', 'leadership', 'self-help', 'psychology']
    },
    /*===========================
    	Author First Name - U's
    ===========================*/
    /*===========================
    	Author First Name - V's
    ===========================*/
    {
        title: "Anya's Ghost",
        author: 'Vera Brosgol',
        myWeightedRating: 5,
        pages: 224,
        pubDate: 2011,
        yearRead: [2017],
        thumb: './images/anyas-ghost.jpg',
        keywords: ['fiction', 'graphic novels', 'young adult', 'ghosts', 'horror', 'female author']
    },
    {
        title: 'Divergent',
        author: 'Veronica Roth',
        myWeightedRating: 8,
        pages: 487,
        pubDate: 2011,
        yearRead: [2015],
        thumb: './images/divergent1.jpg',
        keywords: ['movies', 'fiction', 'dystopian', 'young adult', 'romance', 'science fiction', 'adventure', 'female author']
    },
    {
        title: 'Insurgent',
        author: 'Veronica Roth',
        myWeightedRating: 7,
        pages: 525,
        pubDate: 2012,
        yearRead: [2015],
        thumb: './images/divergent2.jpg',
        keywords: ['movies', 'fiction', 'dystopian', 'young adult', 'romance', 'science fiction', 'adventure', 'female author']
    },
    {
        title: 'Allegiant',
        author: 'Veronica Roth',
        myWeightedRating: 7,
        pages: 526,
        pubDate: 2013,
        yearRead: [2015],
        thumb: './images/divergent3.jpg',
        keywords: ['movies', 'fiction', 'dystopian', 'young adult', 'romance', 'science fiction', 'adventure', 'female author']
    },
    {
        title: 'Slumdog Millionaire',
        author: 'Vikas Swarup',
        myWeightedRating: 8,
        pages: 333,
        pubDate: 2005,
        yearRead: [2016],
        thumb: './images/slumdog.jpg',
        keywords: ['movies', 'india', 'fiction']
    },
    {
        title: "The Smart Girl's Guide to Privacy",
        author: 'Violet Blue',
        myWeightedRating: 6,
        pages: 168,
        pubDate: 2014,
        yearRead: [2019],
        thumb: './images/smart-girl-privacy.jpg',
        keywords: ['nonfiction', 'self-help', 'technology', 'computers', 'female author']
    },
    /*===========================
    	Author First Name - W's
    ===========================*/
    {
        title: 'Warner Bros. Studio Tour London',
        author: 'Warner Bros',
        myWeightedRating: 6,
        pages: 72,
        pubDate: 2012,
        yearRead: [2017],
        thumb: './images/warner-bros-studio.jpg',
        keywords: ['harry potter', 'movies', 'reference', 'magic', 'wizards', 'witches', 'nonfiction']
    },
    {
        title: 'Systematic Theology',
        author: 'Wayne Grudem',
        myWeightedRating: 7,
        pages: 1264,
        pubDate: 1994,
        yearRead: [2013],
        thumb: './images/systematic-theology.jpg',
        keywords: ['nonfiction', 'christian', 'theology']
    },
    {
        title: 'Things We Think About Games',
        author: 'Will Hindmarch',
        myWeightedRating: 6,
        pages: 160,
        pubDate: 2008,
        yearRead: [2019],
        thumb: './images/things-we-think-about-games.jpg',
        keywords: ['nonfiction', 'games', 'game design', 'reference']
    },
    {
        title: 'Lord of the Flies',
        author: 'William Golding',
        myWeightedRating: 7,
        pages: 192,
        pubDate: 1954,
        yearRead: [2003, 2005],
        thumb: './images/lord-of-flies.jpg',
        keywords: ['fiction', 'survival', 'young adult', 'movies']
    },
    {
        title: 'Make Your Bed',
        author: 'William McRaven',
        myWeightedRating: 6,
        pages: 144,
        pubDate: 2017,
        yearRead: [2020],
        thumb: './images/make-your-bed.jpg',
        keywords: ['nonfiction', 'self-help', 'leadership', 'psychology']
    },
    {
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        myWeightedRating: 6,
        pages: 368,
        pubDate: 1599,
        yearRead: [2002, 2004],
        thumb: './images/romeo-juliet.jpg',
        keywords: ['fiction', 'play', 'romance']
    },
    {
        title: 'Hamlet',
        author: 'William Shakespeare',
        myWeightedRating: 6,
        pages: 289,
        pubDate: 1603,
        yearRead: [2007],
        thumb: './images/hamlet.jpg',
        keywords: ['fiction', 'play']
    },
    {
        title: 'Macbeth',
        author: 'William Shakespeare',
        myWeightedRating: 6,
        pages: 249,
        pubDate: 1623,
        yearRead: [2007],
        thumb: './images/macbeth.jpg',
        keywords: ['fiction', 'play']
    },
    {
        title: "A Midsummer Night's Dream",
        author: 'William Shakespeare',
        myWeightedRating: 6,
        pages: 240,
        pubDate: 1595,
        yearRead: [2000, 2002],
        thumb: './images/midsummer-nights-dream.jpg',
        keywords: ['fiction', 'play', 'romance', 'humor']
    },
    {
        title: 'Ghosts of Saltmarsh',
        author: 'Wizards RPG Team',
        myWeightedRating: 8,
        pages: 256,
        pubDate: 2019,
        yearRead: [2019],
        thumb: './images/ghosts-saltmarsh.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy']
    },
    {
        title: 'Tales from the Yawning Portal',
        author: 'Wizards RPG Team',
        myWeightedRating: 8,
        pages: 248,
        pubDate: 2017,
        yearRead: [2019],
        thumb: './images/tales-yawning.jpg',
        keywords: ['dnd', 'fiction', 'reference', 'games', 'tabletop games', 'fantasy', 'high fantasy']
    },
    /*===========================
    	Author First Name - X's
    ===========================*/
    /*===========================
    	Author First Name - Y's
    ===========================*/
    {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        myWeightedRating: 7,
        pages: 498,
        pubDate: 2011,
        yearRead: [2019],
        thumb: './images/sapiens.jpg',
        keywords: ['nonfiction', 'science', 'historical', 'anthropology', 'philosophy']
    },
    {
        title: 'The Willow Files, Vol. 2',
        author: 'Yvonne Navarro',
        myWeightedRating: 5,
        pages: 210,
        pubDate: 2001,
        yearRead: [2019],
        thumb: './images/willow-files2.jpg',
        keywords: ['tv', 'fiction', 'horror', 'vampires', 'magic', 'fantasy', 'witches', 'female author']
    },
    /*===========================
    	Author First Name - Z's
    ===========================*/
    {
        title: 'Rick and Morty, Vol. 1',
        author: 'Zac Gorman',
        myWeightedRating: 7,
        pages: 128,
        pubDate: 2015,
        yearRead: [2019],
        thumb: './images/rick-morty.jpg',
        keywords: ['graphic novels', 'humor', 'comics', 'science fiction', 'tv']
    }
];