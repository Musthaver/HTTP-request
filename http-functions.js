var https = require('https'); 
let finalData = ""; 

module.exports = function getHTML (options, callback) {
  
    // call the GET method of HTTPS module to get the response
    https.get(options, function (response) {

    // set encoding of received data to UTF-8
        response.setEncoding('utf8');
    
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            finalData += data;
        });

        response.on('end', function() {
            callback(finalData);
        });
    
    });
    
}