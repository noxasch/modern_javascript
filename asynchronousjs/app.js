/* jshint esversion:6 */

// const posts = [
//   {title: "Post One", body: "This is post one"},
//   {title: "Post Two", body: "This is post two"}
// ];

// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();


// const posts = [
//   {title: "Post One", body: "This is post one"},
//   {title: "Post Two", body: "This is post two"}
// ];

// // we can pass function as a callback
// // phew
// function createPost(post, callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback(); // and then we call it here
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
// // getPosts();

const posts = [
  {title: "Post One", body: "This is post one"},
  {title: "Post Two", body: "This is post two"}
];

// we can pass function as a callback
// phew

// "promise" is an alternative to "callback" to handle asyncronous operation
// it handles aysncronous operation and promise to do something else
// after the operation is finished
function createPost(post){
  // resolve is what we gonna do after finish the asyncronous operation
  // reject if there is some kind of error
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      posts.push(post);
      let error = true;
      if(error) {
        reject('Error: something went wrong');
      } else {
        // callback(); // and then we call it here
        // so instead of calling the callback we call resolve
        resolve();
      }
    }, 2000);
  });

}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) { 
  console.log(err);
});
// getPosts();