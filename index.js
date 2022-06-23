'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: function takes in a value and returns value unchanged.
 * @param {any value} value: Function takes in any value
 * @returns {any value}: Function returns input value unchanged
 */

function identity(value){
    return value;
};
module.exports.identity = identity;

/**
 * typeOf: function takes in a value and returns the type of value
 * @param {any value} value: Function takes in any value
 * @returns {typeOf value}: Function returns the type of any value plugged in as a string 
 */

function typeOf(value){
    if (typeof value === 'string'){
        return 'string';
    }else if (typeof value === 'object' && Array.isArray(value) === true){
        return 'array';
    } else if (typeof value === 'object' && Array.isArray(value) === false && value !== null && value instanceof Date === false){
        return 'object';
    } else if (typeof value === 'undefined'){
        return 'undefined';
    } else if (typeof value === 'number'){
        return 'number';
    } else if (typeof value === 'boolean'){
        return 'boolean';
    } else if (typeof value === 'object' && value === null){
        return 'null';
    } else if (typeof value === 'function'){
        return 'function';
    }
};
module.exports.typeOf = typeOf;

/**
 * first: Function takes in an array and a number and returns either an empty array, an array of <number> elements
 * starting from the beginning of the array, the whole array, or just the first element.
 * @param {Array, number}: Function takes in array and number, or just array with no number argument
 * @returns {Array}: Function returns an array with specified <number> of elements
 */

function first(array, num){
    if (!Array.isArray(array)){
        return [];
    }
    if (isNaN(num)){
        return array[0];
    }
    if (num < 0){
        return [];
    }
    if (num > array.length){
        return array;
    }
    return array.slice(0, num)
};
module.exports.first = first;

/**
 * last: Function is logically opposite of "first". Function takes in a number and array and returns an empty array, an array with
 * a certain specified <number> of results starting from the back of the array, just the last element of given array,
 * or the whole array. 
 * @param {array, number}: Function takes in an <array> and a <number> or just an array if no number is given or isNaN
 * @returns {array}: Function returns a new array depending on <number> argument plugged in.
 */

function last(array, number){
    if(!Array.isArray(array)){
        return [];
    }
    if(isNaN(number)){
        return array[array.length - 1];
    }
    if (number < 0){
        return [];
    }
    if (number > array.length){
        return array;
    }
    return array.slice(number - 1, array.length)
};
module.exports.last = last;

/**
 * indexOf: Function returns the first occurance of a searched <value> if it is contained inside <array>.
 * If character does not exist inside of <array>, instead returns a value of -1.
 * @param {array, value}: Function takes in <array> and a <value> to search for inside of <array>
 * @returns {value}: Function returns the index of the first occurance of <value> if it exists in <array>. If <value> cannot
 * be found -1 is returned instead.
 */

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};
module.exports.indexOf = indexOf;

/**
 * contains: Function iterates through <array> and returns true or false depending if <value> is found in array.
 * @param {array, value}: Function takes in <array> and <value> to check for.
 * @returns {value}: Function returns true or false, based on whether or not <value> is found in <array>.
 */

function contains(array, value) {
    var containsVal = false;
    for (let i = 0; i < array.length; i++) {
        array[i] === value ? containsVal = true : containsVal;
    }
    return containsVal;
};
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to iterate through an array and return a new array with no duplicate values
 * 
 * @param {array} array: The array over which to iterate
 * @returns {newArr} newArr: The new array with no duplicated values
 */

function unique(array){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (_.indexOf(newArr, arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
};
module.exports.unique = unique;

/**
 * filter: Function designed to iterate through array and return a new array containing only the elements that
 * returned true from the function they are passed into.
 * 
 * @param {array, filterFunc} array: array over which to iterate
 * @returns {filterArr} filterArr: array returned containing only elements that passed the function used
 */

function filter(array, filterFunc){
    let filterArr = [];
    for (let i = 0; i < array.length; i++) {
        let result = filterFunc(array[i], i, array);
        if (result) {
            filterArr.push(array[i]);
        }
    }
    return filterArr;
};
module.exports.filter = filter;

/**
 * reject: Function designed to iterate through an array and return a new array containing only the elements that
 * returned false from the function they are passed into.
 * 
 * @param {array, func} array: the array over which to iterate 
 * func: the function the array is being passed into
 * @returns {rejectArr} rejectArr: the array returned with only the elements that did not pass the function they were
 * passed into.
 */

function reject(array, func){
    var rejectArr = [];
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array);
        if (!result) {
            rejectArr.push(array[i]);
        }
    }
    return rejectArr;
};
module.exports.reject = reject;

/**
 * partition: Function designed to iterate over an array and return 2 sub-arrays within one array. One containing the
 * elements that return true from the function they were passed into, and the other containing the elements that returned
 * false from the function they were passed into.
 * 
 * @param {array, func} array: the array which will be passed into the function
 * func: the function used to test the array passed in
 * @returns {output} output: the new array containing 2 sub-arrays, one which returned true, the other returning false
 * after being run through the chosen function.
 */

function partition(array, func){
    let arr1 = [];
    let arr2 = [];
    let output = [];
    for (let i = 0; i < array.length; i++) {
        let result = func(array[i], i, array);
        if (result) {
            arr1.push(array[i]);
        } else {
            arr2.push(array[i]);
        }
    }
    output.push(arr1, arr2);
    return output;
};
module.exports.partition = partition;





