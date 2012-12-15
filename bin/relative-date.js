var relativeDate = require('../lib/relative-date');
var date = process.argv[2];

// check to see if it is a number and cast it
date = date == +date ? +date : date;

console.log(relativeDate(new Date(date)));
