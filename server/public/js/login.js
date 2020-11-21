/* eslint-disable no-undef */
const loginbtn = document.getElementById('login-btn')

loginbtn.addEventListener('click', (e) => {
  e.preventDefault()
  var user = document.getElementById('username').value.trim()
  var password = document.getElementById('password').value.trim()
  console.log(user, password)

  if (user === 'a' && password === 'a') {
    // window.location.replace('../pages/adminpage.html')
  } else {
    alert(`${user} is the wrong username.`)
    alert(`${password} is the wrong password.`)
  }
})
