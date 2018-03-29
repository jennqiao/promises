/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */

var Promise = require('bluebird');
var pluck = require('../bare_minimum/promiseConstructor').pluckFirstLineFromFileAsync
var fs = Promise.promisifyAll(require('fs'));

var combineFirstLineOfManyFiles = function(filePaths, writePath) {



  var promises = [];
  for (var i=0; i<filePaths.length; i++) {
    promises.push(pluck(filePaths[i]))
  }

  // console.log(promises);
  // console.log(Promise.all(promises));
  // var promises = [pluck(filePaths[0])];

  // return Promise.all(promises).then((lines) => {
  //   var file = lines.join('\n');
  //   return fs.writeFileAsync(writePath, file);
  // }).catch(function(err) {
  //   console.log('wtf!!!', err);
  // })

  return Promise.all(promises).then((lines) => {
    return lines.join('\n');
  }).then((file) => {
    return fs.writeFileAsync(writePath, file);
  })


 // TODO
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};