process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

const https = require('https');

async function getData() {
  const result = await https.get('');
  
}



function getMovieTitles(substr) {
    const query = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr;


    https.get(query, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          dataObject = JSON.parse(data);
          console.log('dataObject: ', dataObject.data);
        });
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}



process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var _substr = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;

    getMovieTitles(_substr);
});


getMovieTitles('spiderman');