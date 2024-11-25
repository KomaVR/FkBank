document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate a login process
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials for simplicity
    const validUsername = 'user1';
    const validPassword = 'password123';

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the account page on successful login
        window.location.href = '/account.html';
    } else {
        // Show error message on invalid login
        document.getElementById('login-error').style.display = 'block';
    }
});
