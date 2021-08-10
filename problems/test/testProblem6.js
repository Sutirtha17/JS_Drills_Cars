const { inventory } = require('../../inventory/inventory');
const { problem6 } = require('../problem6');
const result = problem6(inventory);
console.log(JSON.stringify(result));