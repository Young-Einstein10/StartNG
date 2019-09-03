const name = document.querySelector('#name');
const email = document.querySelector('#email');
const title = document.querySelector('#title');
const message = document.querySelector('#message');


document.querySelector('.form').addEventListener('submit', validateForm);

function validateForm (e) {

  if(name.value = " ") {
      const alert = document.querySelector('.alert-message');
       alert.innerHTML = `<p class="alert">Pls Fill in your name</p>`;
       return false;

  }
  if(email.value = " ") {
    const alert = document.querySelector('.alert-message');
       alert.innerHTML = `<p class="alert">Pls Fill in your email</p>`;
       return false;
  }
  if(title.value = " ") {
    const alert = document.querySelector('.alert-message');
       alert.innerHTML = `<p class="alert">Pls Fill in your title</p>`;
       return false;
  } 
  if(message.value = " ") {
    const alert = document.querySelector('.alert-message');
       alert.innerHTML = `<p class="alert">Pls Fill in your message</p>`;
       return false;
  }

  e.preventDefault();  
}