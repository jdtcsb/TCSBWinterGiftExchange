var gifter = [
'Eddie (he/him)', 'Chaz [Any/All]', 'Maya Yan (she/her)', 'Max Schlosberg (he/him)', 'Sarah (she/her)', 'Lynna Tsou, she/her', 'Oliver Speight (He/him)', 'Nigel (he/him)', 'Frida (she/her) ', 'Stephen Spencer-Wong He/Him', 'Marianne (she/her)', 'Carlos Herrera He/Him', 'Beto Damian (he/him)', 'Sammantha (she/her)', 'JD (They/Them)', 'Milena (they/them)', 'Chase Nagle (he/him)', 'Madison Siu, she/her', ''];

var recieve = [
  'Beto Damian (he/him)', 'Carlos Herrera He/Him', 'Chase Nagle (he/him)', 'Chaz [Any/All]', 'Eddie (he/him)', 'Frida (she/her) ', 'JD (They/Them)', 'Lynna Tsou, she/her', 'Madison Siu, she/her', 'Marianne (she/her)', 'Max Schlosberg (he/him)', 'Maya Yan', 'Milena (they/them)', 'Nigel (he/him)', 'Oliver Speight (He/him)', 'Sammantha Garcia she/her', 'Sarah (she/her)', 'Stephen Spencer-Wong He/Him'];

var shopper = ['Minecraft :D', 'I love history, geography, NASCAR, and video games (like most other coaches), but if I had to pick on series, I would say I have always loved Fallout. I really like trying new foods/snacks that I would never think of buying myself, and that includes local restaurants! There are no specific gift ideas that I can think of, but honestly I am receptive to anything!', 'I really like coffee (hot) *JD Note: Hes just a funny little guy. He likes Breaking Bad/Better Call Saul, GTA, Elden Ring*', 'I really like Pokémon, Minecraft, and Stardew Valley. I love reading horror novels- especially Religious Horror based narratives. I love coffee and tea and am happy to try new types and what others favorites are. In my free time I love to knit and Im just now learning how to sew as well.  ', 'I like playing video games (Silksong, Kingdom Hearts, Legend of Zelda), reading manga (One Piece, Bleach, Kagurabachi), and watching movies (@ The Grand Lake Theater). I love popcorn, cereal (Raisin Bran and Life), and smoothies. (Just make sure its vegan) Favorite food place is Butchers Sons (Berkeley) and Fungi Foods (Oakland). ', 'I love dancing, artsy stuff, puzzles, lately have been rly into murdoku. I like crafts stuff, nice perfumes, and make up. Rly a like a lot of things :) ', 'I love Frankenstein and the Guillermo del Toro version is my favorite movie, tied with Wicked. I like beans. Honestly, I think I just enjoy jokes more than anything, so any level of unnecessarily obscure or convoluted humor would make me so happy! ', 'Cooking, reading, cafes, boba, The Moth, running, hiking, news podcasts, NPR', 'Interests: any kind of crafts (knitting, embroidery, stationary), thrifting, film photography, graphic design, Rubiks cube. Local Restaurants/Cafes/Shops: heytea, the chocolate dragon, cheeseboard. Gift Ideas: a funny graphic tee, grillos hot pickles, film (ultramax, gold), this planner (https://www.paper-republic.com/en-us/products/weekly-planner-2027), fun colored/patterened socks', '-Smiskis (or your fave blind box series) -Boba shops: TPT, Chi Cha San Chen, Heytea, Teahut, (I love them all) -Cheeseboard bakery -Peets -Summer Fridays (shade vanilla beige) -Studio Ghibli -Miffy', 'LATER', 'boba, any snacks, books', 'I love chocolate of all forms and flavors (favorite is with hazelnuts)', 'My interests/hobbies are jazz music, saxophone, DIY (electronics, Arduino, 3D printing, etc), and going outdoors. Im also a big fan of the band Casiopea. One kind of food I find special are baked goods like pastries, and I also like going to cafes for coffee/tea/boba/etc (but nowhere in particular). I like decorating my desk and walls at home, so I would love any trinket or poster like thing you think might be cool or even just weird/funny. Alternatively a card game or literally any kind of food item would be also be appreciated. Thank you!', 'Im vegan. I enjoy reading (fiction and nonfiction), drinking tea, hiking, and drawing/painting in my free time. I also do political adovacy around unions and labor rights. I collect enamel pins. Im really into boardgames, including strategy games and tabletop rpgs/wargames. My favorite places to eat are The Butchers Son and Timeless Cafe. I also play video games on occasion, mostly single player titles like Disco Elysium and Cyberpunk. My favorite places to shop in the east bay are Pegasus Books and Games of Berkeley. Hopefully this is enough, but if you have any questions JD and Eddie know me really well and can probably give advice if youre unsure (especially relating to food and my game preferences).', 'Gift card to Peets coffee, Jamba Juice, Bookstore, or 1000-piece jigsaw puzzles', 'Pokemon (Ditto), Chiikawa (Usagi), Pompompurin , Miffy/Rabbits, Room decor (Blindboxes/kitchen stuff/posters), Squishy toys (needohs/slime), Warhead Colossal Sours', 'I love weird chip flavors (but no seafood), I run, rock climb, diehard for all bay area sports teams. some weird flavored snacks is good for a gift'];

var trivia=['c418, fly me to the moon, Y2K, Post Malone, Sublime', '30s-70s Jazz, swing, blues, and country (Louis Jordan, Nat King Cole, Ray Charles, Dean Martin). 60s-2000s rock, punk rock, folk (CCR, Black Sabbath, Metallica), 2010+ hip-hop, rap, r&b (J.Cole, 21 savage, Don Toliver, SOB x RBE)', 'Weyes blood, YG, Mac Dre, Miata FAB, Too Short, Keak Da Sneak, Genesis Owusu, ABBA, Bob Dylan, Freddie Gibbs', '1. Noah Kahan (Musical Artist) 2. Rainbow Kitten Surprise (Musical Artist) 3. boygenius (Musical Artist) 4. Bug Hunter (Musical Artist) 5. The Narcissist Cookbook (Musical Artist) 6. Odie Leigh (Musical Artist) 7. Crane Wives (Musical Artist) 8. Elio Mei (Musical Artist) 9. Chappell Roan (Musical Artist) 10. Gigi Perez (Musical Artist)', 'Artists: Gorillaz, Rebecca Black, Streetlight Manifesto, Underscores, Haute and Freddy, Portugal. The Man, YeonJun, Tame Impala, Hikaru Utada. Genres: Alternative, Pop, Psychedelic Rock, Ska, Video Game Soundtrack. Decades: 1980s - Now', 'BTS, Zara Larson, BlackPink, Becky G, Wisin y Yandel, etx', 'Underscores, Rebecca Black, Haute and Freddy, Dove Cameron, Janelle Monae, Sabrina Carpenter, Chappell Roan, Billie Eilish -Genres: pop music', 'Music from the 80s and 90s, Prince, Dire Straits, movie soundtracks (from the 90s), Hamilton (the musical), classical music', 'The Marias, Finneas, Gracie Abrams, Olivia Dean, Machine Gun Kelley (Tickets to My Downfall), Cigarettes After Sex, Sit Next to Me - Foster the People, Darlin - Jean Dawson', '-Howls Moving Castle (Movie) -The Body(Show) -Gilmore Girls (Show) -Business Proposal (K-Drama) -Valorant (Video Game) -Minecraft (Video Game) -Boba shops in Berkeley (Hobby) -Collecting Smiskis (Hobby) -the Marias (Band) -Keshi (Singer)', 'LATER', 'Olivia Rodrigo or any pop artist', 'Jamie Paige, Amy Winehouse, Doechii, Doja Cat', '-Artists: Thundercat, Tame Impala, The Beatles, Casiopea, MF Doom -Albums: Songs in the key of life, I Am, Dark Side of the Moon -Genres: Jazz, fusion, rock', 'Car Seat Headrest, The Strokes, Rainbow Kitten Surprise, Fleet Foxes, Indie Rock, Immortal Technique, Declan McKenna, Billy Bragg, David Bowie, Wallows', '50s, 60s, 70s, 80s, 90s, 2000s, 2010s, Country, Pop', 'Olivia Rodrigo (entire discography), Yeonjun , TXT (Love Language, 0x1 Lovesong, Anti-romantic, Deja Vu, most of their top hits), Rebecca Black, The Phantom of the Opera (entire soundtrack both movie version or broadway), Hamilton (first act), La La Land (musical + Demi Lovato song lol)', 'Any rock, hip hop, pop/synthpop, indie from 60s to today. '];

var food = ['no', 'None!', 'No', 'I am mostly vegetarian but eat Chicken! ', 'Vegan', 'N/A', 'vegan', 'No', 'Nope!', 'nope! NOTE: I want to mention again that I have a flight on the 5th on frontier and currently its at 9pm. I can make the party right now although frontier is known to be a little unpredictable with flights changing their time. For the gift exchange I will still get my person a gift even if something happens with my flight!', 'No', 'Nope', 'none', 'none', 'Vegan', 'No', 'No', 'no'];


var pass = [
  'HLE34',
  'B2SX3',
  'PCKPR',
  '8PHNX',
  'Y9S6G',
  'B4X9B',
  'AQXKL',
  'TEQ5A',
  'ZBPJD',
  '9BBNC',
  '3P2HV',
  'UM35K',
  'KSSBP',
  'LD43G',
  'Q2XBB',
  '7PMLR',
  'LTP12',
  'PYSB1'
];

function answer() {
	var username = document.getElementById('name').value
	var password = document.getElementById('password').value

	for(var i = 0; i < gifter.length; i++) {
		if(gifter[i].includes(username) && password == pass[i]) {
      document.body.innerHTML = document.body.innerHTML.replace('XXXX', gifter[i]);
      document.body.innerHTML = document.body.innerHTML.replace('YYYY', recieve[i]);
      document.body.innerHTML = document.body.innerHTML.replace('ZZZZ', shopper[i]);
		  document.body.innerHTML = document.body.innerHTML.replace('QQQQ', trivia[i]);
      document.body.innerHTML = document.body.innerHTML.replace('UUUU', food[i]);
			textName.style.display = "block";
      enter.style.display = "none";
			return
		} 
  }
  alert("Error: Name and password do not match. The password is case sensitive. Please try again!");
}


