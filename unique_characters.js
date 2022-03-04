word1 = 'boomerang'

function hasUniqueChars(word) {
let uniqueChars = new Set([]) 
for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars(word1))

//Runtime is linear or O(n) because it has to loop over an array of "n" amount of characters depending on the length of the word passed in.  I used the morning challenge page from Frodo in preparing this solution.
