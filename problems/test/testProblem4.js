const { inventory } = require('../../inventory/inventory');
const { problem4 } = require('../problem4');
const result = problem4(inventory);
for( let i=0;i<result.length;i++)
console.log(result[i]);