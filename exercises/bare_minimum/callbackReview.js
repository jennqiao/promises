/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {

  fs.readFile(filePath, function(err, data) {
    if (err) {
      callback(err);
    } else {
        var lines = data.toString().split('\n');
        callback(null, lines[0]);
    }
  } )
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {

  request(url, function(error, response) {
    if (error) {
      callback(error)
    } else {
      let statusCode = response.statusCode;
      callback(null, statusCode);
    }
  })

  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
