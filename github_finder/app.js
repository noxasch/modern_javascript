// UI Elements
const searchUser = document.querySelector('#searchUser');


// instantiate GitHub Class
const github = new GitHub();
const ui = new UI();

// Event Listener
searchUser.addEventListener('keyup', (e) => {
  e.preventDefault();

  // get user input
  const inputText = e.target.value;

  if(inputText.trim() !== '') { 
    github.getUser(inputText.trim())
      .then(data => {
        // console.log(data);

        if(data.profile.message === 'Not Found') {
          // alert user not found
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // show profile
          ui.clearAlert();
          ui.showProfile(data.profile);
          ui.showRepos(data.repos)
        }
      });
  } else {
   
    // clear profile
    ui.clearProfile();
  }
});