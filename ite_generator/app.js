// the data
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'William Johnson',
    age: 35,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/89.jpg'
  }
];

// Profile Iterator
function profilesIterator(profiles) {
  let nextIndex = 0;

  return {
    // return next object
    next: function(){
      return nextIndex < profiles.length ?
        {value: profiles[nextIndex++], done: false} :
        {done: true}
    }
  }
}

const imageDisplayUI = document.querySelector('#imageDisplay');
const profileDisplayUI = document.querySelector('#profileDisplay');
const nextBtnUI = document.querySelector('#next');

const profiles = profilesIterator(data);
// call first profile when the Page (DOM) Loaded
document.addEventListener('DOMContentLoaded', nextProfile);

nextBtnUI.addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value

  if(currentProfile){
    profileDisplayUI.innerHTML = `
        <ul class="list-group">
          <li class="list-item">Name: ${currentProfile.name}</li>
          <li class="list-item">Age: ${currentProfile.age}</li>
          <li class="list-item">Location: ${currentProfile.location}</li>
          <li class="list-item">Preference: ${currentProfile.lookingfor}</li>
        </ul>
      `;

    imageDisplayUI.innerHTML = `<img src="${currentProfile.image}">`
  } else {
    // no more profiles
    window.location.reload();
  }

}