const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
   
    if (error) {
      callback(error, null);
    }
        
    const [data] = JSON.parse(body);
    if (data) {
      callback(null, data.description);
    } else {
      callback(null, 'Breed not found');
    }
    
  });
};

module.exports = { fetchBreedDescription };

/*
let input = process.argv.slice(2)[0];
console.log(input);

const breedDetail = function() {
  console.log('Breed description: Calling ...');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
    // console.log(body); STRING
    // console.log('error', error);
    // console.log('response.status', response.statusCode)
    if (response.statusCode !== 200) {
      console.log('Page not found...');
      return;
    }
    const data = JSON.parse(body);
    //console.log('data', data[0]);
    if (data[0] === undefined) {
      console.log(`Information about ${input} not found. Please enter an existing breed!`);
    } else {
      console.log(data[0].description);
    }
    // console.log(typeof data); OBJECT
  });
};

breedDetail();
*/

/*
request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


request('https://api.thecatapi.com/v1/breeds/search', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/