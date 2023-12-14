

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response);
        document.location.replace('/dashboard');
        } else {
        console.error('Registration failed:', response.statusText);
        alert('Registration failed. Please try again.');
      }
    }
  };
  
  document
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
