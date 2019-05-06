var getHTML = require('./http-functions'); 

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };
  
  function printUpperCase (html) {
    cappedHTML = html.toUpperCase();
    console.log(cappedHTML);
  }
  
  getHTML(requestOptions, printUpperCase);