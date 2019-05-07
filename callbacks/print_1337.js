var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/1337.html'
};

var obj1337 = {
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7'
}

function print1337 (html) {

var finalText = "";

for (i = 0; i < html.length; i++) {
    if (obj1337.hasOwnProperty(html[i])) {
        finalText += obj1337[html[i]];
    } else {
        finalText += html[i];
    }
}

finalText = finalText.replace(/y0u/gi, "j00").replace(/3r/gi, "0r").replace(/ck/gi, "x");
console.log(finalText);

}

getHTML(requestOptions, print1337);