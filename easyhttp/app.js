/* jshint esversion:6 */

const http = new easyHttp();

// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// create data
const data = {
  title: 'Custom Post',
  userId: 21,
  // body: 'this is a custom post'
};

// add new post 
// http.post('http://jsonplaceholder.typicode.com/posts', data,
//   function(err, posts) {
//     if(err){
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
// });

// update post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data,
//   function(err, posts) {
//     if(err){
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
// });

http.delete('http://jsonplaceholder.typicode.com/posts/1', 
  function(err, response) {
    if(err){
      console.log(err);
    } else {
      console.log(response);
    }
});