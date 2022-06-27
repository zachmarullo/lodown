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

/**
 * map: Function designed to iterate over a collection and return a new array with the data transformed in some way.
 * @param {collection} collection: the collection which will be iterated over
 * @param {func} func: the callback function that will be used as a test to return our new array
 */

function map(collection, func){
    let newArr = [];
    if (typeof collection === 'object' && Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            let result = func(collection[i], i, collection);
            newArr.push(result);
        }
    } else {
        for (var key in collection) {
            let result = func(collection[key], key, collection);
            newArr.push(result);
        }
    }
    return newArr;
};
module.exports.map = map;

/**
 * Pluck: function takes in an array and returns a property from the array
 * @param {array} array: The array over which to remove a property from 
 * @param {property} prop: The property to be returned from the input array. 
 * @returns {result} result: The returned property, as an array.
 */
function pluck (array, prop) {
    var result = _.map(array, function (element) {
        return element[prop];
    });
    return result;
};
module.exports.pluck = pluck;
/**
 * Every: function takes in a collection and tests something within it. If everything comes back passing test function,
 * every returns true. If even one element fails, every returns false.
 * @param {collection} collection: Object or array over which the function iterates and tests.
 * @param {test} action: Tests collection against whatever function is input as second parameter.
 * 
 */

 function every(collection, test) {
    if (test === undefined){
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]){
                    return false;
                } 
            }
        } else {
            for (var key in collection) {
                if (!collection[key]){
                    return false;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!test(collection[i], i, collection)) {
                    return false;
                }
            }
        } else {
            for (var key in collection) {
                if (!test(collection[key], key, collection)) {
                    return false;
                }
            }
        }
    } 
    return true;
};
module.exports.every = every;
/**
 * Function: Some takes in a collection and a test function and returns true if even one element passes the function. 
 * If all elements fail the test function, some will return false;
 * 
 */
 function some(collection, test) {
    if (test === undefined){
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]){
                    return true;
                } 
            }
        } else {
            for (var key in collection) {
                if (collection[key]){
                    return true;
                }
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (test(collection[i], i, collection)) {
                    return true;
                }
            }
        } else {
            for (var key in collection) {
                if (test(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    } 
    return false;
};
module.exports.some = some;
/**
 * Function: Reduce takes an array, a test function, and optionally a seed. If no seed is given, reduce will skip the 
 * first iteration in the loop and begin the test with index 1 of the given array.
 * @param {array} array: The array over which to loop and test
 * @param {func} action: The function used to test the array given put in.
 * @param {seed} seed: The optional parameter that tells the function where to begin. Often 0, meaning the function will begin
 * iterating at the 0 index of the array.
 * 
 */
 function reduce(array, func, seed) {
    var output;

    if (seed === undefined) {
        output = array[0];
        for (let i = 1; i < array.length; i++) {
            output = func(output, array[i], i, array)
        }
    } else {
        output = seed;
        for (var i = 0; i < array.length; i++) {
            output = func(output, array[i], i, array);
        }
    }
    return output;
};
module.exports.reduce = reduce;
/**
 * Extend: Function takes in a target object and an additional "n" number of objects to have their information copied 
 * into the target object.
 * @param {target} target: The target object to recieve information either copied or replaced from other objects that 
 * are input.
 * @param {objects} objects: The list of one or more objects that will be copied into the target object.
 */
 function extend(target, ...objects) {
    objects = Object.assign(target, ...objects);
    return objects;
};
module.exports.extend = extend;