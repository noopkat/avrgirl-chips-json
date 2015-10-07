var fs = require('fs'),
    path = require('path');

var chips = {};

['atmega', 'attiny'].forEach(function(dir) {
  var basepath = path.resolve(__dirname, dir);

  fs.readdirSync(basepath).forEach(function(file) {
    if(path.extname(file) === '.js') {
      var chipname = path.basename(file, '.js');
      chips[chipname] = require(path.join(basepath, chipname));
    }
  });
});

module.exports = chips;
