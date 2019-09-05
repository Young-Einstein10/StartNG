function validateForm() {  
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const title = document.querySelector('#title');
  const message = document.querySelector('#message');


  if (name.value == '') {
    alertMsg();
    name.focus();
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);

    return false;
  }

  if (email.value == '') {
    alertMsg();
    email.focus();
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);

    return false;
  }


  if (title.value == '') {
    alertMsg();
    title.focus();
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);

    return false
  }

  if (message.value == '') {
    alertMsg();
    message.focus();
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);

    return false;
  }

  alert('Your message has been sent')

  return true; 
}

function alertMsg () {
  const nameAlert = document.querySelector('.name-alert');
  nameAlert.innerHTML = `<p class="alert">Pls Fill in all Fields</p>`;
}


