// UI element
const name = document.querySelector('#name');
const zipcode = document.querySelector('#zipcode');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

// function with no argument should be call without bracket ()
name.addEventListener('blur', validateName);
zipcode.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

function validateName() {
  const re = /^[\w]{2,10}$/i;
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const re = /^[\d]{5}(-[\d]{4})?$/;
  if(!re.test(zipcode.value)){
    zipcode.classList.add('is-invalid');
  } else {
    zipcode.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const re = /^([\w\-\.]+)\@([\w\-\.]+)\.([a-z]{2,5})$/;
  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }

}

function validatePhone() {
  const re = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}