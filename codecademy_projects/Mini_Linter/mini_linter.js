
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';


let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(" ");
//console.log(storyWords);

const betterWords = storyWords.filter(words => {
  return !unnecessaryWords.includes(words);
})

//console.log(betterWords);

// for counting the overused words you can also try filter(), forEach() or reduce();

let countOfOverusedWords = 0;

storyWords.forEach(word => {
  if (word === "really" || word === "very" || word === "basically") {
    countOfOverusedWords += 1;
  }
});

//console.log('The number of overused words in your story is: ' + countOfOverusedWords);

//this is the solution from video

/*let reallyWordCount = 0;
let veryWordCount = 0;
let basicallyWordCount = 0;

for (word of betterWords) {
  if (word === 'really') {
    reallyWordCount += 1;
  } else if (word === 'very') {
    veryWordCount += 1;
  } else if (word === 'basically') {
    basicallyWordCount += 1;
  } else {
  'There is some error.'
}
}*/

//console.log(reallyWordCount);
//console.log(veryWordCount);
//console.log(basicallyWordCount);

let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length -1] === '.' || word[word.length -1] === '!') {
    sentences +=1;
  }
});

const logInfo = () => {
  console.log('The total word count is: ' + storyWords.length);
  console.log('The number of sentences is: ' + sentences);
  console.log('The number of overused words in your story is: ' + countOfOverusedWords)
  //console.log('really: ' + reallyWordCount);
  //console.log('very: ' + veryWordCount);
  //console.log('basically: ' + basicallyWordCount)
};

logInfo();

console.log(betterWords.join(' '));