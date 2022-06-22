'use strict';

// YOU KNOW WHAT TO DO //

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
 * identity: function takes in a value and returns value unchanged.
 * @param {any value} value: Function takes in any value
 * @returns {any value}: Function returns input value unchanged
 */

function identity(value){
    return value;
};

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
}

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
}

/**
 * last: Function is opposite of "first". Function takes in a number and array and returns an empty array, an array with
 * a certain specified <number> of results starting from the back of the array, just the last element of given array,
 * or the whole array. 
 * @param{array, number}: Function takes in an <array> and a <number> or just an array if no number is given or isNaN
 * @returns{array}: Function returns a new array depending on <number> argument plugged in.
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
}