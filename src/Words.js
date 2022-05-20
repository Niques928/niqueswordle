import wordBank from './words-bank.txt'

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]

// Create an async functon to grab words
export const generateWordSet = async () => {
  let wordSet
  let chosenWord
  await fetch(wordBank)
  .then((response) => response.text())
  .then((result) => {
    const wordArr = result.split("\n");
    // Take each word and remove \r
    const finalWordsArr = wordArr.map((word) => {
      return word.replace('\r', '');
    })
    chosenWord = finalWordsArr[Math.floor(Math.random() * finalWordsArr.length)]
    wordSet = new Set(finalWordsArr)
  });

  return {wordSet, chosenWord}
};