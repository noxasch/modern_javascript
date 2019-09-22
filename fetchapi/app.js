/* jshint esversion:6 */
// UI Element
const btnText = document.querySelector('#button1');
const btnJson = document.querySelector('#button2');
const btnApi = document.querySelector('#button3');
const output = document.querySelector('#output');

btnText.addEventListener('click', getText);
btnJson.addEventListener('click', getJson);
btnApi.addEventListener('click', getExternal);

function getText(){
  fetch('data2.txt')
    .then(function(res) {
      console.log(res);
      // console.log(res.text()); // seems .text() can only be called once
      return res.text();
    })
    .then(function(data){
      console.log(`Data: ${data}`);
      console.log(data);
      output.innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
      // fetch() won't return HTTP error unless it is network failure
      // only network failure can be catch in reject (.catch())
      // otherwise it is still return in promises but with
      // ok status set to false
    });
}

function getJson(){
  fetch('post.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data){
      console.log(data);
      let op = '<ol>';
      data.forEach((post) => {
        op += `<li>${post.title}</li>`;
      });
      op += '</ol>';
      output.innerHTML = op;
    })
    .catch(function(err){
      console.log(err);
    });
}

// function getExternal(){
//    fetch('https://api.github.com/users')
//    .then(function(res){
//     return res.json();
//    })
//    .then(function(data){
//     console.log(data);
//       let op = '<ol>';
//       data.forEach((user) => {
//         op += `<li>${user.login}</li>`;
//       });
//       op += '</ol>';
//       output.innerHTML = op;
//    })
//    .catch(function(err){
//     console.log(err);
//    });
// }

// ES6 Arrow function
function getExternal(){
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
     let op = '<ol>';
     data.forEach((user) => {
       op += `<li>${user.login}</li>`;
     });
     op += '</ol>';
     output.innerHTML = op;
  })
  .catch(err =>console.log(err));
}