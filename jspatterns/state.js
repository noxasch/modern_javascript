// STATE Pattern
// One of the behavioral pattern

// UI elements
const heading = document.querySelector('#heading');
const content = document.querySelector('#content');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home state
const homeState = function(page) {
  heading.textContent = null;
  content.innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="javascript:void(0)" role="button">Learn more</a>
    </div>
  `;
};

// About state
const aboutState = function(page) {
  heading.textContent = 'About Us';
  content.innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact state
const contactState = function(page) {
  heading.textContent = 'Contact Us';
  content.innerHTML = `
    <p>This is the Contact page</p>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// instantiate pageState
const page = new PageState();
// init page
page.init();

// event listener
home.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new homeState);
});

about.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new aboutState);
});

contact.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new contactState);
});