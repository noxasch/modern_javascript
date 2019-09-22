/* jshint esversion:6 */

const http = new EasyHTTP();

// syncronouse
// let users = http.get('http://jsonplaceholder.typicode.com/users')

// console.log(result);

// asyncronous
http.get('http://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// post test
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};

http.post('http://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/3', data)
.then(data => console.log(data))
.catch(err => console.log(err));
