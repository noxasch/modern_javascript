/* jshint esversion: 6 */
// define UI Variables
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
const form = document.querySelector('#loan-form');

const amountUI = document.querySelector('#amount');
const interestUI = document.querySelector('#interest');
const yearsUI = document.querySelector('#years');

const monthlyPayUI = document.querySelector('#monthly-payment');
const totalPayUI = document.querySelector('#total-payment');
const totalInterestUI = document.querySelector('#total-interest');

const resultUI = document.querySelector('#results');
const loaderUI = document.querySelector('#loading');

loadEventListeners();

function loadEventListeners(){
  // form.addEventListener('submit',calculateResults);
  form.addEventListener('submit', function(e){
    // hide result
    resultUI.style.display = 'none';
    // show loader
    loaderUI.style.display = 'block';
    setTimeout(calculateResults ,2000);
    e.preventDefault();
  });
}
// function vs arrow operator

function calculateResults(){
  console.log('Calculating...');

  const principal = parseFloat(amountUI.value);
  const calculatedInterest = parseFloat(interestUI.value)/100/12;
  const calculatedPay = parseFloat(yearsUI.value) * 12;

  // Compute Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatedPay);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  loaderUI.style.display = 'none';
  if(isFinite(monthly)){
    monthlyPayUI.value = monthly.toFixed(2);
    totalPayUI.value = (monthly * calculatedPay).toFixed(2);
    totalInterestUI.value = ((monthly * calculatedPay) - principal).toFixed(2);
    resultUI.style.display = 'block';
  } else {
    console.log('Please check your numbers');
    showError('Please check your numbers');
  }

  // e.preventDefault();
}


function showError(msg){
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(msg));

  // insert an element
  card.insertBefore(errorDiv, heading);

  // clear error message after 3 seconds or 3000miliseconds
  // timing function
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}
