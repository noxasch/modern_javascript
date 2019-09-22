// Handling Error using try/catch block
// so that the script won't stop when its running
// *Note: Try catch block is a block level scope
// so declare a variable outside of try/catch block
// if you gonna use it outside of the block
// myFunction();

user = undefined;
try {
    // myFunction(); // gonna produce ReferenceError
    // Custom Error using Throw
    // if(!user) {
    //   throw 'User has no name';
    // }
    // format it as new Syntax Error
    // throw is usually use when handliong asyncronous operation or timeout
    // try catch cannot catch timeout or asyncronous operation
    // but with ES7 async and await we can catch asyncronous operation lol
    // Start with Node 7.6 you can use ES7 for node js
    /* https://softwareengineering.stackexchange.com/a/302656/323685
    async function email(address) {
      try {
        // Do something asynchronous that may throw...
        await sendEmail({ to: address, from: 'noreply@domain.com`, subject: 'Hello' })
      } catch(err) {
        if (err instanceof SomeCustomError) {
          elegantlyHandleError(err)
        } else {
          throw err
        } 
      }
    })
    */
    if(!user) {
      throw new SyntaxError('User has no name');
    }


  // catch will catch the first error that happen
  // as the first error will stop the script without the try/catch block
} catch(e) {
  console.log(e);
  console.log(e.name); // type of error
  console.log(e.message); // error message
  // instaceof ReferenceError
  // instaceof TypeError
  // to check type of error
  // check javascript error type for list of error
  if(e instanceof ReferenceError){
    console.log('Yup, reference Error');
  }

} finally {
  /*
  Finally runs whether there is an error or not
  usually we use this close connection to DB,
  close a thread and etc
  */
 console.log('Finally...');
}

console.log('The script continues...');


// catch javascript error by type is not part of ECMAScript specs
// and not supported in some browser
// removed from firefox 59
// linter also give out an error
// try {

// } catch (e if e instanceof ReferenceError) {

// } catch (e) {

// }