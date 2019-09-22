const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

// without template string (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
      '<li>Name: ' + name + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '<li>Job: ' + job + '</li>' +
      '<li>City: ' + city + '</li>' +
      '</ul>';

function hello(){
  return 'hello world';
}

// with template literal (ES6)
html  = `
  <ul>
    <li>Name: ${name}</li>  
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : "Below 30"}</li>
  </ul>
`;


document.body.innerHTML = html;
