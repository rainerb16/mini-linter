// STORY FOR LINTING

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// SPLIT STRING INTO INDIVIDUAL WORDS
let storyWords = story.split(' ');


// FILTER OUT UNNECESSARY WORDS
let betterWords = storyWords.filter(function(word) {
  if (unnecessaryWords.includes(word)) {
  } else {
    return word;
  }
});

// HOW MANY TIMES OVERUSED WORDS HAVE BEEN USED
let overused1 = 0
let overused2 = 0
let overused3 = 0

storyWords.filter(function(word) {

if (word === overusedWords[0]) {
  overused1+=1
} else if (word === overusedWords[1]) {
  overused2+=1
} else if (word === overusedWords[2]) {
  overused3+=1
}
});

// COUNT HOW MANY SENTENCES ARE IN THE PARAGRAPH
let sentences = 0;
storyWords.forEach (word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
})

// FINAL OUTPUT
console.log(`Overused word: ${overusedWords[0]} - count: ` + overused1);
console.log(`Overused word: ${overusedWords[1]} - count: ` + overused2);
console.log(`Overused word: ${overusedWords[2]} - count: ` + overused3);
console.log('The word count is: ' + storyWords.length);
console.log('The sentence count is: ' + sentences);
