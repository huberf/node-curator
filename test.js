var user = [1, 2, 3, 4];
var neighbors = [
  [2, 3, 4, 5],
  [4, 8, 9, 2],
  [5, 4, 2, 1]
]

var ranker = require('./index.js');
console.log(ranker.curate(user, neighbors));
