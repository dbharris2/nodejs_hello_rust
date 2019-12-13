var x = require('thread_count');
console.log(x);
console.log(x.threadCount());

var async = require('async');
async.performAsyncTask((err, value) => {
  if (err) throw err;
  console.log(value);
})