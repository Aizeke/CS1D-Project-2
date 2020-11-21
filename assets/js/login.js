const { app } = require('electron');

window.jQuery = window.$ = require('jquery');
/* eslint-disable no-undef */
// $(document).on('ready', function () {
//   $('#login-btn').click(function () {
//     alert( "Handler for .click() called." );
//     const user = $('#username').val().trim()
//     const pass = $('#password').val().trim()

//     console.log(user, pass)

//     if (user.toLowerCase() === 'admin' && pass.toLowerCase() === 'password') {
//       app.get('/admin', function (req, res) {})
//     } else {
//       console.log('wrong password')
//     }
//   })
// })


let loginbtn = document.getElementById('login-btn');

loginbtn.addEventListener('click',(e)=> {
  e.preventDefault();
  var user = document.getElementById("username").value.trim()
  var password = document.getElementById("password").value.trim()
  console.log(user, password);

  if(user === 'admin' && pass === 'password') {
    app.get('/admin', function(req, res){})
  } else{

    alert(`${user} is the wrong username.`);
    alert(`${password} is the wrong password.`);
  }

  //console.log(user, password);

}) 

// document.getElementById("login-btn").addEventListener("submit", function(evt) {
//   evt.preventDefault();
//   console.log(user, password)
// })