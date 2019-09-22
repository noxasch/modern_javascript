/* jshint esversion:6 */

// we are using Fetch APi, Promises and Arrow function
// according to the ES6 (EcmaScript 2015) version

/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 * @version 2.0.0
 * @author Brad Traversy
 * @license MIT
 */

class EasyHTTP {

  // GET Request
  // fetch() by default is syncronouse
  // get(url){
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // }

  get(url){
    // we make it asyncronous
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // POST using fetch() + Promises
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // PUT using fetch() + Promises
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // PUT using fetch() + Promises
  delete(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(() => resolve('Resource deleted...'))
      .catch(err => reject(err));
    });
  }
}