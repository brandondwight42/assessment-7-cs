const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Results for the tinyArray
// insert 41.9 μs
// append 110.5 μs

// Results for the smallArray
// insert 50.7 μs
// append 128.3 μs

// Results for the mediumArray
// insert 234.6 μs
// append 192 μs

// Results for the largeArray
// insert 11.6555 ms
// append 585.8 μs

// Results for the extraLargeArray
// insert 1.3734283 s
// append 4.6978 ms

//  Array Type      |   insert method   |    append method
//  tinyArray       |  41.9 micro-sec   |   110.5 micro-sec
//  smallArray      |  50.7 micro-sec   |   128.3 micro-sec
//  mediumArray     | 234.6 micro-sec   |   192   micro-sec
//  largeArray      |  11.6555 milli-sec|   585.8 micro-sec
//  extraLargeArray |   1.3734283 sec   |     4.5978 milli-sec

// From the table above it appears that the “insert method” scales in a quadratic or exponential manner O(n^2) and that the append method scales in a linear fashion O(n).  The append method over the long haul has a much more efficient runtime since its run time has a shallower slope than the insert method.  I wonder if the reason this could be is that the append method attaches new elements of the array to the front of the array where as the insert method attaches new elements of the array to the end of the array.  By attaching new elements to the end of the array in the append method this method has to run through every element of the array every time to complete its operation where as the insert method only has to add an element at the front of the array thereby not having to run through each element each time.  



