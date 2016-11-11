var all = require('./testData.json');
var user = all[1];
var neighbors = all.splice(2);
/*
var user = [1, 2, 3, 4];
var neighbors = [
  [2, 3, 4, 5],
  [4, 8, 9, 2],
  [5, 4, 2, 1]
]
*/

var ranker = require('./index.js');
var position = ranker.curate(user, neighbors);
console.log(position);
console.log(neighbors[position]);
