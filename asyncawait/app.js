
// by adding async in front of a function
// this will just neater and cleaner than Promise.then.then.catch
// it will return a promise
// async function myFunc() {
//   return 'Hello';
// }

async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  // simulate error
  const error = true;
  if(!error){
    // wait until the promise is resolve
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }

}

// so instead of using this
// console.log(myFunc());

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

async function getUsers() {
  // wait for fetch call resolved
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // wait for response,json() is resolved
  const data = await response.json();
  return data;
}

getUsers().then(users => console.log(users));