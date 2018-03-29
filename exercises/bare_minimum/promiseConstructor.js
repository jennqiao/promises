/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var cb = Promise.promisifyAll(require('./callbackReview.js'))

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise(function(resolve, reject) {

    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        var lines = data.toString().split('\n');
        resolve(lines[0]);
      }
    })
  })
  // return cb.pluckFirstLineFromFileAsync(filePath);
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise( (resolve, reject) => {

    request(url, (error, response) => {
      if (error) {
        reject(error);
      } else {
        let statusCode = response.statusCode;
        resolve(statusCode);
      }
    })
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
