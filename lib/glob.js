/*

CONVENIENCE TOOL TO REGENERATE ALL REQUIRES FOR TRANSLATIONS
GENERATION CAN THEN BE ADDED TO AVRGIRL-CHIPS-JSON.JS
RUN THIS FILE ON THE COMMAND LINE IF YOU ADD NEW TRANSLATIONS

*/

var glob = require("glob");

glob("+(attiny|atmega)/*.js", {}, function (er, files) {
  files.forEach(function(file) {
    var dir = file.split('/')[0];
    var chipname = file.split('/')[1].split('.')[0];
    console.log("chips." + chipname + " = require('./" + dir + "/" + chipname + "');");
  });
});
