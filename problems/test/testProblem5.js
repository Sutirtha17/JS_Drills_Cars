const { inventory } = require('../../inventory/inventory');
const { problem4 } = require('../problem4');
const { problem5 } = require('../problem5');
const years = problem4(inventory); // getting the years-array from the problem 4 solution
const result= problem5(inventory,years); // passing years array as an argument in problem 5
console.log(result);