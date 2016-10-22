var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1476963831;

console.log('Current moment', moment.unix(timestamp).format());
