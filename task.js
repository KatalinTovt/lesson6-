

let nameRegExp = /^[a-zA-Z]{1,20}$/;
let emailRegExp = /^[a-zA-Z0-9.-]+@[a-zA-Z]+.[a-zA-Z]*$/;
let passwordRegExp = /^[a-zA-Z0-9]{4,15}$/;
let firstName = document.getElementById('first-name-up');
let lastName = document.getElementById('last-name-up');
let email = document.getElementById('email-up');
let password = document.getElementById('password-up');
let emailCust = document.getElementById('email-in').value;
let passwordCust = document.getElementById('password-in').value;
document.getElementById('btn-sign-up').addEventListener('click', function () {
  let emailCheck = false;
  let users = JSON.parse(localStorage.getItem('customers'));
  if (users == null) {
    users = [];
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email.value) {
      emailCheck = true;
    }
  }
  if (emailCheck === true || nameRegExp.test(firstName.value) == false || nameRegExp.test(lastName.value) == false ||
    emailRegExp.test(email.value) == false || passwordRegExp.test(password.value) == false) {
    if (emailCheck === true) {
      document.getElementById('error-email').style.display = 'block';
      document.getElementById('email-false').style.display = 'block';
      document.getElementById('email-true').style.display = 'none';
    }
    if (nameRegExp.test(firstName.value) == false) {
      document.getElementById('first-false').style.display = 'block';
      document.getElementById('first-true').style.display = 'none';
    } else {
      document.getElementById('first-false').style.display = 'none';
      document.getElementById('first-true').style.display = 'block';
    }
    if (nameRegExp.test(lastName.value) == false) {
      document.getElementById('last-false').style.display = 'block';
      document.getElementById('last-true').style.display = 'none';
    } else {
      document.getElementById('last-false').style.display = 'none';
      document.getElementById('last-true').style.display = 'block';
    }
    if (emailRegExp.test(email.value) == false) {
      document.getElementById('email-false').style.display = 'block';
      document.getElementById('email-true').style.display = 'none';
    } else {
      document.getElementById('email-false').style.display = 'none';
      document.getElementById('email-true').style.display = 'block';
    }
    if (passwordRegExp.test(password.value) == false) {
      document.getElementById('password-false').style.display = 'block';
      document.getElementById('password-true').style.display = 'none';
    } else {
      document.getElementById('password-false').style.display = 'none';
      document.getElementById('password-true').style.display = 'block';
    }

  } else {
    document.getElementById('error-email').style.display = 'none';
    document.getElementById('email-false').style.display = 'none';
    document.getElementById('email-true').style.display = 'block';
    document.getElementById('first-true').style.display = 'block';
    document.getElementById('last-true').style.display = 'block';
    document.getElementById('password-true').style.display = 'block';
    users.push(
      {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value
      }
    )
  }
  localStorage.setItem('customers', JSON.stringify(users));
})

document.getElementById('sign-in-now').addEventListener('click', function(event){
document.getElementById('sign-up').style.display = 'none';
firstName.value = '';
lastName.value = '';
email.value = '';
password.value = '';
document.getElementById('first-false').style.display = 'none';
document.getElementById('first-true').style.display = 'none';
document.getElementById('last-false').style.display = 'none';
document.getElementById('last-true').style.display = 'none';
document.getElementById('email-false').style.display = 'none';
document.getElementById('email-true').style.display = 'none';
document.getElementById('password-false').style.display = 'none';
document.getElementById('password-true').style.display = 'none';
document.getElementById('sign-in').style.display = 'flex';
event.preventDefault();
})
document.getElementById('sign-up-now').addEventListener('click', function(event){
  document.getElementById('sign-in').style.display = 'none';
  document.getElementById('sign-up').style.display = 'flex';
  event.preventDefault();
  })


document.getElementById('btn-sign-in').addEventListener('click',function(){
  let users = JSON.parse(localStorage.getItem('customers'));
  let emailCust = document.getElementById('email-in').value;
let passwordCust = document.getElementById('password-in').value;
  if (users == null) {
    users = [];
  }
  for(let i = 0; i < users.length; i++){
    if(users[i].email == emailCust && users[i].password == passwordCust){
      document.getElementById('sign-in').style.display = 'none';
      document.getElementById('sign-up').style.display = 'none';
      document.getElementById('email-in').value = '';
      document.getElementById('password-in').value = '';
      document.getElementById('profile').style.display = 'flex';
      document.getElementById('person-name').innerHTML = users[i].firstname + " " + users[i].lastname;
      document.getElementById('person-email').innerHTML = users[i].email;
      document.getElementById('error-sign-in').style.display = 'none';
      return;
    }
    else{
      document.getElementById('error-sign-in').style.display = 'block';
    }
  }
})

document.getElementById('btn-sign-up-profile').addEventListener('click',function(){
  document.getElementById('sign-in').style.display = 'none';
      document.getElementById('sign-up').style.display = 'flex';
      document.getElementById('profile').style.display = 'none';
})