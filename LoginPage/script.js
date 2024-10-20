// Toggle between login and register forms
function showLogin() {
  document.getElementById('loginForm').classList.add('active');
  document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
  document.getElementById('registerForm').classList.add('active');
  document.getElementById('loginForm').classList.remove('active');
}

// Login function
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const message = document.getElementById('message');

  if (email === "test@example.com" && password === "password") {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid email or password!';
  }
}

// Register function
function register() {
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;
  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.textContent = 'Passwords do not match!';
    return;
  }

  if (username && email && password) {
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Please fill in all fields!';
  }
}
