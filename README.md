# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kethnal/lotide`

**Require it:**

`const _ = require('@kethnal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are <u>currently</u> implemented:

* `head(array)`: return the <em>first item</em> of a given array
* `tail(array)`: return <em>everything except the first item</em> of a given array
* `middle(array)`: return the <em>middle item</em> of a given array with odd amount of items or return the <em>middle two items</em> of a given array with even amount of items
* `letterPositions(string)`: return an <em>object</em> with letters as keys and index positions as values from a given string
* `map(array, callback)`: return a <em>new array</em> given some array and the callback function to be applied to it
* `takeUntil(array, callback)`: returns a <em>new array</em> given some array and a callback function that describes when to stop taking values (starting from index 0)
* `without(array1, array2)`: returns a <em>new array</em> given some array and another array with contents that are meant to be left out of the new array (from some array)
* `countLetters(string)`: returns an <em>object</em> with letters as keys and how often they appear in a given string as values
* `findKey(object, callback)`: returns the first <em>key</em> of a given object that matches requirement given by the callback function
* `eqArrays(array1, array2)`: returns <em>boolean</em> by checking if 2 arrays are equal

The following functions are coming soon (maybe):

* `flatten(array)`: returns a <em>new array</em> with no nested arrays given some array with nested arrays (max 1 level of nesting)
* `countOnly(array, object)`: returns a <em>new object</em> given an array and an object with boolean values- true items are added to the new object and the number of their instances in the given array are values
* `findKeyByValue(object, value)`: returns the <em>key</em> of a given object by a given value
* `eqObjects(object1, object2)`: returns <em>boolean</em> by checking if 2 objects are equal