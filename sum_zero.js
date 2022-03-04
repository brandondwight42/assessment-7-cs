let array = [42, 23, 17, 56, 7, 11, 21]

let value = `False`
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {
            if (array[i] + array[j] === 0){
                value = `True`
            }
        }
    }
}

console.log(value)

//Run time is a quadratic or O(n^2)  becuase the function has to pass through two arrays that each have the length of "n" numbers.  I used the morning exercise page from Frodo in preparing this solution.