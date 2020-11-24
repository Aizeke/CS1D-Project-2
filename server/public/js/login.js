const loginbtn = document.getElementById('login-btn')

loginbtn.addEventListener('click', (e) => {
  e.preventDefault()
  var user = document.getElementById('username').value.trim()
  var password = document.getElementById('password').value.trim()

  if (user === 'a' && password === 'a') {
    window.location.replace('/admin')
  } else {
    alert(`${user} is the wrong username.\n${password} is the wrong password.`)
  }
})
