import {WordChain} from '../src/main';

const countDifferentLettersFromTwoWords = (word1: string, word2: string) => {
  const word1AsArray = word1.split('');
  const word2AsArray = word2.split('');
  let counter = 0;
  for (let i = 0; i < word1AsArray.length; i++) {
    if (word1AsArray[i] !== word2AsArray[i]) {
      counter += 1;
    }
  }
  return counter;
};


describe('Word chain should', () => {
  it('give a word with only one different letter', () => {
    const wc = new WordChain();
    const wordGiven = 'gold';

    const result = wc.getNextWord(wordGiven);

    expect(countDifferentLettersFromTwoWords(wordGiven, result)).toBe(1);
  });
});


