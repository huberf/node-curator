var exports = module.exports;

exports.curate = (user, neighbors) => {
  var total = []
  for(var i = 0; i < neighbors.length; i++ ) {
    var similar = [];
    for(var a = 0; a < user.length; a++) {
      for(var b = 0; b < neighbors[i].length; b++) {
        if(user[a] == neighbors[i][b]) {
          similar.push(user[a]);
        }
      }
    }
    //total.push(similar.reduce(function(a, b) { return a + b; }, 0));
    total.push(similar.length);
  }
  var maxVal = Math.max.apply(null, total);
  return total.indexOf(maxVal);
}
