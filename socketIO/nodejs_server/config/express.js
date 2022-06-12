const express = require('express')
const ejs = require('ejs');

module.exports.init = function(app)
{
  
  app.use(express.static('public'));
  app.set('view engine', 'ejs');

  let ejsOptions = {outputFunctionName: 'echo'};
  app.engine('ejs', (path, data, cb) => {
    ejs.renderFile(path, data, ejsOptions, cb);
  });

}

