// require https module
var https = require('https');   
let finalData = "";                            


function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
 // call the GET method of HTTPS module to get the response
    https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
        response.setEncoding('utf8');
    
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            finalData += data;
        });

        response.on('end', function() {
            console.log(finalData);
        });
    
    });
    
}

getAndPrintHTML();