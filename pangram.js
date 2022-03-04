let sentence = `The quick brown fox jumps over the lazy dog.`

function isPangram(string){
    // Matching our string to letters in the alphabet
    const letters = string.toLowerCase().match(/[a-z]/g);
    // Add those letters to a Set to deduplicate
    const alphabet = [...new Set(letters)]
    // Assert that the length of the variable is 26
    return alphabet.length === 26;
}

console.log(isPangram(sentence))

//Runtime is linear or O(n) because it is depenedent on "n" amount of elements that are within the string that is passed into the function isPangram.  I used https://anothercodingblog.com/2020/02/28/daily-coding-challenge-detect-pangram-written-in-javascript/ in preparing the answer to this solution.