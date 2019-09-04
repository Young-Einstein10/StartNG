
function validateForm () {
  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var title = document.querySelector('#title');
  var message = document.querySelector('#message');

  if (name.value < 4) {
    window.alert('Name: Please enter at least 4 characters.')
    name.focus()
    return false
  }

  if (email.value == '') {
    window.alert('E-mail: Please enter a valid e-mail address.')
    email.focus()
    return false
  }


  if (title.value == '') {
    window.alert('Please enter a title.')
    title.focus()
    return false
  }

  return true
}
